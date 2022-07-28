<script setup>


import Comp1 from '../components/Comp1.vue';

import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
 const route = useRoute()
  watch(
      () => route.params.id,

    )


const msgArr = {
  
  info: {
    nama: 'feod',
    pro: 'dudec'
  },

  content: {
    color: ['white', 'black', 'zircon', 'crema'],
    weight: 100
  }

};

// const id = route.params.id;



</script>

<template >

  <div class="nav">
    <router-link class="rtl" :to="{
     name: 'Prod',  params: {id : 0,
      msg : (msgArr.info.nama + ' | ' + msgArr.content.color[0]) }
  }">PROD |</router-link>
    <router-link class="rtl" :to="{
      name: 'Prod', params: {id : 1,
      msg : (msgArr.info.nama + ' | ' + msgArr.content.color[1]) }
 }">PROD-a |</router-link>
    <router-link class="rtl" :to="{
      name: 'Prod', params: {id : 2,
      msg : (msgArr.info.nama + ' | ' + msgArr.content.color[2]) }
 }">PROD-b |</router-link>
  </div>

  <!-- <div class="nav">
    <router-link v-for="(item, index) in 3" :key="index" class="rtl" exact
     :to="{
     name: 'Prod',
      params: {id : index,
      msg : (msgArr.info.nama + ' -|- ' + msgArr.content.color[index]) }

      }" >PROD {{item}}| {{item.id}}</router-link>

  </div> -->

    <div class="Product">
      <h1>---Product  </h1>
      <router-view ></router-view>

    </div>

<!-- <Comp1></Comp1> -->
</template>

<style lang="scss">

.rtl{
  color: rgb(17, 22, 97);
  font-weight: 700;
  padding: 6px;
}
.nav{

}
</style>
