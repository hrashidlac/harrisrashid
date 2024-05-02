<template>
  <div class="mt-16 border-solid border-0 border-t border-white/50 font-jojo pt-28">  
    <div class="w-full lg:w-2/3 lg:mx-auto bg-white/20 rounded-md p-8 lg:p-12 lg:pb-0 shadow-2xl">
      <div class="grid md:grid-cols-12 gap-12">
        <div class="lg:col-span-4">
          <img src="/headshot_harris_rashid.jpg" class="bg-white rounded-md p-4 w-full contrast-100 saturate-100 opacity-0 profile">
        </div>
        <div class="lg:col-span-8 text-lg lg:text-xl uppercase text-black lg:pt-12">
          <div class="mb-2 fade out opacity-0">Creative Technologist.</div> 
          <div class="mb-2 fade out opacity-0">Digital Strategist.</div> 
          <div class="mb-2 fade out opacity-0 ">
            <div class="inline-block mr-2">Web Developer</div>
            <div class="inline-block flip">Extraordinaire</div>.
          </div>
          <div class="text-sm mt-2 fade opacity-0">
            <a href="mailto:hello@harrisrashid.com" class="hover:underline text-white">hello@harrisrashid.com</a>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>
<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline().delay(1);
  tl.to(".fade", { 
    y: -30, 
    opacity: 1,
    ease: "power1.out",
    duration: 1, 
    stagger: 0.25
  }); 
  let tl2 = $gsap.timeline().delay(4);
  tl2.to(".flip", { 
    scaleX: "1",
    scaleY: "-1",
    transformOrigin: "center 42%",
    ease: "power1.out",
    duration: 1.5,
    repeat: -1,
    repeatDelay:1.5,
    yoyo: true
  }); 
  let tl3 = $gsap.timeline().delay(2);
  tl3.to(".profile", { 
    y: -75, 
    opacity: 1,
    ease: "power1.out",
    duration: 1, 
  }); 
})
</script>

<style scoped>
.out{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
