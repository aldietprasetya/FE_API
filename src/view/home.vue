<template>
  <div>
      welcome from home !
      <vSelect v-bind:propsList="homeList"/>
  </div>
</template>

<script>
import vSelect from "../components/vSelect";
export default {
    name: "home",
    components: {
        vSelect
    },
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