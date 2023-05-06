<template>
<div class="container overflow-x-hidden !font-Quicksand font-bold w-full md:!flex-nowrap flex-wrap-reverse mx-auto p-4  flex flex-row  justify-center overflow-hidden gap-4">
            
    <!-- messagebox -->
    <div class=" relative w-full h-[450px] border border-black bg-gradient-to-b from-blue-400 px-4 via-white rounded-lg to-blue-100  flex flex-col flex-wrap ">

        <!-- messagebox header -->
                <div class="text-xl h-6 w-full font-bold text-white px-4 absolute -ml-4 border-zinc-300 border-b flex flex-row items-center justify-between lowercase"><p>{{store.state.messageUser.ownerName}} - {{ store.state.messageUser.selectedGame }}</p> 
                    <div class="flex flex-row items-center text-xs justify-center rounded-b-md self-start border-b border-l border-r border-black">
                        <div class=" text-center  hover:bg-yellow-500 w-8 h-4 rounded-bl-md transition-all cursor-pointer">!</div>
                        <div class=" text-center  hover:bg-red-500 w-8 h-4 rounded-br-md transition-all cursor-pointer">X</div>
                    </div>
                </div>
                <!-- profile pics -->
                <div class="   h-1/3 w-full md:h-full md:w-1/5 shrink-0 flex flex-row md:flex-col justify-between pb-4 pt-20 items-center">
                    <div class=" aspect-square h-28 border border-black bg-gradient-to-t from-red-400  to-white  rounded-3xl bg-white flex justify-center items-center">
                        <div class=" aspect-square h-24 border border-black rounded-lg bg-white overflow-hidden">
                            <img :src="store.state.messageUser.ownerPpUrl" class="object-cover w-full h-full" alt="">

                        </div>
                    </div>
                    <div class="mx-2 lowercase visible md:invisible">{{ store.state.messageUser.city }}/{{ store.state.messageUser.state }}</div>
                    <div class=" invisible md:visible aspect-square h-28 border border-black bg-gradient-to-t from-green-400  to-white  rounded-3xl bg-white flex justify-center items-center">
                        <div class=" aspect-square h-24 border border-black rounded-lg bg-white overflow-hidden">
                            <img :src="store.state.activeUser.ppUrl" class="object-cover w-full h-full" alt="">
                        </div>
                    </div>
                </div>
                <!-- messages -->
                <div class="  h-2/3 md:h-full  md:w-4/5  flex flex-col justify-between">

                        <ul class=" md:mt-20 md:my-0 my-10 mt-10 border-b flex items-start flex-col justify-start w-full h-full overflow-x-hidden px-10  ">
                            <li v-for="i in 5 " :key="i">asdfasdf</li>
                        </ul>
                        <!-- type message -->
                    <div class="text-area   shrink-0  flex flex-row relative overflow-hidden">
                        <input @keydown.enter="sendMessage" type="text" @keydown="msgvars.cat_isPress =true"  @keyup="msgvars.cat_isPress=false" v-model="msgvars.message" class="w-full pr-16 resize-none m-4 border-black border rounded-r-xl rounded-tl-xl   focus:outline-0 p-4">
                        <div :class="msgvars.cat_isPress ? '-translate-x-1 -translate-y-1' :'' " class="duration-700 absolute -bottom-7 -right-8  w-28 h-28 cursor-pointer hover:-translate-x-1 hover:-translate-y-1 cubic-bezier">
                            <img v-if="!msgvars.cat_isPress" class="closed-cat  drop-shadow-xl cubic-bezier !z-50" src="/src/assets/cat_closed.png" alt="">
                            <img v-if="msgvars.cat_isPress" class="opened-cat   drop-shadow-xl cubic-bezier !z-50" src="/src/assets/cat_opened.png" alt="">
                        </div>
                    </div>
                </div>

    </div>

     <!-- side menu  -->
    <div class=" w-[300px] h-[450px]  bg-gradient-to-b from-blue-400 to-blue-100 rounded-lg">
                <div class="border border-black h-full w-full flex flex-col rounded-lg ">
                    <h1 class="text-white font-bold  border-b h-6 px-2 flex items-center justify-start gap-2 select-none"> <span><img src="/src/assets/sm-logo.png" class="w-5" alt=""></span>  Activitier <span class="font-thin">Messenger</span></h1>
                    <div class="profile border border-black bg-gradient-to-b from-blue-300 to-blue-100 h-28  m-4 mb-0 rounded-lg flex flex-row items-center just-start px-2 gap-2">
                        <div class=" aspect-square h-10 border border-black rounded-lg bg-white overflow-hidden">
                            <img :src="store.state.activeUser.ppUrl" class="object-cover w-full h-full" alt="">
                        </div>
                        <h1 class="select-none" >{{store.state.activeUser.name}} {{ store.state.activeUser.surname[0]}}.</h1> 
                    </div>
                    <div class="friends border border-black bg-blue-100 h-full m-4 rounded-lg  ">
                        <details class=" pt-4">
                            <summary class="">
                                <p class="font-bold cursor-pointer text-lg hover:bg-blue-300 pl-4 select-none">Last Messages</p>
                            </summary>
                            <ul class="overflow-scroll h-52 overflow-x-hidden">
                                <li v-for="friend in store.state.activeUser.messageGroups" :key="friend" class="flex flex-row flex-wrap cursor-pointer py-1 hover:bg-blue-300 items-center gap-2 justify-start">
                                   <div class="w-4 h-4 rounded-full border border-black bg-green-500 ml-4"></div> {{ friend }}
                                </li>
                            </ul>
                        </details>
                    </div>
                </div>
    </div>
</div>


</template>
<script setup>
import store from "/src/store"
import {reactive } from "vue"


//#region variables
//variable for cat anim.
const msgvars=reactive({
    cat_isPress:false,
    message:""
})
//#endregion



//#region Functions
const sendMessage = ()=>{
    console.log('msgvars.message :>> ', msgvars.message);
    msgvars.message=""
}
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