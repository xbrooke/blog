import{V as o}from"./chunks/theme.ee3a4b35.js";import{C as t,o as c,c as r,k as s,a as n,H as a,w as i,l as E,Q as p}from"./chunks/framework.1383a2f2.js";const y=p(`<h1 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">更新时间</p><p>最近更新：2023-9-28</p><p>搭建版本：vitepress v1.0.0-rc.20</p></div><p>如果你还不了解 Markdown ，<a href="https://yiov.top/daily/markdown/" target="_blank" rel="noreferrer">请看我整理的Markdown教程</a></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>VitePress 相对于 VuePress 在Markdown中唯一的区别：链接可以直接渲染，不需要语法</p></div><h2 id="基础功能" tabindex="-1">基础功能 <a class="header-anchor" href="#基础功能" aria-label="Permalink to &quot;基础功能&quot;">​</a></h2><p>VitePress 使用 <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noreferrer">markdown-it</a> 作为解析器，并使用 <a href="https://shiki.matsu.io/" target="_blank" rel="noreferrer">Shiki</a> 来突出显示语言语法</p><p>基本配置</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  markdown:{</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">//这里填配置项</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  markdown:{</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">//这里填配置项</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="标题锚" tabindex="-1">标题锚 <a class="header-anchor" href="#标题锚" aria-label="Permalink to &quot;标题锚&quot;">​</a></h3><p>标题会自动应用锚链接</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>[]</code> 中括号内文字随便输，<code>()</code> 括号里的填一个 <code>#</code> 号加标题</p><p>无论是几级标题，都是一个 <code>#</code> 号</p></div><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">点我跳转：基础功能</span><span style="color:#E1E4E8;">](</span><span style="color:#E1E4E8;text-decoration:underline;">#基础功能</span><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">点我跳转：基础功能</span><span style="color:#24292E;">](</span><span style="color:#24292E;text-decoration:underline;">#基础功能</span><span style="color:#24292E;">)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出：</p><p><a href="#基础功能">点我跳转：基础功能</a></p><h3 id="图片引用" tabindex="-1">图片引用 <a class="header-anchor" href="#图片引用" aria-label="Permalink to &quot;图片引用&quot;">​</a></h3><p>这里涉及到一个相对路径 <code>./</code> 和 绝对路径 <code>/</code></p><div class="warning custom-block"><p class="custom-block-title">建议</p><p>对于指向内部 Markdown 文件的链接，尽可能使用相对路径，而不是绝对路径</p></div><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">.</span></span>
<span class="line"><span style="color:#E1E4E8;">├─ docs</span></span>
<span class="line"><span style="color:#E1E4E8;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#E1E4E8;">│  │  └─ config.mts</span></span>
<span class="line"><span style="color:#E1E4E8;">│  ├─ public</span></span>
<span class="line"><span style="color:#E1E4E8;">│  │  └─ logo.png     &lt;-- LOGO</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">│  ├─ markdown.md    &lt;-- 我的位置</span></span>
<span class="line"><span style="color:#E1E4E8;">│  └─ index.md </span></span>
<span class="line"><span style="color:#E1E4E8;">└─ package.json</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">.</span></span>
<span class="line"><span style="color:#24292E;">├─ docs</span></span>
<span class="line"><span style="color:#24292E;">│  ├─ .vitepress</span></span>
<span class="line"><span style="color:#24292E;">│  │  └─ config.mts</span></span>
<span class="line"><span style="color:#24292E;">│  ├─ public</span></span>
<span class="line"><span style="color:#24292E;">│  │  └─ logo.png     &lt;-- LOGO</span></span>
<span class="line highlighted"><span style="color:#24292E;">│  ├─ markdown.md    &lt;-- 我的位置</span></span>
<span class="line"><span style="color:#24292E;">│  └─ index.md </span></span>
<span class="line"><span style="color:#24292E;">└─ package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 相对路径，目标文件相对于本文章所在位置 --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 绝对路径，目标文件就是真实路径在哪 --&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 相对路径，目标文件相对于本文章所在位置 --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 绝对路径，目标文件就是真实路径在哪 --&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>输出：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>由于public文件夹的特殊性，我们直接使用 \`\` 即可</p><p>其他文件夹请遵从下面的使用规则</p></div><h3 id="表格" tabindex="-1">表格 <a class="header-anchor" href="#表格" aria-label="Permalink to &quot;表格&quot;">​</a></h3><p>输入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">| Tables        |      Are      |  Cool |</span></span>
<span class="line"><span style="color:#e1e4e8;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#e1e4e8;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="color:#e1e4e8;">| zebra stripes |   are neat    |    $1 |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">| Tables        |      Are      |  Cool |</span></span>
<span class="line"><span style="color:#24292e;">| ------------- | :-----------: | ----: |</span></span>
<span class="line"><span style="color:#24292e;">| col 3 is      | right-aligned | $1600 |</span></span>
<span class="line"><span style="color:#24292e;">| col 2 is      |   centered    |   $12 |</span></span>
<span class="line"><span style="color:#24292e;">| zebra stripes |   are neat    |    $1 |</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出：</p><table><thead><tr><th>Tables</th><th style="text-align:center;">Are</th><th style="text-align:right;">Cool</th></tr></thead><tbody><tr><td>col 3 is</td><td style="text-align:center;">right-aligned</td><td style="text-align:right;">$1600</td></tr><tr><td>col 2 is</td><td style="text-align:center;">centered</td><td style="text-align:right;">$12</td></tr><tr><td>zebra stripes</td><td style="text-align:center;">are neat</td><td style="text-align:right;">$1</td></tr></tbody></table><div class="tip custom-block"><p class="custom-block-title">说明</p><p>更详细的使用方式，我在 <a href="https://yiov.top/daily/markdown/#%E8%A1%A8%E6%A0%BC.html" target="_blank" rel="noreferrer">Markdown教程</a> 里也说到过</p><p>也可使用 Execl 生成 Markdwon：<a href="https://tableconvert.com/zh-cn/" target="_blank" rel="noreferrer">https://tableconvert.com/zh-cn/</a></p></div><h3 id="emoji" tabindex="-1">Emoji <a class="header-anchor" href="#emoji" aria-label="Permalink to &quot;Emoji&quot;">​</a></h3><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">:tada: :100:</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">:tada: :100:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出：</p><p>🎉 💯</p><p>Emoji表情大全：<a href="https://emojixd.com/" target="_blank" rel="noreferrer">https://emojixd.com/</a></p><h3 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h3><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">[</span><span style="color:#DBEDFF;text-decoration:underline;">[toc</span><span style="color:#E1E4E8;">]]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[</span><span style="color:#032F62;text-decoration:underline;">[toc</span><span style="color:#24292E;">]]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出：</p><details class="details custom-block"><summary>点我查看当前页目录</summary><nav class="table-of-contents"><ul><li><a href="#基础功能">基础功能</a><ul><li><a href="#标题锚">标题锚</a></li><li><a href="#图片引用">图片引用</a></li><li><a href="#表格">表格</a></li><li><a href="#emoji">Emoji</a></li><li><a href="#目录">目录</a></li></ul></li><li><a href="#容器">容器</a><ul><li><a href="#基础使用">基础使用</a></li><li><a href="#badge组件">Badge组件</a></li></ul></li><li><a href="#代码块">代码块</a><ul><li><a href="#语法突出">语法突出</a></li><li><a href="#行高亮">行高亮</a></li><li><a href="#聚焦代码">聚焦代码</a></li><li><a href="#增减差异">增减差异</a></li><li><a href="#错误和警告">错误和警告</a></li><li><a href="#行号显示">行号显示</a></li><li><a href="#代码组">代码组</a></li><li><a href="#导入代码">导入代码</a></li><li><a href="#代码块嵌套">代码块嵌套</a></li></ul></li><li><a href="#团队页面">团队页面</a><ul><li><a href="#页面中显示">页面中显示</a></li><li><a href="#创建完整页面">创建完整页面</a></li><li><a href="#合作伙伴">合作伙伴</a></li><li><a href="#组件显示成员">组件显示成员</a></li></ul></li></ul></nav></details><h2 id="容器" tabindex="-1">容器 <a class="header-anchor" href="#容器" aria-label="Permalink to &quot;容器&quot;">​</a></h2><h3 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h3><p>容器可以通过其类型、标题和内容来定义</p><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">::: info</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一条信息，info后面的文字可修改</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: tip 说明</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个提示，tip后面的文字可修改</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: warning 警告</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一条警告，warning后面的文字可修改</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: danger 危险</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一个危险警告，danger后面的文字可修改</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">::: details 点我查看</span></span>
<span class="line"><span style="color:#E1E4E8;">这是一条详情，details后面的文字可修改</span></span>
<span class="line"><span style="color:#E1E4E8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">::: info</span></span>
<span class="line"><span style="color:#24292E;">这是一条信息，info后面的文字可修改</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: tip 说明</span></span>
<span class="line"><span style="color:#24292E;">这是一个提示，tip后面的文字可修改</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: warning 警告</span></span>
<span class="line"><span style="color:#24292E;">这是一条警告，warning后面的文字可修改</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: danger 危险</span></span>
<span class="line"><span style="color:#24292E;">这是一个危险警告，danger后面的文字可修改</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">::: details 点我查看</span></span>
<span class="line"><span style="color:#24292E;">这是一条详情，details后面的文字可修改</span></span>
<span class="line"><span style="color:#24292E;">:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>输出：</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>这是一条信息，info后面的文字可修改</p></div><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这是一个提示，tip后面的文字可修改</p></div><div class="warning custom-block"><p class="custom-block-title">警告</p><p>这是一条警告，warning后面的文字可修改</p></div><div class="danger custom-block"><p class="custom-block-title">危险</p><p>这是一个危险警告，danger后面的文字可修改</p></div><details class="details custom-block"><summary>点我查看</summary><p>这是一条详情，details后面的文字可修改</p></details><p>我们在 <code>details</code> 中还可以加入代码块</p><details class="details custom-block"><summary>点我查看</summary><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">Hello, VitePress!</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Hello, VitePress!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></details><div class="warning custom-block"><p class="custom-block-title">注意</p><p>官方有写关于 <code>raw</code> 使用，半吊子的我不是很明白使用场景</p><p>具体请看官方：<a href="https://vitepress.dev/guide/markdown#raw.html" target="_blank" rel="noreferrer">https://vitepress.dev/guide/markdown#raw.html</a></p></div><h3 id="badge组件" tabindex="-1">Badge组件 <a class="header-anchor" href="#badge组件" aria-label="Permalink to &quot;Badge组件&quot;">​</a></h3><p>徽章可让您向标题添加状态</p><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">*</span><span style="color:#E1E4E8;"> VitePress &lt;Badge type=&quot;info&quot; text=&quot;default&quot; /&gt;</span></span>
<span class="line"><span style="color:#FFAB70;">*</span><span style="color:#E1E4E8;"> VitePress &lt;Badge type=&quot;tip&quot; text=&quot;^1.9.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#FFAB70;">*</span><span style="color:#E1E4E8;"> VitePress &lt;Badge type=&quot;warning&quot; text=&quot;beta&quot; /&gt;</span></span>
<span class="line"><span style="color:#FFAB70;">*</span><span style="color:#E1E4E8;"> VitePress &lt;Badge type=&quot;danger&quot; text=&quot;caution&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">*</span><span style="color:#24292E;"> VitePress &lt;Badge type=&quot;info&quot; text=&quot;default&quot; /&gt;</span></span>
<span class="line"><span style="color:#E36209;">*</span><span style="color:#24292E;"> VitePress &lt;Badge type=&quot;tip&quot; text=&quot;^1.9.0&quot; /&gt;</span></span>
<span class="line"><span style="color:#E36209;">*</span><span style="color:#24292E;"> VitePress &lt;Badge type=&quot;warning&quot; text=&quot;beta&quot; /&gt;</span></span>
<span class="line"><span style="color:#E36209;">*</span><span style="color:#24292E;"> VitePress &lt;Badge type=&quot;danger&quot; text=&quot;caution&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>输出：</p>`,59),d=p('<p>你也可以自定义 <code>children</code></p><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#FFAB70;">*</span><span style="color:#E1E4E8;"> VitePress &lt;Badge type=&quot;info&quot;&gt;custom element&lt;/Badge&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#E36209;">*</span><span style="color:#24292E;"> VitePress &lt;Badge type=&quot;info&quot;&gt;custom element&lt;/Badge&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>输出：</p>',4),b=p(`<p>您可以通过覆盖 css 变量来自定义徽章的 <code>background-color</code></p><p>默认值：</p><details class="details custom-block"><summary>点击查看css变量</summary><p>var的值都改程颜色代码即可</p><p>例如：<code>--vp-badge-info-border: #ffffff;</code></p><div class="language-css vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">:root</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-divider-light</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-text-2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-white-soft</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-green-dimm-1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-green-darker</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-green-dimm-3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-yellow-dimm-1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-yellow-darker</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-yellow-dimm-3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-red-dimm-1</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-red-darker</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-red-dimm-3</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">.dark</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-divider-light</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-info-bg</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-black-mute</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-green-dimm-2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-tip-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-green-light</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-yellow-dimm-2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-warning-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-yellow-light</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-border</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-red-dimm-2</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#FFAB70;">--vp-badge-danger-text</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">var</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">--vp-c-red-light</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">:root</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-divider-light</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-text-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-white-soft</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-green-dimm-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-green-darker</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-green-dimm-3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-yellow-dimm-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-yellow-darker</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-yellow-dimm-3</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-dimm-1</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-darker</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-dimm-3</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">.dark</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-divider-light</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-info-bg</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-black-mute</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-green-dimm-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-tip-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-green-light</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-yellow-dimm-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-warning-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-yellow-light</span><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-border</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-dimm-2</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#E36209;">--vp-badge-danger-text</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">var</span><span style="color:#24292E;">(</span><span style="color:#E36209;">--vp-c-red-light</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div></details><h2 id="代码块" tabindex="-1">代码块 <a class="header-anchor" href="#代码块" aria-label="Permalink to &quot;代码块&quot;">​</a></h2><p>代码块基本用法，就是上下三个反引号</p><p>输入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`md(常用的还有 \`ts\` \`js\` \`yaml\` \`sh\` 等等，但这里尽量不要出现中文)</span></span>
<span class="line"><span style="color:#e1e4e8;">中间写代码内容</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`md(常用的还有 \`ts\` \`js\` \`yaml\` \`sh\` 等等，但这里尽量不要出现中文)</span></span>
<span class="line"><span style="color:#24292e;">中间写代码内容</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="语法突出" tabindex="-1">语法突出 <a class="header-anchor" href="#语法突出" aria-label="Permalink to &quot;语法突出&quot;">​</a></h3><p>VitePress有着 <a href="https://shiki.matsu.io/" target="_blank" rel="noreferrer">Shiki</a> 插件的加持</p><p>我们在前反引号后可以写入代码的语法，渲染后会显示在代码块右上方</p><p>输入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`ts</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;我的vitpress文档教程&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`ts</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;我的vitpress文档教程&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`html</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#e1e4e8;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`html</span></span>
<span class="line"><span style="color:#24292e;">&lt;ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">  &lt;li v-for=&quot;todo in todos&quot; :key=&quot;todo.id&quot;&gt;</span></span>
<span class="line"><span style="color:#24292e;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292e;">  &lt;/li&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;/ul&gt;</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>输出：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;我的vitpress文档教程&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  titleTemplate: </span><span style="color:#9ECBFF;">&#39;另起标题覆盖title&#39;</span><span style="color:#E1E4E8;"> ,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;我的vitpress文档教程&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  titleTemplate: </span><span style="color:#032F62;">&#39;另起标题覆盖title&#39;</span><span style="color:#24292E;"> ,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><div class="language-html vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-for</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo in todos&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:key</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;todo.id&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">li</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">ul</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">li</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-for</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo in todos&quot;</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:key</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;todo.id&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    {{ todo.text }}</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">li</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">ul</span><span style="color:#24292E;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="行高亮" tabindex="-1">行高亮 <a class="header-anchor" href="#行高亮" aria-label="Permalink to &quot;行高亮&quot;">​</a></h3><p>比如我要第4行显示</p><p>输入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`ts{4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;我的vitpress文档教程&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`ts{4}</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;我的vitpress文档教程&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;我的vitpress文档教程&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  titleTemplate: </span><span style="color:#9ECBFF;">&#39;另起标题覆盖title&#39;</span><span style="color:#E1E4E8;"> ,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;我的vitpress文档教程&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  titleTemplate: </span><span style="color:#032F62;">&#39;另起标题覆盖title&#39;</span><span style="color:#24292E;"> ,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="聚焦代码" tabindex="-1">聚焦代码 <a class="header-anchor" href="#聚焦代码" aria-label="Permalink to &quot;聚焦代码&quot;">​</a></h3><p>在某一行后添加 <code>// [!code focus]</code> 注释会聚焦该行，并模糊代码的其他部分</p><p>输入：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>!code</code> 后面只需要一个空格，这里有两个空格是为了防止处理</p></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`ts{4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;我的vitpress文档教程&quot;, // [!code  focus]</span></span>
<span class="line"><span style="color:#e1e4e8;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`ts{4}</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  lang: &#39;zh-CN&#39;,</span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;我的vitpress文档教程&quot;, // [!code  focus]</span></span>
<span class="line"><span style="color:#24292e;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;我的vitpress文档教程&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  titleTemplate: </span><span style="color:#9ECBFF;">&#39;另起标题覆盖title&#39;</span><span style="color:#E1E4E8;"> ,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;我的vitpress文档教程&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  titleTemplate: </span><span style="color:#032F62;">&#39;另起标题覆盖title&#39;</span><span style="color:#24292E;"> ,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>如果你要聚焦连续多行，可以使用 <code>// [!code focus:&lt;lines&gt;]</code></p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>从添加行的位置开始，输入最终聚焦的行号即可</p><p>分散的行，请单独添加使用</p></div><p>输入：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>!code</code> 后面只需要一个空格，这里有两个空格是为了防止处理</p></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`ts{2-5}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  lang: &#39;zh-CN&#39;, // [!code  focus:5]</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;我的vitpress文档教程&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`ts{2-5}</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  lang: &#39;zh-CN&#39;, // [!code  focus:5]</span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;VitePress&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;我的vitpress文档教程&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>输出：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;我的vitpress文档教程&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  titleTemplate: </span><span style="color:#9ECBFF;">&#39;另起标题覆盖title&#39;</span><span style="color:#E1E4E8;"> ,</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;我的vitpress文档教程&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  titleTemplate: </span><span style="color:#032F62;">&#39;另起标题覆盖title&#39;</span><span style="color:#24292E;"> ,</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="增减差异" tabindex="-1">增减差异 <a class="header-anchor" href="#增减差异" aria-label="Permalink to &quot;增减差异&quot;">​</a></h3><p>在某一行上添加 <code>// [!code --]</code> 或 <code>// [!code ++]</code> 注释将创建该行的差异，同时保留代码块的颜色</p><p>输入：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>!code</code> 后面只需要一个空格，这里有两个空格是为了防止处理</p></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`ts{3-4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  lang: &#39;zh-CN&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;VitePress&quot;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;我的vitpress文档教程&quot;, // [!code  --]</span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;更详细的vitpress中文文档教程&quot;, // [!code  ++]</span></span>
<span class="line"><span style="color:#e1e4e8;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`ts{3-4}</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  lang: &#39;zh-CN&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;VitePress&quot;, </span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;我的vitpress文档教程&quot;, // [!code  --]</span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;更详细的vitpress中文文档教程&quot;, // [!code  ++]</span></span>
<span class="line"><span style="color:#24292e;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>输出：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff remove highlighted"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;我的vitpress文档教程&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line diff add"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;更详细的vitpress中文文档教程&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  titleTemplate: </span><span style="color:#9ECBFF;">&#39;另起标题覆盖title&#39;</span><span style="color:#E1E4E8;"> ,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff remove highlighted"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;我的vitpress文档教程&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line diff add"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;更详细的vitpress中文文档教程&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  titleTemplate: </span><span style="color:#032F62;">&#39;另起标题覆盖title&#39;</span><span style="color:#24292E;"> ,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="错误和警告" tabindex="-1">错误和警告 <a class="header-anchor" href="#错误和警告" aria-label="Permalink to &quot;错误和警告&quot;">​</a></h3><p>在某一行上添加 <code>// [!code warning]</code> 或 <code>// [!code error]</code> 注释会相应地为其着色</p><p>输入：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>!code</code> 后面只需要一个空格，这里有两个空格是为了防止处理</p></div><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`ts{3-4}</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  lang: &#39;zh-CN&#39;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;VitePress&quot;, </span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;我的vitpress文档教程&quot;, // [!code  error]</span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;更详细的vitpress中文文档教程&quot;, // [!code  warning]</span></span>
<span class="line"><span style="color:#e1e4e8;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`ts{3-4}</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  lang: &#39;zh-CN&#39;, </span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;VitePress&quot;, </span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;我的vitpress文档教程&quot;, // [!code  error]</span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;更详细的vitpress中文文档教程&quot;, // [!code  warning]</span></span>
<span class="line"><span style="color:#24292e;">  titleTemplate: &#39;另起标题覆盖title&#39; ,</span></span>
<span class="line"><span style="color:#24292e;">})</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>输出：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  lang: </span><span style="color:#9ECBFF;">&#39;zh-CN&#39;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  title: </span><span style="color:#9ECBFF;">&quot;VitePress&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted error"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;我的vitpress文档教程&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line highlighted warning"><span style="color:#E1E4E8;">  description: </span><span style="color:#9ECBFF;">&quot;更详细的vitpress中文文档教程&quot;</span><span style="color:#E1E4E8;">, </span></span>
<span class="line"><span style="color:#E1E4E8;">  titleTemplate: </span><span style="color:#9ECBFF;">&#39;另起标题覆盖title&#39;</span><span style="color:#E1E4E8;"> ,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  lang: </span><span style="color:#032F62;">&#39;zh-CN&#39;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted"><span style="color:#24292E;">  title: </span><span style="color:#032F62;">&quot;VitePress&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted error"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;我的vitpress文档教程&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line highlighted warning"><span style="color:#24292E;">  description: </span><span style="color:#032F62;">&quot;更详细的vitpress中文文档教程&quot;</span><span style="color:#24292E;">, </span></span>
<span class="line"><span style="color:#24292E;">  titleTemplate: </span><span style="color:#032F62;">&#39;另起标题覆盖title&#39;</span><span style="color:#24292E;"> ,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="行号显示" tabindex="-1">行号显示 <a class="header-anchor" href="#行号显示" aria-label="Permalink to &quot;行号显示&quot;">​</a></h3><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//markdown配置 </span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  markdown: {</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//行号显示</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">    lineNumbers: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line has-focus"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//markdown配置 </span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  markdown: {</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//行号显示</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">    lineNumbers: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line has-focus"><span style="color:#24292E;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>如果你在某个代码块不想使用，可以通过 <code>ts:no-line-numbers</code> 来临时关闭</p><p>输入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">\`\`\`ts:no-line-numbers</span></span>
<span class="line"><span style="color:#e1e4e8;">无行号演示</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">\`\`\`ts:no-line-numbers</span></span>
<span class="line"><span style="color:#24292e;">无行号演示</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>输出：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">无行号演示</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">无行号演示</span></span></code></pre></div><h3 id="代码组" tabindex="-1">代码组 <a class="header-anchor" href="#代码组" aria-label="Permalink to &quot;代码组&quot;">​</a></h3><p>和Vuepress不同，我们用 <code>code-group</code> 包裹</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">::: code-group</span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">::: code-group</span></span>
<span class="line"><span style="color:#24292e;">:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>输入：</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">::: code-group</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`sh [pnpm]</span></span>
<span class="line"><span style="color:#e1e4e8;">#查询pnpm版本</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm -v</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`sh [yarn]</span></span>
<span class="line"><span style="color:#e1e4e8;">#查询yarn版本</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn -v</span></span>
<span class="line"><span style="color:#e1e4e8;">\`\`\`</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">::: code-group</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`sh [pnpm]</span></span>
<span class="line"><span style="color:#24292e;">#查询pnpm版本</span></span>
<span class="line"><span style="color:#24292e;">pnpm -v</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">\`\`\`sh [yarn]</span></span>
<span class="line"><span style="color:#24292e;">#查询yarn版本</span></span>
<span class="line"><span style="color:#24292e;">yarn -v</span></span>
<span class="line"><span style="color:#24292e;">\`\`\`</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>输出：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-8-2WT" id="tab-glLbpxT" checked="checked"><label for="tab-glLbpxT">pnpm</label><input type="radio" name="group-8-2WT" id="tab-7btsyGU"><label for="tab-7btsyGU">yarn</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#查询pnpm版本</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#查询pnpm版本</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#查询yarn版本</span></span>
<span class="line"><span style="color:#B392F0;">yarn</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-v</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#查询yarn版本</span></span>
<span class="line"><span style="color:#6F42C1;">yarn</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-v</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></div></div><h3 id="导入代码" tabindex="-1">导入代码 <a class="header-anchor" href="#导入代码" aria-label="Permalink to &quot;导入代码&quot;">​</a></h3><p>要输出准确的文件路径，可以指定代码的片段和高亮部分</p><p>导入片段，我们需要对原文件进行注释 <code>// #region</code> 和 <code>// #endregion</code></p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>开始和结束都要有，后面的字必须是字母，不能汉字!</p><p>可以自定义，比如示例中的 <code>fav</code></p></div><p>原文件修改示例：</p><div class="language-ts vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-focused-lines has-highlighted-lines vp-code-dark"><code><span class="line has-focus highlighted"><span style="color:#6A737D;">// #region fav </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">head</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    [</span><span style="color:#9ECBFF;">&#39;link&#39;</span><span style="color:#E1E4E8;">,{ rel: </span><span style="color:#9ECBFF;">&#39;icon&#39;</span><span style="color:#E1E4E8;">, href: </span><span style="color:#9ECBFF;">&#39;https://vitejs.cn/vite3-cn/logo-with-shadow.png&#39;</span><span style="color:#E1E4E8;">}],</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line has-focus highlighted"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// #endregion fav </span></span></code></pre><pre class="shiki github-light has-focused-lines has-highlighted-lines vp-code-light"><code><span class="line has-focus highlighted"><span style="color:#6A737D;">// #region fav </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">head</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    [</span><span style="color:#032F62;">&#39;link&#39;</span><span style="color:#24292E;">,{ rel: </span><span style="color:#032F62;">&#39;icon&#39;</span><span style="color:#24292E;">, href: </span><span style="color:#032F62;">&#39;https://vitejs.cn/vite3-cn/logo-with-shadow.png&#39;</span><span style="color:#24292E;">}],</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line has-focus highlighted"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// #endregion fav </span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输入：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>{} 大括号中是高亮的行号</p></div><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 绝对路径 二选一--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; @/.vitepress/config.mts#fav{2}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 相对路径 二选一--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;&lt;&lt; ./.vitepress/config.mts#fav{2}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 绝对路径 二选一--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; @/.vitepress/config.mts#fav{2}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 相对路径 二选一--&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;&lt;&lt; ./.vitepress/config.mts#fav{2}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="代码块嵌套" tabindex="-1">代码块嵌套 <a class="header-anchor" href="#代码块嵌套" aria-label="Permalink to &quot;代码块嵌套&quot;">​</a></h3><p>比如我们想展示代码块的写法，但是反引号已经用了</p><p>那么我们就用4个反引号 \`\`\`\` ，以此类推即可</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>这个使用方法，其实我在 <a href="https://yiov.top/daily/markdown/#%E4%BB%A3%E7%A0%81%E5%9D%97%E5%B5%8C%E5%A5%97" target="_blank" rel="noreferrer">Markdown教程</a> 里已经说过了</p></div><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">\`\`\`\`</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="color:#E1E4E8;">pnpm run docs:dev</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`</span></span>
<span class="line"><span style="color:#E1E4E8;">\`\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">\`\`\`\`</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"><span style="color:#24292E;">pnpm run docs:dev</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`</span></span>
<span class="line"><span style="color:#24292E;">\`\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>输出：</p><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#9ECBFF;"> run docs:dev</span></span>
<span class="line"><span style="color:#9ECBFF;">\`\`\`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">\`\`\`</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#032F62;"> run docs:dev</span></span>
<span class="line"><span style="color:#032F62;">\`\`\`</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="团队页面" tabindex="-1">团队页面 <a class="header-anchor" href="#团队页面" aria-label="Permalink to &quot;团队页面&quot;">​</a></h2><p>使用从 <code>vitepress/theme</code> 公开的 <code>&lt;VPTeamMembers&gt;</code> 组件在任何页面上显示团队成员列表</p><h3 id="页面中显示" tabindex="-1">页面中显示 <a class="header-anchor" href="#页面中显示" aria-label="Permalink to &quot;页面中显示&quot;">​</a></h3><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { VPTeamMembers } from &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const members = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#79B8FF;font-weight:bold;">### Our Team</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Say hello to our awesome team.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;VPTeamMembers size=&quot;medium&quot; :members=&quot;members&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { VPTeamMembers } from &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const members = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; }</span></span>
<span class="line"><span style="color:#24292E;">    ]</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#005CC5;font-weight:bold;">### Our Team</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Say hello to our awesome team.</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;VPTeamMembers size=&quot;medium&quot; :members=&quot;members&quot; /&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>输出：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>尺寸大小有2个，<code>small</code> 和 <code>medium</code></p><p>看自己喜好吧，文档中一般是small</p></div>`,88),u=p(`<h3 id="创建完整页面" tabindex="-1">创建完整页面 <a class="header-anchor" href="#创建完整页面" aria-label="Permalink to &quot;创建完整页面&quot;">​</a></h3><p>你还可以创建完整的团队页面，而不是将团队成员添加到文档页面，这与创建自定义首页类似</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>要创建团队页面，首先创建一个新的 <code>md</code> 文件。 文件名并不重要，但这里我们将其命名为 <code>team.md</code></p></div><p>在此文件中，设置 <a href="./frontmatter.html#首页">frontmatter</a> 选项 <code>layout: page</code>，然后使用 TeamPage 组件构建页面结构</p><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line highlighted"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">page</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import {</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#E1E4E8;">} from &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const members = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;VPTeamPage&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;template #title&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      Our Team</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;template #lead&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      The development of VitePress is guided by an international</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;VPTeamMembers :members=&quot;members&quot; /&gt;</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">&lt;/VPTeamPage&gt;</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line highlighted"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">page</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import {</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#24292E;">} from &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const members = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;VPTeamPage&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;template #title&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">      Our Team</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;template #lead&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">      The development of VitePress is guided by an international</span></span>
<span class="line highlighted"><span style="color:#24292E;">      team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;VPTeamMembers :members=&quot;members&quot; /&gt;</span></span>
<span class="line highlighted"><span style="color:#24292E;">&lt;/VPTeamPage&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><p>输出：</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p><code>&lt;VPPageTitle&gt;</code> 组件添加页面，标题是 <code>&lt;h1&gt;</code> 标题，使用 <code>#title</code> 和 <code>#lead</code> 槽来记录团队的信息</p><p><code>&lt;VPMembers&gt;</code> 的工作方式与在文档页面中使用时相同，它将显示成员列表</p></div><p><a href="./team.html">点我查看：团队成员信息</a></p><h3 id="合作伙伴" tabindex="-1">合作伙伴 <a class="header-anchor" href="#合作伙伴" aria-label="Permalink to &quot;合作伙伴&quot;">​</a></h3><p>输入：</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#85E89D;">layout</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">page</span></span>
<span class="line"><span style="color:#E1E4E8;">---</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import {</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#E1E4E8;">  VPTeamPageSection,</span></span>
<span class="line"><span style="color:#E1E4E8;">} from &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const coreMembers = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const partners = [</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">]</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;VPTeamPage&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;template #title&gt;Our Team&lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;template #lead&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#E1E4E8;">    team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;VPTeamMembers size=&quot;medium&quot; :members=&quot;coreMembers&quot; /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;VPTeamPageSection&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;template #title&gt;Partners&lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;template #lead&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    This is our partner.</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;template #members&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">      &lt;VPTeamMembers size=&quot;small&quot; :members=&quot;partners&quot; /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/VPTeamPageSection&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/VPTeamPage&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#22863A;">layout</span><span style="color:#24292E;">: </span><span style="color:#032F62;">page</span></span>
<span class="line"><span style="color:#24292E;">---</span></span>
<span class="line"><span style="color:#24292E;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#24292E;">import {</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPage,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageTitle,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamMembers,</span></span>
<span class="line"><span style="color:#24292E;">  VPTeamPageSection,</span></span>
<span class="line"><span style="color:#24292E;">} from &#39;vitepress/theme&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const coreMembers = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const partners = [</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">]</span></span>
<span class="line"><span style="color:#24292E;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;VPTeamPage&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;template #title&gt;Our Team&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;template #lead&gt;</span></span>
<span class="line"><span style="color:#24292E;">    The development of VitePress is guided by an international</span></span>
<span class="line"><span style="color:#24292E;">    team, some of whom have chosen to be featured below.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/VPTeamPageTitle&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;VPTeamMembers size=&quot;medium&quot; :members=&quot;coreMembers&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;VPTeamPageSection&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;template #title&gt;Partners&lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;template #lead&gt;</span></span>
<span class="line"><span style="color:#24292E;">    This is our partner.</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;template #members&gt;</span></span>
<span class="line"><span style="color:#24292E;">      &lt;VPTeamMembers size=&quot;small&quot; :members=&quot;partners&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/template&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/VPTeamPageSection&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/VPTeamPage&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><p>输出：</p><p><a href="./team.html">点我查看：团队成员信息</a></p><h3 id="组件显示成员" tabindex="-1">组件显示成员 <a class="header-anchor" href="#组件显示成员" aria-label="Permalink to &quot;组件显示成员&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">说明</p><p>可选项，也不建议在此处配置，太乱了</p></div><p>如果你在 <code>const coreMembers = []</code> 或 <code>const partners = []</code> 没有配置成员列表</p><p>你可以在 <code>&lt;VPTeamMembers</code> 中单独配置</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">const coreMembers = [],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;VPTeamMembers</span></span>
<span class="line"><span style="color:#E1E4E8;">  size=&quot;medium&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  :members=&quot;[</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#E1E4E8;">    links: [</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">    ]&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">const coreMembers = [],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;VPTeamMembers</span></span>
<span class="line"><span style="color:#24292E;">  size=&quot;medium&quot;</span></span>
<span class="line"><span style="color:#24292E;">  :members=&quot;[</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/yyx990803.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Evan You&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Creator&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/yyx990803&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/youyuxi&#39; }</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    avatar: &#39;https://www.github.com/kiaking.png&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    name: &#39;Kia King Ishii&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    title: &#39;Developer&#39;,</span></span>
<span class="line"><span style="color:#24292E;">    links: [</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;github&#39;, link: &#39;https://github.com/kiaking&#39; },</span></span>
<span class="line"><span style="color:#24292E;">      { icon: &#39;twitter&#39;, link: &#39;https://twitter.com/KiaKing85&#39; },</span></span>
<span class="line"><span style="color:#24292E;">    ],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">    ]&quot;</span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,19),f=JSON.parse('{"title":"Markdown","description":"","frontmatter":{},"headers":[],"relativePath":"vite/markdown.md","filePath":"vite/markdown.md"}'),m={name:"vite/markdown.md"},C=Object.assign(m,{setup(h){const e=[{avatar:"https://www.github.com/yyx990803.png",name:"Evan You",title:"Creator",links:[{icon:"github",link:"https://github.com/yyx990803"},{icon:"twitter",link:"https://twitter.com/youyuxi"}]},{avatar:"https://www.github.com/kiaking.png",name:"Kia King Ishii",title:"Developer",links:[{icon:"github",link:"https://github.com/kiaking"},{icon:"twitter",link:"https://twitter.com/KiaKing85"}]}];return(g,v)=>{const l=t("Badge");return c(),r("div",null,[y,s("ul",null,[s("li",null,[n("VitePress "),a(l,{type:"info",text:"default"})]),s("li",null,[n("VitePress "),a(l,{type:"tip",text:"^1.9.0"})]),s("li",null,[n("VitePress "),a(l,{type:"warning",text:"beta"})]),s("li",null,[n("VitePress "),a(l,{type:"danger",text:"caution"})])]),d,s("ul",null,[s("li",null,[n("VitePress "),a(l,{type:"info"},{default:i(()=>[n("custom element")]),_:1})])]),b,a(E(o),{size:"medium",members:e}),u])}}});export{f as __pageData,C as default};
