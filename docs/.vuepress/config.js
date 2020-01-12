module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  title: 'CARBON 碳元素',
  themeConfig: {
    logo: '/logo.png',
    sidebar: [
      {
        title: '指南',
        collapsable: false,
        children: [
          '/guide/install',
          '/guide/color',
          '/guide/font'
        ]
      },
      {
        title: '基本',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/swatch',
          '/components/button',
          '/components/card',
          '/components/badge',
        ]
      },
      {
        title: '导航',
        collapsable: false,
        children: [
          '/components/menu',
          '/components/tab',
          '/components/breadcrumb',
          '/components/page',
          '/components/dropdown'
        ]
      },
      {
        title: '表单',
        collapsable: false,
        children: [
          '/components/input',
          '/components/radio',
          '/components/checkbox',
          '/components/switch',
          '/components/select',
          '/components/slider',
        ]
      },
      {
        title: '视图',
        collapsable: false,
        children: [
          '/components/alert',
          '/components/message',
          '/components/notice',
          '/components/modal'
        ]
      }
    ],
    displayAllHeaders: false
  }
}
