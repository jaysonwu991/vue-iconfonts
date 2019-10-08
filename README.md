# vue-iconfonts

> A Vue.js project based on @vue/cli to extend your own icons/svgs by using iconfont

![Vue 2.x](https://img.shields.io/badge/vue-2.x-green.svg 'Vue 2 Compatible')

> A [Iconfont](http://www.iconfont.cn/) plugin for Vuejs

### Installation

```bash
$ npm i -S vue-iconfonts
```

> Warning: If you use the lower Vue version and the lower vue-template-compiler, please install the previous version (< 2.2.0)

### Manual

```html
<!-- Add vue.js dependency to your HTML file first -->
<script src="https://unpkg.com/vue/dist/vue.js"></script>

<!-- Download `vue-iconfonts.umd.min.js` file from `dist` folder and include it to your HTML file -->
<script src="/PATH TO JS FOLDER/vue-iconfonts.umd.min.js"></script>
```

## Iconfont

> Upload your icons(SVG) to your icon project you have created and download it from [Iconfont](https://www.iconfont.cn/), unzip `download.zip`.

### FontClass

> Add iconfont.css to your project

```html
<!-- Include the iconfont.css stylsheet into your HTML header -->
<head>
  <link rel="stylesheet" href="/PATH TO ICONFONT FOLDER/iconfont.css" />
</head>
```

> OR

```javascript
// Import css
import '/PATH TO ICONFONT FOLDER/iconfont.css'
```

### Symbol, Svg

> Add iconfont.js to your project

```html
<!-- Include the iconfont.js script into your HTML header -->
<head>
  <script src="/PATH TO ICONFONT FOLDER/iconfont.js"></script>
</head>
```

> OR

```javascript
// Import js
import '/PATH TO ICONFONT FOLDER/iconfont.js'
```

## Usage

```javascript
import Vue from 'vue'
import IconFont from 'vue-iconfonts'
import '/PATH TO ICONFONT FOLDER/iconfont.css'
import '/PATH TO ICONFONT FOLDER/iconfont.js'

Vue.component('IconFont', IconFont)
```

```html
<!-- FontClass -->
<div>
  Hello
  <IconFont type="icon"
            name="hasSelected"
            color="f00"
            size="30" /> FontIcon
</div>
<div>
  Hello
  <IconFont type="icon"
            name="notSelected"
            color="f00"
            size="30" /> FontIcon
</div>

<!-- Symbol, Svg -->
<div>
  Hello
  <IconFont type="svg"
            name="hasSelected"
            color="f00"
            size="30" /> SvgIcon
</div>
<div>
  Hello
  <IconFont type="svg"
            name="notSelected"
            color="f00"
            size="30" /> SvgIcon
</div>
```
