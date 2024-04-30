<template>
  <div class="mt-16 border-solid border-0 border-t border-white text-lg lg:text-2xl uppercase text-white font-jojo pt-28">  
    <div class="mb-2 out opacity-0">Creative Technologist.</div> 
    <div class="mb-2 out opacity-0">Digital Strategist.</div> 
    <div class="mb-2 out opacity-0">Web Developer Extraordinaire.</div>
    <div class="text-sm mt-8 out opacity-0">
      <a href="mailto:hello@harrisrashid.com" class="hover:underline">hello@harrisrashid.com</a>
    </div>
  </div>
</template>


<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline().delay(1);
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
.out{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
