(function (window) {
  var svgSprite = '<svg><symbol id="icon-notSelected" viewBox="0 0 1024 1024"><path d="M511.671007 127.934764c-211.93183 0-383.745964 171.803901-383.745964 383.745964s171.814134 383.743918 383.745964 383.743918c211.951273 0 383.764384-171.802878 383.764384-383.743918S723.62228 127.934764 511.671007 127.934764zM511.671007 855.032704c-189.624778 0-343.332533-153.707754-343.332533-343.341742 0-189.644221 153.707754-343.362208 343.332533-343.362208 189.643198 0 343.370395 153.716964 343.370395 343.362208C855.040379 701.32495 701.314205 855.032704 511.671007 855.032704z"  ></path></symbol><symbol id="icon-success" viewBox="0 0 1024 1024"><path d="M965.40416 342.76608c-19.50976-52.24704-47.744-100.41472-83.92064-143.16288-18.26688-21.58592-50.57408-24.27392-72.15872-6.0096-21.58464 18.26688-24.2752 50.5728-6.00832 72.15872C861.4336 334.42816 893.44 421.88032 893.44 512c0 210.32576-171.11424 381.44-381.44 381.44-210.32704 0-381.44-171.11424-381.44-381.44 0-210.32704 171.11296-381.44 381.44-381.44 60.48896 0 118.30784 13.72672 171.85152 40.8 25.2288 12.75648 56.03328 2.64704 68.7936-22.58816 12.76032-25.23392 2.64576-56.03456-22.58816-68.7936C662.05312 45.5936 588.68992 28.16 512 28.16c-65.29536 0-128.66432 12.8-188.34688 38.04416-57.62176 24.37248-109.36064 59.2512-153.7792 103.66976-44.41856 44.41856-79.29856 96.15744-103.66976 153.77792C40.96 383.3344 28.16 446.70464 28.16 512c0 65.29536 12.8 128.6656 38.04416 188.34688 24.37248 57.62176 59.2512 109.36064 103.66976 153.7792s96.15744 79.29856 153.7792 103.66976C383.33568 983.04 446.70464 995.84 512 995.84c65.29536 0 128.6656-12.8 188.34816-38.04416 57.62176-24.3712 109.36064-59.2512 153.77792-103.66976 44.41856-44.41856 79.29856-96.15744 103.66976-153.7792C983.04 640.6656 995.84 577.29536 995.84 512 995.84 453.79328 985.6 396.85504 965.40416 342.76608z"  ></path><path d="M655.13472 324.41344l-40.77696 36.6464c-117.42976 111.25504-211.00288 248.38272-211.00288 248.38272l-68.58112-132.70528-155.79648 75.74144c65.9136 23.4944 166.75712 107.27424 233.29152 189.30176l0.18304 0.03584c39.0592-71.35616 175.5264-198.98112 272.97408-264.12928l38.28992-23.38432c15.08992-8.14848 28.28032-13.73824 38.80192-16.0768-30.0352-68.47104-3.69024-124.11776 0.58496-188.3136C726.8928 268.43776 690.35776 294.5984 655.13472 324.41344z"  ></path></symbol><symbol id="icon-hasSelected" viewBox="0 0 1024 1024"><path d="M511.990279 128.036072c-211.837686 0-383.589398 171.908278-383.589398 383.969045 0 212.050534 171.751712 383.958812 383.589398 383.958812 211.874525 0 383.607818-171.908278 383.607818-383.958812C895.598096 299.94435 723.864804 128.036072 511.990279 128.036072zM727.76053 407.098835 468.846666 666.256246c-10.225899 10.215666-26.78197 10.215666-37.006845 0L296.21798 530.488073c-10.206456-10.205433-10.206456-26.79118 0-37.006845 10.225899-10.235109 26.78197-10.235109 36.988426 0l117.136837 117.228935 240.430908-240.647849c10.207479-10.225899 26.761504-10.225899 36.987403 0C737.966986 380.288213 737.966986 396.863726 727.76053 407.098835z"  ></path></symbol></svg>'
  var script = (function () {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }())
  var shouldInjectCss = script.getAttribute('data-injectcss')
  var ready = function (fn) {
    if (document.addEventListener) {
      if (~['complete', 'loaded', 'interactive'].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function () {
          document.removeEventListener('DOMContentLoaded', loadFn, false)
          fn()
        }
        document.addEventListener('DOMContentLoaded', loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded (w, fn) {
      var d = w.document,
        done = false,
        init = function () {
          if (!done) {
            done = true
            fn()
          }
        }
      var polling = function () {
        try {
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        init()
      }
      polling()
      d.onreadystatechange = function () {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }
  var before = function (el, target) {
    target.parentNode.insertBefore(el, target)
  }
  var prepend = function (el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg () {
    var div, svg
    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }
  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write('<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>')
    } catch (e) {
      console && console.log(e)
    }
  }
  ready(appendSvg)
})(window)
