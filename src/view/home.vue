<template>
  <div>
    <h1>welcome from home !</h1>
    <vSelect v-bind:propsList="homeList"/>
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
}
</script>

<style>

</style>
