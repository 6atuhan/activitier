<template>
<div v-for="post in posts" :key="post.id" :class="post.isActive ? 'opacity-100' : 'opacity-30 pointer-events-none cursor-not-allowed select-none '"   class=" bg-[#F2E8D5] mb-4 border border-black rounded-xl h-[400px] w-64 md:h-52 md:w-[480px] p-4 shrink-0 relative flex flex-col md:flex-row gap-2 justify-center items-center ">
    <div  class=" font-Quicksand  z-50  button text-white !py-0 bg-blue-100  absolute left-0 -top-3 ml-4 flex items-center justify-center gap-2 ">
        {{ post.selectedGame }}
        <div class="button w-4 h-4 p-0 bg-pink-600 "></div>
        <h3>{{ post.date }}</h3>

    </div>

    <div id="harita" :class="store.state.boy ? '!bg-[#51A5DB]':'!bg-[#E6686F]'" class="bg-[#51A5DB] h-full w-[222px] md:w-[192px] md:h-[174px] overflow-hidden   rounded-xl border border-black self-center flex items-center justify-start flex-col  box-border border-collapse hover-anim">

            <img class="w-full h-[90%] object-cover  m-0 p-0  transition-all border-b border-black rounded-t-lg " src="/src/assets/google-map.png" alt="">
            <div class="flex items-center justify-center w-full font-Baloo-Regular text-sm select-none">
                <p class="text-ellipsis w-1/2 overflow-hidden text-left px-1">
                    {{ post.city }}
                </p>

                <p class="text-ellipsis w-1/2 overflow-hidden text-right px-1">

                    {{ post.state }}
                </p>
            </div>
            
            

        </div>
    <div id="bilgiler" :class="store.state.boy ? '!bg-[#51A5DB]':'!bg-[#E6686F]'"  class="bg-[#51A5DB] h-[292px] w-[222px] md:w-[292px] md:h-[174px] rounded-xl border border-black self-center flex flex-col gap-2 py-2 hover-anim">

        
        <div id="profile" class=" flex w-full gap-2 items-center justify-start px-2 ">
            <div class="bg-white h-12 w-12 rounded-full border border-black text-center text-[36px]  overflow-hidden hover-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 box-border cubic-bezier">
                <img src="/src/assets/logo-pp.png" class="object-cover	 h-12 w-12 	" alt="profilePhoto">

            </div>
            <div class=" font-Baloo-Regular">
                {{ post.ownerName }} 
            </div>
            <p class="p-2 flex items-center justify-center gap-1 select-none group font-Quicksand font-medium ">
                {{ post.ownerPoint }}

             <svg fill="#E04A4F" class="group-hover:scale-125 cubic-bezier"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>

            </p>
        </div>

        <div id="needs" class="  flex w-full gap-2 items-center justify-start px-2 font-Quicksand font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="20" height="20"><path d="M24,23.5c0,.28-.22,.5-.5,.5-1.27,0-1.9-.96-2.42-1.72-.53-.79-.89-1.28-1.58-1.28-.77,0-1.29,.61-1.89,1.32-.67,.79-1.42,1.68-2.65,1.68s-1.97-.89-2.62-1.68c-.58-.71-1.08-1.32-1.84-1.32-.71,0-1.33,.53-2.04,1.15-.95,.82-2.13,1.85-3.96,1.85-2.48,0-4.5-2.02-4.5-4.5s2.02-4.5,4.5-4.5h1c.28,0,.5,.22,.5,.5s-.22,.5-.5,.5h-1c-1.93,0-3.5,1.57-3.5,3.5s1.57,3.5,3.5,3.5c1.46,0,2.4-.82,3.31-1.6,.79-.69,1.61-1.4,2.69-1.4,1.24,0,1.97,.89,2.62,1.68,.58,.71,1.08,1.32,1.84,1.32s1.29-.61,1.89-1.32c.67-.79,1.42-1.68,2.65-1.68s1.9,.96,2.42,1.72c.53,.79,.89,1.28,1.58,1.28,.28,0,.5,.22,.5,.5Z"/><path d="M23.23,.77c-1.03-1.03-2.71-1.03-3.74,0L9.03,11.24c-.66,.66-1.03,1.54-1.03,2.48v1.79c0,.28,.22,.5,.5,.5h1.79c.94,0,1.81-.36,2.48-1.03L23.23,4.51c1.03-1.03,1.03-2.71,0-3.74ZM12.06,14.27c-.47,.47-1.1,.73-1.77,.73h-1.29v-1.29c0-.67,.26-1.3,.73-1.77L17.98,3.69l2.32,2.32L12.06,14.27ZM22.52,3.8l-1.5,1.5-2.32-2.32,1.5-1.5c.64-.64,1.68-.64,2.32,0,.64,.64,.64,1.68,0,2.32Z"/></svg>

            <marquee onmouseover="this.stop()" onmouseout="this.start()" >{{ post.note }}</marquee>
        </div>

        <!-- TAGS  -->
        <div id="tags" class=" font-Quicksand font-medium h-full flex w-full gap-2 pt-2 items-center flex-wrap justify-center overflow-scroll  overflow-x-hidden scrool-hide">
            <div v-for="tag in post.activeTags" :key="tag" class="h-6  hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                <div :class="tag == 'money' ? 'bg-green-400': tag== 'game' ? 'bg-blue-400':'bg-zinc-400'"  class="border border-black  rounded-full aspect-square h-4"></div> {{ tag }}
            </div>
            <div  class="h-6  hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                <div :class="post.player == '1p' ? 'bg-pink-400': post.player== '2p' ? 'bg-pink-500':'bg-pink-600'" class="border border-black rounded-full aspect-square h-4"></div> {{ post.player }}
            </div>

        </div>


    </div>
    <div id="buttons" class="flex absolute -bottom-6 right-0 w-full gap-2 items-center justify-end px-2">
        <div @click="goMessage" class="bg-blue-300 hover:bg-blue-500 group font-bold cursor-pointer select-none text-xl border border-black w-8 h-8 text-center rounded-lg hover-anim">
            <svg class="group-hover:fill-white mx-auto mt-1" fill="#000" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"/></svg>

        </div>
        <div class="bg-yellow-300 hover:bg-yellow-500 group font-bold cursor-pointer select-none text-xl border border-black w-8 h-8 text-center rounded-lg hover-anim">
            <svg class="group-hover:fill-white mx-auto mt-1" fill="#000" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z"/><rect x="11" y="17" width="2" height="2" rx="1"/></svg>

        </div>
    </div>
</div>

</template>
<script setup>
import router from "/src/router"
import store from '/src/store';
//#region variables

//#endregion



//#region Functions
//pull object from explore page
defineProps({
posts:Object
})
//go message page
const goMessage=()=>{
router.push("message")
}

//#endregion



//#region Firebase Functions

                                                                                                             

//#endregion





</script>
