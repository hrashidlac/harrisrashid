<template>
  <div class="section-2 text-2xl uppercase text-white font-jojo lg:h-screen">  
    <div class="text opacity-0">
      <div class="mb-2 text-lg lg:text-xl uppercase text-white font-dela">Recent Projects</div> 
      <div class="h-1 w-full border-solid border-0 border-t border-white"></div>
      <div class="mt-16">
        <div class="grid lg:grid-cols-3 gap-12 pt-4 out">
          <img src="https://via.placeholder.com/900x900#EEE" alt="" class="col-span-1">
          <img src="https://via.placeholder.com/900x900#EEE" alt="" class="col-span-1">
          <img src="https://via.placeholder.com/900x900#EEE" alt="" class="col-span-1">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline({
  scrollTrigger: {
    trigger: ".section-2",
    // start: "top top",
    // end: "top 100px",
    ease: "power1",
    scrub: 1,
    // pin: true,
    //markers: true
  }
});
tl.to(".text", {y: 50, opacity:1, duration: .5})
})
</script>

<style scoped>
.out{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
