<template>
  <div>    
    <div id="form"></div>   
  </div>
</template>
<script setup lang="ts">
  const { $postscribe } = useNuxtApp()
  onMounted(() => {
    console.log("mounted")
    const form = () =>  $postscribe('<h1>Hello PostScribe</h1>')
  })
</script>

