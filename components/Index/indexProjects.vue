<template>
  <div class="mt-32">  
    <div class="mb-2 out opacity-0 text-lg lg:text-xl uppercase text-white font-dela ">Recent Projects</div> 
    <div class="h-1 out w-full border-solid border-0 border-t border-white opacity-0"></div>
  </div>
</template>


<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline().delay(2);
  tl.to(".out", { 
    y: -30, 
    opacity: 1,
    ease: "power1.out",
    duration: 1, 
    stagger: 0.25
  });  
})
</script>

<style scoped>
/* .out{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
} */
</style>
