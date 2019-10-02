<template>
  <div id="app">
    Hello from App
    <ul>
      <li>
        <router-link to="/">Go to Home</router-link>
      </li>
      <li>
        <router-link to="/friends">Go to friends</router-link>
      </li>
      <li>
        <router-link to="/profile">Go to profile</router-link>
      </li>
    </ul>
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

<style>
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900');
  @import url("./assets/css/style.css");
  * {
    font-family: 'Nunito Sans',sans-serif;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #4d4d4d;
    font-weight: 400;
  }
</style>
