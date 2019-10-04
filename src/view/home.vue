<template>
  <div>
    <h1>welcome from home !</h1>
    <div class="login">
      <label for="title">Username</label>
      <input type="text" placeholder="Username" id="username" value="" required>
      <label for="title">Password</label>
      <input type="password" placeholder="Password" id="username" value="" required>
      <button type="submit" @click="signin">Sign in</button>
    </div>
  </div>
</template>

<script>
export default {
    name: "home",
    data() {
        return {
          homeList: [
            "home item 1",
            "home item 2",
            "home item 3"
          ]
        }
    },
    methods: {
      signin: function() {
        this.$router.push("profile")
      },
    }
}
</script>

<style>

</style>
