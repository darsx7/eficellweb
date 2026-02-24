"""
============================================
SERVIDOR LOCAL - Panel Solar Landing Page
============================================

Este servidor permite:
1. Servir los archivos estáticos (HTML, CSS, JS)
2. Guardar la configuración en config.json

USO:
1. Abre una terminal en esta carpeta
2. Ejecuta: python server.py
3. Abre en el navegador: http://localhost:3000
"""

# ---- Importar módulos ----
from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import os
import sys
import email.parser
import email.policy

# ---- CONFIGURACIÓN ----
PORT = 5500                    # Puerto del servidor (5500, 5501, 5502... para nuevos servicios)
CONTENT_FILE = 'content.json'  # Archivo de contenido de la página
CONTENT_TYPE = 'application/json'  # Tipo de contenido para respuestas JSON
SEPARATOR = '=' * 44           # Línea separadora para mensajes
UPLOAD_DIR = 'uploads'         # Directorio para subir imágenes

class CustomHandler(SimpleHTTPRequestHandler):
    """
    Handler personalizado que extiende SimpleHTTPRequestHandler
    para agregar la funcionalidad de guardar configuración
    """
    
    def handle_one_request(self):
        """Sobrescribir para capturar errores de conexión"""
        try:
            super().handle_one_request()
        except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
            # Navegador cerró la conexión - ignorar silenciosamente
            pass
    
    def do_OPTIONS(self):
        """Manejar preflight requests para CORS"""
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
    
    def do_POST(self):
        """
        Manejar requests POST
        Ruta: /api/save-content → Guarda contenido en content.json
        """
        # ---- Ruta: /api/save-content ----
        if self.path == '/api/save-content':
            try:
                content_length = int(self.headers['Content-Length'])
                body = self.rfile.read(content_length).decode('utf-8')
                content = json.loads(body)
                
                with open(CONTENT_FILE, 'w', encoding='utf-8') as f:
                    json.dump(content, f, indent=4, ensure_ascii=False)
                
                self.send_response(200)
                self.send_header('Content-Type', CONTENT_TYPE)
                self.end_headers()
                
                response = {'success': True, 'message': 'Contenido guardado'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                
                print(f'✓ Contenido guardado en {CONTENT_FILE}')
                
            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', CONTENT_TYPE)
                self.end_headers()
                response = {'success': False, 'message': f'Error: {str(e)}'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                print(f'✗ Error al guardar contenido: {e}')
        
        # ---- Ruta: /api/upload-image ----
        elif self.path == '/api/upload-image':
            try:
                content_type = self.headers.get('Content-Type', '')
                if not content_type.startswith('multipart/form-data'):
                    raise Exception('Content-Type debe ser multipart/form-data')
                
                content_length = int(self.headers['Content-Length'])
                body = self.rfile.read(content_length)
                
                # Construct a dummy email message to parse multipart data
                headers = f"Content-Type: {content_type}\r\n".encode('utf-8')
                msg = email.parser.BytesParser(policy=email.policy.default).parsebytes(headers + b"\r\n" + body)
                
                saved_filename = None
                
                if msg.is_multipart():
                    for part in msg.iter_parts():
                        # Extract Content-Disposition
                        cd = part.get("Content-Disposition")
                        if not cd:
                            continue
                            
                        # Parse disposition params manually or rely on header parsing
                        # part.get_params() for Content-Disposition returns [('form-data', ''), ('name', 'image'), ('filename', 'foo.jpg')]
                        disposition, params = part.get_content_disposition(), part.get_params(header='Content-Disposition')
                        
                        if disposition != 'form-data':
                            continue
                            
                        # Convert params list to dict for easier access
                        param_dict = {}
                        if params:
                            for k, v in params:
                                param_dict[k] = v
                        
                        if param_dict.get('name') == 'image' and param_dict.get('filename'):
                            original_filename = param_dict['filename']
                            filename = os.path.basename(original_filename)
                            
                            # Ensure uploads directory exists
                            if not os.path.exists(UPLOAD_DIR):
                                os.makedirs(UPLOAD_DIR)
                            
                            filepath = os.path.join(UPLOAD_DIR, filename)
                            with open(filepath, 'wb') as f:
                                f.write(part.get_payload(decode=True))
                            
                            saved_filename = f'{UPLOAD_DIR}/{filename}'
                            break # Found the file, stop searching
                
                if saved_filename:
                    self.send_response(200)
                    self.send_header('Content-Type', CONTENT_TYPE)
                    self.end_headers()
                    response = {'success': True, 'url': saved_filename}
                    self.wfile.write(json.dumps(response).encode('utf-8'))
                    print(f'✓ Imagen guardada: {saved_filename}')
                else:
                    raise Exception('No se encontró archivo "image" en el request')

            except Exception as e:
                self.send_response(400)
                self.send_header('Content-Type', CONTENT_TYPE)
                self.end_headers()
                response = {'success': False, 'message': f'Error: {str(e)}'}
                self.wfile.write(json.dumps(response).encode('utf-8'))
                print(f'✗ Error al subir imagen: {e}')

        else:
            # Ruta no encontrada
            self.send_error(404, 'Ruta no encontrada')
    
    def do_GET(self):
        """Agregar headers anti-caché para archivos JSON"""
        if self.path.endswith('.json'):
            # Construir la ruta del archivo relativa al directorio de trabajo
            # Quitar el / inicial del path para obtener ruta relativa
            relative_path = self.path.lstrip('/')
            file_path = os.path.join(os.getcwd(), relative_path)
            
            try:
                with open(file_path, 'rb') as f:
                    content = f.read()
                
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(content)
            except FileNotFoundError:
                self.send_error(404, f'Archivo no encontrado: {file_path}')
            except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
                # Navegador cerró la conexión - ignorar silenciosamente
                pass
        else:
            # Llamar al método padre para servir otros archivos
            try:
                super().do_GET()
            except (ConnectionResetError, ConnectionAbortedError, BrokenPipeError):
                # Navegador cerró la conexión - ignorar silenciosamente
                pass
    
    def end_headers(self):
        """Agregar CORS a todas las respuestas"""
        self.send_header('Access-Control-Allow-Origin', '*')
        super().end_headers()


def run_server():
    """Iniciar el servidor HTTP"""
    # Cambiar al directorio del script
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    # Crear servidor
    server = HTTPServer(('', PORT), CustomHandler)
    
    # Mensaje de inicio
    print('')
    print(SEPARATOR)
    print('  🌞 SERVIDOR SOLAR PANEL INICIADO')
    print(SEPARATOR)
    print('')
    print(f'  📍 URL: http://localhost:{PORT}')
    print('')
    print('  Endpoints disponibles:')
    print('  • GET  /              → Página principal')
    print('  • POST /api/save-content → Guardar contenido')
    print('  • POST /api/upload-image → Subir imagen')
    print('')
    print('  Presiona Ctrl+C para detener el servidor')
    print(SEPARATOR)
    print('')
    
    # Iniciar servidor (bloquea hasta Ctrl+C)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n\n👋 Servidor detenido')
        server.shutdown()


# ---- Ejecutar si es el script principal ----
if __name__ == '__main__':
    run_server()
