<template>
  <div class="e-button">
    <button>原生</button>
    <Button>按钮</Button>
    <Button class="ceshi" type="primary">按钮</Button>
    <Button type="success">按钮</Button>
    <Button type="warn">按钮</Button>
    <Button type="error">按钮</Button>
    <Button disabled>按钮</Button>

    <br />

    <Button size="full">按钮</Button>
    <Button icon="play">按钮</Button>
    <Button icon="play" to="/icon">按钮</Button>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
button {
  margin: 10px;
}
</style>
