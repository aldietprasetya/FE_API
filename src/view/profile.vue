<template>
  <div>
    hello from profile !
    <vSelect v-bind:propsList="profileList" />
  </div>
</template>

<script>
export default {
    name: "profile",
    data() {
        return {
          profileList: [
            "profile item 1",
            "profile item 2",
            "profile item 3"
          ]
        }
    }
}
</script>

<style>

</style>
