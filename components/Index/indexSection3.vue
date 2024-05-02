<template>
  <div class="trigger text-white font-jojo lg:h-screen mt-32 pb-12">  
    <div class="text opacity-0">
      <div class="mb-2 text-center text-xl lg:text-2xl text-white font-dela uppercase">Holla At Me</div> 
      <div class="h-1 w-full border-solid border-0 border-t border-white"></div>
      <div class="mt-16">
        <form class="w-full lg:w-1/3 mx-auto" name="contact" netlify>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-white md:text-right mb-1 md:mb-0 pr-4 uppercase" for="inline-full-name">
                Your name
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none border-black rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-red" id="inline-full-name" type="text" value="">
            </div>
          </div>
          <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
              <label class="block text-white md:text-right mb-1 md:mb-0 pr-4 uppercase" for="inline-password">
                E-Mail Address
              </label>
            </div>
            <div class="md:w-2/3">
              <input class="bg-gray-200 appearance-none  border-black rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-red" id="inline-password" type="password" placeholder="">
            </div>
          </div>
          <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
              <button class="uppercase shadow bg-black hover:bg-red focus:shadow-outline focus:outline-none text-white font-bold py-2 pt-3 px-4 rounded" type="submit">
                Send Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $gsap } = useNuxtApp()
onMounted( () => {
  let tl = $gsap.timeline({
  scrollTrigger: {
    trigger: ".trigger",
    // start: "top top",
    // end: "top 100px",
    ease: "power1",
    scrub: 1,
    // pin: true,
    //markers: true
  }
});
tl.to(".text", {y: 50, opacity:1, duration: 1})
})
</script>

<style scoped>
.out{ 
  -webkit-text-stroke: 1px white;
  -webkit-text-fill-color: transparent;
}
</style>
