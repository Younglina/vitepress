const wyNav = require('./nav.js')
const wySidebar = require('./sidebar.js')

module.exports = {
  title: "Younglina", //页面加载中显示的标题
  description: "Younglina要加油！冲冲冲！", //页面加载中显示的描述
  author: "Younglina", //全局显示作者
  base: '/vitepress/',
  markdown: {
    lineNumbers: true, //代码行数
  },
  lastUpdated: true,
  themeConfig: {
    nav: wyNav,
    sidebar: wySidebar,
    author: 'Younglina',
    showAccessNumber: true,
    lastUpdatedText: 'Updated Date',
    subSidebar: "auto",
    logo: "/avatar.jpeg", //导航栏左侧头像
    authorAvatar: '/avatar.jpeg',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [     // 信息栏展示社交信息
      { icon: 'github', link: "https://github.com/Younglina" },
    ]
  }
};