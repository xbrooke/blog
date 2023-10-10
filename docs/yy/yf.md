# Markdown语法

## 高亮

```
`SN735`
```



## 源码表格



```
<table>
   <tr>
      <th>CPU</th>
      <th>内存</th>
      <th>硬盘</th>
      <th>价格</th>
      <th>购买链接</th>
   </tr>
   <tr>
      <td rowspan="2">N5105</td>
      <td>8GB</td>
      <td>不带/128G</td>
      <td>￥1069/￥1269</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1369/￥1769</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td rowspan="2">N6005</td>
      <td>8GB</td>
      <td>不带/128G</td>
      <td>￥1269/￥1469</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
   <tr>
      <td>16GB</td>
      <td>不带/512G</td>
      <td>￥1469/￥1969</td>
      <td>
         <a href="https://item.taobao.com/item.htm?ft=t&id=682025492099" target="_blank">购买</a>
      </td>
   </tr>
</table>
```



##  文线框

```
:::tip 提示 蓝色块
请输入内容
:::
```

```
::: warning 黄色块
请输入内容
:::
```



## 表头

```
---
title: 配置及价格
---
```

```
---
title: 默认系统
description: 默认预装的系统，仅限带硬盘设备。
---
```



## Markdown 图片语法



```
![](https://github.com/KoolCore/wiki.ikoolcore.com/blob/main/pic/R1-banner-2023.jpg?raw=true)
```



## 超链接

```
[前往下载 ](https://github.com/KoolCore/ikoolcore/blob/main/docs/files/openwrt-x64-iKoolCore-R1-squashfs-combined-efi.img.gz)
```

## 标题区域（对vitepress没用）

自动生成侧边栏标题

```
---
sidebar: auto
---
```

禁用侧边栏标题

```
---
sidebar: false
---
```

