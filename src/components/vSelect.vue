<template>
    <div class="component">
        <div class="component__child-element" @click="showOptions">
            <slot>{{selected}}</slot>
        </div>
        <div class="component__options-container" v-if="showState">
            <p class="component__option" v-for="(option, index) in list" :key="index" v-on:click="selectedItem(option)">
                {{option}}
            </p>
        </div>
        <div class="component__options-container" v-else></div>
    </div>
</template>
<script>
export default {
    name: "vSelect",
    props: {
        propsList: Array
    },
    data() {
        return {
            list: this.propsList,
            showState: false,
            selected : 'Select'
        }
    },
    methods: {
        showOptions: function() {
          this.showState = !this.showState
        },
        selectedItem: function(option) {
            this.selected = option
            this.showState = false
        }
    },
}
</script>
