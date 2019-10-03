<template>
  <div>
    hello from friends !
    <vSelect v-bind:propsList="friendList">Select below</vSelect>
  </div>
</template>

<script>
export default {
    name: "cancel",
    data() {
        return {
          friendList: [
            "friend item 1",
            "friend item 2",
            "friend item 3"
          ]
        }
    }
}
</script>

<style>

</style>
