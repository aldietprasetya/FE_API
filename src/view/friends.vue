<template>
  <div class="friends-page">
    <div class="friends-page__block" v-for="(item, index) in friendList" :key="index">
      <p>{{index}}</p>
      <img :src=item.picture>
      <h3>{{item.name}}</h3>
      <p>{{item.email}}</p>
      <hr/>
      <p class="friends-page__block__address-info">{{item.address}}</p>
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
              console.log(element.index);
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
