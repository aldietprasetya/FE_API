<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
  }
}
</script>

<style lang="scss">
  @import './assets/scss/style';

  * {
    font-family: 'Nunito Sans',sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #4d4d4d;
    font-weight: 400;
  }
</style>
