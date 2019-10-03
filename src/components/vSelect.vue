<template>
    <div class="component">
        <div class="component__child-element" @click="showOptions">
            <slot>Select</slot>
        </div>
        <div class="select__options-container" v-if="showState">
            <p class="select__option" v-for="(option, index) in list" :key="index">
                {{option}}
            </p>
        </div>
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
            showState: false
        }
    },
    methods: {
        showOptions: function() {
            this.showState = !this.showState
        }
    }
}
</script>