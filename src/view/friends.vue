<template>
  <div class="friends-page">
    <div class="friends-page__block" v-for="(item, index) in friendListed[0]" :key="index">
      <p>{{item.index}}</p>
      <img :src=item.picture>
      <h3>{{item.name}}</h3>
      <p>{{item.email}}</p>
      <hr/>
      <p class="friends-page__block__address-info">{{item.address}}</p>
    </div>
  </div>
</template>

<script>
import { logMessage } from '../../../sparrow-demo-vue/public/datafeeds/udf/src/helpers';
export default {
  name: "friends",
  data() {
    return {
      friendListeEven: [],
      friendListeOdd: [],
      friendListed: []
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
            var data = [];
            rest.forEach(element => {
              if(element.index%2==0) {
                this.friendListeEven.push(element);
              } else {
                this.friendListeOdd.push(element);
              }
            });
            var even = this.friendListeEven;
            var odd = this.friendListeOdd;
            var concat = even.concat(odd);
            this.friendListed.push(concat);
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
