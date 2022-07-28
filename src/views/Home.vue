<script setup>
    import { ref } from 'vue'
import HelloWorld from '../components/HelloWorld.vue';
    defineProps({
      msg: String
    })
    const count = ref(0)

</script>

<template >
    <div class="home">
        <h1>HOME</h1>
    </div>
    <HelloWorld></HelloWorld>

</template>

<style lang="scss">

</style>
