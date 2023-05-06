<template>
 <div class="min-h-screen ">
  <div class="container mx-auto ">

    <div
    class="absolute bg-black/40 rounded-full -translate-x-1/2 z-[9999] -translate-y-1/2 pointer-events-none backdrop-blur-sm"
      :style="{
      left:`${x}px`,
      top: `${y}px`,
      width: `100px`,
      height: `100px`}"
    >

    </div>
  </div>
 </div>
</template>
<script setup>
import { useMouse } from '@vueuse/core'

const{x,y} = useMouse()



</script>
