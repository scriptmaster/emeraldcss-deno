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
        <p>EmeraldCSS v2 provides text utility classes for font-sizes and font weights.</p>
        
        <div class="card">
          <h4>font-size</h4>
          <div class="text-xs">Extra Small Text (.text-xs)</div>
          <div class="text-sm">Small Text (.text-sm)</div>
          <div class="text-base">Base Text (.text-base)</div>
          <div class="text-lg">Large Text (.text-lg)</div>
          <div class="text-xl">Extra Large Text (.text-xl)</div>
          <div class="text-2xl">2XL Text (.text-2xl)</div>
          <div class="text-3xl">3XL Text (.text-3xl)</div>
          <div class="text-4xl">4XL Text (.text-4xl)</div>
        </div>

        <div class="card">
          <h4>font-weight</h4>
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
        
        <h4>Available Palettes (56 Total)</h4>
        <div class="card">
          <p>Complete Material Design color palette collection plus popular brand palettes and Windi CSS palettes - each palette includes 14 shades (50-900 + A100-A700) plus brand-specific body backgrounds and semantic colors:</p>
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid var(--color-500);">
                <h5 class="text-500">Blue (Default)</h5>
                <p class="text-muted text-sm">Included in main CSS</p>
                <div class="bg-500 text-white text-center" style="padding: 0.5rem; border-radius: 4px;">Primary Blue</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #f44336;">
                <h5 style="color: #f44336;">Red</h5>
                <p class="text-muted text-sm">emerald-palette-red.css</p>
                <div style="background-color: #f44336; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Red</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #e91e63;">
                <h5 style="color: #e91e63;">Pink</h5>
                <p class="text-muted text-sm">emerald-palette-pink.css</p>
                <div style="background-color: #e91e63; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Pink</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #9c27b0;">
                <h5 style="color: #9c27b0;">Purple</h5>
                <p class="text-muted text-sm">emerald-palette-purple.css</p>
                <div style="background-color: #9c27b0; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Purple</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #673ab7;">
                <h5 style="color: #673ab7;">Deep Purple</h5>
                <p class="text-muted text-sm">emerald-palette-deep-purple.css</p>
                <div style="background-color: #673ab7; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Deep Purple</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #3f51b5;">
                <h5 style="color: #3f51b5;">Indigo</h5>
                <p class="text-muted text-sm">emerald-palette-indigo.css</p>
                <div style="background-color: #3f51b5; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Indigo</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #03a9f4;">
                <h5 style="color: #03a9f4;">Light Blue</h5>
                <p class="text-muted text-sm">emerald-palette-light-blue.css</p>
                <div style="background-color: #03a9f4; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Light Blue</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #00bcd4;">
                <h5 style="color: #00bcd4;">Cyan</h5>
                <p class="text-muted text-sm">emerald-palette-cyan.css</p>
                <div style="background-color: #00bcd4; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Cyan</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #009688;">
                <h5 style="color: #009688;">Teal</h5>
                <p class="text-muted text-sm">emerald-palette-teal.css</p>
                <div style="background-color: #009688; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Teal</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #4caf50;">
                <h5 style="color: #4caf50;">Green</h5>
                <p class="text-muted text-sm">emerald-palette-green.css</p>
                <div style="background-color: #4caf50; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Green</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #8bc34a;">
                <h5 style="color: #8bc34a;">Light Green</h5>
                <p class="text-muted text-sm">emerald-palette-light-green.css</p>
                <div style="background-color: #8bc34a; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Light Green</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #cddc39;">
                <h5 style="color: #cddc39;">Lime</h5>
                <p class="text-muted text-sm">emerald-palette-lime.css</p>
                <div style="background-color: #cddc39; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Lime</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #ffeb3b;">
                <h5 style="color: #ffeb3b;">Yellow</h5>
                <p class="text-muted text-sm">emerald-palette-yellow.css</p>
                <div style="background-color: #ffeb3b; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Yellow</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #ffc107;">
                <h5 style="color: #ffc107;">Amber</h5>
                <p class="text-muted text-sm">emerald-palette-amber.css</p>
                <div style="background-color: #ffc107; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Amber</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #ff9800;">
                <h5 style="color: #ff9800;">Orange</h5>
                <p class="text-muted text-sm">emerald-palette-orange.css</p>
                <div style="background-color: #ff9800; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Orange</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #ff5722;">
                <h5 style="color: #ff5722;">Deep Orange</h5>
                <p class="text-muted text-sm">emerald-palette-deep-orange.css</p>
                <div style="background-color: #ff5722; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Deep Orange</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #795548;">
                <h5 style="color: #795548;">Brown</h5>
                <p class="text-muted text-sm">emerald-palette-brown.css</p>
                <div style="background-color: #795548; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Brown</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #9e9e9e;">
                <h5 style="color: #9e9e9e;">Grey</h5>
                <p class="text-muted text-sm">emerald-palette-grey.css</p>
                <div style="background-color: #9e9e9e; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Primary Grey</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #607d8b;">
                <h5 style="color: #607d8b;">Blue Grey</h5>
                <p class="text-muted text-sm">emerald-palette-blue-grey.css</p>
                <div style="background-color: #607d8b; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Blue Grey</div>
              </div>
            </div>
          </div>
          
          <h4>Brand Palettes</h4>
          <p>Popular brand color palettes with authentic brand colors and matching body backgrounds:</p>
          <div class="row">
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #181717;">
                <h5 style="color: #181717;">GitHub</h5>
                <p class="text-muted text-sm">emerald-palette-github.css</p>
                <div style="background-color: #181717; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">GitHub</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card bg-dark" style="border: 2px solid #f0f6fc;">
                <h5 class="text-white">GitHub Dark</h5>
                <p class="text-muted text-sm">emerald-palette-github-dark.css</p>
                <div style="background-color: #f0f6fc; color: #0d1117; text-align: center; padding: 0.5rem; border-radius: 4px;">GitHub Dark</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #0078d4;">
                <h5 style="color: #0078d4;">Azure</h5>
                <p class="text-muted text-sm">emerald-palette-azure.css</p>
                <div style="background-color: #0078d4; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Azure</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #ff0000;">
                <h5 style="color: #ff0000;">YouTube</h5>
                <p class="text-muted text-sm">emerald-palette-youtube.css</p>
                <div style="background-color: #ff0000; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">YouTube</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #1da1f2;">
                <h5 style="color: #1da1f2;">Twitter</h5>
                <p class="text-muted text-sm">emerald-palette-twitter.css</p>
                <div style="background-color: #1da1f2; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Twitter</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #e4405f;">
                <h5 style="color: #e4405f;">Instagram</h5>
                <p class="text-muted text-sm">emerald-palette-instagram.css</p>
                <div style="background-color: #e4405f; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Instagram</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #007aff;">
                <h5 style="color: #007aff;">Apple</h5>
                <p class="text-muted text-sm">emerald-palette-apple.css</p>
                <div style="background-color: #007aff; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Apple</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #206bc4;">
                <h5 style="color: #206bc4;">Tabler</h5>
                <p class="text-muted text-sm">emerald-palette-tabler.css</p>
                <div style="background-color: #206bc4; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Tabler</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #1877F2;">
                <h5 style="color: #1877F2;">Facebook</h5>
                <p class="text-muted text-sm">emerald-palette-facebook.css</p>
                <div style="background-color: #1877F2; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Facebook</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #0a66c2;">
                <h5 style="color: #0a66c2;">LinkedIn</h5>
                <p class="text-muted text-sm">emerald-palette-linkedin.css</p>
                <div style="background-color: #0a66c2; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">LinkedIn</div>
              </div>
            </div>
            <div class="col-6 col-md-3">
              <div class="card" style="border: 2px solid #dc4e41;">
                <h5 style="color: #dc4e41;">Google</h5>
                <p class="text-muted text-sm">emerald-palette-google.css</p>
                <div style="background-color: #dc4e41; color: white; text-align: center; padding: 0.5rem; border-radius: 4px;">Google</div>
              </div>
            </div>
          </div>
        </div>
        
        <h4>Generic Utility Classes</h4>
        <div class="card">
          <p>All palettes use the same utility class names, making it easy to switch between palettes:</p>
          <h5>Background Colors</h5>
          <p><code>.bg-50</code> to <code>.bg-900</code> and <code>.bg-A100</code> to <code>.bg-A700</code></p>
          
          <h5>Text Colors</h5>
          <p><code>.text-50</code> to <code>.text-900</code> and <code>.text-A100</code> to <code>.text-A700</code></p>
          
          <h5>Usage Examples</h5>
          <pre><code>{`<!-- These classes work with any palette -->
<div class="bg-500 text-white">Primary Color</div>
<div class="bg-100 text-900">Light Background</div>
<div class="bg-A200 text-white">Accent Color</div>`}</code></pre>
        </div>
        
        <h4>File Size Benefits</h4>
        <div class="card">
          <ul>
            <li><strong>Main CSS:</strong> 27.0KB raw, 5.6KB gzipped (22% smaller than traditional approach)</li>
            <li><strong>Palette Files:</strong> ~500 bytes each (only load what you need)</li>
            <li><strong>Total Savings:</strong> 6KB raw, 1KB gzipped compared to including all palettes</li>
            <li><strong>Modular:</strong> Load only the palette you need for your project</li>
          </ul>
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

      {/* Form Demo */}
      <div class="card">
        <h2 class="title">Form Controls</h2>
        <p>EmeraldCSS v2 provides comprehensive form styling with utility classes for all form elements.</p>
        
        <h3>Form Elements Comparison</h3>
        <div class="card">
          <h4>Without Form Classes (Default Browser Styling)</h4>
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label>Default Input</label>
                <input type="text" placeholder="Default input styling" />
              </div>
              <div class="mb-3">
                <label>Default Textarea</label>
                <textarea placeholder="Default textarea styling"></textarea>
              </div>
              <div class="mb-3">
                <label>Default Select</label>
                <select>
                  <option>Default option 1</option>
                  <option>Default option 2</option>
                </select>
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label>Default Checkbox</label>
                <input type="checkbox" /> Checkbox option
              </div>
              <div class="mb-3">
                <label>Default Radio</label>
                <input type="radio" name="radio1" /> Radio option 1<br />
                <input type="radio" name="radio1" /> Radio option 2
              </div>
              <div class="mb-3">
                <label>Default Button</label>
                <button>Default Button</button>
              </div>
            </div>
          </div>
        </div>
        
        <h4>With Form Classes (EmeraldCSS Styling)</h4>
        <div class="card">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Form Label</label>
                <input type="text" class="form-control" placeholder="Styled input with form-control" />
              </div>
              <div class="mb-3">
                <label class="form-label">Textarea</label>
                <textarea class="form-control" placeholder="Styled textarea with form-control" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <label class="form-label">Select</label>
                <select class="form-select">
                  <option>Styled option 1</option>
                  <option>Styled option 2</option>
                  <option>Styled option 3</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">File Input</label>
                <input type="file" class="form-control" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="mb-3">
                <label class="form-label">Checkboxes</label>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check1" />
                  <label class="form-check-label" for="check1">Checkbox option 1</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="check2" />
                  <label class="form-check-label" for="check2">Checkbox option 2</label>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Radio Buttons</label>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2" id="radio1" />
                  <label class="form-check-label" for="radio1">Radio option 1</label>
                </div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="radio2" id="radio2" />
                  <label class="form-check-label" for="radio2">Radio option 2</label>
                </div>
              </div>
              <div class="mb-3">
                <label class="form-label">Switch</label>
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" id="switch1" />
                  <label class="form-check-label" for="switch1">Toggle switch</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h3>Button Styles</h3>
        <div class="card">
          <h4>Button Variants</h4>
          <div class="mb-3">
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-warning">Warning</button>
            <button class="btn btn-info">Info</button>
            <button class="btn btn-light">Light</button>
            <button class="btn btn-dark">Dark</button>
            <button class="btn btn-link">Link</button>
          </div>
          
          <h4>Button Outlines</h4>
          <div class="mb-3">
            <button class="btn btn-outline-primary">Primary Outline</button>
            <button class="btn btn-outline-secondary">Secondary Outline</button>
            <button class="btn btn-outline-success">Success Outline</button>
            <button class="btn btn-outline-danger">Danger Outline</button>
            <button class="btn btn-outline-warning">Warning Outline</button>
            <button class="btn btn-outline-info">Info Outline</button>
            <button class="btn btn-outline-light">Light Outline</button>
            <button class="btn btn-outline-dark">Dark Outline</button>
          </div>
          
          <h4>Button Sizes</h4>
          <div class="mb-3">
            <button class="btn btn-primary btn-sm">Small Button</button>
            <button class="btn btn-primary">Normal Button</button>
            <button class="btn btn-primary btn-lg">Large Button</button>
          </div>
          
          <h4>Button States</h4>
          <div class="mb-3">
            <button class="btn btn-primary">Normal</button>
            <button class="btn btn-primary" disabled>Disabled</button>
            <button class="btn btn-primary active">Active</button>
          </div>
        </div>
        
        <h3>Form Layout Examples</h3>
        <div class="card">
          <h4>Horizontal Form</h4>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" placeholder="Enter email" />
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="form-control" placeholder="Enter password" />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-sm-10 offset-sm-2">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" id="remember" />
                <label class="form-check-label" for="remember">Remember me</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-10 offset-sm-2">
              <button type="submit" class="btn btn-primary">Submit</button>
              <button type="button" class="btn btn-secondary">Cancel</button>
            </div>
          </div>
        </div>
        
        <div class="card">
          <h4>Form Validation States</h4>
          <div class="mb-3">
            <label class="form-label">Valid Input</label>
            <input type="text" class="form-control is-valid" value="Valid input" />
            <div class="valid-feedback">Looks good!</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Invalid Input</label>
            <input type="text" class="form-control is-invalid" value="Invalid input" />
            <div class="invalid-feedback">Please provide a valid input.</div>
          </div>
          <div class="mb-3">
            <label class="form-label">Select with Validation</label>
            <select class="form-select is-invalid">
              <option>Choose...</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
            <div class="invalid-feedback">Please select a valid option.</div>
          </div>
        </div>
        
        <h3>Form Utility Classes</h3>
        <div class="card">
          <ul>
            <li><code>.form-control</code> - Styles text inputs, textareas, and select elements</li>
            <li><code>.form-select</code> - Styles select dropdowns</li>
            <li><code>.form-check</code> - Container for checkboxes and radio buttons</li>
            <li><code>.form-check-input</code> - Styles checkbox and radio inputs</li>
            <li><code>.form-check-label</code> - Styles labels for checkboxes and radios</li>
            <li><code>.form-switch</code> - Creates toggle switch appearance</li>
            <li><code>.form-label</code> - Styles form labels</li>
            <li><code>.col-form-label</code> - Styles labels in horizontal forms</li>
            <li><code>.is-valid</code> - Applies valid state styling</li>
            <li><code>.is-invalid</code> - Applies invalid state styling</li>
            <li><code>.valid-feedback</code> - Styles success messages</li>
            <li><code>.invalid-feedback</code> - Styles error messages</li>
          </ul>
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
