<template>
  <div class="h-screen w-full bg-fuchsia-950 flex justify-center items-center">
    <h1 class="text-white text-8xl">Harris Rashid</h1>
  </div>
  <div class="h-screen w-full bg-red-950 flex justify-center items-center">
    <h2 class="header-2  text-white text-8xl">A fresh start</h2>
  </div>
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()
onMounted( () => {
  // Header shrinking
  $gsap.to(".header-2", { rotation: 27, x: 100, duration: 1 });

})
</script>

<style scoped>
div, h1 {
  font-family: Roboto Serif, sans-serif;
}
</style>
