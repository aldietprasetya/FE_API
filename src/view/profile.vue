<template>
  <div>
    hello from profile !
    <div>
      <p>{{profileList.username}}</p>
      <p>birth date</p>
      <p>address</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "profile",
    data() {
        return {
          profileList: {
            "username": "username",
            "birthdate": "23/11/19",
            "address": "address"
          }
        }
    }
}
</script>

<style>

</style>
