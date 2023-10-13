import { defineConfig } from 'vitepress'

//命令集：pnpm add -D vitepress vue less

export default defineConfig({
  lang: 'zh-CN',
  title: "徐大兵Brooke",
  description: "Brooke",

  // #region fav
  head: [
    ['link',{ rel: 'icon', href: '/logo.png'}],
  ],
  // #endregion fav

  base: '/', //网站部署到github的vitepress这个仓库里

  //cleanUrls:true, //开启纯净链接无html


  //启用深色模式
  appearance:'dark',

  //多语言
  locales: {
    root: {
      label: '简体中文',
      lang: 'Zh_CN',
    },
  },

  //markdown配置
  markdown: {
    //行号显示
    lineNumbers: true, 

  },


  //主题配置
  themeConfig: {
    //左上角logo
    logo: '/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: '❤首页', link: '/' },
      {
        text: '🍭运营',
        items: [
          { text: 'Ai创作', link: '/yy/gp' },
          { text: '平台', link: '/yy/pt' },
          { text: '线上渠道', link: '/yy/ws' },
          { text: '小红书', link: '/yy/xs' },
          { text: '语法', link: '/yy/yf' },
        ],
      },
      {
        text: '🍉指南',
        items: [
          {
            // 分组标题1
            text: '介绍',
            items: [
              { text: '前言', link: '/vite/preface' },
            ],
          },
          {
            // 分组标题2
            text: '基础设置',
            items: [
              { text: '快速上手', link: '/vite/getting-started' },
              { text: '配置', link: '/vite/configuration' },
              { text: '页面', link: '/vite/page' },
              { text: 'Frontmatter', link: '/vite/frontmatter' },
            ],
          },
          {
            // 分组标题3
            text: '进阶玩法',
            items: [
              { text: 'Markdown', link: '/vite/markdown' },
              { text: '团队', link: '/vite/team' },
              { text: '静态部署', link: '/vite/assets' },
              { text: '样式美化', link: '/vite/style' },
              { text: '组件', link: '/vite/components' },
              { text: '更新版本', link: '/vite/update' },
            ],
          },
        ],
      },

    ],

    //侧边栏
    sidebar: {
      '/yy/': [
        {
          text: '运营文档',
          items: [
            { text: '小红书', link: '/yy/xs' },
            { text: '语法', link: '/yy/yf' },
            { text: 'Ai创作', link: '/yy/gp' },
            { text: '渠道平台', link: '/yy/pt' },
            { text: '线上渠道', link: '/yy/ws' },
            { text: '口碑计划', link: '/KB/KB' },
          ]
        },
     ],
     '/vite/': [
      {
        text: 'Vite教程',
        items: [
            { text: '快速上手', link: '/vite/getting-started' },
            { text: '配置', link: '/vite/configuration' },
            { text: '页面', link: '/vite/page' },
            { text: 'Frontmatter', link: '/vite/frontmatter' },
            { text: 'Markdown', link: '/vite/markdown' },
            { text: '团队', link: '/vite/team' },
            { text: '静态部署', link: '/vite/assets' },
            { text: '样式美化', link: '/vite/style' },
            { text: '组件', link: '/vite/components' },
            { text: '更新版本', link: '/vite/update' },
        ]
      },
   ],

   },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Yiov/vitepress-doc' },
      { icon: 'twitter', link: 'https://twitter.com/' }, 
      { icon: 'discord', link: 'https://chat.vitejs.dev/' }, 
    ],

    //手机端深浅模式文字修改
    darkModeSwitchLabel: '深浅模式',



    //页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 备案号：<a href="https://beian.miit.gov.cn/">京****号</a>',
    },


    //侧边栏文字更改(移动端)
    sidebarMenuLabel:'目录',

    //返回顶部文字修改(移动端)
    returnToTopLabel:'返回顶部',


    //大纲显示2-3级标题
    outline:[2,3],
    //大纲顶部标题
    outlineTitle:'当前页大纲',


    //编辑本页
    //editLink: {
    //  pattern: 'https://github.com/账户名/仓库名/edit/main/docs/:path',
    //  text: '在GitHub编辑本页'
    //},
    


    //上次更新时间
    //lastUpdatedText:'Updated Date',


    //自定义上下页名
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    }, 

  },

  
  
})
