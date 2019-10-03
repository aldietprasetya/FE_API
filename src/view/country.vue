<template>
  <div>
    Welcome to our Country!
    <!-- <vSelect v-bind:propsList="countryName">Select below</vSelect> -->
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
    name: "cancel",
    data() {
        return {
            countryName:[],
            name:[]
        }
    },
    mounted: function() {
        this.getDataCountry();
        console.log(this.countryList);
    },
    methods: {
        getDataCountry: function() {
            this.$http.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
                const test = response
                console.log(test)
			}, err => {
				this.showMessageError(err)
			});
        }
    }
}
</script>

<style>

</style>
