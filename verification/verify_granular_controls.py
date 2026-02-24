from playwright.sync_api import sync_playwright, expect

def verify_granular_controls():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # 1. Navigate to the editor
        page.goto("http://localhost:5500/showcase/editor.html")

        # 2. Wait for loading
        iframe = page.frame_locator("#previewFrame")
        expect(iframe.locator("section#inicio")).to_be_visible(timeout=5000)

        # 3. Open "Tema y Red" section
        styles_section = page.locator(".section-item").filter(has_text="Tema y Red")
        styles_section.click()

        # 4. Check for new granular controls
        # Physics label
        expect(page.get_by_text("⚛️ Física de Partículas")).to_be_visible()
        # Repulsion Slider
        expect(page.locator("label").filter(has_text="Fuerza Repulsión")).to_be_visible()
        # Animations label
        expect(page.get_by_text("🎬 Animaciones Globales")).to_be_visible()
        # Burst Slider
        expect(page.locator("label").filter(has_text="Duración Explosión")).to_be_visible()

        print("Verification passed: Granular controls are visible in the editor.")

        # 5. Take screenshot
        page.screenshot(path="verification/granular_controls.png")

        browser.close()

if __name__ == "__main__":
    verify_granular_controls()
