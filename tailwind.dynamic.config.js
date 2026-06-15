const path = require('path')

module.exports = {
  content: [
    path.resolve(__dirname, 'app/javascript/template_builder/dynamic_area.vue'),
    path.resolve(__dirname, 'app/javascript/template_builder/dynamic_section.vue')
  ],
  theme: {
    extend: {
      colors: {
        'base-100': '#F8FAFC',
        'base-200': '#FFFFFF',
        'base-300': '#E2E8F0',
        'base-content': '#1E293B'
      }
    }
  }
}
