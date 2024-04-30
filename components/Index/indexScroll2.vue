<template>
  <div class="trigger bg-black text-2xl uppercase text-white font-jojo h-screen flex items-center justify-center">  
    <div class="text opacity-0">
      <div class="text1 mb-2 out">Creative Technologist.</div> 
      <div class="text2 mb-2 out">Digital Strategist.</div> 
      <div class="text3 mb-2 out">Web Developer Extraordinaire.</div>
    </div>
    
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    start: "top top",
    end: "top 800px",
    ease: "power1",
    scrub: 1,
    pin: true,
    //markers: true
  }
});
tl.to(".text", {y: -150, opacity:1, duration: 1})
})
</script>

<style scoped>
.out{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
