import { defineConfig } from 'vitepress';

export default defineConfig({
  // lang: 'zh-CN',
  title: "Brooke",
  description: '徐大兵',
  base: '/br/',

  lastUpdated: true,
  cleanUrls: true,

  head: [
    [
      'meta',
      {
        name: 'theme-color',
        content: '#3c8772',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        href: '/icon.ico',
      },
    ],
  ],

  markdown: {
    theme: 'github-dark-dimmed',
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    nav: nav(),
    sidebar: sidebarGuide(),

    // editLink: {
    //   pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
    //   text: 'Edit this page on GitHub',
    // },

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Jinyang79/blog-vitepress',
      },
    ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You',
    // },

    algolia: {
      appId: 'I51P96MLQS',
      apiKey: '606d697803378cb86ab5148b03e7c97d',
      indexName: 'jinyang79io',
    },

    // carbonAds: {

    // },
  },
});

function nav() {
  return [
    {
      text: 'Home',
      link: '/',
    },
    {
      text: '徐大兵',
      link: 'https://wiki.xbrooke.com',
    },
    // {
    //   text: 'Github',
    //   link: 'https://github.com/Jinyang79/jinyang.github.io',
    // },
  ];
}
// 全局左侧菜单
function sidebarGuide() {
  return [
    {
      text: '第一栏',
      collapsed: false,
      items: [
        {
          text: 'Code Style',
          link: '/blog/everyday/code-style',
        }
      ],
    },
    {
      text: '第二栏',
      collapsed: false,
      items: [
        {
          text: 'Development Tools',
          link: '/blog/devtools/development-tools',
        }
      ],
    },
    {
      text: '第三栏',
      collapsed: false,
      items: [
        // { text: "Markdown", link: "/guide/markdown" },
      ],
    },
  ];
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        {
          text: 'Introduction',
          link: '/config/introduction',
        },
        {
          text: 'App Configs',
          link: '/config/app-configs',
        },
        {
          text: 'Theme Configs',
          link: '/config/theme-configs',
        },
        {
          text: 'Frontmatter Configs',
          link: '/config/frontmatter-configs',
        },
      ],
    },
  ]
}
