<template>
  <component :is="tagName" :class="classes" :disabled="isDisabled">

  </component>
</template>

<script>
export default {
  name: 'Button',
  props: {

  },
  computed: {
    isLinkPattern () {
      const { to } = this
      return !!to
    },

    tagName () {
      return this.isLinkPattern ? 'a' : 'button'
    }
  }
}
</script>

<style>

</style>
