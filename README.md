# Warning

> Becuase of the higher version of `vue-loader` and `vue-template-compiler`, The project is for the vue project created by `vue-cli` only, it's not for the vue project created by `@vue/cli 3.0` or higher

# vue-iconfonts

> A Vue.js project to extend your own icons on the basic of using iconfont

![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg 'Vue 2 Compatible')

> A [Iconfont](http://www.iconfont.cn/) plugin for Vuejs

### Build Setup (Recommended NPM)

```bash
# Install dependencies
npm i vue-iconfonts
```

### Manual

```html
# Add vue.js dependency to your HTML file first
<script src="https://unpkg.com/vue/dist/vue.js"></script>

# Download `vue-iconfonts.min.js` file from `demo` directory and include it to
your HTML file
<script src="/Your Path/vue-iconfonts.min.js"></script>
```

## Iconfont

> Upload your icons(SVG) to your icon project you have created and download it from [Iconfont](https://www.iconfont.cn/), unzip `download.zip`.

### FontClass

> copy iconfont.css into your project

```html
# Include the iconfont.css stylsheet into your
<head>
  <link rel="stylesheet" href="./iconfont.css" />
</head>
```

or

```js
# Import css
import './iconfont.css';
```

### Symbol, Svg

> copy iconfont.js into your project

```html
# Include the iconfont.js script into your
<head>
  <script src="./iconfont.js"></script>
</head>
```

or

```js
import './iconfont.js';
```

## Usage

```js
import Vue from 'vue';
import IconFont from 'vue-iconfonts';
import '@/assets/css/iconfont/iconfont.css';
import '@/assets/css/iconfont/iconfont.js';

Vue.component('IconFont', IconFont);
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

Simple HTML Demo [Here](https://github.com/jayson991/vue-iconfonts/tree/master/demo)
