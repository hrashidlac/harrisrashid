<template>
  <div class="w-full flex justify-left items-start
   text-5xl font-dela uppercase relative block">  
    <div class="title h-16 w-64 text-center overflow-hidden relative">
      <div class="absolute w-full block text-white">
        <span class="letter inline-block">H</span>
        <span class="letter inline-block">a</span>
        <span class="letter inline-block">r</span>
        <span class="letter inline-block">r</span>
        <span class="letter inline-block">i</span>
        <span class="letter inline-block">s</span>
      </div>

      <div class="absolute w-full block text-white">
        <span class="letter2 inline-block">R</span>
        <span class="letter2 inline-block">a</span>
        <span class="letter2 inline-block">s</span>
        <span class="letter2 inline-block">h</span>
        <span class="letter2 inline-block">i</span>
        <span class="letter2 inline-block">d</span>
      </div>
    </div>  
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline({repeat: -1});
  tl.to(".letter", { 
    y: -60, 
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25
  });
  tl.set(".letter", { y: 60});
  tl.to(".letter", { 
    y: -0,
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25
  });

  let tl2 = $gsap.timeline({repeat: -1});
  tl2.set(".letter2", { y: 60});
  tl2.to(".letter2", { 
    y: -0,
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25
  });
  tl2.to(".letter2", { 
    y: -60, 
    ease: "power1.out",
    duration: .8, 
    stagger: 0.25
  });
  
})
</script>

<style scoped>
.letter2{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
