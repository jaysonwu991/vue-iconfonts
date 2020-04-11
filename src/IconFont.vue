<template>
  <span style="margin: 0; padding: 0;">
    <span v-if="iconType" :class="iconName" :style="initStyle" @click="handleClick"></span>
    <svg v-else class="svgIcon" :style="initStyle" aria-hidden="true" @click="handleClick">
      <use :xlink:href="iconName" />
    </svg>
  </span>
</template>

<script>
export default {
  name: "IconFont",
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: false
    },
    size: {
      type: String,
      required: false
    }
  },
  computed: {
    iconType() {
      return this.type === "icon"
    },
    iconName() {
      return this.type === "icon" ? `iconfont icon-${this.name}` : `#icon-${this.name}`
    },
    initStyle() {
      let style = {}

      if (this.type !== "icon") {
        style = {
          width: "1em",
          height: "1em",
          "vertical-align": "-0.15em",
          fill: "currentColor",
          overflow: "hidden"
        }
      }

      if (this.color) {
        style.color = "#" + this.color
      }

      if (this.size) {
        style.fontSize = this.size + "px"
      }

      return style
    }
  }
}
</script>
