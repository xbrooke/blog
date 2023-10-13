import { defineConfig } from 'vitepress'
import AutoNavPlugin from 'vitepress-auto-nav-sidebar'

// import XMindPlugin from 'vite-plugin-vue-xmind'
const { nav, sidebar } = AutoNavPlugin({
  ignoreFolders: [
    'node_modules',
    'assets',
    'public',
    '.vitepress',
    'code',
    '.obsidian',
    'utils',
    'resource',
    'xmind',
    'Vue'
  ],
  dirPrefix: '',
  filePrefix: '',
  ignoreFiles: ['个人简历', '学习大纲', '学习计划', '面试准备', '互联网公司列表', 'index'],
  isCollapse: true,

})

export default defineConfig({
  base: '',
  appearance: false,
  lang: 'zh-CN',
  title: 'xbrooke',
  // description: "Merlin's Blog",
  assetsInclude: ['**/*.xmind'],
  // vite: {
  //   plugins: [XMindPlugin()]
  // },
  head: [
    // add jquert and fancybox
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.slim.min.js' }],
    ['script', { src: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.js' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.2/jquery.fancybox.min.css' }]
  ],
  markdown: {
    config: (md) => {
      // md.use(CodeRunPlugin)
      md.use(function (md) {
        // const handleImage = md.renderer.rules.image
        md.renderer.rules.image = (tokens, idx, options, env, self) => {
          const url = tokens[idx].attrs[0][1];
          if (/.xmind$/.test(url)) {
            // const title = tokens[idx].children[0].content;
            // const url = tokens[idx].attrs[0][1];
            // return `<XMindViewer src="${url}" title="${title}"></XMindViewer>`;
            return `<p>暂时不支持XMIND预览</p>`;
          } else {
            const PUBLIC_PREFIX = "/docs/.vitepress/public";
            const token = tokens[idx];
            const srcIndex = token.attrIndex("src");
            const url = token.attrs[srcIndex][1].replace(PUBLIC_PREFIX, "");
            const caption = md.utils.escapeHtml(token.content);
            return `<a data-fancybox href="${url}" content="${caption}">
                    <img src="${url}" alt="${caption}" />
                </a>`;
            // return handleImage(tokens, idx, options, env, self);
          }
        }
      })
    }
  },
  themeConfig: {
   logo: '/img/logo.png',
    siteTitle: 'Brooke',
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
    footer: {
      message: 'MIT Licensed | Copyright © 2021 - 2022',
      copyright: '粤ICP备2021165391号'
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Merlin218'
      }
    ],
    //editLink: {
      // pattern: 'https://github.com/Merlin218/Merlin218.github.io/edit/master/docs/:path',
      // text: '更正错误'
    // },
    
    lastUpdatedText: '更新时间',
    darkModeSwitchLabel: '深浅模式',
    sidebarMenuLabel:'目录',
    returnToTopLabel:'返回顶部',
    outline:[2,3],
    outlineTitle:'当前页大纲',
    docFooter: { 
      prev: '上一页', 
      next: '下一页', 
    },
  },
})
