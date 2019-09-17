<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900');
  * {
    font-family: 'Nunito Sans',sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #4d4d4d;
    font-weight: 400;
  }
</style>
