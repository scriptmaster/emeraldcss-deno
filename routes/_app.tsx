import { define } from "../utils.ts";

export default define.page(function App({ Component, state }: { Component: any; state: any }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>{state.title ?? "EmeraldCSS v2 - Container, Grid & Utilities"}</title>
        <link rel="stylesheet" href="/emerald-v2.css" />
        <link id="link-palette" rel="stylesheet" href="" />
      </head>
      <body>
        <main class="page">
          <header class="navbar">
            <div class="container">
              <a href="" class="navbar-brand">EmeraldCSS v2</a>
              <ul class="navbar-nav">
                <li class="nav-item"><a href="#structure" class="nav-link">Structure</a></li>
                <li class="nav-item"><a href="#variables" class="nav-link">Variables</a></li>
                <li class="nav-item"><a href="#typography" class="nav-link">Typography</a></li>
                <li class="nav-item"><a href="#grid" class="nav-link">Grid</a></li>
                <li class="nav-item"><a href="#utilities" class="nav-link">Utilities</a></li>
              </ul>
              <div class="navbar-nav">
                <select id="palette-selector" class="form-select w-auto ml-2">
                  <option value="">Default (Blue)</option>
                </select>
                <button id="palette-editor-btn" class="btn btn-primary ml-1">Edit Palette</button>
              </div>
            </div>
          </header>
          
          <div class="page-wrapper">
            <section class="page-header">
              <div class="container">
                <h1>EmeraldCSS v2 Documentation</h1>
                <h2>A utility first css-framework with comprehensive container system and 12-column grid.</h2>
              </div>
            </section>
            
            <section class="page-body">
              <div class="container">
                <Component />
              </div>
            </section>
          </div>
        </main>

        {/* Palette Footer */}
        <footer class="bg-dark text-white py-4">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h5 class="text-white mb-3">Available Palettes</h5>
                <div class="row">
                  <div class="col-md-4">
                    <h6 class="text-muted mb-2">Material Colors</h6>
                    <div id="material-palette-links" class="d-flex flex-column gap-1">
                      {/* Material palette links will be generated here */}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-muted mb-2">Brands</h6>
                    <div id="brand-palette-links" class="d-flex flex-column gap-1">
                      {/* Brand palette links will be generated here */}
                    </div>
                  </div>
                  <div class="col-md-4">
                    <h6 class="text-muted mb-2">Custom</h6>
                    <div id="custom-palette-links" class="d-flex flex-column gap-1">
                      {/* Custom palette links will be generated here */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Palette Editor Modal */}
        <div id="palette-editor-modal" class="modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5); z-index: 1000;">
          <div class="modal-dialog" style="position: relative; top: 50%; transform: translateY(-50%); max-width: 800px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div class="modal-content">
              <div class="modal-header" style="padding: 1rem; border-bottom: 1px solid #e9ecef; display: flex; justify-content: space-between; align-items: center;">
                <h5 class="modal-title" style="margin: 0;">Palette Editor</h5>
                <button type="button" class="btn-close" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
              </div>
              <div class="modal-body" style="padding: 1rem;">
                <div class="mb-3">
                  <label for="palette-name" class="form-label">Palette Name</label>
                  <input type="text" id="palette-name" class="form-control" placeholder="Enter palette name" />
                </div>
                <div class="mb-3">
                  <label class="form-label">Color Palette</label>
                  <div id="color-palette-editor">
                    {/* Color items will be generated here */}
                  </div>
                </div>
              </div>
              <div class="modal-footer" style="padding: 1rem; border-top: 1px solid #e9ecef; display: flex; justify-content: flex-end; gap: 0.5rem;">
                <button type="button" class="btn btn-secondary">Cancel</button>
                <button type="button" id="save-palette-btn" class="btn btn-primary">Save Palette</button>
              </div>
            </div>
          </div>
        </div>

        <script src="/js/palette_manager.js"></script>
      </body>
    </html>
  );
});
