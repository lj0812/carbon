<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/swatch">swatch</router-link></li>
        <li><router-link to="/icon">icon</router-link></li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {}
  },
  mounted: function () {},
  beforeDestroy: function () {},
  methods: {}
}
</script>

<style lang="scss">
nav {
  margin-bottom: 40px;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    display: inline-block;
  }
  li + li {
    border-left: solid 1px #BBBBBB;
    padding-left: 10px;
    margin-left: 10px;
  }
}
.container {
  padding: 10px 40px 0;
}
.v-link-active {
  color: #BBBBBB;
}
</style>
