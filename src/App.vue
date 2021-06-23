<template>
  <div id="app" class="relative">
    <div class="p-2 bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-50 uppercase flex justify-center ">
      <router-link class="text-2xl m-1.5 hover:bg-blue-700 hover:text-gray-50 p-2 rounded-lg transition duration-300 ease-in-out" to="/">Inicio</router-link>
      <router-link class="text-2xl m-1.5 hover:bg-blue-700 hover:text-gray-50 p-2 rounded-lg transition duration-300 ease-in-out" to="/rates">Precios</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  min-width: 400px;
}
.blub {
  width: 150px;
  transform: rotate(-20deg);
  top: -25px;
  left: 5px;
  z-index: 0;
}
</style>
