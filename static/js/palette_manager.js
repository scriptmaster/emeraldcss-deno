// Simple DOM-based palette switching (no external dependencies)
document.addEventListener('DOMContentLoaded', () => {
    // Initialize palette manager
    window ?? (window.paletteManager = new PaletteManager());
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
        
        this.init();
    }

    async init() {
        await this.loadPalettes();
        this.setupEventListeners();
        this.generateColorEditor();
        this.generatePaletteLinks();
    }

    async loadPalettes() {
        // For static deployment, use fallback palettes
        this.addFallbackPalettes();
    }

    addFallbackPalettes() {
        const commonPalettes = [
            { filename: 'emerald-palette-red.css', name: 'Red' },
            { filename: 'emerald-palette-green.css', name: 'Green' },
            { filename: 'emerald-palette-purple.css', name: 'Purple' },
            { filename: 'emerald-palette-orange.css', name: 'Orange' },
            { filename: 'emerald-palette-pink.css', name: 'Pink' },
            { filename: 'emerald-palette-teal.css', name: 'Teal' },
            { filename: 'emerald-palette-indigo.css', name: 'Indigo' },
            { filename: 'emerald-palette-github.css', name: 'GitHub' },
            { filename: 'emerald-palette-twitter.css', name: 'Twitter' },
            { filename: 'emerald-palette-youtube.css', name: 'YouTube' }
        ];

        commonPalettes.forEach(palette => {
            const option = document.createElement('option');
            option.value = palette.filename;
            option.textContent = palette.name;
            this.paletteSelector.appendChild(option);
        });
    }

    setupEventListeners() {
        // Watch for palette changes
        this.paletteSelector.addEventListener('change', (e) => {
            this.switchPalette(e.target.value);
        });

        // Watch for editor button clicks
        this.editorBtn.addEventListener('click', () => {
            this.openEditor();
        });

        // Watch for save button clicks
        this.saveBtn.addEventListener('click', () => {
            this.savePalette();
        });

        // Watch for modal close events
        document.querySelector('.btn-close').addEventListener('click', () => {
            this.closeEditor();
        });
    }

    switchPalette(filename) {
        if (filename) {
            // Update the href attribute of the palette link
            this.paletteLink.href = `/css/palettes/\${filename}`;
            console.log('Switched to palette:', filename);
        } else {
            // Remove the href to use default palette
            this.paletteLink.href = '';
            console.log('Switched to default palette');
        }
    }

    openEditor() {
        this.modal.style.display = 'block';
        this.modal.classList.add('show');
        this.paletteName.value = '';
        this.resetColorEditor();
    }

    closeEditor() {
        this.modal.style.display = 'none';
        this.modal.classList.remove('show');
    }

    generateColorEditor() {
        // Color editor implementation would go here
        this.colorEditor.innerHTML = '<p>Color editor functionality would be implemented here</p>';
    }

    generatePaletteLinks() {
        // Generate palette links for footer
        const materialContainer = document.getElementById('material-palette-links');
        const brandContainer = document.getElementById('brand-palette-links');
        const customContainer = document.getElementById('custom-palette-links');
        
        if (!materialContainer || !brandContainer || !customContainer) return;

        // Add default option
        const defaultLink = document.createElement('a');
        defaultLink.href = '#';
        defaultLink.className = 'footer-link underline-dashed';
        defaultLink.textContent = 'Default (Blue)';
        defaultLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.switchPalette('');
            this.paletteSelector.value = '';
        });
        materialContainer.appendChild(defaultLink);
    }

    resetColorEditor() {
        this.generateColorEditor();
    }

    async savePalette() {
        // Save functionality disabled for static deployment
        alert('Palette editor is in demo mode. Save functionality requires server API.');
        this.closeEditor();
    }
}
