<template>
  <span style="margin: 0; padding: 0;">
    <i v-if="iconType"
       class="iconfont"
       :class="iconName"
       :style="initStyle"
       @click="handleClick"></i>
    <svg v-else
         class="svgIcon"
         :style="initStyle"
         aria-hidden="true"
         @click="handleClick">
      <use :xlink:href="iconName"></use>
    </svg>
  </span>
</template>

<script>
export default {
  name: 'IconFont',
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
    iconType () {
      return this.type === 'icon' ? true : false
    },
    iconName () {
      return this.type === 'icon' ? 'icon-' + this.name : `#icon-${this.name}`
    },
    initStyle () {
      let style = {}

      if (this.color) {
        style.color = '#' + this.color
      }

      if (this.size) {
        style.fontSize = this.size + 'px'
      }

      return style
    }
  },
  methods: {
    handleClick (event) {
      this.$emit("on-click", event);
    }
  }
}
</script>

<style scoped>
.svgIcon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
