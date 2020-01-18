<template>
  <component :is="tagName" :class="classes" :disabled="isDisabled" v-bind="tagProps">
    <Icon v-if="icon" :type="icon" />
    <slot></slot>
  </component>
</template>

<script>
import Icon from '../icon'

const prefixClass = 'carbon-btn'

export default {
  name: 'Button',
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      validator (value) {
        return ['default', 'primary', 'success', 'warn', 'error'].includes(value)
      },
      default: 'default'
    },
    isDisabled: Boolean,
    size: {
      type: String,
      default: 'normal'
    },
    icon: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    }
  },
  computed: {
    isLinkPattern () {
      const { to } = this
      return !!to
    },

    tagName () {
      return this.isLinkPattern ? 'a' : 'button'
    },

    tagProps () {
      const { isLinkPattern } = this
      const props = {}

      if (isLinkPattern) {
        props.href = this.to
      }

      return props
    },

    classes () {
      const { size, type, isDisabled } = this

      return [
        prefixClass,
        `${prefixClass}-${size}`,
        `${prefixClass}-${type}`,
        {
          disabled: isDisabled
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.carbon-btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  font-size: 14px;
  border: 1px solid transparent;
  border-radius: 4px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  color: #333333;
  // 尺寸
  &.carbon-btn-full {
    width: 100%;
  }
  // 样式
  &.carbon-btn-default {
    border-color: #333333;
    background-color: #FFFFFF;
  }
  &.carbon-btn-primary {
    background-color: #008C8C;
    color: #FFFFFF;
  }
  &.carbon-btn-success {
    background-color: #1AAD19;
    color: #FFFFFF;
  }
  &.carbon-btn-warn {
    background-color: #FFBE00;
    color: #FFFFFF;
  }
  &.carbon-btn-error {
    background-color: #D84E43;
    color: #FFFFFF;
  }
  &.carbon-btn-dashed {
    border-style: dashed;
  }
  &[disabled] {
    cursor: not-allowed;
    opacity: .7;
  }
  &[href] {
    text-decoration: none;
  }
}
</style>
