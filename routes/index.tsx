import { define } from "../utils.ts";

export default define.page(function Home(ctx: any) {
  ctx.state.title = "EmeraldCSS v2 Demo - Container, Grid & Utilities";

  return (
    <>
      <div class="card">
        <p class="sticky-note float-right"><strong>Quick Tip:</strong>This page is a perfect example of how to build beautiful interfaces using only EmeraldCSS v2 utility classes!</p>
        <h3 class="title">About `emerald-v2.css`</h3>
        <ul>
          <li><strong>File Size:</strong> 27.0 KB (normal), 5.6 KB (gzipped)</li>
          <li><strong>Lines of Code:</strong> 1001 lines</li>
          <li><strong>CSS Reset:</strong> Minimal reset with box-sizing, margin, padding, and list styling</li>
          <li><strong>Variables:</strong> 100+ CSS custom properties</li>
          <li><strong>Utility Classes:</strong> 200+ utility classes for layout, typography, colors, and components</li>
        </ul>
        <h3 class="mt-3">Benefits</h3>
        <ul>
          <li>Zero custom CSS - Pure utility-first approach</li>
          <li>Responsive design - Built-in responsive classes</li>
          <li>Grid system - 12-column grid with responsive breakpoints</li>
          <li>Framework validation - Proves completeness of EmeraldCSS v2, comparable to bootsrap and tailwind</li>
        </ul>
      </div>

      {/* Page Structure Documentation */}
      <div class="card" id="structure">
        <h2 class="title">Page Structure</h2>
        <p>EmeraldCSS v2 follows a semantic HTML structure that's compatible with Tabler and Bootstrap patterns.</p>
        
        <h3>Semantic HTML Structure</h3>
        <div class="card">
          <pre><code>{`<main>
  <header>  <!-- Navigation header (white background) -->
    <nav>
      <a href="#">Brand</a>
      <ul>
        <li><a href="#">Link</a></li>
      </ul>
    </nav>
  </header>
  <div>  <!-- Page wrapper (light gray background) -->
    <section>  <!-- Page header (content header) -->
      <h1>Page Title</h1>
    </section>
    <section>  <!-- Page body (main content) -->
      <p>Content goes here</p>
    </section>
  </div>
</main>`}</code></pre>
        </div>
        
        <h3>Framework Comparison</h3>
        
        <h4>Tabler Structure (Class-based)</h4>
        <div class="card">
          <pre><code>{`<div class="page">
  <div class="navbar">
    <div class="container">
      <a class="navbar-brand">Brand</a>
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link">Link</a></li>
      </ul>
    </div>
  </div>
  <div class="page-wrapper">
    <div class="page-header">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="page-title">Page Title</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="page-body">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <p>Content goes here</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`}</code></pre>
        </div>
        
        <h4>Bootstrap Structure</h4>
        <div class="card">
          <ul>
            <li><code>.container</code> → <code>.row</code> → <code>.col</code></li>
            <li><code>.navbar</code> (separate from main content)</li>
          </ul>
        </div>
        
        <h4>EmeraldCSS v2 Structure (Two Forms)</h4>
        
        <h5>Form 1: Tabler-like with Classes</h5>
        <div class="card">
          <pre><code>{`<main class="page">
  <header class="navbar">
    <div class="container">
      <a class="navbar-brand">Brand</a>
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link">Link</a></li>
      </ul>
    </div>
  </header>
  <div class="page-wrapper">
    <section class="page-header">
      <div class="container">
        <h1>Page Title</h1>
      </div>
    </section>
    <section class="page-body">
      <div class="container">
        <p>Content goes here</p>
      </div>
    </section>
  </div>
</main>`}</code></pre>
        </div>
        
        <h5>Form 2: Semantic Class-less Structure</h5>
        <div class="card">
          <pre><code>{`<main>
  <header>
    <div class="container">
      <a>Brand</a>
      <nav>
        <ul>
          <li><a>Link</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div>
    <section>
      <div class="container">
        <h1>Page Title</h1>
      </div>
    </section>
    <section>
      <div class="container">
        <p>Content goes here</p>
      </div>
    </section>
  </div>
</main>`}</code></pre>
        </div>
      </div>

      {/* Root Variables Demo */}
      <div class="card">
        <h2 class="title">Root Variables</h2>
        <p>EmeraldCSS v2 uses CSS custom properties (variables) for consistent theming and easy customization.</p>
        <p><strong>Total Variables:</strong> 49 variables across 6 sub-sections</p>
        <ul>
          <li><strong>Colors:</strong> 13 variables</li>
          <li><strong>Typography:</strong> 7 variables</li>
          <li><strong>Fonts:</strong> 4 variables</li>
          <li><strong>Spacing:</strong> 10 variables</li>
          <li><strong>Border Radius:</strong> 4 variables</li>
          <li><strong>Percentages:</strong> 12 variables</li>
          <li><strong>Breakpoints:</strong> 7 variables</li>
        </ul>
        
        <h3>Color Variables (13 variables)</h3>
        <ul>
          <li><code>--color-primary: #0969da</code> - GitHub blue, primary brand color</li>
          <li><code>--color-secondary: #6f42c1</code> - Purple, secondary brand color</li>
          <li><code>--color-success: #1a7f37</code> - Green, success states</li>
          <li><code>--color-danger: #cf222e</code> - Red, error states</li>
          <li><code>--color-warning: #9a6700</code> - Orange, warning states</li>
          <li><code>--color-info: #17a2b8</code> - Teal, informational states (Tabler-inspired)</li>
          <li><code>--color-azure: #4299e1</code> - Azure blue, additional accent color</li>
          <li><code>--color-muted: #656d76</code> - Gray, secondary text</li>
          <li><code>--color-dark: #1f2328</code> - Dark gray, primary text</li>
          <li><code>--color-light: #f6f8fa</code> - Light gray, backgrounds</li>
          <li><code>--color-white: #ffffff</code> - Pure white</li>
          <li><code>--color-border-1: #e1e4e8</code> - Light gray, borders</li>
        </ul>
      </div>

      {/* CSS Reset Demo */}
      <div class="card">
        <h2 class="title">CSS Reset</h2>
        <p>EmeraldCSS v2 includes a minimal CSS reset that normalizes browser defaults while preserving useful styling.</p>
        
        <h3>Reset Features</h3>
        <ul>
          <li><strong>Box-sizing:</strong> Border-box for all elements</li>
          <li><strong>Margin/Padding:</strong> Reset to 0 for consistent spacing</li>
          <li><strong>List Styling:</strong> Proper bullet points and indentation</li>
          <li><strong>Minimal Approach:</strong> Only resets what's necessary</li>
        </ul>
        
        <h3>List Demo</h3>
        <div class="card">
          <h4>Unordered List</h4>
          <ul>
            <li>First item with proper bullet point</li>
            <li>Second item with spacing</li>
            <li>Third item with consistent styling</li>
          </ul>
          
          <h4>Ordered List</h4>
          <ol>
            <li>First numbered item</li>
            <li>Second numbered item</li>
            <li>Third numbered item</li>
          </ol>
        </div>
      </div>

      {/* Base Styles Demo */}
      <div class="card">
        <h2 class="title">Base Styles</h2>
        <p>EmeraldCSS v2 provides consistent base styles for HTML elements.</p>
        <p><strong>Total Rules:</strong> 2 base style rules (html, body)</p>
        
        <h3>Font Family Fallback Chain</h3>
        <p>The <code>--font-family</code> variable uses a comprehensive fallback chain:</p>
        <ol>
          <li><strong>-apple-system</strong> - Apple's system font (San Francisco on macOS/iOS)</li>
          <li><strong>BlinkMacSystemFont</strong> - Chrome's system font on macOS</li>
          <li><strong>'Segoe UI'</strong> - Microsoft's system font (Windows 10+)</li>
          <li><strong>'Noto Sans'</strong> - Google's web font (cross-platform)</li>
          <li><strong>'Helvetica Neue'</strong> - Apple's Helvetica variant</li>
          <li><strong>Helvetica</strong> - Classic Helvetica</li>
          <li><strong>Arial</strong> - Universal fallback</li>
          <li><strong>sans-serif</strong> - Generic sans-serif fallback</li>
        </ol>
        
        <h3>Font Demo</h3>
        <div class="card">
          <p><strong>System Font Stack:</strong> This text uses the complete font fallback chain. On macOS, it will use San Francisco (-apple-system). On Windows, it will use Segoe UI. On other systems, it will fall back to Noto Sans, Helvetica, or Arial.</p>
        </div>
      </div>

      {/* Typography Demo */}
      <div class="card">
        <h2 class="title">Typography</h2>
        <p>EmeraldCSS v2 provides a comprehensive typography system with consistent font sizes, weights, and line heights.</p>
        
        <div class="card">
          <h1>Heading 1 - Main Title</h1>
          <h2>Heading 2 - Section Title</h2>
          <h3>Heading 3 - Subsection</h3>
          <h4>Heading 4 - Minor Heading</h4>
          <h5>Heading 5 - Small Heading</h5>
          <h6>Heading 6 - Smallest Heading</h6>
          <p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>. It demonstrates the default body text styling with proper line height and spacing.</p>
          <p class="text-muted">This is muted text for secondary information or less important content.</p>
          <small>This is small text for captions, footnotes, or fine print.</small>
        </div>
      </div>

      {/* Text Utilities Demo */}
      <div class="card">
        <h2 class="title">Text Utilities</h2>
        <p>EmeraldCSS v2 provides utility classes for text styling and font weights.</p>
        
        <div class="card">
          <div class="text-xs">Extra Small Text (.text-xs)</div>
          <div class="text-sm">Small Text (.text-sm)</div>
          <div class="text-base">Base Text (.text-base)</div>
          <div class="text-lg">Large Text (.text-lg)</div>
          <div class="text-xl">Extra Large Text (.text-xl)</div>
          <div class="text-2xl">2XL Text (.text-2xl)</div>
          <div class="text-3xl">3XL Text (.text-3xl)</div>
          <div class="text-4xl">4XL Text (.text-4xl)</div>
          
          <div class="font-normal">Normal Weight (.font-normal)</div>
          <div class="font-medium">Medium Weight (.font-medium)</div>
          <div class="font-semibold">Semibold Weight (.font-semibold)</div>
          <div class="font-bold">Bold Weight (.font-bold)</div>
        </div>
      </div>

      {/* Color System Demo */}
      <div class="card">
        <h2 class="title">Color System</h2>
        <p>EmeraldCSS v2 features a modular color system with semantic tokens and an efficient generic palette system that reduces file size while providing maximum flexibility.</p>
        
        <div class="card">
          <h3>Semantic Colors</h3>
          <p>Core semantic colors for consistent UI patterns across all applications.</p>
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="bg-primary text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Primary</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-secondary text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Secondary</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-success text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Success</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-danger text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Danger</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-warning text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Warning</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-info text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Info</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-azure text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Azure</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-muted text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem;">Muted</div>
            </div>
          </div>
        </div>
        
        <h3>Generic Color Palette System</h3>
        <p>EmeraldCSS v2 uses a revolutionary generic color palette system that reduces file size by 22% while providing maximum flexibility. Instead of including all color palettes in the main CSS, you can load only the palette you need.</p>
        
        <h4>How It Works</h4>
        <div class="card">
          <p>The system uses generic variable names (<code>--color-50</code> to <code>--color-900</code>) that work with any palette. The main CSS includes a default blue palette, and additional palettes override these variables when loaded.</p>
        </div>
        
        <h4>Default Blue Palette (Material Design)</h4>
        <div class="card">
          <p>Complete Material Design blue palette with 14 shades from lightest to darkest:</p>
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="bg-50 text-dark text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">50</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-100 text-dark text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">100</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-200 text-dark text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">200</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-300 text-dark text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">300</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-400 text-dark text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">400</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-500 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">500</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-600 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">600</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-700 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">700</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-800 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">800</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-900 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">900</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-A100 text-dark text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">A100</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-A200 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">A200</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-A400 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">A400</div>
            </div>
            <div class="col-6 col-md-3">
              <div class="bg-A700 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">A700</div>
            </div>
          </div>
        </div>
        
        <h4>Palette Override System</h4>
        <div class="card">
          <p>Load additional palettes by including them after the main CSS file. Each palette file is only ~500 bytes:</p>
          <pre><code>{`<!-- Default Blue Palette (included in main CSS) -->
<link rel="stylesheet" href="/emerald-v2.css">

<!-- Override with Red Palette -->
<link rel="stylesheet" href="/css/palettes/emerald-palette-red.css">

<!-- Override with Purple Palette -->
<link rel="stylesheet" href="/css/palettes/emerald-palette-purple.css">

<!-- Override with Green Palette -->
<link rel="stylesheet" href="/css/palettes/emerald-palette-green.css">`}</code></pre>
        </div>
      </div>

      {/* Container System Demo */}
      <div class="card">
        <h2 class="title">Container System</h2>
        <p>EmeraldCSS v2 provides responsive containers with different max-widths and breakpoints.</p>
        
        <div class="card">
          <div class="container bg-500 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Default Container (1280px max-width)</div>
          <div class="container-sm bg-600 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Small Container (640px max-width)</div>
          <div class="container-md bg-700 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Medium Container (768px max-width)</div>
          <div class="container-lg bg-800 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Large Container (1024px max-width)</div>
          <div class="container-xl bg-900 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Extra Large Container (1280px max-width)</div>
        </div>
      </div>

      {/* 12-Column Grid Demo */}
      <div class="card">
        <h2 class="title">12-Column Grid System</h2>
        <p>EmeraldCSS v2 includes a Bootstrap-like 12-column grid system with responsive breakpoints.</p>
        
        <div class="card">
          <div class="row">
            <div class="col-12 bg-500 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Full Width (col-12)</div>
          </div>
          <div class="row">
            <div class="col-6 bg-600 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Half Width (col-6)</div>
            <div class="col-6 bg-700 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Half Width (col-6)</div>
          </div>
          <div class="row">
            <div class="col-4 bg-800 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">One Third (col-4)</div>
            <div class="col-8 bg-900 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Two Thirds (col-8)</div>
          </div>
          <div class="row">
            <div class="col-3 bg-A100 text-dark text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Quarter (col-3)</div>
            <div class="col-3 bg-A200 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Quarter (col-3)</div>
            <div class="col-3 bg-A400 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Quarter (col-3)</div>
            <div class="col-3 bg-A700 text-white text-center" style="padding: 1rem; border-radius: 4px; margin-bottom: 1rem; font-weight: bold;">Quarter (col-3)</div>
          </div>
        </div>
      </div>

      {/* Flexbox Utilities Demo */}
      <div class="card">
        <h2 class="title">Flexbox Utilities</h2>
        <p>Comprehensive flexbox utilities for layout control.</p>
        
        <div class="card">
          <h3>Flex Direction</h3>
          <div class="d-flex flex-row gap-2">
            <div class="bg-100 text-dark text-center" style="padding: 1rem; border-radius: 4px; flex: 1; font-weight: bold;">Row 1</div>
            <div class="bg-200 text-dark text-center" style="padding: 1rem; border-radius: 4px; flex: 1; font-weight: bold;">Row 2</div>
            <div class="bg-300 text-dark text-center" style="padding: 1rem; border-radius: 4px; flex: 1; font-weight: bold;">Row 3</div>
          </div>
          <div class="d-flex flex-column gap-2">
            <div class="bg-400 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Column 1</div>
            <div class="bg-500 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Column 2</div>
            <div class="bg-600 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Column 3</div>
          </div>
          
          <h3>Justify Content</h3>
          <div class="d-flex justify-content-start gap-2">
            <div class="bg-700 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Start</div>
            <div class="bg-700 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Start</div>
          </div>
          <div class="d-flex justify-content-center gap-2">
            <div class="bg-800 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Center</div>
            <div class="bg-800 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Center</div>
          </div>
          <div class="d-flex justify-content-end gap-2">
            <div class="bg-900 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">End</div>
            <div class="bg-900 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">End</div>
          </div>
          <div class="d-flex justify-content-between gap-2">
            <div class="bg-A100 text-dark text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Between</div>
            <div class="bg-A200 text-white text-center" style="padding: 1rem; border-radius: 4px; font-weight: bold;">Between</div>
          </div>
        </div>
      </div>

      {/* Spacing Utilities Demo */}
      <div class="card">
        <h2 class="title">Spacing Utilities</h2>
        <p>EmeraldCSS v2 provides comprehensive spacing utilities for margins and padding using CSS variables.</p>
        
        <h3>Margin Utilities</h3>
        <div class="card">
          <h4>All Sides (m-0 to m-4)</h4>
          <div class="d-flex gap-2">
            <div class="bg-500 text-white p-2 m-0" style="border-radius: 4px; font-weight: bold;">m-0</div>
            <div class="bg-500 text-white p-2 m-1" style="border-radius: 4px; font-weight: bold;">m-1</div>
            <div class="bg-500 text-white p-2 m-2" style="border-radius: 4px; font-weight: bold;">m-2</div>
            <div class="bg-500 text-white p-2 m-3" style="border-radius: 4px; font-weight: bold;">m-3</div>
            <div class="bg-500 text-white p-2 m-4" style="border-radius: 4px; font-weight: bold;">m-4</div>
          </div>
          
          <h4>Horizontal (mx-0 to mx-4)</h4>
          <div class="d-flex gap-2">
            <div class="bg-600 text-white p-2 mx-0" style="border-radius: 4px; font-weight: bold;">mx-0</div>
            <div class="bg-600 text-white p-2 mx-1" style="border-radius: 4px; font-weight: bold;">mx-1</div>
            <div class="bg-600 text-white p-2 mx-2" style="border-radius: 4px; font-weight: bold;">mx-2</div>
            <div class="bg-600 text-white p-2 mx-3" style="border-radius: 4px; font-weight: bold;">mx-3</div>
            <div class="bg-600 text-white p-2 mx-4" style="border-radius: 4px; font-weight: bold;">mx-4</div>
          </div>
          
          <h4>Vertical (my-0 to my-4)</h4>
          <div class="d-flex gap-2">
            <div class="bg-700 text-white p-2 my-0" style="border-radius: 4px; font-weight: bold;">my-0</div>
            <div class="bg-700 text-white p-2 my-1" style="border-radius: 4px; font-weight: bold;">my-1</div>
            <div class="bg-700 text-white p-2 my-2" style="border-radius: 4px; font-weight: bold;">my-2</div>
            <div class="bg-700 text-white p-2 my-3" style="border-radius: 4px; font-weight: bold;">my-3</div>
            <div class="bg-700 text-white p-2 my-4" style="border-radius: 4px; font-weight: bold;">my-4</div>
          </div>
          
          <h4>Individual Sides</h4>
          <div class="d-flex gap-2">
            <div class="bg-800 text-white p-2 mt-2" style="border-radius: 4px; font-weight: bold;">mt-2</div>
            <div class="bg-800 text-white p-2 mb-2" style="border-radius: 4px; font-weight: bold;">mb-2</div>
            <div class="bg-800 text-white p-2 ml-2" style="border-radius: 4px; font-weight: bold;">ml-2</div>
            <div class="bg-800 text-white p-2 mr-2" style="border-radius: 4px; font-weight: bold;">mr-2</div>
          </div>
        </div>
        
        <h3>Padding Utilities</h3>
        <div class="card">
          <h4>All Sides (p-0 to p-4)</h4>
          <div class="d-flex gap-2">
            <div class="bg-A100 text-dark p-0" style="border-radius: 4px; font-weight: bold;">p-0</div>
            <div class="bg-A100 text-dark p-1" style="border-radius: 4px; font-weight: bold;">p-1</div>
            <div class="bg-A100 text-dark p-2" style="border-radius: 4px; font-weight: bold;">p-2</div>
            <div class="bg-A100 text-dark p-3" style="border-radius: 4px; font-weight: bold;">p-3</div>
            <div class="bg-A100 text-dark p-4" style="border-radius: 4px; font-weight: bold;">p-4</div>
          </div>
          
          <h4>Horizontal (px-0 to px-4)</h4>
          <div class="d-flex gap-2">
            <div class="bg-A200 text-white px-0 py-2" style="border-radius: 4px; font-weight: bold;">px-0</div>
            <div class="bg-A200 text-white px-1 py-2" style="border-radius: 4px; font-weight: bold;">px-1</div>
            <div class="bg-A200 text-white px-2 py-2" style="border-radius: 4px; font-weight: bold;">px-2</div>
            <div class="bg-A200 text-white px-3 py-2" style="border-radius: 4px; font-weight: bold;">px-3</div>
            <div class="bg-A200 text-white px-4 py-2" style="border-radius: 4px; font-weight: bold;">px-4</div>
          </div>
          
          <h4>Vertical (py-0 to py-4)</h4>
          <div class="d-flex gap-2">
            <div class="bg-A400 text-white py-0 px-2" style="border-radius: 4px; font-weight: bold;">py-0</div>
            <div class="bg-A400 text-white py-1 px-2" style="border-radius: 4px; font-weight: bold;">py-1</div>
            <div class="bg-A400 text-white py-2 px-2" style="border-radius: 4px; font-weight: bold;">py-2</div>
            <div class="bg-A400 text-white py-3 px-2" style="border-radius: 4px; font-weight: bold;">py-3</div>
            <div class="bg-A400 text-white py-4 px-2" style="border-radius: 4px; font-weight: bold;">py-4</div>
          </div>
          
          <h4>Individual Sides</h4>
          <div class="d-flex gap-2">
            <div class="bg-A700 text-white pt-2 px-2" style="border-radius: 4px; font-weight: bold;">pt-2</div>
            <div class="bg-A700 text-white pb-2 px-2" style="border-radius: 4px; font-weight: bold;">pb-2</div>
            <div class="bg-A700 text-white pl-2 py-2" style="border-radius: 4px; font-weight: bold;">pl-2</div>
            <div class="bg-A700 text-white pr-2 py-2" style="border-radius: 4px; font-weight: bold;">pr-2</div>
          </div>
        </div>
        
        <h3>Spacing Scale</h3>
        <div class="card">
          <ul>
            <li><strong>0:</strong> 0 (no spacing)</li>
            <li><strong>1:</strong> 0.25rem (4px)</li>
            <li><strong>2:</strong> 0.5rem (8px)</li>
            <li><strong>3:</strong> 0.75rem (12px)</li>
            <li><strong>4:</strong> 1rem (16px)</li>
          </ul>
          <p><strong>Total Utilities:</strong> 60 spacing utility classes (30 margin + 30 padding)</p>
        </div>
      </div>

      {/* Navigation Demo */}
      <div class="card">
        <h2 class="title">Navigation</h2>
        <p>EmeraldCSS v2 provides navigation components using the grid and flexbox utilities.</p>
        
        <div class="card">
          <nav class="row align-items-center" style="padding: 1rem; background-color: #f6f8fa; border-radius: 6px;">
            <div class="col-6">
              <div class="font-semibold text-primary">EmeraldCSS v2</div>
            </div>
            <div class="col-6 d-flex justify-content-end gap-4">
              <a href="#" class="text-dark" style="text-decoration: none;">Home</a>
              <a href="#" class="text-dark" style="text-decoration: none;">About</a>
              <a href="#" class="text-dark" style="text-decoration: none;">Contact</a>
            </div>
          </nav>
        </div>
      </div>

      {/* Framework Comparison */}
      <h2 class="title">Framework Comparison</h2>
      <p>How EmeraldCSS v2 compares to Bootstrap and Tabler CSS frameworks.</p>
      
      <div class="card">
        <h3>Feature Comparison</h3>
        <ul>
          <li><strong>Container:</strong> Responsive containers (<code>.container</code>, <code>.container-sm</code>, <code>.container-md</code>, <code>.container-lg</code>, <code>.container-xl</code>) with CSS variables vs Bootstrap's responsive containers</li>
          <li><strong>Grid System:</strong> 12-column grid with CSS variables and responsive breakpoints vs Bootstrap's standard grid</li>
          <li><strong>Flexbox:</strong> <code>.d-flex</code>, <code>.flex-1</code>, <code>.justify-content-*</code>, <code>.align-items-*</code> vs Bootstrap's flexbox utilities</li>
          <li><strong>Gap Utilities:</strong> <code>.gap-1</code> to <code>.gap-8</code> with responsive variants (<code>.gap-sm-*</code>, <code>.gap-md-*</code>, <code>.gap-lg-*</code>)</li>
          <li><strong>Colors:</strong> CSS custom properties with semantic tokens and modular palette system vs theme colors</li>
          <li><strong>Typography:</strong> CSS custom properties for all values with utility classes vs utility-only approach</li>
          <li><strong>Cards:</strong> <code>.card</code> (minimal, consistent) with semantic HTML support vs comprehensive card systems</li>
          <li><strong>Responsive:</strong> Mobile-first with CSS variables and responsive utilities vs mobile-first approach</li>
          <li><strong>Spacing:</strong> Comprehensive margin/padding utilities (<code>.m-0</code> to <code>.m-4</code>, <code>.p-0</code> to <code>.p-4</code>) with directional variants</li>
          <li><strong>Components:</strong> Form controls, buttons, modals with CSS variables vs pre-styled components</li>
        </ul>
      </div>
    </>
  );
});
