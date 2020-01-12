<template>
  <component :is="tagName"
    class="carbon-color-box"
    :style="{
      background: color
    }"
  >
  </component>
</template>

<script>
export default {
  name: 'CarbonColorBox',
  props: {
    color: {
      type: String,
      default: '#008C8C'
    },
    tagName: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss">
i{
  display: inline-block;
  vertical-align: middle;
}
.carbon-color-box{
  width: 20px;
  height: 20px;
  border-radius: 4px;
}
</style>
