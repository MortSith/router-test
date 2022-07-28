<script setup>


const props =  defineProps({
  id : String,
  msg: String

});
// const props = ['id'];


const activeColor = (a) => {

  if(a == 0) {return 'black'};
  if (a == 1) { return 'brown'};
  if (a == 2) { return 'green'};
};

function log() {
  console.log(activeColor)
}



// import Comp1 from '../components/Comp1.vue';
// const id = $route.params.id;



</script>

<template >
<h1>{{activeColor($route.params.id)}}</h1>
<button @click="log">log</button>
    <div class="Product">
      <h1>Prod 000 {{$route.params.id}}</h1>
      <span class="sqr" :style="{ background: activeColor($route.params.id) }"></span>
    </div>

<h1 class="r01">{{$route.params.msg}}</h1>

</template>

<style lang="scss">
.sqr{

  display: block;
  width: 200px;
  height: 200px;
  border: 1px solid #000;
  margin-left: 10px;
  // background: brown;
}
.r01{
  text-align: right;
}
</style>
