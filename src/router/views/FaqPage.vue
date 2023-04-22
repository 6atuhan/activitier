<template>

<div class="container mx-auto">
    <!-- send q area -->
    <img width="80" height="80" class="-scale-x-100 -mb-4  relative -z-10 mt-16" src="/src/assets/cat_closed.png" alt="">
<div  class="bg-teal-500 border transition-all z-0 relative  border-black rounded-lg p-4 text-white font-Quicksand font-bold">
   <h1 class="text-outline">Tell me What Happened</h1>
    <div class="text-area w-full   h-1/5 text-black items-center justify-center flex flex-row relative overflow-hidden">
        <input type="text" v-model="question"  class="w-4/5 resize-none m-4 border-black border rounded-r-xl rounded-tl-xl  focus:hover-shadow-full cubic-bezier focus:outline-0 p-4">
        <div @click="sendQuestion" class="m-4 select-none cursor-pointer bg-lime-600 hover:bg-lime-500 cubic-bezier hover-anim text-white text-outline  border-black border !rounded-l-xl !rounded-tr-xl   focus:outline-0 p-4">
            Send
            </div>
    </div>

</div>
<!-- faq area -->
<img width="80" height="80" class=" -mb-4 ml-auto relative -z-10 mt-16" src="/src/assets/cat_closed.png" alt="">

    <div  :class="hideQuestion ? 'h-14 overflow-hidden' : 'h-fit'" class="bg-teal-500 border transition-all border-black rounded-lg p-4 text-white font-Quicksand font-bold ">
        <table class="rounded-lg " >
            <tr @click="hideQuestion = !hideQuestion" class="cursor-pointer">
                <th class="pb-4">#</th>
                <th class="pb-4">Your Question</th>
                <th class="pb-4">Our Answer</th>
            </tr>
            <tr v-for="i,index in 10" :key="i" class="even:!bg-cyan-900 odd:!bg-cyan-700 border border-white">
                <td class="px-2">{{ index }}</td>
                <td class=" px-2 py-3"> Officiis, reprehenderit?</td>
                <td class=" px-2 py-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita magnam, laborum sunt aperiam tempora doloribus vero cum? Velit excepturi adipisci aspernatur, eaque ipsa unde alias, hic dolorum amet, id eos quidem architecto molestias iure?</td>
            </tr>

        </table>
    </div>

</div>
</template>

<script setup>
import { ref } from "vue";

//#region variables
const hideQuestion = ref(false)
const question =ref("")
//#endregion



//#region Functions
const sendQuestion=()=>{
    console.log('question : ', question.value)
}

//#endregion



//#region Firebase Functions

                                                                                                             

//#endregion
</script>
