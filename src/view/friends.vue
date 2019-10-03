<template>
  <div>hello from friends !</div>
</template>

<script>
export default {
  name: "cancel",
  data() {
    return {
      friendList: ["friend item 1", "friend item 2", "friend item 3"]
    };
  },
  mounted() {
    this.getFriends();
  },
  methods: {
    getFriends: function() {
      var path = "file/friends.txt";
      this.$http
        .get("http://www.json-generator.com/api/json/get/cdXzYYQMOa?indent=2")
        .then(
          response => {
            console.log(response.body);
          },
          err => {
            alert("error found, check console");
            console.log("error -> ", err.statusText);
          }
        );
    }
  }
};
</script>

<style>
</style>
