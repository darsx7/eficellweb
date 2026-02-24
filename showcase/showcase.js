/**
 * ============================================
 * SHOWCASE DINÁMICO
 * ============================================
 * - Lee content.json del directorio padre
 * - Genera el contenido con animaciones explosivas
 * - Templates predefinidos que cambian completamente el look
 * - Red interactiva integrada
 * ============================================
 */

// ============================================
// CONFIGURACIÓN DE TEMPLATES (PRESETS COMPLETOS)
// ============================================
const TEMPLATES = {
    // ========== SOLAR: Energético y radiante ==========
    solar: {
        name: 'Solar',
        description: 'Energético y radiante',
        theme: {
            primary: '#f59e0b',
            primaryHover: '#d97706',
            secondary: '#fbbf24',
            bgDark: '#1e1e2e',
            network: {
                lineColor: '#f59e0b',
                glowColor: '#fbbf24',
                gridDensity: 40,
                interactionRadius: 150,
                interactionType: 'repel'
            },
            styles: {
                cards: {
                    bgOpacity: 0.04,
                    borderRadius: 20,
                    shadow: true,
                    hoverScale: 1.03,
                    padding: 2.5,
                    gap: 2
                },
                buttons: { borderRadius: 12, hoverScale: 1.05 },
                sections: {
                    heroOpacity: 1,
                    servicesOpacity: 0.7,
                    benefitsOpacity: 1,
                    contactOpacity: 0.7,
                    padding: 6
                },
                texts: {
                    titleOpacity: 1,
                    paragraphOpacity: 0.7,
                    titleSize: 2.5,
                    bodySize: 1
                },
                general: {
                    networkOpacity: 0.5,
                    navbarBlur: 20,
                    navbarOpacity: 0.8,
                    containerWidth: 1200
                },
                animations: { transitionSpeed: 0.4, hoverLift: 10 },
                effects: { glowIntensity: 0.4, borderOpacity: 0.08 }
            }
        },
        layout: {
            services: 'grid',
            benefits: 'grid',
            team: 'grid',
            columns: 2
        }
    },

    // ========== OCÉANO: Ultra espacioso y fluido ==========
    ocean: {
        name: 'Océano',
        description: 'Espacioso y fluido',
        theme: {
            primary: '#0ea5e9',
            primaryHover: '#0284c7',
            secondary: '#38bdf8',
            bgDark: '#1e1e2e',
            network: {
                lineColor: '#0ea5e9',
                glowColor: '#7dd3fc',
                gridDensity: 25,
                interactionRadius: 220,
                interactionType: 'wave'
            },
            styles: {
                cards: {
                    bgOpacity: 0.08,
                    borderRadius: 32,
                    shadow: true,
                    hoverScale: 1.05,
                    padding: 3.5,
                    gap: 3
                },
                buttons: { borderRadius: 24, hoverScale: 1.08 },
                sections: {
                    heroOpacity: 1,
                    servicesOpacity: 0.5,
                    benefitsOpacity: 0.3,
                    contactOpacity: 0.6,
                    padding: 8
                },
                texts: {
                    titleOpacity: 1,
                    paragraphOpacity: 0.8,
                    titleSize: 3,
                    bodySize: 1.15
                },
                general: {
                    networkOpacity: 0.7,
                    navbarBlur: 30,
                    navbarOpacity: 0.6,
                    containerWidth: 1400
                },
                animations: { transitionSpeed: 0.6, hoverLift: 20 },
                effects: { glowIntensity: 0.7, borderOpacity: 0.15 }
            }
        },
        layout: {
            services: 'carousel',
            benefits: 'featured',
            team: 'carousel',
            columns: 1
        }
    },

    // ========== BOSQUE: Natural y orgánico ==========
    forest: {
        name: 'Bosque',
        description: 'Natural y orgánico',
        theme: {
            primary: '#10b981',
            primaryHover: '#059669',
            secondary: '#34d399',
            bgDark: '#1e1e2e',
            network: {
                lineColor: '#10b981',
                glowColor: '#6ee7b7',
                gridDensity: 55,
                interactionRadius: 100,
                interactionType: 'glow'
            },
            styles: {
                cards: {
                    bgOpacity: 0.06,
                    borderRadius: 16,
                    shadow: true,
                    hoverScale: 1.02,
                    padding: 2,
                    gap: 1.5
                },
                buttons: { borderRadius: 8, hoverScale: 1.02 },
                sections: {
                    heroOpacity: 0.8,
                    servicesOpacity: 0.9,
                    benefitsOpacity: 0.85,
                    contactOpacity: 0.9,
                    padding: 5
                },
                texts: {
                    titleOpacity: 0.95,
                    paragraphOpacity: 0.75,
                    titleSize: 2.25,
                    bodySize: 0.95
                },
                general: {
                    networkOpacity: 0.35,
                    navbarBlur: 15,
                    navbarOpacity: 0.9,
                    containerWidth: 1100
                },
                animations: { transitionSpeed: 0.5, hoverLift: 6 },
                effects: { glowIntensity: 0.25, borderOpacity: 0.12 }
            }
        },
        layout: {
            services: 'list',
            benefits: 'grid',
            team: 'grid',
            columns: 3
        }
    },

    // ========== ATARDECER: Ultra vibrante y dramático ==========
    sunset: {
        name: 'Atardecer',
        description: 'Vibrante y dramático',
        theme: {
            primary: '#f43f5e',
            primaryHover: '#e11d48',
            secondary: '#fb923c',
            bgDark: '#1e1e2e',
            network: {
                lineColor: '#f43f5e',
                glowColor: '#fda4af',
                gridDensity: 30,
                interactionRadius: 250,
                interactionType: 'attract'
            },
            styles: {
                cards: {
                    bgOpacity: 0.12,
                    borderRadius: 28,
                    shadow: true,
                    hoverScale: 1.08,
                    padding: 3,
                    gap: 2.5
                },
                buttons: { borderRadius: 50, hoverScale: 1.1 },
                sections: {
                    heroOpacity: 1,
                    servicesOpacity: 0.85,
                    benefitsOpacity: 0.9,
                    contactOpacity: 0.8,
                    padding: 7
                },
                texts: {
                    titleOpacity: 1,
                    paragraphOpacity: 0.8,
                    titleSize: 3.5,
                    bodySize: 1.1
                },
                general: {
                    networkOpacity: 0.65,
                    navbarBlur: 25,
                    navbarOpacity: 0.7,
                    containerWidth: 1300
                },
                animations: { transitionSpeed: 0.35, hoverLift: 18 },
                effects: { glowIntensity: 0.8, borderOpacity: 0.2 }
            }
        },
        layout: {
            services: 'featured',
            benefits: 'carousel',
            team: 'carousel',
            columns: 2
        }
    },

    // ========== VIOLETA: Premium y elegante ==========
    purple: {
        name: 'Violeta',
        description: 'Premium y elegante',
        theme: {
            primary: '#8b5cf6',
            primaryHover: '#7c3aed',
            secondary: '#c4b5fd',
            bgDark: '#1e1e2e',
            network: {
                lineColor: '#8b5cf6',
                glowColor: '#ddd6fe',
                gridDensity: 45,
                interactionRadius: 180,
                interactionType: 'repel'
            },
            styles: {
                cards: {
                    bgOpacity: 0.05,
                    borderRadius: 24,
                    shadow: true,
                    hoverScale: 1.04,
                    padding: 2.75,
                    gap: 2
                },
                buttons: { borderRadius: 16, hoverScale: 1.06 },
                sections: {
                    heroOpacity: 1,
                    servicesOpacity: 0.65,
                    benefitsOpacity: 0.7,
                    contactOpacity: 0.6,
                    padding: 6.5
                },
                texts: {
                    titleOpacity: 1,
                    paragraphOpacity: 0.75,
                    titleSize: 2.75,
                    bodySize: 1.05
                },
                general: {
                    networkOpacity: 0.55,
                    navbarBlur: 22,
                    navbarOpacity: 0.75,
                    containerWidth: 1250
                },
                animations: { transitionSpeed: 0.45, hoverLift: 12 },
                effects: { glowIntensity: 0.55, borderOpacity: 0.1 }
            }
        },
        layout: {
            services: 'grid',
            benefits: 'list',
            team: 'grid',
            columns: 4
        }
    },

    // ========== MINIMAL: Ultra limpio, casi sin efectos ==========
    minimal: {
        name: 'Minimal',
        description: 'Ultra limpio y simple',
        theme: {
            primary: '#525252',
            primaryHover: '#404040',
            secondary: '#737373',
            bgDark: '#1e1e2e',
            network: {
                lineColor: '#525252',
                glowColor: '#a3a3a3',
                gridDensity: 80,
                interactionRadius: 80,
                interactionType: 'glow'
            },
            styles: {
                cards: {
                    bgOpacity: 0.02,
                    borderRadius: 8,
                    shadow: false,
                    hoverScale: 1.01,
                    padding: 1.75,
                    gap: 1
                },
                buttons: { borderRadius: 4, hoverScale: 1.02 },
                sections: {
                    heroOpacity: 0.5,
                    servicesOpacity: 0.4,
                    benefitsOpacity: 0.35,
                    contactOpacity: 0.4,
                    padding: 4
                },
                texts: {
                    titleOpacity: 0.85,
                    paragraphOpacity: 0.55,
                    titleSize: 2,
                    bodySize: 0.9
                },
                general: {
                    networkOpacity: 0.2,
                    navbarBlur: 40,
                    navbarOpacity: 0.95,
                    containerWidth: 1000
                },
                animations: { transitionSpeed: 0.2, hoverLift: 3 },
                effects: { glowIntensity: 0.1, borderOpacity: 0.04 }
            }
        },
        layout: {
            services: 'list',
            benefits: 'minimal',
            team: 'grid',
            columns: 1
        }
    }
};

// ============================================
// CLASE PRINCIPAL
// ============================================
class Showcase {
    content = null;
    currentEffect = 'repel';
    gridDensity = 40;
    networkMesh = null;

    static async create() {
        const instance = new Showcase();
        await instance.init();
        return instance;
    }

    async init() {
        // Cargar contenido
        await this.loadContent();

        // Aplicar estilos desde content.theme
        this.applyStyles();

        // Construir la página inicial
        this.buildPage();

        // Inicializar red
        this.initNetwork();

        // Configurar controles
        this.setupControls();

        // Iniciar animaciones
        this.startAnimations();

        // Configurar interacciones
        this.setupInteractions();

        // Escuchar mensajes del editor (verificando origen)
        globalThis.addEventListener('message', (event) => {
            if (event.origin !== globalThis.location.origin) return;
            if (event.data.type === 'update-content') {
                this.updateContent(event.data.content);
            } else if (event.data.type === 'change-template') {
                this.applyTemplatePreset(event.data.template);
            } else if (event.data.type === 'enable-edit-mode') {
                this.enableEditMode(event.data.enabled);
            }
        });
    }

    enableEditMode(enabled) {
        this.isEditMode = enabled;
        document.body.classList.toggle('edit-mode', enabled);
        if (enabled) {
            // Disable animations
            document.body.classList.add('no-animations');
            this.setupDraggableItems();
        } else {
            document.body.classList.remove('no-animations');
            // Re-enable interactions if needed
        }
    }

    setupDraggableItems() {
        // Now targeting ALL section items if we want mixed layout support
        const items = document.querySelectorAll('.service-card, .benefit-item, .team-card');

        let draggedItem = null;
        let startX, startY, initialLeft, initialTop;

        items.forEach(item => {
            // Prevent default drag
            item.ondragstart = () => false;

            item.onmousedown = (e) => {
                if (!this.isEditMode) return; // Only in edit mode

                // Ignore inputs/buttons
                if (e.target.tagName === 'INPUT' || e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

                e.preventDefault();
                draggedItem = item;
                startX = e.clientX;
                startY = e.clientY;

                // Get computed style for current position, handling both absolute and relative
                const style = window.getComputedStyle(item);
                const matrix = new WebKitCSSMatrix(style.transform);

                // For absolute positioning (freeform), use offsetLeft/Top
                // For relative/grid, we might want to switch to transform: translate
                // BUT user requested "move freely".
                // Best approach: If item has manual override, it should be position:absolute relative to container?
                // Or use transform translate?
                // Given the requirement "hybrid layout", transform translate is safer for grid items to offset them.
                // But for pure freeform, absolute is better.

                // Let's assume we use style.left/top if positioned, or transform if not.
                // Simplified: We will use inline style left/top and ensure position is set.

                // If not already absolute/relative with coords, initialize
                if (style.position === 'static') {
                    item.style.position = 'relative';
                }

                initialLeft = item.offsetLeft;
                initialTop = item.offsetTop;

                item.classList.add('dragging');
                item.style.cursor = 'grabbing';

                // Add resize handle if not present
                if (!item.querySelector('.resize-handle')) {
                    const handle = document.createElement('div');
                    handle.className = 'resize-handle';
                    handle.style.cssText = `
                        position: absolute; bottom: 5px; right: 5px; width: 15px; height: 15px;
                        background: white; border: 2px solid var(--primary);
                        cursor: se-resize; z-index: 100;
                    `;
                    handle.onmousedown = (ev) => {
                        ev.stopPropagation(); // Prevent drag
                        this.startResize(ev, item);
                    };
                    item.appendChild(handle);
                }
            };
        });

        document.onmousemove = (e) => {
            if (!draggedItem) return;
            e.preventDefault();
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;

            // If the layout is NOT freeform, dragging changes transform translate
            // If layout IS freeform, dragging changes left/top
            const section = draggedItem.closest('section');
            const layout = section.dataset.layout || 'grid';

            if (layout === 'freeform') {
                const newLeft = initialLeft + dx;
                const newTop = initialTop + dy;
                draggedItem.style.left = `${newLeft}px`;
                draggedItem.style.top = `${newTop}px`;
            } else {
                // Hybrid mode: Use transform for offset
                draggedItem.style.transform = `translate(${dx}px, ${dy}px)`;
                // Note: This is temporary visual. We need to decide how to persist this.
                // Ideally we update geometry.x/y and render it as transform in grid mode.
            }
        };

        document.onmouseup = () => {
            if (draggedItem) {
                draggedItem.classList.remove('dragging');
                draggedItem.style.cursor = '';

                const section = draggedItem.closest('section');
                const sectionId = section?.id;
                let sectionKey = '';
                if(sectionId === 'servicios') sectionKey = 'services';
                else if(sectionId === 'beneficios') sectionKey = 'benefits';
                else if(sectionId === 'equipo') sectionKey = 'team';

                // We need index. Some layouts might not expose data-index on item directly.
                // Let's ensure buildServices/etc add data-index to all items.
                // Assuming they do (I added it to freeform, but maybe not others).
                // Let's traverse to find index if missing
                let index = draggedItem.dataset.index;
                if (index === undefined) {
                    // Fallback: find index in parent children
                    const children = Array.from(draggedItem.parentNode.children);
                    index = children.indexOf(draggedItem);
                }

                if (sectionKey && index !== -1) {
                    const layout = section.dataset.layout || 'grid';
                    let geometry = {};

                    if (layout === 'freeform') {
                        geometry = {
                            x: draggedItem.offsetLeft,
                            y: draggedItem.offsetTop,
                            w: draggedItem.offsetWidth,
                            h: draggedItem.offsetHeight,
                            z: getComputedStyle(draggedItem).zIndex || 1
                        };
                    } else {
                        // For hybrid, we want to save the DELTA (transform) as x/y?
                        // Or convert to absolute?
                        // User said: "move freely but work as carousel".
                        // This implies an offset.
                        // Let's save x/y as the transform values.
                        const style = window.getComputedStyle(draggedItem);
                        const matrix = new WebKitCSSMatrix(style.transform);
                        geometry = {
                            x: matrix.m41, // Translate X
                            y: matrix.m42, // Translate Y
                            w: draggedItem.offsetWidth,
                            h: 'auto',
                            z: 1,
                            override: true // Mark as manual override
                        };
                    }

                    window.parent.postMessage({
                        type: 'item-moved',
                        section: sectionKey,
                        index: parseInt(index),
                        geometry: geometry
                    }, globalThis.location.origin);
                }

                draggedItem = null;
            }
        };
    }

    applyTemplatePreset(templateName) {
        if (!TEMPLATES[templateName]) return;
        const preset = TEMPLATES[templateName];

        // Merge preset theme into content theme
        if (!this.content.theme) this.content.theme = {};
        this.content.theme = JSON.parse(JSON.stringify(preset.theme));

        // Layout overrides if needed (though layout is usually per-section config)
        // We can optionally apply layout presets too if we want "one click total makeover"

        this.applyStyles();
        this.buildPage();
        this.startAnimations();
        this.createBurstEffect();
    }

    setupControls() {
        // Create floating control panel
        const panel = document.createElement('div');
        panel.className = 'theme-controls';
        panel.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: rgba(30, 30, 46, 0.9);
            padding: 15px;
            border-radius: 12px;
            z-index: 10000;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            gap: 10px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            transition: opacity 0.3s ease, transform 0.3s ease;
        `;

        // Add toggle button to hide/show panel (optional but good for UX)
        // For now, just the template buttons
        Object.entries(TEMPLATES).forEach(([key, template]) => {
            const btn = document.createElement('button');
            btn.className = 'theme-btn';
            btn.title = template.description;
            btn.style.cssText = `
                width: 40px;
                height: 40px;
                border-radius: 50%;
                border: 2px solid rgba(255,255,255,0.2);
                background: ${template.theme.primary};
                cursor: pointer;
                transition: transform 0.2s ease, border-color 0.2s ease;
            `;

            btn.onmouseover = () => {
                btn.style.transform = 'scale(1.2)';
                btn.style.borderColor = '#fff';
            };
            btn.onmouseout = () => {
                btn.style.transform = 'scale(1)';
                btn.style.borderColor = 'rgba(255,255,255,0.2)';
            };

            btn.onclick = () => {
                // Flash effect
                const flash = document.createElement('div');
                flash.style.cssText = `
                    position: fixed;
                    inset: 0;
                    background: white;
                    opacity: 0.8;
                    z-index: 99999;
                    pointer-events: none;
                    transition: opacity 0.5s ease;
                `;
                document.body.appendChild(flash);
                requestAnimationFrame(() => flash.style.opacity = '0');
                setTimeout(() => flash.remove(), 500);

                this.applyTemplatePreset(key);
            };

            panel.appendChild(btn);
        });

        document.body.appendChild(panel);
    }

    setupInteractions() {
        const cardSelector = '.service-card, .benefit-item, .benefit-main, .benefit-small, .team-card';

        // Click effects
        document.addEventListener('click', (e) => {
            const card = e.target.closest(cardSelector);
            if (!card) return;
            const section = card.closest('section');
            if (!section) return;

            // Legacy expand support
            if (section.classList.contains('interaction-expand') && !document.querySelector('.card-expanded')) {
                this.expandCard(card);
                return;
            }

            // New effects system: click triggers
            if (section.dataset.clickExpand !== undefined && !document.querySelector('.card-expanded')) {
                this.expandCard(card);
            }
            if (section.dataset.clickShake !== undefined) {
                card.classList.remove('effect-shake');
                void card.offsetWidth;
                card.classList.add('effect-shake');
                card.addEventListener('animationend', () => card.classList.remove('effect-shake'), { once: true });
            }
        });

        // Dblclick effects
        document.addEventListener('dblclick', (e) => {
            const card = e.target.closest(cardSelector);
            if (!card) return;
            const section = card.closest('section');
            if (!section) return;

            if (section.dataset.dblclickFlip !== undefined) {
                card.classList.toggle('flipped');
            }
            if (section.dataset.dblclickExpand !== undefined && !document.querySelector('.card-expanded')) {
                this.expandCard(card);
            }
        });
    }

    expandCard(originalCard) {
        // Find section config for expandConfig
        const section = originalCard.closest('section');
        const sectionId = section?.id;
        let ec = null;
        if (sectionId && this.content) {
            // Match section id to content key
            for (const key of ['services', 'benefits', 'team', 'about']) {
                if (this.content[key]?.config?.expandConfig) {
                    ec = this.content[key].config.expandConfig;
                    break;
                }
            }
        }
        // Defaults
        const maxWidth = ec?.maxWidth || 600;
        const padding = ec?.padding || 3;
        const borderStyle = ec?.borderStyle || 'neon';
        const borderRadius = ec?.borderRadius ?? 16;
        const iconScale = ec?.iconScale || 1.5;
        const iconPosition = ec?.iconPosition || 'top';
        const titleSize = ec?.titleSize || 1.6;
        const descSize = ec?.descSize || 1;
        const contentAlign = ec?.contentAlign || 'center';
        const bgColor = ec?.bgColor || '';
        const postEffect = ec?.postEffect || 'none';

        // Create Overlay
        const overlay = document.createElement('div');
        overlay.className = 'card-overlay';
        document.body.appendChild(overlay);

        // Clone Card
        const clone = originalCard.cloneNode(true);
        const rect = originalCard.getBoundingClientRect();

        // Set initial position to match original
        clone.style.position = 'fixed';
        clone.style.top = rect.top + 'px';
        clone.style.left = rect.left + 'px';
        clone.style.width = rect.width + 'px';
        clone.style.height = rect.height + 'px';
        clone.style.margin = '0';
        clone.style.zIndex = '1000';
        clone.style.transition = 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)';

        document.body.appendChild(clone);

        // Force reflow
        clone.offsetWidth; // eslint-disable-line no-unused-expressions

        // Add expanded class
        clone.classList.add('card-expanded');

        // CSS variables for customization
        clone.style.setProperty('--expand-max-width', maxWidth + 'px');
        clone.style.setProperty('--expand-padding', padding + 'rem');
        clone.style.setProperty('--expand-border-radius', borderRadius + 'px');
        clone.style.setProperty('--expand-icon-scale', iconScale);

        // Border style
        clone.classList.add(`expand-border-${borderStyle}`);

        // Background
        if (bgColor) {
            clone.style.setProperty('--expand-bg', bgColor);
        }

        // Content alignment
        clone.style.textAlign = contentAlign;

        // Icon position layout
        if (iconPosition === 'left' || iconPosition === 'right') {
            clone.style.display = 'flex';
            clone.style.flexDirection = iconPosition === 'left' ? 'row' : 'row-reverse';
            clone.style.alignItems = 'center';
            clone.style.gap = '2rem';
        } else if (iconPosition === 'inline') {
            clone.style.display = 'flex';
            clone.style.flexDirection = 'row';
            clone.style.alignItems = 'center';
            clone.style.gap = '1rem';
            clone.style.flexWrap = 'wrap';
        }

        // Reset inline geometry to let CSS take over
        clone.style.top = '';
        clone.style.left = '';
        clone.style.width = '';
        clone.style.height = '';

        // Scale icons/images
        const icons = clone.querySelectorAll('.service-icon, .benefit-icon, .team-img-wrapper');
        icons.forEach(icon => {
            icon.style.transform = `scale(${iconScale})`;
            icon.style.transformOrigin = 'center center';
            icon.style.transition = 'transform 0.4s ease';
        });

        // Title size
        const titles = clone.querySelectorAll('h3, .card-title, .service-title, .benefit-title');
        titles.forEach(t => { t.style.fontSize = titleSize + 'rem'; });

        // Description size
        const descs = clone.querySelectorAll('p, .card-desc, .service-desc, .benefit-desc');
        descs.forEach(d => { d.style.fontSize = descSize + 'rem'; });

        // Post-expand animation
        if (postEffect !== 'none') {
            setTimeout(() => {
                clone.classList.add(`expand-post-${postEffect}`);
            }, 500);
        }

        // Close Button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.className = 'close-btn';
        closeBtn.onclick = (e) => {
            e.stopPropagation();
            closeExpanded();
        };
        clone.appendChild(closeBtn);

        // Close Logic
        const closeExpanded = () => {
            clone.style.opacity = '0';
            overlay.style.opacity = '0';
            setTimeout(() => {
                clone.remove();
                overlay.remove();
            }, 300);
        };

        overlay.onclick = closeExpanded;
    }

    updateContent(newContent) {
        this.content = newContent;
        this.applyStyles();
        this.buildPage();
        this.startAnimations();
    }

    // ============================================
    // CARGAR CONTENIDO
    // ============================================
    async loadContent() {
        try {
            const response = await fetch('../content.json?t=' + Date.now());
            if (!response.ok) throw new Error('No se pudo cargar content.json');
            this.content = await response.json();
        } catch (error) {
            console.error('Error:', error);
            this.content = this.getDefaultContent();
        }
    }

    getDefaultContent() {
        return {
            siteName: 'Showcase',
            theme: TEMPLATES.solar.theme, // Fallback
            hero: {
                title: 'Tu Título Aquí',
                subtitle: 'Descripción del proyecto',
                ctaPrimary: 'Acción Principal',
                ctaSecondary: 'Acción Secundaria',
                stats: []
            },
            services: { title: 'Servicios', items: [] },
            benefits: { title: 'Beneficios', items: [] },
            contact: { title: 'Contacto', subtitle: '' },
            footer: { copyright: '© 2026' },
            nav: { items: [], cta: 'CTA' }
        };
    }

    // ============================================
    // CONSTRUIR PÁGINA
    // ============================================
    buildPage() {
        const main = document.getElementById('mainContent');
        const c = this.content;

        main.innerHTML = `
            ${this.buildNavbar(c)}
            ${this.buildHero(c.hero)}
            ${c.services ? this.buildServices(c.services) : ''}
            ${c.about ? this.buildAbout(c.about) : ''}
            ${c.benefits ? this.buildBenefits(c.benefits) : ''}
            ${c.team ? this.buildTeam(c.team) : ''}
            ${c.contact ? this.buildContact(c.contact) : ''}
            ${this.buildFooter(c)}
        `;
    }

    buildNavbar(content) {
        const navItems = content.nav?.items || [];
        const branding = content.branding || { size: 40, navBehaviors: ['sticky'], logoPosition: 'left', logoEntrance: 'none' };

        // CSS Variables for all logo properties
        const root = document.documentElement.style;
        root.setProperty('--logo-size', `${branding.size || 40}px`);
        root.setProperty('--logo-border-radius', `${branding.logoBorderRadius ?? 0}%`);
        root.setProperty('--logo-opacity', `${(branding.logoOpacity ?? 100) / 100}`);
        root.setProperty('--logo-hover-scale', `${(branding.logoHoverScale ?? 110) / 100}`);
        root.setProperty('--logo-shrink-ratio', `${(branding.shrinkRatio ?? 70) / 100}`);
        root.setProperty('--logo-entrance-delay', `${branding.logoEntranceDelay ?? 200}ms`);
        root.setProperty('--logo-entrance-duration', `${branding.logoEntranceDuration ?? 800}ms`);
        root.setProperty('--logo-offset-x', `${branding.logoOffsetX ?? 0}px`);
        root.setProperty('--logo-offset-y', `${branding.logoOffsetY ?? 0}px`);

        let logoHtml;
        if (branding.logoUrl) {
            logoHtml = `<img src="${branding.logoUrl}" alt="${content.siteName}" class="brand-logo">`;
        } else {
            logoHtml = `
                <span class="brand-icon">☀️</span>
                <span class="brand-text">${content.siteName || 'Showcase'}</span>
            `;
        }

        // Build nav classes from behaviors
        const behaviors = branding.navBehaviors || ['sticky'];
        const navClasses = ['navbar'];
        if (behaviors.includes('sticky')) navClasses.push('navbar-sticky');
        if (behaviors.includes('shrink')) navClasses.push('navbar-shrinkable');
        if (behaviors.includes('auto-hide')) navClasses.push('navbar-auto-hide');
        if (behaviors.includes('scroll-reveal')) navClasses.push('navbar-scroll-reveal');

        // Logo position class
        const logoPos = branding.logoPosition || 'left';
        navClasses.push(`logo-${logoPos}`);

        // Logo hover effect class
        const logoHover = branding.logoHover || 'none';

        // Logo entrance + shadow data attrs
        const logoEntrance = branding.logoEntrance || 'none';
        const dataAttrs = [];
        if (logoEntrance !== 'none') dataAttrs.push(`data-logo-entrance="${logoEntrance}"`);
        if (branding.logoShadow && branding.logoShadow !== 'none') dataAttrs.push(`data-logo-shadow="${branding.logoShadow}"`);
        if (logoHover !== 'none') dataAttrs.push(`data-logo-hover="${logoHover}"`);
        if (branding.logoOverflow) dataAttrs.push('data-logo-overflow="true"');

        return `
            <nav class="${navClasses.join(' ')}" ${dataAttrs.join(' ')}>
                <div class="nav-brand">
                    ${logoHtml}
                </div>
                <ul class="nav-menu">
                    ${navItems.map(item => `
                        <li><a href="#${item.toLowerCase()}" class="nav-link">${item}</a></li>
                    `).join('')}
                </ul>
                <button class="nav-cta">${content.nav?.cta || 'Contactar'}</button>
            </nav>
        `;
    }

    buildHero(hero) {
        const statsHtml = hero.stats?.map((stat, i) => `
            <div class="stat-item" data-delay="${600 + i * 150}" data-target="${stat.number}">
                <span class="stat-number">0</span>
                <span class="stat-label">${stat.label}</span>
            </div>
        `).join('') || '';

        // Dividir título para gradiente
        const words = hero.title.split(' ');
        let titleHtml;
        if (words.length > 2) {
            const normal = words.slice(0, -2).join(' ');
            const gradient = words.slice(-2).join(' ');
            titleHtml = `${normal} <span class="gradient-text">${gradient}</span>`;
        } else {
            titleHtml = `<span class="gradient-text">${hero.title}</span>`;
        }

        return `
            <section id="inicio" class="hero">
                <div class="hero-content">
                    <div class="hero-badge">
                        <span class="badge-dot"></span>
                        Disponible ahora
                    </div>
                    <h1 class="hero-title">${titleHtml}</h1>
                    <p class="hero-subtitle">${hero.subtitle}</p>
                    <div class="hero-buttons">
                        ${hero.ctaPrimary ? `<button class="btn btn-primary">${hero.ctaPrimary}</button>` : ''}
                        ${hero.ctaSecondary ? `<button class="btn btn-secondary">${hero.ctaSecondary}</button>` : ''}
                    </div>
                    <div class="hero-stats">${statsHtml}</div>
                </div>
            </section>
        `;
    }

    getSectionClasses(config) {
        if (!config) return '';
        // Legacy class-based support
        const hover = config.hover ? `hover-${config.hover}` : '';
        const border = config.border ? `border-${config.border}` : '';
        const interaction = config.interaction ? `interaction-${config.interaction}` : '';
        const legacy = config.cardEffect ? `effect-${config.cardEffect}` : '';
        return `${hover} ${border} ${interaction} ${legacy}`;
    }

    /**
     * Build data attributes string from config.effects[] and config.background
     */
    getSectionDataAttrs(config) {
        if (!config) return '';
        const attrs = [];
        const styleVars = [];

        // Effects array
        if (config.effects && Array.isArray(config.effects)) {
            let hasOverflow = false;
            let maxDuration = 350;
            for (const fx of config.effects) {
                const pct = typeof fx.intensity === 'number' ? fx.intensity : 50;
                const dur = fx.duration || 350;
                if (dur > maxDuration) maxDuration = dur;

                for (const action of fx.actions) {
                    attrs.push(`data-${fx.trigger}-${action}="true"`);
                }

                // Map intensity (1-100) to concrete CSS var values
                if (fx.actions.includes('scale')) {
                    const s = 1 + (pct / 100) * 0.2; // 1.002 → 1.20
                    styleVars.push(`--effect-scale:${s.toFixed(3)}`);
                }
                if (fx.actions.includes('lift')) {
                    const l = -(pct / 100) * 40; // -0.4px → -40px
                    styleVars.push(`--effect-lift:${l.toFixed(1)}px`);
                }
                if (fx.actions.includes('glow')) {
                    const g = (pct / 100) * 50; // 0.5px → 50px
                    styleVars.push(`--effect-glow-spread:${g.toFixed(0)}px`);
                    if (fx.glowColor) styleVars.push(`--primary-glow:${fx.glowColor}`);
                }
                if (fx.actions.includes('rotate')) {
                    const r = (pct / 100) * 15; // 0 -> 15deg
                    styleVars.push(`--effect-rotate:${r.toFixed(1)}deg`);
                }
                if (fx.actions.includes('skew')) {
                    const k = (pct / 100) * 10; // 0 -> 10deg
                    styleVars.push(`--effect-skew:${k.toFixed(1)}deg`);
                }
                if (fx.actions.includes('blur')) {
                    const b = (pct / 100) * 10; // 0 -> 10px
                    styleVars.push(`--effect-blur:${b.toFixed(1)}px`);
                }
                // Granular animation overrides
                if (fx.actions.includes('shake')) {
                    if(fx.shakeX) styleVars.push(`--anim-shake-dist:${fx.shakeX}px`);
                    if(fx.shakeRot) styleVars.push(`--anim-shake-rot:${fx.shakeRot}deg`);
                }
                if (fx.actions.includes('pulse')) {
                    if(fx.pulseScale) styleVars.push(`--anim-pulse-scale:${fx.pulseScale}`);
                }

                if (fx.overflow) hasOverflow = true;
            }

            // Set transition once using the longest duration
            styleVars.push(`--effect-transition:${maxDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`);

            if (hasOverflow) {
                attrs.push('data-overflow-effects="true"');
            }
        }

        // Border
        if (config.border) {
            attrs.push(`data-border="${config.border}"`);
        }

        // Entrance
        if (config.entrance) {
            attrs.push(`data-entrance="${config.entrance}"`);
        }

        // Background
        if (config.background) {
            const bg = config.background;
            if (bg.type && bg.type !== 'none') {
                attrs.push(`data-bg-type="${bg.type}"`);
                if (bg.color1) {
                    styleVars.push(`--section-bg-color1:${bg.color1}`);
                    styleVars.push(`--section-bg-color2:${bg.color2 || bg.color1}`);
                    styleVars.push(`--section-bg-opacity:${bg.opacity ?? 1}`);
                }
                if (bg.opacity !== undefined) attrs.push(`data-bg-opacity="${bg.opacity}"`);
            }
        }

        // Merge all style vars into one style attribute
        if (styleVars.length > 0) {
            attrs.push(`style="${styleVars.join(';')}"`);
        }

        return attrs.join(' ');
    }

    buildServices(services) {
        // Fallback or read from content.theme.layout
        const layout = services.config?.layout || 'grid';
        const columns = services.config?.columns || 2;
        const classes = this.getSectionClasses(services.config);
        const dataAttrs = this.getSectionDataAttrs(services.config);

        let contentHtml = '';

        switch (layout) {
            case 'carousel':
                // Carrusel horizontal con scroll
                contentHtml = `
                    <div class="services-carousel ${classes}" data-layout="carousel">
                        <div class="carousel-track">
                            ${services.items.map((item, i) => {
                            let style = '';
                            if (item.geometry && item.geometry.override) {
                                style += `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};`;
                            }
                            if (item.styleOverride) {
                                const so = item.styleOverride;
                                if (so.backgroundColor) style += `background-color: ${so.backgroundColor};`;
                                if (so.borderColor) style += `border-color: ${so.borderColor};`;
                                if (so.color) style += `color: ${so.color};`;
                                if (so.borderRadius !== undefined && so.borderRadius !== -1) style += `border-radius: ${so.borderRadius}px;`;
                                if (so.fontSizeScale) style += `font-size: ${so.fontSizeScale}em;`;
                            }
                                return `
                                <div class="carousel-slide service-card" data-delay="${i * 100}" style="${style}">
                                    <span class="card-icon">${item.icon}</span>
                                    <h3>${item.title}</h3>
                                    <p>${item.description}</p>
                                </div>
                            `;
                        }).join('')}
                        </div>
                        <div class="carousel-nav">
                            <button class="carousel-btn prev" onclick="this.closest('.services-carousel').querySelector('.carousel-track').scrollBy(-350, 0)">←</button>
                            <button class="carousel-btn next" onclick="this.closest('.services-carousel').querySelector('.carousel-track').scrollBy(350, 0)">→</button>
                        </div>
                    </div>`;
                break;

            case 'list':
                // Lista vertical full width
                contentHtml = `
                    <div class="services-list" data-layout="list">
                        ${services.items.map((item, i) => `
                            <div class="service-list-item" data-delay="${i * 80}">
                                <span class="list-icon">${item.icon}</span>
                                <div class="list-content">
                                    <h3>${item.title}</h3>
                                    <p>${item.description}</p>
                                </div>
                                <span class="list-arrow">→</span>
                            </div>
                        `).join('')}
                    </div>`;
                break;

            case 'featured': {
                // Primera card grande, resto pequeñas
                const [first, ...rest] = services.items;
                contentHtml = `
                    <div class="services-featured" data-layout="featured">
                        <div class="featured-main service-card" data-delay="0">
                            <span class="card-icon">${first.icon}</span>
                            <h3>${first.title}</h3>
                            <p>${first.description}</p>
                        </div>
                        <div class="featured-secondary">
                            ${rest.map((item, i) => `
                                <div class="service-card small" data-delay="${(i + 1) * 100}">
                                    <span class="card-icon">${item.icon}</span>
                                    <h3>${item.title}</h3>
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
                break;
            }

            case 'freeform':
                contentHtml = `
                    <div class="services-freeform ${classes}" data-layout="freeform" style="position: relative; min-height: 600px;">
                        ${services.items.map((item, i) => {
                            const geo = item.geometry || { x: 50 + (i % 2) * 350, y: 50 + Math.floor(i / 2) * 300, w: 300, h: 'auto', z: 1 };
                            const zIndex = geo.z !== undefined ? geo.z : 1;
                            const style = `
                                position: absolute;
                                left: ${geo.x}px;
                                top: ${geo.y}px;
                                width: ${geo.w}px;
                                height: ${geo.h === 'auto' ? 'auto' : geo.h + 'px'};
                                z-index: ${zIndex};
                                transform: rotate(${geo.r || 0}deg);
                            `;
                            const styleOverride = (item.geometry && item.geometry.override) ?
                                `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};` : '';
                            return `
                                <div class="carousel-slide service-card" data-delay="${i * 100}" style="${styleOverride}">
                                    <span class="card-icon">${item.icon}</span>
                                    <h3>${item.title}</h3>
                                    <p>${item.description}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>`;
                break;

            default: // grid
                contentHtml = `
                    <div class="services-grid ${classes}" data-layout="grid" style="--columns: ${columns}">
                        ${services.items.map((item, i) => {
                            let style = '';
                            if (item.geometry && item.geometry.override) {
                                style += `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};`;
                            }
                            if (item.styleOverride) {
                                const so = item.styleOverride;
                                if (so.backgroundColor) style += `background-color: ${so.backgroundColor};`;
                                if (so.borderColor) style += `border-color: ${so.borderColor};`;
                                if (so.color) style += `color: ${so.color};`;
                                if (so.borderRadius !== undefined && so.borderRadius !== -1) style += `border-radius: ${so.borderRadius}px;`;
                                if (so.fontSizeScale) style += `font-size: ${so.fontSizeScale}em;`;
                            }
                            return `
                            <div class="service-card" data-delay="${i * 100}" style="${style}">
                                <span class="card-icon">${item.icon}</span>
                                <h3>${item.title}</h3>
                                <p>${item.description}</p>
                            </div>
                        `}).join('')}
                    </div>`;
        }

        return `
            <section id="servicios" class="services" ${dataAttrs}>
                <h2 class="section-title">${services.title}</h2>
                ${contentHtml}
            </section>
        `;
    }

    buildAbout(about) {
        return `
            <section id="nosotros" class="about">
                <div class="about-container">
                    <div class="about-content">
                        <h2 class="section-title about-title">${about.title}</h2>
                        <p class="about-description">${about.description}</p>
                        ${about.objective ? `<p class="about-objective"><strong>Objetivo:</strong> ${about.objective}</p>` : ''}
                        
                        <div class="about-cards">
                            <div class="about-card mission-card" data-delay="100">
                                <div class="about-card-icon">🎯</div>
                                <h3>${about.mission?.title || 'Misión'}</h3>
                                <p>${about.mission?.text || ''}</p>
                            </div>
                            <div class="about-card vision-card" data-delay="200">
                                <div class="about-card-icon">🔭</div>
                                <h3>${about.vision?.title || 'Visión'}</h3>
                                <p>${about.vision?.text || ''}</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="about-video">
                        <div class="video-container">
                            <video autoplay loop muted playsinline>
                                <source src="video.webm" type="video/webm">
                                Tu navegador no soporta video.
                            </video>
                            <div class="video-overlay"></div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    buildBenefits(benefits) {
        const layout = benefits.config?.layout || 'grid';
        const columns = benefits.config?.columns || 2;
        const classes = this.getSectionClasses(benefits.config);
        const dataAttrs = this.getSectionDataAttrs(benefits.config);

        let contentHtml = '';

        switch (layout) {
            case 'carousel':
                contentHtml = `
                    <div class="benefits-carousel ${classes}" data-layout="carousel">
                        <div class="carousel-track">
                            ${benefits.items.map((item, i) => {
                            let style = '';
                            if (item.geometry && item.geometry.override) {
                                style += `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};`;
                            }
                            if (item.styleOverride) {
                                const so = item.styleOverride;
                                if (so.backgroundColor) style += `background-color: ${so.backgroundColor};`;
                                if (so.borderColor) style += `border-color: ${so.borderColor};`;
                                if (so.color) style += `color: ${so.color};`;
                                if (so.borderRadius !== undefined && so.borderRadius !== -1) style += `border-radius: ${so.borderRadius}px;`;
                                if (so.fontSizeScale) style += `font-size: ${so.fontSizeScale}em;`;
                            }
                                return `
                                <div class="carousel-slide benefit-item" data-delay="${i * 80}" style="${style}">
                                    <span class="benefit-icon">${item.icon}</span>
                                    <h4>${item.title}</h4>
                                    <p>${item.description}</p>
                                </div>
                            `;
                        }).join('')}
                        </div>
                    </div>`;
                break;

            case 'list':
                contentHtml = `
                    <div class="benefits-list" data-layout="list">
                        ${benefits.items.map((item, i) => `
                            <div class="benefit-list-item" data-delay="${i * 60}">
                                <span class="list-icon">${item.icon}</span>
                                <div class="list-content">
                                    <h4>${item.title}</h4>
                                    <p>${item.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>`;
                break;

            case 'featured': {
                const [main, ...others] = benefits.items;
                contentHtml = `
                    <div class="benefits-featured" data-layout="featured">
                        <div class="benefit-main" data-delay="0">
                            <span class="benefit-icon">${main.icon}</span>
                            <h4>${main.title}</h4>
                            <p>${main.description}</p>
                        </div>
                        <div class="benefit-others">
                            ${others.map((item, i) => `
                                <div class="benefit-small" data-delay="${(i + 1) * 80}">
                                    <span class="benefit-icon">${item.icon}</span>
                                    <h4>${item.title}</h4>
                                </div>
                            `).join('')}
                        </div>
                    </div>`;
                break;
            }

            case 'minimal':
                contentHtml = `
                    <div class="benefits-minimal" data-layout="minimal">
                        ${benefits.items.map((item, i) => `
                            <div class="benefit-minimal-item" data-delay="${i * 50}">
                                <span class="minimal-icon">${item.icon}</span>
                                <span class="minimal-title">${item.title}</span>
                            </div>
                        `).join('')}
                    </div>`;
                break;

            case 'freeform':
                contentHtml = `
                    <div class="benefits-freeform ${classes}" data-layout="freeform" style="position: relative; min-height: 600px;">
                        ${benefits.items.map((item, i) => {
                            const geo = item.geometry || { x: 50 + (i % 3) * 300, y: 50 + Math.floor(i / 3) * 250, w: 280, h: 'auto', z: 1 };
                            const zIndex = geo.z !== undefined ? geo.z : 1;
                            const style = `
                                position: absolute;
                                left: ${geo.x}px;
                                top: ${geo.y}px;
                                width: ${geo.w}px;
                                height: ${geo.h === 'auto' ? 'auto' : geo.h + 'px'};
                                z-index: ${zIndex};
                                transform: rotate(${geo.r || 0}deg);
                            `;
                            const styleOverride = (item.geometry && item.geometry.override) ?
                                `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};` : '';
                            return `
                                <div class="carousel-slide benefit-item" data-delay="${i * 80}" style="${styleOverride}">
                                    <span class="benefit-icon">${item.icon}</span>
                                    <h4>${item.title}</h4>
                                    <p>${item.description}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>`;
                break;

            default: // grid
                contentHtml = `
                    <div class="benefits-grid ${classes}" data-layout="grid" style="--columns: ${columns}">
                        ${benefits.items.map((item, i) => {
                            let style = '';
                            if (item.geometry && item.geometry.override) {
                                style += `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};`;
                            }
                            if (item.styleOverride) {
                                const so = item.styleOverride;
                                if (so.backgroundColor) style += `background-color: ${so.backgroundColor};`;
                                if (so.borderColor) style += `border-color: ${so.borderColor};`;
                                if (so.color) style += `color: ${so.color};`;
                                if (so.borderRadius !== undefined && so.borderRadius !== -1) style += `border-radius: ${so.borderRadius}px;`;
                                if (so.fontSizeScale) style += `font-size: ${so.fontSizeScale}em;`;
                            }
                            return `
                            <div class="benefit-item" data-delay="${i * 80}" style="${style}">
                                <span class="benefit-icon">${item.icon}</span>
                                <h4>${item.title}</h4>
                                <p>${item.description}</p>
                            </div>
                        `}).join('')}
                    </div>`;
        }

        return `
            <section id="beneficios" class="benefits" ${dataAttrs}>
                <h2 class="section-title">${benefits.title}</h2>
                ${contentHtml}
            </section>
        `;
    }

    buildTeam(team) {
        const layout = team.config?.layout || 'grid';
        const columns = team.config?.columns || 3;
        const classes = this.getSectionClasses(team.config);
        const dataAttrs = this.getSectionDataAttrs(team.config);

        const buildImgStyle = (item) => {
            const parts = [];
            if (item.imgPosition) parts.push(`object-position:${item.imgPosition}`);
            if (item.imgZoom && item.imgZoom !== 1) parts.push(`transform:scale(${item.imgZoom})`);
            return parts.length ? `style="${parts.join(';')}"` : '';
        };

        let contentHtml = '';

        if (layout === 'carousel') {
            contentHtml = `
                <div class="team-carousel ${classes}" data-layout="carousel">
                    <div class="carousel-track">
                        ${team.items.map((item, i) => {
                                if (item.geometry && item.geometry.override) {
                                    console.log('Rendering item with override:', i, item.geometry);
                                }
                            const styleOverride = (item.geometry && item.geometry.override) ?
                                `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};` : '';
                            return `
                                <div class="carousel-slide team-card" data-delay="${i * 100}" style="${styleOverride}">
                                    <div class="team-img-wrapper">
                                        <img src="${item.image}" alt="${item.name}" class="team-img" ${buildImgStyle(item)}>
                                    </div>
                                    <h3>${item.name}</h3>
                                    <p>${item.role}</p>
                                </div>
                            `;
                        }).join('')}
                    </div>
                    <div class="carousel-nav">
                        <button class="carousel-btn prev" onclick="this.closest('.team-carousel').querySelector('.carousel-track').scrollBy(-300, 0)">←</button>
                        <button class="carousel-btn next" onclick="this.closest('.team-carousel').querySelector('.carousel-track').scrollBy(300, 0)">→</button>
                    </div>
                </div>`;
        } else {
            // grid (default)
            contentHtml = `
                <div class="team-grid ${classes}" data-layout="grid" style="--columns: ${columns}">
                    ${team.items.map((item, i) => {
                            let style = '';
                            if (item.geometry && item.geometry.override) {
                                style += `transform: translate(${item.geometry.x}px, ${item.geometry.y}px); width: ${item.geometry.w}px; height: ${item.geometry.h === 'auto' ? 'auto' : item.geometry.h + 'px'}; position: relative; z-index: ${item.geometry.z || 1};`;
                            }
                            if (item.styleOverride) {
                                const so = item.styleOverride;
                                if (so.backgroundColor) style += `background-color: ${so.backgroundColor};`;
                                if (so.borderColor) style += `border-color: ${so.borderColor};`;
                                if (so.color) style += `color: ${so.color};`;
                                if (so.borderRadius !== undefined && so.borderRadius !== -1) style += `border-radius: ${so.borderRadius}px;`;
                                if (so.fontSizeScale) style += `font-size: ${so.fontSizeScale}em;`;
                            }
                        return `
                                <div class="carousel-slide team-card" data-delay="${i * 100}" style="${style}">
                            <div class="team-img-wrapper">
                                <img src="${item.image}" alt="${item.name}" class="team-img" ${buildImgStyle(item)}>
                            </div>
                            <h3>${item.name}</h3>
                            <p>${item.role}</p>
                        </div>
                    `}).join('')}
                </div>`;
        }

        return `
            <section id="equipo" class="team" ${dataAttrs}>
                <h2 class="section-title">${team.title}</h2>
                ${contentHtml}
            </section>
        `;
    }

    buildContact(contact) {
        return `
            <section id="contacto" class="contact">
                <div class="contact-content">
                    <h2 class="section-title">${contact.title}</h2>
                    <p class="contact-text">${contact.subtitle || ''}</p>
                    <form class="contact-form" onsubmit="event.preventDefault(); alert('¡Gracias! Te contactaremos pronto.');">
                        <div class="form-row">
                            <input type="text" placeholder="Nombre completo" class="form-input" required>
                            <input type="email" placeholder="Correo electrónico" class="form-input" required>
                        </div>
                        <div class="form-row">
                            <input type="tel" placeholder="Teléfono" class="form-input">
                            <select class="form-input">
                                <option value="">Tipo de proyecto</option>
                                <option value="residencial">Residencial</option>
                                <option value="comercial">Comercial</option>
                                <option value="industrial">Industrial</option>
                            </select>
                        </div>
                        <textarea placeholder="Cuéntanos sobre tu proyecto..." class="form-input form-textarea"></textarea>
                        <button type="submit" class="btn btn-primary btn-full">Enviar Solicitud</button>
                    </form>
                </div>
            </section>
        `;
    }

    buildFooter(content) {
        return `
            <footer class="footer">
                <div class="footer-content">
                    <div class="footer-brand">
                        <span class="brand-icon">☀️</span>
                        <span class="brand-text">${content.siteName || 'Showcase'}</span>
                    </div>
                    <p class="footer-text">${content.footer?.copyright || '© 2026'}</p>
                </div>
            </footer>
        `;
    }

    // ============================================
    // RED INTERACTIVA
    // ============================================
    initNetwork() {
        this.canvas = document.getElementById('networkCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.nodes = [];
        this.mouse = { x: null, y: null };
        this.time = 0;

        this.resizeCanvas();
        this.createGrid();
        this.setupNetworkEvents();
        this.animateNetwork();
    }

    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createGrid() {
        this.nodes = [];
        if (!this.canvas) return;
        const spacing = this.gridDensity;
        const cols = Math.ceil(this.canvas.width / spacing) + 2;
        const rows = Math.ceil(this.canvas.height / spacing) + 2;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                this.nodes.push({
                    baseX: i * spacing,
                    baseY: j * spacing,
                    x: i * spacing,
                    y: j * spacing,
                    col: i,
                    row: j
                });
            }
        }
        this.cols = cols;
        this.rows = rows;
    }

    setupNetworkEvents() {
        window.addEventListener('resize', () => {
            this.resizeCanvas();
            this.createGrid();
        });

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        document.addEventListener('mouseleave', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });
    }

    animateNetwork() {
        this.time += 0.01;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Get network config from content.theme
        const netConfig = this.content?.theme?.network || TEMPLATES.solar.theme.network;
        const interactionRadius = netConfig.interactionRadius || 150;
        const interactionType = netConfig.interactionType || 'repel';

        // Dynamic physics params
        const repelForce = netConfig.repelForce ?? 40;
        const attractForce = netConfig.attractForce ?? 30;
        const waveAmp = netConfig.waveAmplitude ?? 25;
        const baseSize = netConfig.nodeSize ?? 2;
        const baseGlow = netConfig.nodeGlow ?? 15;

        // Actualizar y dibujar nodos
        this.nodes.forEach((node, index) => {
            // Flotación base
            let targetX = node.baseX + Math.sin(this.time + node.col * 0.3) * 3;
            let targetY = node.baseY + Math.cos(this.time + node.row * 0.3) * 3;

            // Interacción con mouse
            if (this.mouse.x !== null) {
                const dx = node.baseX - this.mouse.x;
                const dy = node.baseY - this.mouse.y;
                const distance = Math.hypot(dx, dy);

                if (distance < interactionRadius) {
                    const force = (interactionRadius - distance) / interactionRadius;
                    const angle = Math.atan2(dy, dx);

                    switch (interactionType) {
                        case 'repel':
                            targetX = node.baseX + Math.cos(angle) * force * repelForce;
                            targetY = node.baseY + Math.sin(angle) * force * repelForce;
                            break;
                        case 'attract':
                            targetX = node.baseX - Math.cos(angle) * force * attractForce;
                            targetY = node.baseY - Math.sin(angle) * force * attractForce;
                            break;
                        case 'wave': {
                            const wave = Math.sin(distance * 0.05 - this.time * 3) * force * waveAmp;
                            targetX = node.baseX + Math.cos(angle) * wave;
                            targetY = node.baseY + Math.sin(angle) * wave;
                            break;
                        }
                    }
                }
            }

            // Interpolación suave
            node.x += (targetX - node.x) * 0.1;
            node.y += (targetY - node.y) * 0.1;
        });

        // Dibujar conexiones
        this.nodes.forEach((node, index) => {
            // Horizontal
            if (node.col < this.cols - 1) {
                const rightIndex = index + this.rows;
                if (rightIndex < this.nodes.length) {
                    this.drawLine(node, this.nodes[rightIndex], netConfig);
                }
            }
            // Vertical
            if (node.row < this.rows - 1) {
                const bottomIndex = index + 1;
                if (bottomIndex < this.nodes.length && this.nodes[bottomIndex].col === node.col) {
                    this.drawLine(node, this.nodes[bottomIndex], netConfig);
                }
            }
        });

        // Dibujar nodos
        this.nodes.forEach(node => {
            let size = baseSize;
            let glowSize = 0;

            if (this.mouse.x !== null) {
                const dx = node.x - this.mouse.x;
                const dy = node.y - this.mouse.y;
                const distance = Math.hypot(dx, dy);

                if (distance < interactionRadius) {
                    const proximity = 1 - (distance / interactionRadius);
                    size = baseSize + proximity * 3;
                    glowSize = proximity * baseGlow;
                }
            }

            // Glow
            if (glowSize > 0) {
                const gradient = this.ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize);
                gradient.addColorStop(0, this.hexToRgba(netConfig.glowColor || '#ffffff', 0.6));
                gradient.addColorStop(1, 'transparent');
                this.ctx.beginPath();
                this.ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
                this.ctx.fillStyle = gradient;
                this.ctx.fill();
            }

            // Nodo
            this.ctx.beginPath();
            this.ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = netConfig.lineColor || '#ffffff';
            this.ctx.fill();
        });

        requestAnimationFrame(() => this.animateNetwork());
    }

    drawLine(node1, node2, netConfig, baseOpacity = 0.5) {
        let opacity = baseOpacity;
        let lineWidth = netConfig.lineWidth || 1;
        const interactionRadius = netConfig.interactionRadius || 150;

        if (this.mouse.x !== null) {
            const midX = (node1.x + node2.x) / 2;
            const midY = (node1.y + node2.y) / 2;
            const distance = Math.hypot(midX - this.mouse.x, midY - this.mouse.y);

            if (distance < interactionRadius) {
                const proximity = 1 - (distance / interactionRadius);
                opacity = baseOpacity + proximity * 0.5;
                lineWidth = (netConfig.lineWidth || 1) * (1 + proximity * 1.5);
            }
        }

        this.ctx.beginPath();
        this.ctx.strokeStyle = this.hexToRgba(netConfig.lineColor || '#ffffff', opacity);
        this.ctx.lineWidth = lineWidth;
        this.ctx.moveTo(node1.x, node1.y);
        this.ctx.lineTo(node2.x, node2.y);
        this.ctx.stroke();
    }

    createBurstEffect() {
        const primary = this.content?.theme?.primary || '#f59e0b';
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                left: ${centerX}px;
                top: ${centerY}px;
                width: 8px;
                height: 8px;
                background: ${primary};
            `;
            document.body.appendChild(particle);

            const angle = (Math.PI * 2 / 20) * i;
            const distance = 200 + Math.random() * 150;
            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance;

            particle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(0)`, opacity: 0 }
            ], {
                duration: 800,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }).onfinish = () => particle.remove();
        }
    }

    hexToRgba(hex, alpha) {
        if (!hex) return `rgba(0,0,0,${alpha})`;
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }

    applyStyles() {
        if (!this.content || !this.content.theme) return;
        const theme = this.content.theme;
        const root = document.documentElement;
        const s = theme.styles;

        // ====== Colores principales ======
        root.style.setProperty('--primary', theme.primary);
        root.style.setProperty('--primary-hover', theme.primaryHover);
        root.style.setProperty('--secondary', theme.secondary);
        root.style.setProperty('--primary-glow', this.hexToRgba(theme.primary, s.effects.glowIntensity));
        root.style.setProperty('--bg-dark', theme.bgDark);

        // ====== Cards ======
        root.style.setProperty('--surface', `rgba(255, 255, 255, ${s.cards.bgOpacity})`);
        root.style.setProperty('--card-border-radius', `${s.cards.borderRadius}px`);
        root.style.setProperty('--card-hover-scale', s.cards.hoverScale);
        root.style.setProperty('--card-padding', `${s.cards.padding}rem`);
        root.style.setProperty('--card-gap', `${s.cards.gap}rem`);
        root.style.setProperty('--card-shadow', s.cards.shadow ? '0 25px 50px rgba(0,0,0,0.5)' : 'none');

        // ====== Buttons ======
        root.style.setProperty('--btn-border-radius', `${s.buttons.borderRadius}px`);
        root.style.setProperty('--btn-hover-scale', s.buttons.hoverScale);

        // ====== Sections ======
        root.style.setProperty('--hero-opacity', s.sections.heroOpacity);
        root.style.setProperty('--services-opacity', s.sections.servicesOpacity);
        root.style.setProperty('--benefits-opacity', s.sections.benefitsOpacity);
        root.style.setProperty('--contact-opacity', s.sections.contactOpacity);
        root.style.setProperty('--section-padding', `${s.sections.padding}rem`);

        // ====== Texts ======
        root.style.setProperty('--title-size', `${s.texts.titleSize}rem`);
        root.style.setProperty('--body-size', `${s.texts.bodySize}rem`);
        root.style.setProperty('--title-opacity', s.texts.titleOpacity);
        root.style.setProperty('--paragraph-opacity', s.texts.paragraphOpacity);

        // ====== General ======
        root.style.setProperty('--network-opacity', s.general.networkOpacity);
        root.style.setProperty('--navbar-blur', `${s.general.navbarBlur}px`);
        root.style.setProperty('--navbar-opacity', s.general.navbarOpacity);
        root.style.setProperty('--container-width', `${s.general.containerWidth}px`);

        // ====== Animations ======
        root.style.setProperty('--transition-normal', `${s.animations.transitionSpeed}s`);
        root.style.setProperty('--hover-lift', `${s.animations.hoverLift}px`);

        // ====== Effects ======
        root.style.setProperty('--glow-intensity', s.effects.glowIntensity);
        root.style.setProperty('--border', `rgba(255, 255, 255, ${s.effects.borderOpacity})`);

        // ====== Network config ======
        this.gridDensity = theme.network.gridDensity;
        this.createGrid();

        // ====== Global Style Overrides from content.styles (legacy support or extra override) ======
        if (this.content.styles) {
            const st = this.content.styles;
            if (st.primary) root.style.setProperty('--primary', st.primary);
            if (st.secondary) root.style.setProperty('--secondary', st.secondary);
            if (st.bgDark) root.style.setProperty('--bg-dark', st.bgDark);
        }
    }

    createStatBurst(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Use theme colors & animations config
        const theme = this.content?.theme || TEMPLATES.solar.theme;
        const anims = theme.styles?.animations || {};

        const burstDuration = anims.burstDuration || 500;
        const burstDistBase = anims.burstDistance || 50;

        for (let i = 0; i < 8; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                left: ${centerX}px;
                top: ${centerY}px;
                width: 6px;
                height: 6px;
                background: ${i % 2 === 0 ? theme.primary : theme.secondary};
            `;
            document.body.appendChild(particle);

            const angle = (Math.PI * 2 / 8) * i;
            const distance = burstDistBase + Math.random() * (burstDistBase * 0.6);
            const destX = Math.cos(angle) * distance;
            const destY = Math.sin(angle) * distance;

            particle.animate([
                { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
                { transform: `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(0)`, opacity: 0 }
            ], {
                duration: burstDuration,
                easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
            }).onfinish = () => particle.remove();
        }
    }

    // ... (Rest of methods: startAnimations, animateNumber, setupScrollAnimations, init)

    // ============================================
    // ANIMACIONES
    // ============================================
    startAnimations() {
        // Navbar
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        // Logo entrance animation
        const logoEntrance = navbar.dataset.logoEntrance;
        const brand = navbar.querySelector('.nav-brand');
        if (logoEntrance && brand) {
            brand.classList.add(`logo-entrance-${logoEntrance}`);
        }

        // Initial slide-in
        setTimeout(() => navbar.classList.add('animate-in'), 100);

        // --- Composable scroll behaviors ---
        let lastScrollY = 0;
        const isSticky = navbar.classList.contains('navbar-sticky');
        const isShrinkable = navbar.classList.contains('navbar-shrinkable');
        const isAutoHide = navbar.classList.contains('navbar-auto-hide');
        const isScrollReveal = navbar.classList.contains('navbar-scroll-reveal');

        // If sticky, force fixed positioning
        if (isSticky) {
            navbar.style.position = 'fixed';
        }

        // Scroll reveal: start hidden
        if (isScrollReveal) {
            navbar.classList.add('navbar-hidden');
        }

        if (isShrinkable || isAutoHide || isScrollReveal) {
            window.addEventListener('scroll', () => {
                const currentScrollY = window.scrollY;
                const heroHeight = document.querySelector('.hero')?.offsetHeight || 500;

                // Shrink
                if (isShrinkable) {
                    if (currentScrollY > 50) {
                        navbar.classList.add('scrolled');
                    } else {
                        navbar.classList.remove('scrolled');
                    }
                }

                // Auto-hide
                if (isAutoHide) {
                    if (currentScrollY > lastScrollY && currentScrollY > 80) {
                        navbar.classList.add('navbar-hidden');
                    } else {
                        navbar.classList.remove('navbar-hidden');
                    }
                }

                // Scroll reveal
                if (isScrollReveal) {
                    if (currentScrollY > heroHeight * 0.8) {
                        navbar.classList.remove('navbar-hidden');
                    } else {
                        navbar.classList.add('navbar-hidden');
                    }
                }

                lastScrollY = currentScrollY;
            });
        }

        // Hero elements
        const heroElements = ['.hero-badge', '.hero-title', '.hero-subtitle', '.hero-buttons'];
        heroElements.forEach((sel, i) => {
            const el = document.querySelector(sel);
            if (el) setTimeout(() => el.classList.add('animate-in'), 200 + i * 150);
        });

        // Stats con conteo
        document.querySelectorAll('.stat-item').forEach((item, i) => {
            setTimeout(() => {
                item.classList.add('animate-in');
                this.animateNumber(item);
                this.createStatBurst(item);
            }, 800 + i * 150);
        });

        // Scroll animations
        this.setupScrollAnimations();
    }

    animateNumber(item) {
        const target = item.dataset.target;
        const numberEl = item.querySelector('.stat-number');
        if (!target || !numberEl) return;

        const match = target.match(/^(\d+)(.*)$/);
        if (!match) {
            numberEl.textContent = target;
            return;
        }

        const endValue = Number.parseInt(match[1], 10);
        const suffix = match[2] || '';
        const duration = 2000;
        const startTime = performance.now();

        const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(2, -10 * progress);
            numberEl.textContent = Math.floor(eased * endValue) + suffix;
            if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    }

    startResize(e, item) {
        e.preventDefault();
        const startX = e.clientX;
        const startY = e.clientY;
        const startW = item.offsetWidth;
        const startH = item.offsetHeight;

        const onMove = (mv) => {
            const newW = Math.max(100, startW + (mv.clientX - startX));
            const newH = Math.max(100, startH + (mv.clientY - startY));
            item.style.width = `${newW}px`;
            item.style.height = `${newH}px`;
        };

        const onUp = () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);

            // Sync geometry
            // ... similar to drag end logic ...
            // Simplified reuse: manually construct msg
            const section = item.closest('section');
            const sectionId = section?.id;
            let sectionKey = '';
            if(sectionId === 'servicios') sectionKey = 'services';
            else if(sectionId === 'beneficios') sectionKey = 'benefits';
            else if(sectionId === 'equipo') sectionKey = 'team';

            let index = item.dataset.index;
            if (index === undefined) {
                const children = Array.from(item.parentNode.children);
                index = children.indexOf(item);
            }

            if (sectionKey && index !== -1) {
                const geometry = {
                    x: item.offsetLeft,
                    y: item.offsetTop,
                    w: item.offsetWidth,
                    h: item.offsetHeight,
                    z: getComputedStyle(item).zIndex || 1
                };
                window.parent.postMessage({
                    type: 'item-moved', // Reusing this for geometry update
                    section: sectionKey,
                    index: parseInt(index),
                    geometry: geometry
                }, globalThis.location.origin);
            }
        };

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    }

    setupScrollAnimations() {
        // Read config from content.json if available
        const anims = this.content?.theme?.styles?.animations || {};
        const threshold = anims.scrollThreshold || 0.1;

        // Note: IntersectionObserver doesn't support changing threshold dynamically on existing observer easily.
        // We recreate it if we need to, but for now we'll stick to one creation in init() or rebuild page.
        // Ideally we should disconnect old observer if we are rebuilding.
        if(this.scrollObserver) this.scrollObserver.disconnect();

        this.scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let delay = Number.parseInt(entry.target.dataset.delay, 10) || 0;
                    // Add global base delay if configured
                    if(anims.scrollDelayBase) delay += anims.scrollDelayBase;

                    setTimeout(() => {
                        entry.target.classList.add('animate-in');
                    }, delay);
                    this.scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: threshold, rootMargin: '0px 0px -50px 0px' });

        const observer = this.scrollObserver;

        // Observar elementos - incluye todos los layouts
        document.querySelectorAll(`
            .section-title, 
            .service-card, 
            .benefit-item, 
            .contact-text, 
            .contact-form, 
            .about-card, 
            .about-description, 
            .about-video,
            .service-list-item,
            .benefit-list-item,
            .carousel-slide,
            .featured-main,
            .benefit-main,
            .benefit-small,
            .benefit-minimal-item,
            .team-card
        `).forEach(el => {
            observer.observe(el);
        });
    }
}

// ============================================
// INICIALIZAR
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    Showcase.create();
});
