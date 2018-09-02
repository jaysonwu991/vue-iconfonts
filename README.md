# vue-iconfonts

> A Vue.js project for using iconfont to extend your own icons

![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg 'Vue 2 Compatible')

> A [iconfont](http://iconfont.cn/) plugin for Vuejs

### Build Setup (Recommended NPM)

```bash
# Install dependencies
npm install vue-iconfonts --save
```

### Manual

```html
# Download `vue-iconfonts.min.js` and include it in your HTML file
<script src="/Your Path/vue-iconfonts.min.js"></script>
```

## Iconfont

It’s a Vector Icon Management & Communication Platform made by Alimama MUX, designers could upload vector icons here, and users could download it by several kinds of format.Also, the icons could be translated into Fonts for front-end engineers’ usage.

> Download the icons from iconfont.cn, and `upzip download.zip`.

### FontClass

> copy iconfont.css into your project

```html
# Include the iconfont.css stylsheet into your <head>
<link rel="stylesheet" href="./iconfont.css">
```

or

```js
# Import css
import './iconfont.css';
```

### Symbol, Svg

> copy iconfont.js into your project

```html
# Include the iconfont.js script into your <head>
<script src="./iconfont.js"></script>
```

or

```js
import './iconfont.js'
```

## Usage

```js
import Vue from 'vue'
import IconFont from 'vue-iconfonts'
import '@/assets/css/iconfont/iconfont.css'
import '@/assets/css/iconfont/iconfont.js'

Vue.component(IconFont)
```

```html
<!-- FontClass -->
<div>
  你好
  <IconFont type="icon"
            name="icon-notSelected"
            color="f00"
            size="30" /> FontIcon
</div>

<!-- Symbol, Svg -->
<div>
  你好
  <IconFont type="svg"
            name="icon-notSelected"
            color="f00"
            size="40" /> SvgIcon
</div>
```
