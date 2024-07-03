<template>
  <div class="p-8 lg:p-16 header"> 
    <div class="container">
      
      <!-- <indexForm/>  -->
      <!-- <nav class="text-white text-center">
        <button id="section1Btn" @click="section1">Projects</button>
        <button id="section2Btn" @click="section2">Experience</button>
        <button id="section3Btn" @click="section3">Contact</button>
      </nav> -->
      <indexSection1 id="section1"/>
      <!-- <indexSection2 id="section2"/> -->
      <!-- <indexSection3 id="section3"/> -->
    </div>
    
  </div>
</template>
<script setup lang="ts">
  const { $gsap } = useNuxtApp()
  const section1 = () => $gsap.to(window, { duration: .7, scrollTo: { y: "#section1", offsetY: 150}, ease: "power2.out" });
  const section2 = () => $gsap.to(window, { duration: .7, scrollTo: { y: "#section2", offsetY: 150}, ease: "power2.out"  });
  const section3 = () => $gsap.to(window, { duration: .7, scrollTo: { y: "#section3", offsetY: 150}, ease: "power2.out"  });
</script>

<style scoped>
.header{

    background: linear-gradient(228deg, #ff0000, #f0e002, #106b07, #09f7ee);
    background-size: 800% 800%;

    -webkit-animation: AnimationName 16s ease infinite;
    -moz-animation: AnimationName 16s ease infinite;
    animation: AnimationName 16s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
@keyframes AnimationName {
    0%{background-position:0% 90%}
    50%{background-position:100% 11%}
    100%{background-position:0% 90%}
}
  /* background: url("/bg.jpg") center center;
  background-size:cover;
  background-attachment: fixed; */
nav {
  position:fixed;
  top:0;
  width:100%;
  margin:0;
  padding:10px;
}
</style>
