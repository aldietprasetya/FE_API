<template>
  <div>
    <h1>Welcome to our Country!</h1>
    <vSelect v-bind:propsList="countryList"/>
  </div>
</template>

<script>
export default {
    name: "country",
    data() {
        return {
            countryList:[]
        }
    },
    mounted: function() {
        this.getDataCountry();
    },
    methods: {
        getDataCountry: function() {
            this.$http.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
                var rest = response.data
                rest.forEach(element => {
                    this.countryList.push(element.name)
                });
			}, err => {
				this.showMessageError(err)
			});
        }
    }
}
</script>

<style>

</style>
