<template>
  <div class="friends-page">
    <div class="friends-page__block" v-for="index in friendList" :key="index">
      <img :src=index.picture>
      <h3>{{index.name}}</h3>
      <p>{{index.email}}</p>
      <hr/>
      <p>{{index.address}}</p>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
export default {
  name: "friends",
  data() {
    return {
      friendList: []
    };
  },
  mounted() {
    this.getFriends();
  },
  methods: {
    getFriends: function() {
      this.$http
        .get("http://www.json-generator.com/api/json/get/cdXzYYQMOa?indent=2")
        .then(
          response => {
            var rest = response.data;
            rest.forEach(element => {
              this.friendList.push(element);
            });
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
