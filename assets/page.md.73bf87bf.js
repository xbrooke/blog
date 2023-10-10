import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.5887c248.js";const d=JSON.parse('{"title":"页面","description":"","frontmatter":{},"headers":[],"relativePath":"page.md","filePath":"page.md"}'),p={name:"page.md"},e=l(`<h1 id="页面" tabindex="-1">页面 <a class="header-anchor" href="#页面" aria-label="Permalink to &quot;页面&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">更新时间</p><p>最近更新：2023-9-28</p><p>搭建版本：vitepress v1.0.0-rc.20</p></div><h2 id="站点配置" tabindex="-1">站点配置 <a class="header-anchor" href="#站点配置" aria-label="Permalink to &quot;站点配置&quot;">​</a></h2><h3 id="网页标题" tabindex="-1">网页标题 <a class="header-anchor" href="#网页标题" aria-label="Permalink to &quot;网页标题&quot;">​</a></h3><p>使用 <code>titleTemplate</code> 自定义整个网页标题</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;我的vitpress文档教程&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  titleTemplate: </span><span style="color:#9ECBFF;">&#39;另起标题覆盖title&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;我的vitpress文档教程&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  titleTemplate: </span><span style="color:#032F62;">&#39;另起标题覆盖title&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="fav图标" tabindex="-1">Fav图标 <a class="header-anchor" href="#fav图标" aria-label="Permalink to &quot;Fav图标&quot;">​</a></h3><p>路径默认public目录，在 <code>docs</code>目录下新建 <code>public</code>目录即可</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//fav图标</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  head: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">,{ rel: </span><span style="color:#9ECBFF;">&#39;icon&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;/logo.png&#39;</span><span style="color:#E1E4E8;">}],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//fav图标</span></span>
<span class="line highlighted"><span style="color:#24292E;">  head: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">,{ rel: </span><span style="color:#032F62;">&#39;icon&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;/logo.png&#39;</span><span style="color:#24292E;">}],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">注意</p><p>如果你使用路径 <code>/logo.png</code> 无反应，可尝试先用相对路径 <code>../public/logo.png</code></p><p>另：如果你的 <a href="./assets.html#base">Base 设置非根目录</a>，fav图标路径也要做出改变</p></div><details class="details custom-block"><summary>官方配置示例</summary><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  head: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      { rel: </span><span style="color:#9ECBFF;">&#39;preconnect&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;https://fonts.gstatic.com&#39;</span><span style="color:#E1E4E8;">, crossorigin: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// would render:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    [</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;script&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      { id: </span><span style="color:#9ECBFF;">&#39;register-sw&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">\`;(() =&gt; {</span></span>
<span class="line"><span style="color:#9ECBFF;">        if (&#39;serviceWorker&#39; in navigator) {</span></span>
<span class="line"><span style="color:#9ECBFF;">          navigator.serviceWorker.register(&#39;/sw.js&#39;)</span></span>
<span class="line"><span style="color:#9ECBFF;">        }</span></span>
<span class="line"><span style="color:#9ECBFF;">      })()\`</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// would render:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// &lt;script id=&quot;register-sw&quot;&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// ;(() =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   if (&#39;serviceWorker&#39; in navigator) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//     navigator.serviceWorker.register(&#39;/sw.js&#39;)</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// })()</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// &lt;/script&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  head: [</span></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      { rel: </span><span style="color:#032F62;">&#39;preconnect&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://fonts.gstatic.com&#39;</span><span style="color:#24292E;">, crossorigin: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// would render:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// &lt;link rel=&quot;preconnect&quot; href=&quot;https://fonts.gstatic.com&quot; crossorigin /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    [</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;script&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      { id: </span><span style="color:#032F62;">&#39;register-sw&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">\`;(() =&gt; {</span></span>
<span class="line"><span style="color:#032F62;">        if (&#39;serviceWorker&#39; in navigator) {</span></span>
<span class="line"><span style="color:#032F62;">          navigator.serviceWorker.register(&#39;/sw.js&#39;)</span></span>
<span class="line"><span style="color:#032F62;">        }</span></span>
<span class="line"><span style="color:#032F62;">      })()\`</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// would render:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// &lt;script id=&quot;register-sw&quot;&gt;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// ;(() =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   if (&#39;serviceWorker&#39; in navigator) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//     navigator.serviceWorker.register(&#39;/sw.js&#39;)</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//   }</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// })()</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// &lt;/script&gt;</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div></details><h3 id="深色主题" tabindex="-1">深色主题 <a class="header-anchor" href="#深色主题" aria-label="Permalink to &quot;深色主题&quot;">​</a></h3><p>默认是浅色模式，可自行开启或更换</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//appearance:true, //默认浅色且开启切换</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//启用深色模式</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  appearance:</span><span style="color:#9ECBFF;">&#39;dark&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//appearance:true, //默认浅色且开启切换</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//启用深色模式</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  appearance:</span><span style="color:#032F62;">&#39;dark&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="多语言" tabindex="-1">多语言 <a class="header-anchor" href="#多语言" aria-label="Permalink to &quot;多语言&quot;">​</a></h3><p>要启用多语言支持，首先需要使用如下的文件目录结构</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ docs</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ en</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├─ index.md   &lt;--英文首页</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├─ ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ fr</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├─ index.md   &lt;--法语首页</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ├─ ...</span></span>
<span class="line"><span style="color:#e1e4e8;">│  │  ...  </span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ index.md      &lt;--中文首页(默认)</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ package.json</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ docs</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ en</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├─ index.md   &lt;--英文首页</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├─ ...</span></span>
<span class="line"><span style="color:#24292e;">│  │  ...</span></span>
<span class="line"><span style="color:#24292e;">│  └─ fr</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├─ index.md   &lt;--法语首页</span></span>
<span class="line"><span style="color:#24292e;">│  │  ├─ ...</span></span>
<span class="line"><span style="color:#24292e;">│  │  ...  </span></span>
<span class="line"><span style="color:#24292e;">│  └─ index.md      &lt;--中文首页(默认)</span></span>
<span class="line"><span style="color:#24292e;">└─ package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>实际就是新建一个语言目录，再把根目录所有文档，翻译后再放进去</p><p>本次仅演示下首页，其他的自行配置吧！</p></div><p>默认读取目录的index文件，无需手动填写 <code>index</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//多语言</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  locales: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    root: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;简体中文&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      lang: </span><span style="color:#9ECBFF;">&#39;Zh_CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    en: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;English&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      lang: </span><span style="color:#9ECBFF;">&#39;en&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      link: </span><span style="color:#9ECBFF;">&#39;/en/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    fr: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      label: </span><span style="color:#9ECBFF;">&#39;French&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      lang: </span><span style="color:#9ECBFF;">&#39;fr&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      link: </span><span style="color:#9ECBFF;">&#39;/fr/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//多语言</span></span>
<span class="line highlighted"><span style="color:#24292E;">  locales: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    root: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;简体中文&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      lang: </span><span style="color:#032F62;">&#39;Zh_CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    en: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;English&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      lang: </span><span style="color:#032F62;">&#39;en&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      link: </span><span style="color:#032F62;">&#39;/en/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    fr: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      label: </span><span style="color:#032F62;">&#39;French&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      lang: </span><span style="color:#032F62;">&#39;fr&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      link: </span><span style="color:#032F62;">&#39;/fr/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">    }</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h3 id="默认主题" tabindex="-1">默认主题 <a class="header-anchor" href="#默认主题" aria-label="Permalink to &quot;默认主题&quot;">​</a></h3><p>本文仅演示默认主题设置</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>主题配置允许您自定义主题，通过配置文件中的themeConfig选项定义主题配置</p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 主题配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    nav: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">    sidebar: { </span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 主题配置</span></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    nav: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">    sidebar: { </span><span style="color:#D73A49;">...</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="logo" tabindex="-1">Logo <a class="header-anchor" href="#logo" aria-label="Permalink to &quot;Logo&quot;">​</a></h3><p>网站的Logo图标还没有，下方是目录表</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">├─ docs</span></span>
<span class="line"><span style="color:#E1E4E8;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#E1E4E8;">│  │  └─ config.mts       &lt;-- 配置文件已由ts变成mts</span></span>
<span class="line"><span style="color:#E1E4E8;">│  └─ public             &lt;--静态资源目录</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">│  │  └─ logo.png        &lt;--logo</span></span>
<span class="line"><span style="color:#E1E4E8;">│  └─ index.md</span></span>
<span class="line"><span style="color:#E1E4E8;">└─ package.json</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">├─ docs</span></span>
<span class="line"><span style="color:#24292E;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#24292E;">│  │  └─ config.mts       &lt;-- 配置文件已由ts变成mts</span></span>
<span class="line"><span style="color:#24292E;">│  └─ public             &lt;--静态资源目录</span></span>
<span class="line highlighted"><span style="color:#24292E;">│  │  └─ logo.png        &lt;--logo</span></span>
<span class="line"><span style="color:#24292E;">│  └─ index.md</span></span>
<span class="line"><span style="color:#24292E;">└─ package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>根据目录得知logo文件的位置，在 <code>doc</code> - <code>public 文件夹</code></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>依次新建public文件夹，并放入logo即可</p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//左上角logo</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;/logo.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//左上角logo</span></span>
<span class="line highlighted"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;/logo.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>如果你不想要看到文字，可以选择隐藏</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//左上角logo</span></span>
<span class="line"><span style="color:#E1E4E8;">    logo: </span><span style="color:#9ECBFF;">&#39;/logo.png&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    siteTitle: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//标题隐藏 </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//左上角logo</span></span>
<span class="line"><span style="color:#24292E;">    logo: </span><span style="color:#032F62;">&#39;/logo.png&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    siteTitle: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//标题隐藏 </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="站点标题" tabindex="-1">站点标题 <a class="header-anchor" href="#站点标题" aria-label="Permalink to &quot;站点标题&quot;">​</a></h3><p>如果设置后，会覆盖原本的 <a href="#网页标题">title</a> !</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//设置站点标题 会覆盖title</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    siteTitle: </span><span style="color:#9ECBFF;">&#39;Hello World&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//设置站点标题 会覆盖title</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    siteTitle: </span><span style="color:#032F62;">&#39;Hello World&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="导航栏" tabindex="-1">导航栏 <a class="header-anchor" href="#导航栏" aria-label="Permalink to &quot;导航栏&quot;">​</a></h2><h3 id="导航菜单" tabindex="-1">导航菜单 <a class="header-anchor" href="#导航菜单" aria-label="Permalink to &quot;导航菜单&quot;">​</a></h3><p>一个基础的导航，首页、文章路径以及外站链接</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>text是导航中显示的文本</p><p>link为链接或者实际文件的路径，不带 <code>.md</code> 前缀，并始终以 <code>/</code> 开头</p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//导航栏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;首页&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> }, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;快速上手&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/getting-started&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;VitePress&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ], </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//导航栏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    nav: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;首页&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> }, </span></span>
<span class="line highlighted"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;快速上手&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/getting-started&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;VitePress&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://vitepress.dev/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ], </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>若想要下拉式菜单导航，就需要加一个 <code>iteams</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//导航栏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;首页&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> }, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;指南&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;前言&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/preface&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;快速上手&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/getting-started&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;配置&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/configuration&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;VitePress&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ], </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//导航栏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    nav: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;首页&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> }, </span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;指南&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;前言&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/preface&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;快速上手&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/getting-started&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;配置&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/configuration&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line highlighted"><span style="color:#24292E;">        ]</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;VitePress&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://vitepress.dev/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ], </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>给下拉菜单赋予分组标题，就要再次嵌套 <code>iteams</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//导航栏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    nav: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;首页&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;指南&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 分组标题1</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;介绍&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;前言&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/preface&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 分组标题2</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;基础设置&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;快速上手&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/getting-started&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;配置&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/configuration&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;页面&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/page&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Frontmatter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/frontmatter&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            </span><span style="color:#6A737D;">// 分组标题3</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            text: </span><span style="color:#9ECBFF;">&#39;进阶玩法&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;Markdown&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/Markdown&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              { text: </span><span style="color:#9ECBFF;">&#39;静态部署&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/assets&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ],</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { text: </span><span style="color:#9ECBFF;">&#39;VitePress&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://vitepress.dev/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//导航栏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    nav: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;首页&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;指南&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">          {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 分组标题1</span></span>
<span class="line highlighted"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;介绍&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;前言&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/preface&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">          },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 分组标题2</span></span>
<span class="line highlighted"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;基础设置&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;快速上手&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/getting-started&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;配置&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/configuration&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;页面&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/page&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Frontmatter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/frontmatter&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">          },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 分组标题3</span></span>
<span class="line highlighted"><span style="color:#24292E;">            text: </span><span style="color:#032F62;">&#39;进阶玩法&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;Markdown&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/Markdown&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              { text: </span><span style="color:#032F62;">&#39;静态部署&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/assets&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">            ],</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      { text: </span><span style="color:#032F62;">&#39;VitePress&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://vitepress.dev/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br></div></div><h3 id="社交链接" tabindex="-1">社交链接 <a class="header-anchor" href="#社交链接" aria-label="Permalink to &quot;社交链接&quot;">​</a></h3><p>可以自行添加，支持SVG</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//社交链接 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    socialLinks: [ </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;github&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://github.com/vuejs/vitepress&#39;</span><span style="color:#E1E4E8;"> }, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;twitter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://twitter.com/&#39;</span><span style="color:#E1E4E8;"> }, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      { icon: </span><span style="color:#9ECBFF;">&#39;discord&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;https://chat.vitejs.dev/&#39;</span><span style="color:#E1E4E8;"> },  </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">    ], </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//社交链接 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    socialLinks: [ </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;github&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://github.com/vuejs/vitepress&#39;</span><span style="color:#24292E;"> }, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;twitter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://twitter.com/&#39;</span><span style="color:#24292E;"> }, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      { icon: </span><span style="color:#032F62;">&#39;discord&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;https://chat.vitejs.dev/&#39;</span><span style="color:#24292E;"> },  </span></span>
<span class="line has-focus"><span style="color:#24292E;">    ], </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>vitepress自带的其他社交图标</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">github、twitter、discord</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">facebook、instagram、linkedin、slack、youtube</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">github、twitter、discord</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">facebook、instagram、linkedin、slack、youtube</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>还可以自定义SVG图标</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//自定义社交链接 </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    socialLinks: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        icon: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          svg: </span><span style="color:#9ECBFF;">&#39;&lt;svg role=&quot;img&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;title&gt;Dribbble&lt;/title&gt;&lt;path d=&quot;M12...6.38z&quot;/&gt;&lt;/svg&gt;&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        link: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// You can include a custom label for accessibility too (optional but recommended):</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ariaLabel: </span><span style="color:#9ECBFF;">&#39;cool link&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ], </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//自定义社交链接 </span></span>
<span class="line highlighted"><span style="color:#24292E;">    socialLinks: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        icon: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">          svg: </span><span style="color:#032F62;">&#39;&lt;svg role=&quot;img&quot; viewBox=&quot;0 0 24 24&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;&gt;&lt;title&gt;Dribbble&lt;/title&gt;&lt;path d=&quot;M12...6.38z&quot;/&gt;&lt;/svg&gt;&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">        },</span></span>
<span class="line highlighted"><span style="color:#24292E;">        link: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// You can include a custom label for accessibility too (optional but recommended):</span></span>
<span class="line highlighted"><span style="color:#24292E;">        ariaLabel: </span><span style="color:#032F62;">&#39;cool link&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">      }</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ], </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="深浅模式文字" tabindex="-1">深浅模式文字 <a class="header-anchor" href="#深浅模式文字" aria-label="Permalink to &quot;深浅模式文字&quot;">​</a></h3><p>手机端默认显示 <code>Appearance</code> ，你也可以自定义显示文字</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//手机端深浅模式文字修改 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    darkModeSwitchLabel: </span><span style="color:#9ECBFF;">&#39;深浅模式&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//手机端深浅模式文字修改 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    darkModeSwitchLabel: </span><span style="color:#032F62;">&#39;深浅模式&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="搜索框" tabindex="-1">搜索框 <a class="header-anchor" href="#搜索框" aria-label="Permalink to &quot;搜索框&quot;">​</a></h2><p>本地的 <a href="https://github.com/lucaong/minisearch/" target="_blank" rel="noreferrer">minisearch</a> 和 <a href="https://docsearch.algolia.com/" target="_blank" rel="noreferrer">Algolia DocSearch</a> 都是全局搜索都好用</p><h3 id="本地搜索" tabindex="-1">本地搜索 <a class="header-anchor" href="#本地搜索" aria-label="Permalink to &quot;本地搜索&quot;">​</a></h3><p>得益于 <a href="https://github.com/lucaong/minisearch/" target="_blank" rel="noreferrer">minisearch</a>，VitePress 支持使用浏览器内索引进行模糊全文搜索</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//本地搜索 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    search: { </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//本地搜索 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    search: { </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    }, </span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>如果你搭建了多语言站点，可以更细致的配置搜索</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//本地搜索</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;local&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        locales: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          zh: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            translations: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              button: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                buttonText: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                buttonAriaLabel: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              modal: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                noResultsText: </span><span style="color:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                resetButtonTitle: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                footer: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  selectText: </span><span style="color:#9ECBFF;">&#39;选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  navigateText: </span><span style="color:#9ECBFF;">&#39;切换&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//本地搜索</span></span>
<span class="line highlighted"><span style="color:#24292E;">    search: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;local&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      options: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        locales: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">          zh: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            translations: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">              button: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                buttonText: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                buttonAriaLabel: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">              },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              modal: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                noResultsText: </span><span style="color:#032F62;">&#39;无法找到相关结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                resetButtonTitle: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                footer: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  selectText: </span><span style="color:#032F62;">&#39;选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  navigateText: </span><span style="color:#032F62;">&#39;切换&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">                },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          },</span></span>
<span class="line highlighted"><span style="color:#24292E;">        },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h3 id="algolia" tabindex="-1">Algolia <a class="header-anchor" href="#algolia" aria-label="Permalink to &quot;Algolia&quot;">​</a></h3><p><a href="https://docsearch.algolia.com/" target="_blank" rel="noreferrer">Algolia DocSearch</a> 要么自行申请，要么自行搭建</p><ul><li><p><a href="https://vuepress.yiov.top/guide/docsearch.html#%E8%87%AA%E8%A1%8C%E7%94%B3%E8%AF%B7" target="_blank" rel="noreferrer">自行申请：查看我之前搭建 VuePress 时写的教程</a></p></li><li><p><a href="https://vuepress.yiov.top/guide/docsearch.html#%E8%87%AA%E8%A1%8C%E7%88%AC%E5%8F%96" target="_blank" rel="noreferrer">自行爬取：查看我之前搭建 VuePress 时写的教程</a></p></li></ul><p>我们先看一下 VitePress 里的配置</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//Algolia搜索</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;algolia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//Algolia搜索</span></span>
<span class="line highlighted"><span style="color:#24292E;">    search: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;algolia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      options: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        appId: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        apiKey: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        indexName: </span><span style="color:#032F62;">&#39;...&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>多语言配置</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//Algolia搜索</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    search: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      provider: </span><span style="color:#9ECBFF;">&#39;algolia&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      options: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        appId: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        apiKey: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        indexName: </span><span style="color:#9ECBFF;">&#39;...&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        locales: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          zh: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            placeholder: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            translations: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              button: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                buttonText: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                buttonAriaLabel: </span><span style="color:#9ECBFF;">&#39;搜索文档&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              modal: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                searchBox: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  resetButtonTitle: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  resetButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;清除查询条件&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  cancelButtonText: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  cancelButtonAriaLabel: </span><span style="color:#9ECBFF;">&#39;取消&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                startScreen: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  recentSearchesTitle: </span><span style="color:#9ECBFF;">&#39;搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  noRecentSearchesText: </span><span style="color:#9ECBFF;">&#39;没有搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  saveRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;保存至搜索历史&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  removeRecentSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从搜索历史中移除&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  favoriteSearchesTitle: </span><span style="color:#9ECBFF;">&#39;收藏&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  removeFavoriteSearchButtonTitle: </span><span style="color:#9ECBFF;">&#39;从收藏中移除&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                errorScreen: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  titleText: </span><span style="color:#9ECBFF;">&#39;无法获取结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  helpText: </span><span style="color:#9ECBFF;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                footer: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  selectText: </span><span style="color:#9ECBFF;">&#39;选择&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  navigateText: </span><span style="color:#9ECBFF;">&#39;切换&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  closeText: </span><span style="color:#9ECBFF;">&#39;关闭&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  searchByText: </span><span style="color:#9ECBFF;">&#39;搜索提供者&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                noResultsScreen: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  noResultsText: </span><span style="color:#9ECBFF;">&#39;无法找到相关结果&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  suggestedQueryText: </span><span style="color:#9ECBFF;">&#39;你可以尝试查询&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  reportMissingResultsText: </span><span style="color:#9ECBFF;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                  reportMissingResultsLinkText: </span><span style="color:#9ECBFF;">&#39;点击反馈&#39;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">                },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">              },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//Algolia搜索</span></span>
<span class="line highlighted"><span style="color:#24292E;">    search: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      provider: </span><span style="color:#032F62;">&#39;algolia&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">      options: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        appId: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        apiKey: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        indexName: </span><span style="color:#032F62;">&#39;...&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        locales: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">          zh: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">            placeholder: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">            translations: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">              button: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                buttonText: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                buttonAriaLabel: </span><span style="color:#032F62;">&#39;搜索文档&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">              },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              modal: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                searchBox: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  resetButtonTitle: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  resetButtonAriaLabel: </span><span style="color:#032F62;">&#39;清除查询条件&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  cancelButtonText: </span><span style="color:#032F62;">&#39;取消&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  cancelButtonAriaLabel: </span><span style="color:#032F62;">&#39;取消&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">                },</span></span>
<span class="line highlighted"><span style="color:#24292E;">                startScreen: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  recentSearchesTitle: </span><span style="color:#032F62;">&#39;搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  noRecentSearchesText: </span><span style="color:#032F62;">&#39;没有搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  saveRecentSearchButtonTitle: </span><span style="color:#032F62;">&#39;保存至搜索历史&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  removeRecentSearchButtonTitle: </span><span style="color:#032F62;">&#39;从搜索历史中移除&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  favoriteSearchesTitle: </span><span style="color:#032F62;">&#39;收藏&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  removeFavoriteSearchButtonTitle: </span><span style="color:#032F62;">&#39;从收藏中移除&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">                },</span></span>
<span class="line highlighted"><span style="color:#24292E;">                errorScreen: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  titleText: </span><span style="color:#032F62;">&#39;无法获取结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  helpText: </span><span style="color:#032F62;">&#39;你可能需要检查你的网络连接&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">                },</span></span>
<span class="line highlighted"><span style="color:#24292E;">                footer: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  selectText: </span><span style="color:#032F62;">&#39;选择&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  navigateText: </span><span style="color:#032F62;">&#39;切换&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  closeText: </span><span style="color:#032F62;">&#39;关闭&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  searchByText: </span><span style="color:#032F62;">&#39;搜索提供者&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">                },</span></span>
<span class="line highlighted"><span style="color:#24292E;">                noResultsScreen: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  noResultsText: </span><span style="color:#032F62;">&#39;无法找到相关结果&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  suggestedQueryText: </span><span style="color:#032F62;">&#39;你可以尝试查询&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  reportMissingResultsText: </span><span style="color:#032F62;">&#39;你认为该查询应该有结果？&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">                  reportMissingResultsLinkText: </span><span style="color:#032F62;">&#39;点击反馈&#39;</span></span>
<span class="line highlighted"><span style="color:#24292E;">                },</span></span>
<span class="line highlighted"><span style="color:#24292E;">              },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          },</span></span>
<span class="line highlighted"><span style="color:#24292E;">        },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br></div></div><h2 id="首页" tabindex="-1">首页 <a class="header-anchor" href="#首页" aria-label="Permalink to &quot;首页&quot;">​</a></h2><p>我们使用 <a href="./frontmatter.html">Frontmatter</a> ，在 <code>index.md</code> 中进行配置和修改</p><h2 id="页脚" tabindex="-1">页脚 <a class="header-anchor" href="#页脚" aria-label="Permalink to &quot;页脚&quot;">​</a></h2><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//页脚 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    footer: { </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;Released under the MIT License.&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      copyright: </span><span style="color:#9ECBFF;">&#39;Copyright © 2019-2023present Evan You&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//页脚 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    footer: { </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">&#39;Released under the MIT License.&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      copyright: </span><span style="color:#032F62;">&#39;Copyright © 2019-2023present Evan You&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>如果你有备案，会需要跳转到工信部，使用html代码就行了</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//页脚</span></span>
<span class="line"><span style="color:#E1E4E8;">    footer: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      message: </span><span style="color:#9ECBFF;">&#39;Released under the MIT License.&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      copyright: </span><span style="color:#9ECBFF;">&#39;Copyright © 2023 备案号：&lt;a href=&quot;https://beian.miit.gov.cn/&quot; target=&quot;_blank&quot;&gt;京****号&lt;/a&gt;&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//页脚</span></span>
<span class="line"><span style="color:#24292E;">    footer: {</span></span>
<span class="line"><span style="color:#24292E;">      message: </span><span style="color:#032F62;">&#39;Released under the MIT License.&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      copyright: </span><span style="color:#032F62;">&#39;Copyright © 2023 备案号：&lt;a href=&quot;https://beian.miit.gov.cn/&quot; target=&quot;_blank&quot;&gt;京****号&lt;/a&gt;&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="侧边栏" tabindex="-1">侧边栏 <a class="header-anchor" href="#侧边栏" aria-label="Permalink to &quot;侧边栏&quot;">​</a></h2><p>最简单的形式是传递单个链接，但这样非常单调，我们可以使用 <code>items</code> 分组</p><h3 id="常用配置" tabindex="-1">常用配置 <a class="header-anchor" href="#常用配置" aria-label="Permalink to &quot;常用配置&quot;">​</a></h3><p><code>text</code> 文字可以自定义，<code>link</code> 填文章路径，不需要带<code>.md</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//分组标题</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;指南&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;前言&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/preface&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;快速上手&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/getting-started&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;配置&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/configuration&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;页面&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/page&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Frontmatter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/frontmatter&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Markdown&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/markdown&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;静态部署&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/assets&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//分组标题</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;指南&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;前言&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/preface&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;快速上手&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/getting-started&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;配置&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/configuration&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;页面&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/page&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Frontmatter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/frontmatter&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Markdown&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/markdown&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;静态部署&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/assets&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">        ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p>当然我们也可以进行多个分组</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//分组标题1</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;介绍&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;前言&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/preface&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//分组标题2</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;基础配置&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;快速上手&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/getting-started&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;配置&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/configuration&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;页面&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/page&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Frontmatter&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/frontmatter&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">//分组标题3</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;进阶玩法&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;Markdown&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/markdown&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          { text: </span><span style="color:#9ECBFF;">&#39;静态部署&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/assets&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//分组标题1</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;介绍&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;前言&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/preface&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">        ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//分组标题2</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;基础配置&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;快速上手&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/getting-started&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;配置&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/configuration&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;页面&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/page&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Frontmatter&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/frontmatter&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">        ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        </span><span style="color:#6A737D;">//分组标题3</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;进阶玩法&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;Markdown&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/markdown&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">          { text: </span><span style="color:#032F62;">&#39;静态部署&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/assets&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">        ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>多个侧边栏也是可以的，有其他目录可以参考官方的目录表样式</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">.</span></span>
<span class="line"><span style="color:#e1e4e8;">├─ guide/</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#e1e4e8;">│  └─ two.md</span></span>
<span class="line"><span style="color:#e1e4e8;">└─ config/</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ index.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   ├─ three.md</span></span>
<span class="line"><span style="color:#e1e4e8;">   └─ four.md</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">.</span></span>
<span class="line"><span style="color:#24292e;">├─ guide/</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">│  ├─ one.md</span></span>
<span class="line"><span style="color:#24292e;">│  └─ two.md</span></span>
<span class="line"><span style="color:#24292e;">└─ config/</span></span>
<span class="line"><span style="color:#24292e;">   ├─ index.md</span></span>
<span class="line"><span style="color:#24292e;">   ├─ three.md</span></span>
<span class="line"><span style="color:#24292e;">   └─ four.md</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>那么我们的配置就是</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    sidebar: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 目录1</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          text: </span><span style="color:#9ECBFF;">&#39;Guide&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Index&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;One&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/one&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Two&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/guide/two&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 目录2</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;/config/&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          text: </span><span style="color:#9ECBFF;">&#39;Config&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          items: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Index&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/config/&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Three&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/config/three&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;Four&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/config/four&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">          ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line highlighted"><wbr></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    sidebar: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 目录1</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">        {</span></span>
<span class="line highlighted"><span style="color:#24292E;">          text: </span><span style="color:#032F62;">&#39;Guide&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">          items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Index&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;One&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/one&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Two&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/guide/two&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line highlighted"><span style="color:#24292E;">          ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">        },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      ],</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 目录2</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;/config/&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">        {</span></span>
<span class="line highlighted"><span style="color:#24292E;">          text: </span><span style="color:#032F62;">&#39;Config&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">          items: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Index&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/config/&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Three&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/config/three&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line highlighted"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;Four&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/config/four&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line highlighted"><span style="color:#24292E;">          ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">        },</span></span>
<span class="line highlighted"><span style="color:#24292E;">      ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">    },</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line highlighted"><wbr></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><p>如果需要可折叠的，添加 <code>collapsed</code>选项，它会显示一个切换按钮来隐藏/显示</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>如果你不想开启，将它设为 <code>true</code> ，或者直接不配置</p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    sidebar: [</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        text: </span><span style="color:#9ECBFF;">&#39;Section Title A&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        collapsed: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">        items: [</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">]</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      },</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//侧边栏</span></span>
<span class="line highlighted"><span style="color:#24292E;">    sidebar: [</span></span>
<span class="line highlighted"><span style="color:#24292E;">      {</span></span>
<span class="line highlighted"><span style="color:#24292E;">        text: </span><span style="color:#032F62;">&#39;Section Title A&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        collapsed: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">        items: [</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">]</span></span>
<span class="line highlighted"><span style="color:#24292E;">      },</span></span>
<span class="line highlighted"><span style="color:#24292E;">    ],</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line highlighted"><wbr></span>
<span class="line highlighted"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h3 id="侧边栏-移动端" tabindex="-1">侧边栏(移动端) <a class="header-anchor" href="#侧边栏-移动端" aria-label="Permalink to &quot;侧边栏(移动端)&quot;">​</a></h3><p>更改手机端菜单文字显示，默认 <code>Menu</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//侧边栏文字更改(移动端) </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    sidebarMenuLabel:</span><span style="color:#9ECBFF;">&#39;目录&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//侧边栏文字更改(移动端) </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    sidebarMenuLabel:</span><span style="color:#032F62;">&#39;目录&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="返回顶部" tabindex="-1">返回顶部 <a class="header-anchor" href="#返回顶部" aria-label="Permalink to &quot;返回顶部&quot;">​</a></h3><p>更改手机端菜单文字显示，默认 <code>Return to top</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//返回顶部文字修改 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    returnToTopLabel:</span><span style="color:#9ECBFF;">&#39;返回顶部&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//返回顶部文字修改 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    returnToTopLabel:</span><span style="color:#032F62;">&#39;返回顶部&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="大纲" tabindex="-1">大纲 <a class="header-anchor" href="#大纲" aria-label="Permalink to &quot;大纲&quot;">​</a></h3><p>右侧的大纲，默认显示是二级标题，通过设置 <code>outline</code> 实现多级标题</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>设置到六级标题可以用 <code>&#39;deep&#39;</code> ，关闭 <code>false</code></p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//大纲显示2-3级标题 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    outline:[</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">], </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//大纲显示2-3级标题 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    outline:[</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">], </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>大纲顶部的 <code>On this page</code> 可以通过设置 <code>outlineTitle</code> 实现</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//大纲顶部标题 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    outlineTitle:</span><span style="color:#9ECBFF;">&#39;当前页大纲&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//大纲顶部标题 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    outlineTitle:</span><span style="color:#032F62;">&#39;当前页大纲&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="编辑本页" tabindex="-1">编辑本页 <a class="header-anchor" href="#编辑本页" aria-label="Permalink to &quot;编辑本页&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">注意</p><p>会被 <a href="./frontmatter.html#编辑本页">Frontmatter配置</a> 覆盖</p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//编辑本页 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    editLink: { </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      pattern: </span><span style="color:#9ECBFF;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      text: </span><span style="color:#9ECBFF;">&#39;在GitHub编辑本页&#39;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//编辑本页 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    editLink: { </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      pattern: </span><span style="color:#032F62;">&#39;https://github.com/vuejs/vitepress/edit/main/docs/:path&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      text: </span><span style="color:#032F62;">&#39;在GitHub编辑本页&#39;</span><span style="color:#24292E;"> </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>将 <code>pattern</code> 的链接修改成自己的仓库</p></div><h2 id="上次更新" tabindex="-1">上次更新 <a class="header-anchor" href="#上次更新" aria-label="Permalink to &quot;上次更新&quot;">​</a></h2><p>如果你想添加页面的更新时间就配置，否则默认是 <code>false</code></p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//上次更新时间 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    lastUpdatedText:</span><span style="color:#9ECBFF;">&#39;Updated Date&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//上次更新时间 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    lastUpdatedText:</span><span style="color:#032F62;">&#39;Updated Date&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="上-下页" tabindex="-1">上/下页 <a class="header-anchor" href="#上-下页" aria-label="Permalink to &quot;上/下页&quot;">​</a></h2><p>默认从侧边栏配置中读取，如果想单独关闭或自定义请参照 <a href="./frontmatter.html#上-下页">Frontmatter</a></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>仅修改显示的文字</p><p><code>Pagina prior</code> 可以改成 上一页</p><p><code>Proxima pagina</code> 可以改成 下一页</p></div><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//自定义上下页名 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    docFooter: { </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      prev: </span><span style="color:#9ECBFF;">&#39;上一页&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      next: </span><span style="color:#9ECBFF;">&#39;下一页&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    }, </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//自定义上下页名 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    docFooter: { </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      prev: </span><span style="color:#032F62;">&#39;上一页&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      next: </span><span style="color:#032F62;">&#39;下一页&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    }, </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="广告" tabindex="-1">广告 <a class="header-anchor" href="#广告" aria-label="Permalink to &quot;广告&quot;">​</a></h2><p>VitePress 内置了对 <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">Carbon 广告</a> 的原生支持</p><p>通过在配置中定义Carbon 广告凭证，VitePress将在页面上展示广告</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    carbonAds: { </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      code: </span><span style="color:#9ECBFF;">&#39;your-carbon-code&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">      placement: </span><span style="color:#9ECBFF;">&#39;your-carbon-placement&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    }， </span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">  }, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  themeConfig: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    carbonAds: { </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      code: </span><span style="color:#032F62;">&#39;your-carbon-code&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">      placement: </span><span style="color:#032F62;">&#39;your-carbon-placement&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    }， </span></span>
<span class="line has-focus"><span style="color:#24292E;">  }, </span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,115),o=[e];function c(t,i,r,E,h,y){return n(),a("div",null,o)}const b=s(p,[["render",c]]);export{d as __pageData,b as default};
