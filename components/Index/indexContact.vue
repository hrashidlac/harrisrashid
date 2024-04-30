<template>
  <div class="trigger mt-64 h-screen">  
    <div class="text">
      <div class="mb-2 text-lg lg:text-xl uppercase text-white font-dela">Another Section</div> 
      <div class="h-1 w-full border-solid border-0 border-t border-white"></div>

      
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    ease: "power1",
    scrub: 1,
    pin: true,
    //markers: true
  }
});
tl.to(".text", {y: -50, opacity:1, duration: 1})
})
</script>

<style scoped>
.out{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
