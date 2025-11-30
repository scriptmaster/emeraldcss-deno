const { createApp } = Vue;

const app = createApp({
    computed: {
        currentTableSrc() {
            const path = window.location.pathname;
            if (path.endsWith('/files')) return '/api/files';
            if (path.endsWith('/users')) return '/api/pgstar/users';
            if (path.endsWith('/jobs')) return '/api/jobs';
            // Default to information schema tables
            return '/api/information_schema/tables';
        }
    }
});

// Register component with name that works with is attribute
app.component('data-table-grid', {
    template: '#data-table-template',
    props: ['src'],
    
    data() {
        return {
            rows: [],
            loading: true,
            error: null
        }
    },
    computed: {
        // Dynamically grab keys from the first object to form columns
        columns() {
            if (this.rows.length === 0) return [];
            return Object.keys(this.rows[0]);
        }
    },
    methods: {
        async fetchData() {
            console.log('Fetching data from:', this.src);
            this.loading = true;
            this.error = null;
            try {
                const res = await fetch(this.src);
                if (!res.ok) throw new Error(res.statusText);
                const data = await res.json();
                console.log('Data received:', data);
                // Handle both array and object with rows property
                if (Array.isArray(data)) {
                    this.rows = data;
                } else if (data && Array.isArray(data.rows)) {
                    this.rows = data.rows;
                } else {
                    this.rows = [];
                }
            } catch (err) {
                console.error('Fetch error:', err);
                this.error = err.message;
            } finally {
                this.loading = false;
            }
        },
        // Utility: Check if a value implies nested data (JSON object)
        isObject(val) {
            return typeof val === 'object' && val !== null;
        },
        // Utility: Convert "camelCase" or "snake_case" to "Title Case"
        humanize(str) {
            return str
                // Handle snake_case: replace underscores with spaces
                .replace(/_/g, ' ')
                // Handle camelCase: add space before capital letters
                .replace(/([A-Z])/g, ' $1')
                // Capitalize first letter of each word
                .split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                .join(' ')
                .trim();
        }
    },
    mounted() {
        console.log('DataTableGrid mounted, src:', this.src);
        this.fetchData();
    },
    // Watch for src changes to re-fetch
    watch: {
        src(newSrc) {
            console.log('Source changed to:', newSrc);
            this.fetchData();
        }
    }
});

app.mount('#app');
