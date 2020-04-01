module.exports = {
  title: 'js-type-systems',
  description: 'Docs for js-type-systems',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', href: '/favicon-32x32.png' }]
  ],
  themeConfig: {
    sidebar: [
      '/',
      '/guide/',
      {
        title: 'Core',
        children: [
          '/core/type.md'
        ]
      }
    ]
  }
}