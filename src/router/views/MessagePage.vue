<template>
<div class="container overflow-x-hidden !font-Quicksand font-bold w-full md:!flex-nowrap flex-wrap-reverse mx-auto p-4  flex flex-row  justify-center overflow-hidden gap-4">
            
    <!-- messagebox -->
    <div class=" relative w-full h-[450px] border border-black bg-gradient-to-b from-blue-400 px-4 via-white rounded-lg to-blue-100  flex flex-col flex-wrap ">

        <!-- messagebox header -->
                <div class="text-xl h-6 w-full font-bold text-white px-4 absolute -ml-4 border-zinc-300 border-b flex flex-row items-center justify-between"><p>karşıdaki adam / ankara</p> 
                    <div class="flex flex-row items-center text-xs justify-center rounded-b-md self-start border-b border-l border-r border-black">
                        <div class=" text-center  hover:bg-yellow-500 w-8 h-4 rounded-bl-md transition-all cursor-pointer">!</div>
                        <div class=" text-center  hover:bg-red-500 w-8 h-4 rounded-br-md transition-all cursor-pointer">X</div>
                    </div>
                </div>
                <!-- profile pics -->
                <div class="   h-1/3 w-full md:h-full md:w-1/5 shrink-0 flex flex-row md:flex-col justify-between pb-4 pt-20 items-center">
                    <div class=" aspect-square h-28 border border-black bg-gradient-to-t from-red-400  to-white  rounded-3xl bg-white flex justify-center items-center">
                        <div class=" aspect-square h-24 border border-black rounded-lg bg-white"></div>
                    </div>
                    <div class=" aspect-square h-28 border border-black bg-gradient-to-t from-green-400  to-white  rounded-3xl bg-white flex justify-center items-center">
                        <div class=" aspect-square h-24 border border-black rounded-lg bg-white"></div>
                    </div>
                </div>
                <!-- messages -->
                <div class="  h-2/3 md:h-full  md:w-4/5  flex flex-col justify-between">

                        <ul class=" md:mt-20 md:my-0 my-10 mt-10 border-b flex items-start flex-col justify-start w-full h-full overflow-x-hidden px-10  ">
                            <li>mesaj o yolladı ilk</li>
                            <li class="self-end">mesaj ben yolladım</li>
                            <li>mesaj o yolladı</li>
                            <li v-for="aa in 23" :key="aa">mesaj o yolladı</li>

                            <li class="self-end">mesaj ben yolladım</li>
                            <li class="self-end">mesaj ben yolladım son</li>
                        </ul>
                        <!-- type message -->
                    <div class="text-area   shrink-0  flex flex-row relative overflow-hidden">
                        <input type="text" @keydown="isPress =true"  @keyup="isPress=false" class="w-full pr-16 resize-none m-4 border-black border rounded-r-xl rounded-tl-xl   focus:outline-0 p-4">
                        <div :class="isPress ? '-translate-x-1 -translate-y-1' :'' " class="duration-700 absolute -bottom-7 -right-8  w-28 h-28 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 cubic-bezier">
                            <img v-if="!isPress" class="closed-cat  drop-shadow-xl cubic-bezier !z-50" src="/src/assets/cat_closed.png" alt="">
                            <img v-if="isPress" class="opened-cat   drop-shadow-xl cubic-bezier !z-50" src="/src/assets/cat_opened.png" alt="">
                        </div>
                    </div>
                </div>

    </div>

     <!-- side menu  -->
    <div class=" w-[300px] h-[450px]  bg-gradient-to-b from-blue-400 to-blue-100 rounded-lg">
                <div class="border border-black h-full w-full flex flex-col rounded-lg ">
                    <h1 class="text-white font-bold before:content-['■'] border-b h-6 px-2">  Activitier <span class="font-thin">Messenger</span></h1>
                    <div class="profile border border-black bg-gradient-to-b from-blue-300 to-blue-100 h-28  m-4 mb-0 rounded-lg flex flex-row items-center just-start px-2 gap-2">
                        <div class=" aspect-square h-4/5 border border-black rounded-lg bg-white"></div>
                        <h1 class="after:content-['#2232'] after:font-bold after:opacity-50">batuhan</h1> 
                    </div>
                    <div class="friends border border-black bg-blue-100 h-full m-4 rounded-lg  ">
                        <div class=" w-full h-3">
                            <ul class="flex flex-row items-center justify-end text-center text-green-500 font-bold text-3xl gap-4 pr-4">
                                <li class="cursor-pointer">-</li>
                                <li class="cursor-pointer">+</li>

                            </ul>
                        </div>
                        <details class=" pt-4">
                            <summary class="">
                                <p class="font-bold cursor-pointer text-lg hover:bg-blue-300 pl-4">Last Messages</p>
                            </summary>
                            <ul class="overflow-scroll h-52 overflow-x-hidden">
                                <li class="flex flex-row flex-wrap cursor-pointer py-1 hover:bg-blue-300 items-center gap-2 justify-start">
                                   <div class="w-4 h-4 rounded-full border border-black bg-green-500 ml-4"></div> batuhan
                                </li>
                                <li class="flex flex-row flex-wrap cursor-pointer py-1 hover:bg-blue-300 items-center gap-2 justify-start">
                                   <div class="w-4 h-4 rounded-full border border-black bg-red-500 ml-4"></div> mustafa
                                </li>

                            </ul>
                        </details>
                    </div>
                </div>
    </div>
</div>


</template>
<script setup>
import { ref } from "vue"


//#region variables
//variable for cat anim.
const isPress=ref(false)
//#endregion



//#region Functions

//#endregion



//#region Firebase Functions

                                                                                                             

//#endregion



</script>



<style scoped>
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}


</style>