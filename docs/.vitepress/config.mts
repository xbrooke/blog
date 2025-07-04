import { defineConfig } from 'vitepress'

//命令集：pnpm add -D vitepress vue less

export default defineConfig({
  lang: 'zh-CN',
  title: "徐大兵 Brooke",
  description: "徐大兵Blog",

  // #region fav
  head: [
    ['link',{ rel: 'icon', href: './img/logo.png'}],
  ],
  // #endregion fav

  base: '/', // GitHub Pages根路径配置

  //cleanUrls: true, //开启纯净链接无html


  //启用深色模式
  appearance: true,

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
    logo: './img/logo.png',
    //logo: 'https://vitejs.cn/vite3-cn/logo-with-shadow.png', //远程引用
    //siteTitle: false, //标题隐藏

    //设置站点标题 会覆盖title
    //siteTitle: 'Hello World',

    //导航栏
    nav: [
      { text: '个人介绍', link: '/' },
      {
        text: '🍉平台心得',
        items: [
          {
            // 分组标题1
            text: '渠道平台',
            items: [
              { text: '小红书', link: '/brooke/01' },
              { text: '微信公众号', link: '/brooke/02' },
              { text: '短视频平台', link: '/brooke/03' },
            ],
          },
          {
            // 分组标题2
           text: '项目展示',
            items: [
              { text: '小红书', link: '/brooke/04' },
             
            ],
          },

        ],
      },
     // { text: 'VitePress', link: 'https://vitepress.dev/' },

    ],


    //侧边栏
    sidebar: [
      {
        //分组标题1
        text: '渠道平台',
        collapsed: false,
        items: [
          { text: '小红书', link: '/brooke/01' },
          { text: '微信公众号', link: '/brooke/02' },
          { text: '短视频平台', link: '/brooke/03' },
        ],
      },
      {
        //分组标题
        text: '项目展示',
        collapsed: false,
        items: [
          { text: '小红书', link: '/brooke/04' },
          { text: '短视频（待完善）', link: '/brooke/05' },
          { text: '微信公众号（待完善）', link: '/brooke/06' },
        ],
      },
    ],



    //本地搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                },
              },
            },
          },
        },
      },
    },



    //社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xbrooke/blog' },
     // { icon: 'twitter', link: 'https://twitter.com/' }, 
    //  { icon: 'discord', link: 'https://chat.vitejs.dev/' }, 
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
