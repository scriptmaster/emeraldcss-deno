// Emerald Star: Custom datastar plugins from emerald

// datastar-json-table.plugin.js
// Datastar custom plugin for:
// <table data-json-table="/api/..."
//        data-json-rows="rows"           (optional)
//        data-json-table-columns="#cols" (optional)>

attribute({
  name: 'json-table',
  requirement: {
    key: 'denied',  // use as data-json-table="..."
    value: 'must',  // value (URL or expression) is required
  },
  returnsValue: false,

  apply({ el, value, rx }) {
    // Resolve URL: plugin value, expression, or raw attribute
    let url = value;
    if (!url) {
      try {
        const maybe = rx();
        if (typeof maybe === 'string' && maybe.length) {
          url = maybe;
        }
      } catch (_) {
        /* ignore expression errors */
      }
    }
    if (!url) {
      url = el.getAttribute('data-json-table');
    }
    if (!url) return;

    // Optional key for rows array: data-json-rows="rows"
    // If this is empty or missing, we expect a top-level array.
    const rowsKeyAttr = el.getAttribute('data-json-rows');
    const rowsKey =
      rowsKeyAttr !== null && rowsKeyAttr !== '' ? rowsKeyAttr : null;

    // Optional column selector container
    const columnsSelector = el.getAttribute('data-json-table-columns') || null;
    const columnsContainer = columnsSelector
      ? document.querySelector(columnsSelector)
      : null;

    const state = {
      el,
      url,
      rowsKey,
      rows: [],
      columnsContainer,
      listener: null,
    };

    // React to column checkbox changes
    if (columnsContainer) {
      const handler = () => {
        if (!state.rows.length) return;
        renderTable(state);
      };
      columnsContainer.addEventListener('change', handler);
      state.listener = handler;
    }

    // Initial fetch
    fetchJsonAndRender(state);

    // Cleanup on unmount / patch
    return () => {
      if (state.columnsContainer && state.listener) {
        state.columnsContainer.removeEventListener(
          'change',
          state.listener,
        );
      }
    };
  },
});

async function fetchJsonAndRender(state) {
  const { url, el, rowsKey } = state;

  try {
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      throw new Error(`HTTP ${res.status}`);
    }

    const json = await res.json();
    let rows = [];

    if (rowsKey) {
      // Explicit rows key: { [rowsKey]: [...] }
      if (
        json &&
        typeof json === 'object' &&
        Array.isArray(json[rowsKey])
      ) {
        rows = json[rowsKey];
      }
    } else {
      // No rowsKey specified:
      // 1) Prefer top-level array
      // 2) Fallback to json.rows if present
      if (Array.isArray(json)) {
        rows = json;
      } else if (
        typeof json === 'object' &&
        typeof json.rows == 'object' &&
        Array.isArray(json.rows)
      ) {
        rows = json.rows;
      }
    }

    state.rows = rows;

    if (!rows.length) {
      renderEmpty(el, 'No rows');
      return;
    }

    renderTable(state);
  } catch (err) {
    console.error('json-table plugin fetch error:', err);
    renderEmpty(el, 'Failed to load');
  }
}

function renderEmpty(tableEl, message) {
  tableEl.innerHTML = `
    <thead><tr><th></th></tr></thead>
    <tbody><tr><td colspan="99">${escapeHtml(message)}</td></tr></tbody>
  `;
}

function renderTable(state) {
  const { el, rows, columnsContainer } = state;

  if (!rows || !rows.length) {
    renderEmpty(el, 'No rows');
    return;
  }

  const visibleColumns = getVisibleColumns(rows, columnsContainer);
  if (!visibleColumns.length) {
    renderEmpty(el, 'No visible columns');
    return;
  }

  const theadHtml =
    '<thead><tr>' +
    visibleColumns.map((c) => `<th>${escapeHtml(c)}</th>`).join('') +
    '</tr></thead>';

  const bodyHtml =
    '<tbody>' +
    rows
      .map((row) => {
        const cells = getRowCells(row, visibleColumns);
        const tds = cells
          .map((cell) => `<td>${escapeHtml(cell)}</td>`)
          .join('');
        return `<tr>${tds}</tr>`;
      })
      .join('') +
    '</tbody>';

  el.innerHTML = theadHtml + bodyHtml;
}

function getVisibleColumns(rows, columnsContainer) {
  // If we have a "columns signal" container, use checked checkboxes
  if (columnsContainer) {
    const inputs = columnsContainer.querySelectorAll(
      'input[type="checkbox"][data-column]',
    );
    const cols = [];
    inputs.forEach((input) => {
      if (input.checked) cols.push(input.dataset.column);
    });
    if (cols.length) return cols;
  }

  // Fallback: derive from keys of first row (for object rows)
  const first = rows[0];
  if (first && typeof first === 'object' && !Array.isArray(first)) {
    return Object.keys(first);
  }

  return [];
}

function getRowCells(row, visibleColumns) {
  if (Array.isArray(row)) return row;

  if (row && typeof row === 'object') {
    return visibleColumns.map((col) => row[col]);
  }

  return [];
}

function escapeHtml(v) {
  return String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&lt;')
    .replace(/</g, '&lt;') // small redundancy, harmless
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

