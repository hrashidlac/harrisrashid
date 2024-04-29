<template>
  <div class="h-screen w-full bg-red flex justify-center items-center
  text-white text-8xl font-dela uppercase">
    <div>  
      <div>
        <span class="letter">H</span>
        <span>arris</span>
      </div>
      <div>
        <span class="letter2">R</span>
        <span>ashid</span>
      </div>
    </div>
  </div>
  
</template>

<script setup lang="ts">
const { $gsap, $ScrollTrigger } = useNuxtApp()
onMounted( () => {
  // Header shrinking
  $gsap.to(".letter", { rotation: 27, duration: 1 });
  $gsap.to(".letter2", { rotation: -27, duration: 1 });
})
</script>

<style scoped>
</style>
