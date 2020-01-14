<template>
  <i :class="classes" :style="styles"></i>
</template>

<script>
const prefixClass = 'carbon-icon'

export default {
  name: 'Icon',
  props: {
    type: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    size: {
      type: [Number, String],
      default: ''
    }
  },
  computed: {
    classes () {
      return [
        prefixClass,
        `${prefixClass}-${this.type}`
      ]
    },
    styles () {
      let style = {}

      if (this.color) {
        style.color = this.color
      }

      if (this.size) {
        style['font-size'] = typeof this.size === 'number'
          ? this.size + 'px'
          : this.size
      }

      return style
    }
  }
}
</script>

<style>

</style>
