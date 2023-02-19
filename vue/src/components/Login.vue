<script>
    import AppLayout from "./app-layout.vue";
    export default {
        components: {AppLayout},
        data(){
            return {
                module: 'login'
            }
        }
    }
</script>

<template>
    <app-layout :module="module"></app-layout>
</template>

<style scoped>

</style>
