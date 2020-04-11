# vue-iconfonts

> A Project For Vue To Use Iconfont Intelligently.

### Installation

```bash
$ npm i -S vue-iconfonts
```

### Manual

```html
<!-- Add vue.js dependency to your HTML file first -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<!-- Add vue-iconfonts.js dependency for your browser use then -->
<script src="https://unpkg.com/vue-iconfonts"></script>
```

## Iconfont

> Upload your icons(SVG) to your icon project you have created and download it from [Iconfont](https://www.iconfont.cn/), unzip `download.zip`.

### FontClass

> Add iconfont.css to your project for browser use

```html
<head>
  <link rel="stylesheet" href="iconfont.css" />
</head>
```

> Add iconfont.css to your project for vue project use

```javascript
import "iconfont.css";
```

### Symbol, Svg

> Add iconfont.js to your project for browser use

```html
<head>
  <script src="iconfont.js"></script>
</head>
```

> Add iconfont.js to your project for vue project use

```javascript
import "iconfont.js";
```

## Usage For Vue Project

```javascript
import Vue from "vue";
import IconFont from "vue-iconfonts";
import "iconfont.css";
import "iconfont.js";

Vue.component("IconFont", IconFont);
```

```html
<!-- FontClass -->
<div>
  Hello
  <IconFont type="icon" name="hasSelected" color="f00" size="30" /> FontIcon
</div>
<div>
  Hello
  <IconFont type="icon" name="notSelected" color="f00" size="30" /> FontIcon
</div>

<!-- Symbol, Svg -->
<div>
  Hello
  <IconFont type="svg" name="hasSelected" color="f00" size="30" /> SvgIcon
</div>
<div>
  Hello
  <IconFont type="svg" name="notSelected" color="f00" size="30" /> SvgIcon
</div>
```
