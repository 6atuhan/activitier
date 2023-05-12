<template>
<div @click="card.open = true" :class="card.open ? 'w-[300px] h-fit overflow-auto py-4 saturate-150':' saturate-50 '" class="hover-animshrink-0 relative px-4 border group  border-black rounded-lg w-full h-16 overflow-hidden font-Quicksand bg-[#EADDAC] flex justify-between items-center flex-col">
        <!-- INFOS -->
        <div :class="card.open ? 'py-4 ':'py-0'" class="w-full h-full flex items-center justify-center flex-wrap flex-row gap-2 ">
          <div :class="card.open ? 'w-96 hover-anim rounded-lg border border-black bg-white ':'w-full'" class="  flex flex-wrap flex-col items-center justify-center pr-1 h-20 ">
            <img :class="card.open ? 'hover-anim border border-black rounded-lg w-16 h-16':'w-32 h-32'" class=" !transition-all bg-white object-cover  -ml-1 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBhVV_zd9fbcJANDESPhLGiHROK_sbA7GoL7q6MmXrMw&s" alt="">
            <p class="font-bold w-fit h-8 cursor-default text-center self-end">ankara/gölbaşı</p>
            <p class="font-bold w-fit h-8 cursor-default text-center self-end">Tomorrow/basketball</p>
          </div>
          <div class="basis-full flex items-center justify-center flex-col">
           <h1 class="text-center font-bold">batuhan boran</h1>
           <p class="p-2 flex items-center justify-center gap-1 select-none group font-Quicksand font-medium ">
                  2.0
  
               <svg fill="#E04A4F" class="group-hover:scale-125 cubic-bezier"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>
  
              </p>
           <p class="text-center h-20 w-full md:w-96  px-4 overflow-y-scroll hover-anim border border-black rounded-lg bg-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        
          <div class="basis-full  flex items-center justify-evenly flex-wrap gap-2">
              <div class="h-6  hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                  <div  class="border bg-green-500 border-black  rounded-full aspect-square h-4"></div> money
              </div>
              <div class="h-6  hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                  <div  class="border bg-fuchsia-500 border-black  rounded-full aspect-square h-4"></div> money
              </div>
              <div class="h-6  hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                  <div  class="border bg-blue-500 border-black  rounded-full aspect-square h-4"></div> money
              </div>
              <div  class="h-6  hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                  <div class="border bg-pink-400 border-black rounded-full aspect-square h-4"></div> 1p
              </div>
          </div>
        </div>
        <!-- BUTTONS -->
        <div class="w-full flex items-center justify-center gap-5 ">
                    <!-- DISCARD BTN  -->
                    <div @click=" closeCard"  class="border font-semibold border-black rounded-full hover-anim cursor-pointer w-24 h-10 hover:bg-red-500 bg-red-300 group text-white flex items-center justify-center ">               
                      <p>discard</p>
                    <svg class=""  width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="m5 5 14 14M5 19 19 5"></path>a
                  </svg>
                </div>
                <!-- ACCEPT BTN -->
                <div @click=" closeCard"  class="border font-semibold border-black rounded-full hover-anim cursor-pointer w-24 h-10 hover:bg-green-500 bg-green-300 group text-white flex items-center justify-center ">              
                  <p>accept</p>
                    <svg class=""  width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="m3 12 6 6L21 6"></path>
                  </svg>
                </div>
        </div>

  
</div>
</template>

<script setup>
import { reactive } from "vue";


const card = reactive({
  open:false,
})

const closeCard =()=>{
  setTimeout(() => {
    card.open= false
  }, 500);
}
</script>