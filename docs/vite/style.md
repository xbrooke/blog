# 样式美化

::: warning 更新时间
最近更新：2023-9-28

搭建版本：vitepress v1.0.0-rc.20
:::

## 特别说明

最初教程编写的版本是 `bete.5` ，如今到了 `r.13` 版本，样式有了一些变化

出于遵循版本更新迭代，本次就做一些简单演示

::: details 关于退回旧版
逐个改很麻烦，实在想退回的，用我打包的文件自行研究吧

蓝奏云：https://dzp.lanzouj.com/ivtLU18oh2ib

文件路径：`node_modules\vitepress\dist\client\theme-default`
:::




## 主题目录(必看)

::: tip 说明
要修改样式，建议还是按此方式，无论怎样修改都不影响源文件
:::

在 `.vitepress` 中新建文件夹 `theme`，看目录

```md{5-6}
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts
│  │  └─ theme
│  │     └─ index.mts 或者 index.ts
│  └─ index.md
└─ node_modules
```

然后在 `theme` 目录下新建 `index.mts` 并填入如下代码


```ts
import Theme from 'vitepress/theme'

export default {
  ...Theme
}
```





## 主题色修改

在 `theme` 目录下新建 `var.css` 并填入如下代码

```md{6}
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.mts
│  │  └─ theme
│  │     └─ var.css
│  └─ index.md
└─ node_modules
```

```css
/* var.css */
:root {
  --vp-c-brand-1: #18794e;
  --vp-c-brand-2: #299764;
  --vp-c-brand-3: #30a46c;
}

.dark {
  --vp-c-brand-1: #3dd68c;
  --vp-c-brand-2: #30a46c;
  --vp-c-brand-3: #298459;
}
/* 以前的vp-c-brand已弃用 */
```

然后将 `var.css` 引入 `index.mts`

这样就修改回了绿色


```ts{2}
import Theme from 'vitepress/theme'
import './style/var.css' // [!code focus]

export default {
  ...Theme
}
```

还有一种方法，就是直接在首页 `index.md` 中插入代码

```md
<style>
:root {
  --vp-c-brand-1: #18794e;
  --vp-c-brand-2: #299764;
  --vp-c-brand-3: #30a46c;
}

.dark {
  --vp-c-brand-1: #3dd68c;
  --vp-c-brand-2: #30a46c;
  --vp-c-brand-3: #298459;
}
</style>
```



## H1标题颜色修改

::: warning 当然
同理，你也可以改H2-H6的标题，不过我感觉没必要，太花里胡哨了
:::

最简单的修改就是，比如改成红色

```css
/* .vitepress\theme\style\var.css */
h1 {
  color: red;
}
```

但是这样并不太好看，我们可以弄一个渐变色

```css
/* .vitepress\theme\style\var.css */
h1 {
  background: -webkit-linear-gradient(-45deg, #e43498 5%, #5ad7dd 15%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

}

```

::: tip 说明
background: 采用了一个线性渐变

background-clip: 使文本的背景颜色与渐变效果相同

text-fill-color：将文字透明
:::







## 链接下划线

新版本更新后，文字跳转链接就多了一个下划线

不习惯的可以修改，我们再 `var.css` 中添加下面代码就行了

```css
/* vp-doc.css */
.vp-doc a {
    text-decoration: dotted;
}
/* underline改成dotted或者其他也行 */
```




## 其他修改

太多了，可已参照源文件来进行修改

::: tip 说明
主色调都是引用的indigo，你也可以去换`indigo`，反正怎么改都可以
:::


```
node_modules\vitepress\dist\client\theme-default\styles\var.css
```

::: details 点我查看源代码

```css
/**
 * Colors: Solid
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-white: #ffffff;
  --vp-c-black: #000000;

  --vp-c-neutral: var(--vp-c-black);
  --vp-c-neutral-inverse: var(--vp-c-white);
}

.dark {
  --vp-c-neutral: var(--vp-c-white);
  --vp-c-neutral-inverse: var(--vp-c-black);
}

/**
 * Colors: Palette
 *
 * The primitive colors used for accent colors. These colors are referenced
 * by functional colors such as "Text", "Background", or "Brand".
 *
 * Each colors have exact same color scale system with 3 levels of solid
 * colors with different brightness, and 1 soft color.
 * 
 * - `XXX-1`: The most solid color used mainly for colored text. It must
 *   satisfy the contrast ratio against when used on top of `XXX-soft`.
 *
 * - `XXX-2`: The color used mainly for hover state of the button.
 *
 * - `XXX-3`: The color for solid background, such as bg color of the button.
 *    It must satisfy the contrast ratio with pure white (#ffffff) text on
 *    top of it.
 *
 * - `XXX-soft`: The color used for subtle background such as custom container
 *    or badges. It must satisfy the contrast ratio when putting `XXX-1` colors
 *    on top of it.
 *
 *    The soft color must be semi transparent alpha channel. This is crucial
 *    because it allows adding multiple "soft" colors on top of each other
 *    to create a accent, such as when having inline code block inside
 *    custom containers.
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-gray-1: #dddde3;
  --vp-c-gray-2: #e4e4e9;
  --vp-c-gray-3: #ebebef;
  --vp-c-gray-soft: rgba(142, 150, 170, 0.14);

  --vp-c-indigo-1: #3451b2;
  --vp-c-indigo-2: #3a5ccc;
  --vp-c-indigo-3: #5672cd;
  --vp-c-indigo-soft: rgba(100, 108, 255, 0.14);

  --vp-c-green-1: #18794e;
  --vp-c-green-2: #299764;
  --vp-c-green-3: #30a46c;
  --vp-c-green-soft: rgba(16, 185, 129, 0.14);

  --vp-c-yellow-1: #915930;
  --vp-c-yellow-2: #946300;
  --vp-c-yellow-3: #9f6a00;
  --vp-c-yellow-soft: rgba(234, 179, 8, 0.14);

  --vp-c-red-1: #b8272c;
  --vp-c-red-2: #d5393e;
  --vp-c-red-3: #e0575b;
  --vp-c-red-soft: rgba(244, 63, 94, 0.14);

  --vp-c-sponsor: #db2777;
}

.dark {
  --vp-c-gray-1: #515c67;
  --vp-c-gray-2: #414853;
  --vp-c-gray-3: #32363f;
  --vp-c-gray-soft: rgba(101, 117, 133, 0.16);

  --vp-c-indigo-1: #a8b1ff;
  --vp-c-indigo-2: #5c73e7;
  --vp-c-indigo-3: #3e63dd;
  --vp-c-indigo-soft: rgba(100, 108, 255, 0.16);

  --vp-c-green-1: #3dd68c;
  --vp-c-green-2: #30a46c;
  --vp-c-green-3: #298459;
  --vp-c-green-soft: rgba(16, 185, 129, 0.16);

  --vp-c-yellow-1: #f9b44e;
  --vp-c-yellow-2: #da8b17;
  --vp-c-yellow-3: #a46a0a;
  --vp-c-yellow-soft: rgba(234, 179, 8, 0.16);

  --vp-c-red-1: #f66f81;
  --vp-c-red-2: #f14158;
  --vp-c-red-3: #b62a3c;
  --vp-c-red-soft: rgba(244, 63, 94, 0.16);
}

/**
 * Colors: Background
 *
 * - `bg`: The bg color used for main screen.
 *
 * - `bg-alt`: The alternative bg color used in places such as "sidebar",
 *   or "code block".
 *
 * - `bg-elv`: The elevated bg color. This is used at parts where it "floats",
 *   such as "dialog".
 *
 * - `bg-soft`: The bg color to slightly ditinguish some components from
 *   the page. Used for things like "carbon ads" or "table".
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-bg: #ffffff;
  --vp-c-bg-alt: #f6f6f7;
  --vp-c-bg-elv: #ffffff;
  --vp-c-bg-soft: #f6f6f7;
}

.dark {
  --vp-c-bg: #1b1b1f;
  --vp-c-bg-alt: #161618;
  --vp-c-bg-elv: #202127;
  --vp-c-bg-soft: #202127;
}

/**
 * Colors: Borders
 *
 * - `divider`: This is used for separators. This is used to divide sections
 *   within the same components, such as having separator on "h2" heading.
 *
 * - `border`: This is designed for borders on interactive components.
 *   For example this should be used for a button outline.
 *
 * - `gutter`: This is used to divide components in the page. For example
 *   the header and the lest of the page.
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-border: #c2c2c4;
  --vp-c-divider: #e2e2e3;
  --vp-c-gutter: #e2e2e3;
}

.dark {
  --vp-c-border: #3c3f44;
  --vp-c-divider: #2e2e32;
  --vp-c-gutter: #000000;
}

/**
 * Colors: Text
 *
 * - `text-1`: Used for primary text.
 *
 * - `text-2`: Used for muted texts, such as "inactive menu" or "info texts".
 *
 * - `text-3`: Used for subtle texts, such as "placeholders" or "caret icon".
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-text-1: rgba(60, 60, 67);
  --vp-c-text-2: rgba(60, 60, 67, 0.78);
  --vp-c-text-3: rgba(60, 60, 67, 0.56);
}

.dark {
  --vp-c-text-1: rgba(255, 255, 245, 0.86);
  --vp-c-text-2: rgba(235, 235, 245, 0.6);
  --vp-c-text-3: rgba(235, 235, 245, 0.38);
}

/**
 * Colors: Function
 *
 * - `default`: The color used purely for subtle indication without any
 *   special meanings attched to it such as bg color for menu hover state.
 *
 * - `brand`: Used for primary brand colors, such as link text, button with
 *   brand theme, etc.
 *
 * - `tip`: Used to indicate useful information. The default theme uses the
 *   brand color for this by default.
 *
 * - `warning`: Used to indicate warning to the users. Used in custom
 *   container, badges, etc.
 *
 * - `danger`: Used to show error, or dangerous message to the users. Used
 *   in custom container, badges, etc.
 *
 * To understand the scaling system, refer to "Colors: Palette" section.
 * -------------------------------------------------------------------------- */

:root {
  --vp-c-default-1: var(--vp-c-gray-1);
  --vp-c-default-2: var(--vp-c-gray-2);
  --vp-c-default-3: var(--vp-c-gray-3);
  --vp-c-default-soft: var(--vp-c-gray-soft);

  --vp-c-brand-1: var(--vp-c-indigo-1);
  --vp-c-brand-2: var(--vp-c-indigo-2);
  --vp-c-brand-3: var(--vp-c-indigo-3);
  --vp-c-brand-soft: var(--vp-c-indigo-soft);

  /* DEPRECATED: Use `--vp-c-brand-1` instead. */
  --vp-c-brand: var(--vp-c-brand-1);

  --vp-c-tip-1: var(--vp-c-brand-1);
  --vp-c-tip-2: var(--vp-c-brand-2);
  --vp-c-tip-3: var(--vp-c-brand-3);
  --vp-c-tip-soft: var(--vp-c-brand-soft);

  --vp-c-warning-1: var(--vp-c-yellow-1);
  --vp-c-warning-2: var(--vp-c-yellow-2);
  --vp-c-warning-3: var(--vp-c-yellow-3);
  --vp-c-warning-soft: var(--vp-c-yellow-soft);

  --vp-c-danger-1: var(--vp-c-red-1);
  --vp-c-danger-2: var(--vp-c-red-2);
  --vp-c-danger-3: var(--vp-c-red-3);
  --vp-c-danger-soft: var(--vp-c-red-soft);
}

/**
 * Typography
 * -------------------------------------------------------------------------- */

:root {
  --vp-font-family-base: 'Chinese Quotes', 'Inter var', 'Inter', ui-sans-serif,
    system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Helvetica, Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  --vp-font-family-mono: ui-monospace, SFMono-Regular, 'SF Mono', Menlo, Monaco,
    Consolas, 'Liberation Mono', 'Courier New', monospace;
}

/**
 * Shadows
 * -------------------------------------------------------------------------- */

:root {
  --vp-shadow-1: 0 1px 2px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06);
  --vp-shadow-2: 0 3px 12px rgba(0, 0, 0, 0.07), 0 1px 4px rgba(0, 0, 0, 0.07);
  --vp-shadow-3: 0 12px 32px rgba(0, 0, 0, 0.1), 0 2px 6px rgba(0, 0, 0, 0.08);
  --vp-shadow-4: 0 14px 44px rgba(0, 0, 0, 0.12), 0 3px 9px rgba(0, 0, 0, 0.12);
  --vp-shadow-5: 0 18px 56px rgba(0, 0, 0, 0.16), 0 4px 12px rgba(0, 0, 0, 0.16);
}

/**
 * Z-indexes
 * -------------------------------------------------------------------------- */

:root {
  --vp-z-index-footer: 10;
  --vp-z-index-local-nav: 20;
  --vp-z-index-nav: 30;
  --vp-z-index-layout-top: 40;
  --vp-z-index-backdrop: 50;
  --vp-z-index-sidebar: 60;
}

/**
 * Icons
 * -------------------------------------------------------------------------- */

:root {
  --vp-icon-copy: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2'/%3E%3C/svg%3E");
  --vp-icon-copied: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' height='20' width='20' stroke='rgba(128,128,128,1)' stroke-width='2' viewBox='0 0 24 24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9 2 2 4-4'/%3E%3C/svg%3E");
}

/**
 * Layouts
 * -------------------------------------------------------------------------- */

:root {
  --vp-layout-max-width: 1440px;
}

/**
 * Component: Header Anchor
 * -------------------------------------------------------------------------- */

:root {
  --vp-header-anchor-symbol: '#';
}

/**
 * Component: Code
 * -------------------------------------------------------------------------- */

:root {
  --vp-code-line-height: 1.7;
  --vp-code-font-size: 0.875em;
  --vp-code-color: var(--vp-c-brand-1);
  --vp-code-link-color: var(--vp-c-brand-1);
  --vp-code-link-hover-color: var(--vp-c-brand-2);
  --vp-code-bg: var(--vp-c-default-soft);

  --vp-code-block-color: var(--vp-c-text-2);
  --vp-code-block-bg: var(--vp-c-bg-alt);
  --vp-code-block-divider-color: var(--vp-c-gutter);

  --vp-code-lang-color: var(--vp-c-text-3);

  --vp-code-line-highlight-color: var(--vp-c-default-soft);
  --vp-code-line-number-color: var(--vp-c-text-3);

  --vp-code-line-diff-add-color: var(--vp-c-green-soft);
  --vp-code-line-diff-add-symbol-color: var(--vp-c-green-1);

  --vp-code-line-diff-remove-color: var(--vp-c-red-soft);
  --vp-code-line-diff-remove-symbol-color: var(--vp-c-red-1);

  --vp-code-line-warning-color: var(--vp-c-yellow-soft);
  --vp-code-line-error-color: var(--vp-c-red-soft);

  --vp-code-copy-code-border-color: var(--vp-c-divider);
  --vp-code-copy-code-bg: var(--vp-c-bg-soft);
  --vp-code-copy-code-hover-border-color: var(--vp-c-divider);
  --vp-code-copy-code-hover-bg: var(--vp-c-bg);
  --vp-code-copy-code-active-text: var(--vp-c-text-2);
  --vp-code-copy-copied-text-content: 'Copied';

  --vp-code-tab-divider: var(--vp-code-block-divider-color);
  --vp-code-tab-text-color: var(--vp-c-text-2);
  --vp-code-tab-bg: var(--vp-code-block-bg);
  --vp-code-tab-hover-text-color: var(--vp-c-text-1);
  --vp-code-tab-active-text-color: var(--vp-c-text-1);
  --vp-code-tab-active-bar-color: var(--vp-c-brand-1);
}

/**
 * Component: Button
 * -------------------------------------------------------------------------- */

:root {
  --vp-button-brand-border: transparent;
  --vp-button-brand-text: var(--vp-c-white);
  --vp-button-brand-bg: var(--vp-c-brand-3);
  --vp-button-brand-hover-border: transparent;
  --vp-button-brand-hover-text: var(--vp-c-white);
  --vp-button-brand-hover-bg: var(--vp-c-brand-2);
  --vp-button-brand-active-border: transparent;
  --vp-button-brand-active-text: var(--vp-c-white);
  --vp-button-brand-active-bg: var(--vp-c-brand-1);

  --vp-button-alt-border: transparent;
  --vp-button-alt-text: var(--vp-c-text-1);
  --vp-button-alt-bg: var(--vp-c-default-3);
  --vp-button-alt-hover-border: transparent;
  --vp-button-alt-hover-text: var(--vp-c-text-1);
  --vp-button-alt-hover-bg: var(--vp-c-default-2);
  --vp-button-alt-active-border: transparent;
  --vp-button-alt-active-text: var(--vp-c-text-1);
  --vp-button-alt-active-bg: var(--vp-c-default-1);

  --vp-button-sponsor-border: var(--vp-c-text-2);
  --vp-button-sponsor-text: var(--vp-c-text-2);
  --vp-button-sponsor-bg: transparent;
  --vp-button-sponsor-hover-border: var(--vp-c-sponsor);
  --vp-button-sponsor-hover-text: var(--vp-c-sponsor);
  --vp-button-sponsor-hover-bg: transparent;
  --vp-button-sponsor-active-border: var(--vp-c-sponsor);
  --vp-button-sponsor-active-text: var(--vp-c-sponsor);
  --vp-button-sponsor-active-bg: transparent;
}

/**
 * Component: Custom Block
 * -------------------------------------------------------------------------- */

:root {
  --vp-custom-block-font-size: 14px;
  --vp-custom-block-code-font-size: 13px;

  --vp-custom-block-info-border: transparent;
  --vp-custom-block-info-text: var(--vp-c-text-1);
  --vp-custom-block-info-bg: var(--vp-c-default-soft);
  --vp-custom-block-info-code-bg: var(--vp-c-default-soft);

  --vp-custom-block-tip-border: transparent;
  --vp-custom-block-tip-text: var(--vp-c-text-1);
  --vp-custom-block-tip-bg: var(--vp-c-brand-soft);
  --vp-custom-block-tip-code-bg: var(--vp-c-brand-soft);

  --vp-custom-block-warning-border: transparent;
  --vp-custom-block-warning-text: var(--vp-c-text-1);
  --vp-custom-block-warning-bg: var(--vp-c-warning-soft);
  --vp-custom-block-warning-code-bg: var(--vp-c-warning-soft);

  --vp-custom-block-danger-border: transparent;
  --vp-custom-block-danger-text: var(--vp-c-text-1);
  --vp-custom-block-danger-bg: var(--vp-c-danger-soft);
  --vp-custom-block-danger-code-bg: var(--vp-c-danger-soft);

  --vp-custom-block-details-border: var(--vp-custom-block-info-border);
  --vp-custom-block-details-text: var(--vp-custom-block-info-text);
  --vp-custom-block-details-bg: var(--vp-custom-block-info-bg);
  --vp-custom-block-details-code-bg: var(--vp-custom-block-info-code-bg);
}

/**
 * Component: Input
 * -------------------------------------------------------------------------- */

:root {
  --vp-input-border-color: var(--vp-c-border);
  --vp-input-bg-color: var(--vp-c-bg-alt);

  --vp-input-switch-bg-color: var(--vp-c-gray-soft);
}

/**
 * Component: Nav
 * -------------------------------------------------------------------------- */

:root {
  --vp-nav-height: 64px;
  --vp-nav-bg-color: var(--vp-c-bg);
  --vp-nav-screen-bg-color: var(--vp-c-bg);
  --vp-nav-logo-height: 24px;
}

/**
 * Component: Local Nav
 * -------------------------------------------------------------------------- */

:root {
  --vp-local-nav-bg-color: var(--vp-c-bg);
}

/**
 * Component: Sidebar
 * -------------------------------------------------------------------------- */

:root {
  --vp-sidebar-width: 272px;
  --vp-sidebar-bg-color: var(--vp-c-bg-alt);
}

/**
 * Colors Backdrop
 * -------------------------------------------------------------------------- */

:root {
  --vp-backdrop-bg-color: rgba(0, 0, 0, 0.6);
}

/**
 * Component: Home
 * -------------------------------------------------------------------------- */

:root {
  --vp-home-hero-name-color: var(--vp-c-brand-1);
  --vp-home-hero-name-background: transparent;

  --vp-home-hero-image-background-image: none;
  --vp-home-hero-image-filter: none;
}

/**
 * Component: Badge
 * -------------------------------------------------------------------------- */

:root {
  --vp-badge-info-border: transparent;
  --vp-badge-info-text: var(--vp-c-text-2);
  --vp-badge-info-bg: var(--vp-c-default-soft);

  --vp-badge-tip-border: transparent;
  --vp-badge-tip-text: var(--vp-c-brand-1);
  --vp-badge-tip-bg: var(--vp-c-brand-soft);

  --vp-badge-warning-border: transparent;
  --vp-badge-warning-text: var(--vp-c-warning-1);
  --vp-badge-warning-bg: var(--vp-c-warning-soft);

  --vp-badge-danger-border: transparent;
  --vp-badge-danger-text: var(--vp-c-danger-1);
  --vp-badge-danger-bg: var(--vp-c-danger-soft);
}

/**
 * Component: Carbon Ads
 * -------------------------------------------------------------------------- */

:root {
  --vp-carbon-ads-text-color: var(--vp-c-text-1);
  --vp-carbon-ads-poweredby-color: var(--vp-c-text-2);
  --vp-carbon-ads-bg-color: var(--vp-c-bg-soft);
  --vp-carbon-ads-hover-text-color: var(--vp-c-brand-1);
  --vp-carbon-ads-hover-poweredby-color: var(--vp-c-text-1);
}

/**
  * Component: Local Search
  * -------------------------------------------------------------------------- */

:root {
  --vp-local-search-bg: var(--vp-c-bg);
  --vp-local-search-result-bg: var(--vp-c-bg);
  --vp-local-search-result-border: var(--vp-c-divider);
  --vp-local-search-result-selected-bg: var(--vp-c-bg);
  --vp-local-search-result-selected-border: var(--vp-c-brand-1);
  --vp-local-search-highlight-bg: var(--vp-c-brand-1);
  --vp-local-search-highlight-text: var(--vp-c-neutral-inverse);
}

```
:::
