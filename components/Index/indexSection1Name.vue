<template>
  <div class="w-full flex justify-center items-start
   text-3xl lg:text-5xl font-dela uppercase relative block mt-2">  
    <div class="title h-12 lg:h-16 w-64 lg:w-72 text-center relative">
      <div class="absolute w-full block text-white">
        <span class="letter inline-block">H</span>
        <span class="letter inline-block">a</span>
        <span class="letter inline-block">r</span>
        <span class="letter inline-block">r</span>
        <span class="letter inline-block">i</span>
        <span class="letter inline-block">s</span>
      </div>

      <div class="absolute w-full block text-white">
        <span class="letter2 inline-block opacity-0">R</span>
        <span class="letter2 inline-block opacity-0">a</span>
        <span class="letter2 inline-block opacity-0">s</span>
        <span class="letter2 inline-block opacity-0">h</span>
        <span class="letter2 inline-block opacity-0">i</span>
        <span class="letter2 inline-block opacity-0">d</span>
      </div>
    </div>  
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline({repeat: -1, repeatDelay:2.5,}).delay(3);
  tl.to(".letter", { 
    y: -60, 
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25,
    opacity: 0
  });
  tl.set(".letter", { y: 60});
  tl.to(".letter", { 
    y: -0,
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25,
    opacity: 1
  });

  let tl2 = $gsap.timeline({repeat: -1, repeatDelay:2.5,}).delay(3);
  tl2.set(".letter2", { y: 60});
  tl2.to(".letter2", { 
    y: -0,
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25,
    opacity: 1
  });
  tl2.to(".letter2", { 
    y: -60, 
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25,
    opacity:0
  });
  
})
</script>

<style scoped>
.letter, .letter2{
  margin-right:1px;
}
.letter2{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
