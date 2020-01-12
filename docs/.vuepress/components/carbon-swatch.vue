<template>
  <components
    :is="tagName"
    class="carbon-swatch"
  >
    <div class="carbon-color" :style="{backgroundColor: color}"></div>
    <div class="carbon-color-text">{{color}}</div>
  </components>
</template>

<script>
export default {
  name: 'Swatch',
  props: {
    color: {
      type: String,
      default: ''
    },
    tagName: {
      type: String,
      default: 'div'
    }
  }
}
</script>

<style lang="scss">
.carbon-swatch{
  display: flex;
  width: max-content;
  border-radius: 4px;
  overflow: hidden;
  .carbon-color{
    width: 24px;
    height: 24px;
  }
  .carbon-color-text{
    line-height: 24px;
    font-size: 14px;
    color: #333;
    background-color: #F1F1F1;
    padding: 0 4px;
    font-weight: 600;
  }
}
</style>
