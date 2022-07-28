<script setup>


</script>

<template>
 
  <header class="header">
  <div class="header__menu menu">
    <button type="button" class="menu__icon icon-menu"><span></span></button>
    <nav class="menu__body">
      <ul class="menu__list">
        <li class="menu__item"><a href="" class="menu__link">
           <router-link to="/">Home</router-link>
        </a></li>
        <li class="menu__item"><a href="" class="menu__link">
           <router-link  to="/about">About</router-link>
        </a></li>
        <li class="menu__item"><a href="" class="menu__link">
           <router-link to="/Product">Product</router-link>
        </a></li>
        <li class="menu__item"><a href="" class="menu__link">
           <router-link to="/Docs">Документация</router-link>
        </a></li>
        <li class="menu__item"><a href="" class="menu__link">
           <router-link to="/Contacts">Контакты и реквизиты</router-link>
        </a></li>
      </ul>
    </nav>
  </div>

</header>

</template>


<style lang="scss">

.router-link-active{
  text-transform: uppercase;
  background-color: teal;
  color: white;
}
a {
  color: #42b983;
}
</style>
