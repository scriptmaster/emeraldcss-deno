// Simple DOM-based palette switching (no external dependencies)
document.addEventListener('DOMContentLoaded', () => {
    // Initialize palette manager
    if (!window.paletteManager) {
        window.paletteManager = new PaletteManager();
    }
});

// Simple DOM-based Palette Management System
class PaletteManager {
    constructor() {
        this.paletteSelector = document.getElementById('palette-selector');
        this.paletteLink = document.getElementById('link-palette');
        this.editorBtn = document.getElementById('palette-editor-btn');
        this.modal = document.getElementById('palette-editor-modal');
        this.paletteName = document.getElementById('palette-name');
        this.colorEditor = document.getElementById('color-palette-editor');
        this.saveBtn = document.getElementById('save-palette-btn');
        
        // All available palettes (categorized)
        this.allPalettes = [
            // Material Design Colors (19 palettes)
            { filename: 'emerald-palette-red.css', name: 'Red', category: 'material' },
            { filename: 'emerald-palette-pink.css', name: 'Pink', category: 'material' },
            { filename: 'emerald-palette-purple.css', name: 'Purple', category: 'material' },
            { filename: 'emerald-palette-deep-purple.css', name: 'Deep Purple', category: 'material' },
            { filename: 'emerald-palette-indigo.css', name: 'Indigo', category: 'material' },
            { filename: 'emerald-palette-light-blue.css', name: 'Light Blue', category: 'material' },
            { filename: 'emerald-palette-cyan.css', name: 'Cyan', category: 'material' },
            { filename: 'emerald-palette-teal.css', name: 'Teal', category: 'material' },
            { filename: 'emerald-palette-green.css', name: 'Green', category: 'material' },
            { filename: 'emerald-palette-light-green.css', name: 'Light Green', category: 'material' },
            { filename: 'emerald-palette-lime.css', name: 'Lime', category: 'material' },
            { filename: 'emerald-palette-yellow.css', name: 'Yellow', category: 'material' },
            { filename: 'emerald-palette-amber.css', name: 'Amber', category: 'material' },
            { filename: 'emerald-palette-orange.css', name: 'Orange', category: 'material' },
            { filename: 'emerald-palette-deep-orange.css', name: 'Deep Orange', category: 'material' },
            { filename: 'emerald-palette-brown.css', name: 'Brown', category: 'material' },
            { filename: 'emerald-palette-grey.css', name: 'Grey', category: 'material' },
            { filename: 'emerald-palette-blue-grey.css', name: 'Blue Grey', category: 'material' },
            { filename: 'emerald-palette-emerald.css', name: 'Emerald', category: 'material' },
            
            // Brand Palettes (11 palettes)
            { filename: 'emerald-palette-github.css', name: 'GitHub', category: 'brand' },
            { filename: 'emerald-palette-github-dark.css', name: 'GitHub Dark', category: 'brand' },
            { filename: 'emerald-palette-azure.css', name: 'Azure', category: 'brand' },
            { filename: 'emerald-palette-youtube.css', name: 'YouTube', category: 'brand' },
            { filename: 'emerald-palette-twitter.css', name: 'Twitter', category: 'brand' },
            { filename: 'emerald-palette-instagram.css', name: 'Instagram', category: 'brand' },
            { filename: 'emerald-palette-facebook.css', name: 'Facebook', category: 'brand' },
            { filename: 'emerald-palette-linkedin.css', name: 'LinkedIn', category: 'brand' },
            { filename: 'emerald-palette-google.css', name: 'Google', category: 'brand' },
            { filename: 'emerald-palette-apple.css', name: 'Apple', category: 'brand' },
            { filename: 'emerald-palette-tabler.css', name: 'Tabler', category: 'brand' },
            
            // Windi CSS Palettes (24 palettes)
            { filename: 'emerald-palette-windi-amber.css', name: 'Windi Amber', category: 'windi' },
            { filename: 'emerald-palette-windi-blue.css', name: 'Windi Blue', category: 'windi' },
            { filename: 'emerald-palette-windi-cyan.css', name: 'Windi Cyan', category: 'windi' },
            { filename: 'emerald-palette-windi-dark.css', name: 'Windi Dark', category: 'windi' },
            { filename: 'emerald-palette-windi-emerald.css', name: 'Windi Emerald', category: 'windi' },
            { filename: 'emerald-palette-windi-fuchsia.css', name: 'Windi Fuchsia', category: 'windi' },
            { filename: 'emerald-palette-windi-gray.css', name: 'Windi Gray', category: 'windi' },
            { filename: 'emerald-palette-windi-green.css', name: 'Windi Green', category: 'windi' },
            { filename: 'emerald-palette-windi-indigo.css', name: 'Windi Indigo', category: 'windi' },
            { filename: 'emerald-palette-windi-light.css', name: 'Windi Light', category: 'windi' },
            { filename: 'emerald-palette-windi-lime.css', name: 'Windi Lime', category: 'windi' },
            { filename: 'emerald-palette-windi-neutral.css', name: 'Windi Neutral', category: 'windi' },
            { filename: 'emerald-palette-windi-orange.css', name: 'Windi Orange', category: 'windi' },
            { filename: 'emerald-palette-windi-pink.css', name: 'Windi Pink', category: 'windi' },
            { filename: 'emerald-palette-windi-purple.css', name: 'Windi Purple', category: 'windi' },
            { filename: 'emerald-palette-windi-red.css', name: 'Windi Red', category: 'windi' },
            { filename: 'emerald-palette-windi-rose.css', name: 'Windi Rose', category: 'windi' },
            { filename: 'emerald-palette-windi-sky.css', name: 'Windi Sky', category: 'windi' },
            { filename: 'emerald-palette-windi-slate.css', name: 'Windi Slate', category: 'windi' },
            { filename: 'emerald-palette-windi-stone.css', name: 'Windi Stone', category: 'windi' },
            { filename: 'emerald-palette-windi-teal.css', name: 'Windi Teal', category: 'windi' },
            { filename: 'emerald-palette-windi-violet.css', name: 'Windi Violet', category: 'windi' },
            { filename: 'emerald-palette-windi-yellow.css', name: 'Windi Yellow', category: 'windi' },
            { filename: 'emerald-palette-windi-zinc.css', name: 'Windi Zinc', category: 'windi' },
            
            // Custom Palettes (2 palettes)
            { filename: 'custom-palette-my-custom-palette.css', name: 'My Custom Palette', category: 'custom' },
            { filename: 'custom-palette-test2.css', name: 'Test2', category: 'custom' }
        ];
        
        this.init();
    }

    init() {
        this.loadPalettes();
        this.setupEventListeners();
        this.generateColorEditor();
        this.generatePaletteLinks();
    }

    loadPalettes() {
        // Clear existing options except default
        this.paletteSelector.innerHTML = '<option value="">Default (Blue)</option>';
        
        // Sort palettes by name for better UX
        const sortedPalettes = [...this.allPalettes].sort((a, b) => {
            if (a.category !== b.category) {
                const categoryOrder = { material: 1, brand: 2, windi: 3, custom: 4 };
                return categoryOrder[a.category] - categoryOrder[b.category];
            }
            return a.name.localeCompare(b.name);
        });
        
        // Add all palettes to selector
        sortedPalettes.forEach(palette => {
            const option = document.createElement('option');
            option.value = palette.filename;
            option.textContent = palette.name;
            this.paletteSelector.appendChild(option);
        });
    }

    setupEventListeners() {
        // Watch for palette changes
        if (this.paletteSelector) {
            this.paletteSelector.addEventListener('change', (e) => {
                this.switchPalette(e.target.value);
            });
        }

        // Watch for editor button clicks
        if (this.editorBtn) {
            this.editorBtn.addEventListener('click', () => {
                this.openEditor();
            });
        }

        // Watch for save button clicks
        if (this.saveBtn) {
            this.saveBtn.addEventListener('click', () => {
                this.savePalette();
            });
        }

        // Watch for modal close events
        const closeBtn = document.querySelector('.btn-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.closeEditor();
            });
        }
        
        // Watch for cancel button
        const cancelBtn = document.querySelector('.btn-secondary');
        if (cancelBtn) {
            cancelBtn.addEventListener('click', () => {
                this.closeEditor();
            });
        }
    }

    switchPalette(filename) {
        if (!this.paletteLink) return;
        
        if (filename) {
            // Update the href attribute of the palette link
            this.paletteLink.href = `/css/palettes/${filename}`;
            console.log('Switched to palette:', filename);
        } else {
            // Remove the href to use default palette
            this.paletteLink.href = '';
            console.log('Switched to default palette');
        }
    }

    openEditor() {
        if (!this.modal) return;
        
        this.modal.style.display = 'block';
        this.modal.classList.add('show');
        
        if (this.paletteName) {
            this.paletteName.value = '';
        }
        
        this.resetColorEditor();
    }

    closeEditor() {
        if (!this.modal) return;
        
        this.modal.style.display = 'none';
        this.modal.classList.remove('show');
    }

    generateColorEditor() {
        if (!this.colorEditor) return;
        
        const colorVars = [
            { name: 'Brand Color', var: '--brand-color', default: '#0969da' },
            { name: 'Body Background', var: '--body-bg', default: '#f1f5f9' },
            { name: 'Primary', var: '--color-primary', default: '#0969da' },
            { name: 'Secondary', var: '--color-secondary', default: '#6f42c1' },
            { name: 'Success', var: '--color-success', default: '#1a7f37' },
            { name: 'Danger', var: '--color-danger', default: '#cf222e' },
            { name: 'Warning', var: '--color-warning', default: '#9a6700' },
            { name: 'Info', var: '--color-info', default: '#17a2b8' },
            { name: 'Muted', var: '--color-muted', default: '#656d76' },
            { name: '50', var: '--color-50', default: '#e3f2fd' },
            { name: '100', var: '--color-100', default: '#bbdefb' },
            { name: '200', var: '--color-200', default: '#90caf9' },
            { name: '300', var: '--color-300', default: '#64b5f6' },
            { name: '400', var: '--color-400', default: '#42a5f5' },
            { name: '500', var: '--color-500', default: '#2196f3' },
            { name: '600', var: '--color-600', default: '#1e88e5' },
            { name: '700', var: '--color-700', default: '#1976d2' },
            { name: '800', var: '--color-800', default: '#1565c0' },
            { name: '900', var: '--color-900', default: '#0d47a1' },
            { name: 'A100', var: '--color-A100', default: '#82b1ff' },
            { name: 'A200', var: '--color-A200', default: '#448aff' },
            { name: 'A400', var: '--color-A400', default: '#2979ff' },
            { name: 'A700', var: '--color-A700', default: '#2962ff' }
        ];

        // Get current CSS variable values
        const getCurrentValue = (varName) => {
            return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || 
                   colorVars.find(c => c.var === varName)?.default || '#000000';
        };

        this.colorEditor.innerHTML = `
            <div class="row">
                <div class="col-md-4">
                    <h6>Brand & Semantic Colors</h6>
                    <div id="brand-colors"></div>
                </div>
                <div class="col-md-4">
                    <h6>Material Design Shades</h6>
                    <div id="material-colors"></div>
                </div>
                <div class="col-md-4">
                    <h6>Accent Colors</h6>
                    <div id="accent-colors"></div>
                </div>
            </div>
        `;

        // Brand & Semantic Colors
        const brandColors = colorVars.slice(0, 9);
        const brandContainer = document.getElementById('brand-colors');
        if (brandContainer) {
            brandColors.forEach(color => {
                const currentValue = getCurrentValue(color.var);
                const colorItem = document.createElement('div');
                colorItem.className = 'color-item d-flex align-items-center mb-2';
                colorItem.innerHTML = `
                    <div class="color-preview" style="width: 30px; height: 30px; background-color: ${currentValue}; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;"></div>
                    <div class="flex-grow-1">
                        <label class="form-label mb-0">${color.name}</label>
                        <input type="color" class="form-control form-control-color" data-var="${color.var}" value="${currentValue}" style="width: 100px;">
                    </div>
                `;
                brandContainer.appendChild(colorItem);
            });
        }

        // Material Design Shades
        const materialColors = colorVars.slice(9, 19);
        const materialContainer = document.getElementById('material-colors');
        if (materialContainer) {
            materialColors.forEach(color => {
                const currentValue = getCurrentValue(color.var);
                const colorItem = document.createElement('div');
                colorItem.className = 'color-item d-flex align-items-center mb-2';
                colorItem.innerHTML = `
                    <div class="color-preview" style="width: 30px; height: 30px; background-color: ${currentValue}; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;"></div>
                    <div class="flex-grow-1">
                        <label class="form-label mb-0">${color.name}</label>
                        <input type="color" class="form-control form-control-color" data-var="${color.var}" value="${currentValue}" style="width: 100px;">
                    </div>
                `;
                materialContainer.appendChild(colorItem);
            });
        }

        // Accent Colors
        const accentColors = colorVars.slice(19);
        const accentContainer = document.getElementById('accent-colors');
        if (accentContainer) {
            accentColors.forEach(color => {
                const currentValue = getCurrentValue(color.var);
                const colorItem = document.createElement('div');
                colorItem.className = 'color-item d-flex align-items-center mb-2';
                colorItem.innerHTML = `
                    <div class="color-preview" style="width: 30px; height: 30px; background-color: ${currentValue}; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;"></div>
                    <div class="flex-grow-1">
                        <label class="form-label mb-0">${color.name}</label>
                        <input type="color" class="form-control form-control-color" data-var="${color.var}" value="${currentValue}" style="width: 100px;">
                    </div>
                `;
                accentContainer.appendChild(colorItem);
            });
        }

        // Add event listeners for color picker updates
        const colorInputs = this.colorEditor.querySelectorAll('input[type="color"]');
        colorInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const colorValue = e.target.value;
                const colorItem = e.target.closest('.color-item');
                if (colorItem) {
                    const colorPreview = colorItem.querySelector('.color-preview');
                    if (colorPreview) {
                        colorPreview.style.backgroundColor = colorValue;
                    }
                }
            });
        });
    }

    generatePaletteLinks() {
        // Generate palette links for footer
        const materialContainer = document.getElementById('material-palette-links');
        const brandContainer = document.getElementById('brand-palette-links');
        const customContainer = document.getElementById('custom-palette-links');
        
        if (!materialContainer || !brandContainer || !customContainer) return;

        // Clear existing links
        materialContainer.innerHTML = '';
        brandContainer.innerHTML = '';
        customContainer.innerHTML = '';

        // Add default option to material
        const defaultLink = document.createElement('a');
        defaultLink.href = '#';
        defaultLink.className = 'footer-link underline-dashed';
        defaultLink.textContent = 'Default (Blue)';
        defaultLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.switchPalette('');
            if (this.paletteSelector) {
                this.paletteSelector.value = '';
            }
        });
        materialContainer.appendChild(defaultLink);

        // Categorize and add palettes
        const materialPalettes = this.allPalettes.filter(p => p.category === 'material');
        const brandPalettes = this.allPalettes.filter(p => p.category === 'brand');
        const windiPalettes = this.allPalettes.filter(p => p.category === 'windi');
        const customPalettes = this.allPalettes.filter(p => p.category === 'custom');

        // Add Material palettes
        materialPalettes.forEach(palette => {
            const link = this.createPaletteLink(palette);
            materialContainer.appendChild(link);
        });

        // Add Windi palettes to Material section (since they're color-based)
        windiPalettes.forEach(palette => {
            const link = this.createPaletteLink(palette);
            materialContainer.appendChild(link);
        });

        // Add Brand palettes
        brandPalettes.forEach(palette => {
            const link = this.createPaletteLink(palette);
            brandContainer.appendChild(link);
        });

        // Add Custom palettes
        customPalettes.forEach(palette => {
            const link = this.createPaletteLink(palette);
            customContainer.appendChild(link);
        });
    }

    createPaletteLink(palette) {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'footer-link underline-dashed';
        link.textContent = palette.name;
        link.addEventListener('click', (e) => {
            e.preventDefault();
            this.switchPalette(palette.filename);
            if (this.paletteSelector) {
                this.paletteSelector.value = palette.filename;
            }
        });
        return link;
    }

    resetColorEditor() {
        // Regenerate the color editor with current values
        this.generateColorEditor();
    }

    async savePalette() {
        // Save functionality disabled for static deployment
        alert('Palette editor is in demo mode. Save functionality requires server API.');
        this.closeEditor();
    }
}
