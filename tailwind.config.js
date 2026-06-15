module.exports = {
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        docuseal: {
          'color-scheme': 'light',
          primary: '#1E3A5F',
          secondary: '#64748B',
          accent: '#2563EB',
          neutral: '#2563EB',
          'base-100': '#F8FAFC',
          'base-200': '#FFFFFF',
          'base-300': '#E2E8F0',
          'base-content': '#1E293B',
          '--rounded-btn': '0.5rem',
          '--tab-border': '2px',
          '--tab-radius': '.5rem'
        }
      }
    ]
  }
}
