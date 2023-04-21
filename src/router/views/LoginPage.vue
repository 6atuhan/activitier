<template>

    <div  class="container mx-auto flex overflow-x-hidden  items-center pt-24 md:pt-16 justify-center">
        <ul class="flex flex-col gap-2" >
<!-- girişyap kayıtol seçici -->
            <li class="flex flex-row gap-2 items-center justify-center">
                <div @click="operation.joinBtn = false" :class="!operation.joinBtn ? 'pointer-events-none !bg-[#1ACFD7] hover-shadow-full' : ''" class=" cursor-pointer px-4 py-1 border border-black rounded-full hover:!bg-[#1ACFD7] bg-[#008188] hover-anim  select-none font-aAbstractGroovy text-outline text-center text-xl text-white">
                    Enter
                </div>
                <div @click="operation.joinBtn = true" :class="operation.joinBtn ? 'pointer-events-none !bg-[#FC5704] hover-shadow-full' : ''" class=" cursor-pointer px-4 py-1 border border-black rounded-full hover:!bg-[#FC5704] bg-[#aa4100] hover-anim  select-none font-aAbstractGroovy text-outline text-center text-xl text-white">
                    Join
                </div>
            </li>
            <li>
                <div :class="operation.joinBtn ? joinForm.sex == 'man' ? 'bg-[#0051ff]' : 'bg-[#ff00b3]' : ' bg-[#E8C51B]'" class="px-4 py-1 border border-black rounded-full  hover-anim  select-none font-aAbstractGroovy text-outline text-center text-xl text-white"></div>
            </li>
            <li>
                <div :class="operation.joinBtn ? 'bg-[#FC5704] ':'bg-[#1ACFD7]'" class=" px-4 py-1 border h-fit cubic-bezier border-black rounded-lg  hover-anim  select-none font-aAbstractGroovy text-outline text-center text-xl text-white">
<!-- KAYITOL FORMU -->
                    <form v-if="operation.joinBtn" action="" class="flex flex-col gap-3 py-8 px-2 w-96 font-Baloo-Regular ">
                        <h1>JOIN us</h1>
<!-- name surname -->
                        <div class="flex justify-evenly items-center ">
                            <input v-model="joinForm.name" class="py-1 border w-1/2 mr-2 outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" type="text" placeholder="name">
                            <input v-model="joinForm.surname" class="py-1 border w-1/2  outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" type="text" placeholder="surname">
                        </div>
<!-- email -->
                        <input v-model="joinForm.email" class="py-1 border w-full outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" placeholder="mail" type="email">
<!-- password -->
                        <div class="flex w-full">
                            <input id="passwordId" @keyup="passwdStrCheck" v-model="joinForm.password" :type="operation.showPw ? 'text':'password' " class="py-1 border w-2/3 outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" placeholder="password" >
                            <div class="w-1/2 flex items-center justify-center gap-1 ">
                                    <label class="text-sm mx-2" for="passwordId"><p :class="joinForm.password.length <6 ? 'text-red-500' : 'text-green-500'">6↑</p><p :class="joinForm.password.length >18 ? 'text-red-500' : 'text-green-500'">18↓</p> </label>
                                    <div v-for="g in operation.passwordStrength" :key="g" class="w-4 h-4 border [&:nth-child(2)]:!bg-lime-500 [&:nth-child(3)]:!bg-orange-500 [&:nth-child(4)]:!bg-red-500 [&:nth-child(5)]:!bg-red-600 border-black rounded-full">
                                    </div>
                                    <div v-for="b in ( 4 - operation.passwordStrength )" :key="b" class="w-4 h-4 border  border-black rounded-full bg-white">
                                    </div>
                                    
                                    <div @mousedown="operation.showPw = true" @mouseup="operation.showPw = false" class="flex justify-center items-center"  > 
                                            <svg class="transition-all cursor-pointer" v-if="operation.showPw" xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#fff" viewBox="0 0 24 24" width="32" height="32"><path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"/><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></svg>
                                            <svg class="transition-all cursor-pointer" v-if="!operation.showPw" xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#fff" viewBox="0 0 24 24" width="32" height="32"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"/></svg>
                                    </div>
                                </div>
                        </div>
<!-- age sex -->
                        <div class="flex w-full">
                            <!-- age -->
                        <div class="w-1/2 relative py-1 h-12 border border-black rounded-lg bg-[#fff] hover-anim  select-none">
                            <div :class="joinForm.sex == 'man' ? '!text-[#0051ff] ':'!text-[#ff00b3]'" class=" flex items-end justify-center gap-1  ">
                                <p :class="joinForm.age>2 ? '':'!opacity-0'"  class=" w-8 text-sm opacity-30">{{joinForm.age -2}}</p>
                                <p :class="joinForm.age>1 ? '':'!opacity-0'"  class=" w-8 text-xl opacity-50">{{joinForm.age-1}}</p>
                                <p :class="joinForm.age>0 ? '':'!opacity-0'"  class=" w-12 text-3xl border rounded-lg hover-shadow-full border-black text-center">{{joinForm.age}}</p>
                                <p :class="joinForm.age>0 ? '':'!opacity-0'"  class=" w-8 text-xl opacity-50">{{joinForm.age*1/1+1}} </p>
                                <p :class="joinForm.age>0 ? '':'!opacity-0'"  class=" w-8 text-sm opacity-30">{{joinForm.age*1/1+2}}</p>
                            </div>
                            <input min="18" max="65" v-model="joinForm.age" class=" h-12 w-full rotate-180 absolute top-0 left-0 opacity-0 cursor-ew-resize " type="range" placeholder="age">
                        </div>
                            <!-- sex button -->
                       <div class="flex items-center justify-center w-1/2  ">
                        <label :class="joinForm.sex == 'man' ? '!bg-[#0051ff] hover-shadow-full' : 'opacity-70 '" class="cursor-pointer bg-[#77a2ff] hover:z-10 h-12 w-12 hover-anim border px-2 border-black rounded-l-lg" for="man">
                            <svg class="h-12" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M14.5,13A1.5,1.5,0,1,1,16,11.5,1.5,1.5,0,0,1,14.5,13Zm7.351-4.726A9.975,9.975,0,0,0,12,0C5.1,0,3.124,4.674,1.819,7.767A6.372,6.372,0,0,1,.5,10.136a1,1,0,0,0,.379,1.856,15.806,15.806,0,0,0,7.257-1.1,1.5,1.5,0,1,0,1.724-.84,15.09,15.09,0,0,0,4.956-4.467,1,1,0,1,0-1.626-1.162A13.357,13.357,0,0,1,3,10.027c.227-.453.438-.956.662-1.483C4.892,5.628,6.423,2,12,2a7.978,7.978,0,0,1,7.954,7.15,1,1,0,0,0,.816.878A1.5,1.5,0,0,1,20.5,13a1.606,1.606,0,0,1-.252-.027.994.994,0,0,0-1.117.651C18.215,16.221,15.132,19,12,19h0c-2.9,0-5.6-2.283-6.766-4.539a1,1,0,1,0-1.776.92A11.264,11.264,0,0,0,8,19.953V23a1,1,0,0,0,2,0V20.738a7.708,7.708,0,0,0,4,0V23a1,1,0,0,0,2,0V19.954a11.037,11.037,0,0,0,4.732-4.962,3.5,3.5,0,0,0,1.119-6.718Z"/></svg>
</label> <input v-model="joinForm.sex" value="man"  id="man" class="hidden "  type="radio" name="joinForm.sex">
                       <label :class="joinForm.sex == 'woman' ? '!bg-[#ff00b3] hover-shadow-full':'opacity-70'" class="cursor-pointer bg-[#ff76d6] hover:z-10 h-12 w-12 hover-anim border px-2 border-black rounded-r-lg" for="woman">
                        <svg class="h-12" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M14.5,13A1.5,1.5,0,1,1,16,11.5,1.5,1.5,0,0,1,14.5,13Zm9.425,5.144A5,5,0,0,1,19,24H15a1,1,0,0,1-1-1V20.737A7.959,7.959,0,0,1,12,21a7.84,7.84,0,0,1-2-.27V23a1,1,0,0,1-1,1H5A5,5,0,0,1,.075,18.144l.3-1.74a2.939,2.939,0,0,1,5.337-1.138C6.976,17.124,9.409,19,12,19h0c3.13,0,6.214-2.779,7.13-5.376a1.03,1.03,0,0,1,.959-.667l.432.007A1.461,1.461,0,0,0,22,11.5a1.5,1.5,0,0,0-1.23-1.474,1,1,0,0,1-.816-.879A7.977,7.977,0,0,0,12,2C6.423,2,4.892,5.628,3.662,8.544c-.224.527-.435,1.03-.662,1.483A13.354,13.354,0,0,0,13.186,4.419a1,1,0,0,1,1.628,1.162,15.089,15.089,0,0,1-4.956,4.467,1.5,1.5,0,1,1-1.725.84,15.807,15.807,0,0,1-7.257,1.1A1,1,0,0,1,.5,10.136,6.372,6.372,0,0,0,1.819,7.767C3.124,4.674,5.1,0,12,0a9.972,9.972,0,0,1,9.85,8.274A3.5,3.5,0,0,1,24,11.5a3.428,3.428,0,0,1-.854,2.257c.007.026.025.047.03.075ZM8,19.94a11.088,11.088,0,0,1-3.941-3.552.946.946,0,0,0-.783-.424H3.259a.945.945,0,0,0-.911.782l-.3,1.739A3,3,0,0,0,5,22H8Zm13.955-1.455-.628-3.613a3.384,3.384,0,0,1-.579.086A11.033,11.033,0,0,1,16,19.952V22h3a3,3,0,0,0,2.955-3.514Z"/></svg>
</label> <input v-model="joinForm.sex" value="woman"   id="woman" class="hidden "  type="radio" name="joinForm.sex"> 
                    </div>
                        </div>

<!-- Guide -->
                       <label for="guideAccept" :class="joinForm.guideAccept ? 'text-lime-500':'text-red-500'" class=" cursor-pointer hover:scale-110 transition-all   select-none font-Baloo-Regular text-outline text-center text-sm ">
                       <p v-if="!joinForm.guideAccept"> I did not read the guide.</p>
                       <p v-if="joinForm.guideAccept"> I have read the guide and understood it all.</p>
                       </label>
                       <input required id="guideAccept" type="checkbox" v-model="joinForm.guideAccept" class="opacity-0 -mt-4">
<!-- accept button -->
                       <div  @click="checkJoin" class=" cursor-pointer px-4 py-1 border border-black rounded-full bg-[#A51000] hover-anim  select-none font-aAbstractGroovy text-outline text-center text-xl text-white">
                       Accept
                       </div>
                    </form>


<!-- GİRİŞ FORMU -->
                    <form v-if="!operation.joinBtn" action="" class="flex flex-col gap-3 py-8 px-2 w-96 font-Baloo-Regular ">

                        <div class="w-32 h-32 border hover-anim border-black rounded-full mx-auto overflow-hidden bg-white">
                        <img class="w-32 h-32 object-cover hover:hidden ml-4 mt-4" src="/src/assets/cat_closed.png" alt="">
                        <img class="w-32 h-32 object-cover ml-4 mt-4" src="/src/assets/cat_opened.png" alt="">

                        </div>
<!-- email -->
                        <input v-model="enterForm.email" class="py-1 border w-full outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" placeholder="mail" type="email">
<!-- password -->
                        <div class="flex w-full">
                            <input id="passwordId" @keyup="passwdStrCheck" @keydown.enter="checkEnter" v-model="enterForm.password" :type="operation.showPw ? 'text':'password' " class="py-1 border w-full mr-2 outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" placeholder="password" >
                            <div class=" flex items-center justify-center gap-1 ">
                                    
                                    <div @mousedown="operation.showPw = true" @mouseup="operation.showPw = false" class="flex justify-center items-center"  > 
                                            <svg class="transition-all cursor-pointer" v-if="operation.showPw" xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#fff" viewBox="0 0 24 24" width="32" height="32"><path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z"/><path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"/></svg>
                                            <svg class="transition-all cursor-pointer" v-if="!operation.showPw" xmlns="http://www.w3.org/2000/svg" stroke="#000" fill="#fff" viewBox="0 0 24 24" width="32" height="32"><path d="M23.271,9.419A15.866,15.866,0,0,0,19.9,5.51l2.8-2.8a1,1,0,0,0-1.414-1.414L18.241,4.345A12.054,12.054,0,0,0,12,2.655C5.809,2.655,2.281,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162A15.866,15.866,0,0,0,4.1,18.49l-2.8,2.8a1,1,0,1,0,1.414,1.414l3.052-3.052A12.054,12.054,0,0,0,12,21.345c6.191,0,9.719-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419ZM2.433,13.534a2.918,2.918,0,0,1,0-3.068C3.767,8.3,6.782,4.655,12,4.655A10.1,10.1,0,0,1,16.766,5.82L14.753,7.833a4.992,4.992,0,0,0-6.92,6.92l-2.31,2.31A13.723,13.723,0,0,1,2.433,13.534ZM15,12a3,3,0,0,1-3,3,2.951,2.951,0,0,1-1.285-.3L14.7,10.715A2.951,2.951,0,0,1,15,12ZM9,12a3,3,0,0,1,3-3,2.951,2.951,0,0,1,1.285.3L9.3,13.285A2.951,2.951,0,0,1,9,12Zm12.567,1.534C20.233,15.7,17.218,19.345,12,19.345A10.1,10.1,0,0,1,7.234,18.18l2.013-2.013a4.992,4.992,0,0,0,6.92-6.92l2.31-2.31a13.723,13.723,0,0,1,3.09,3.529A2.918,2.918,0,0,1,21.567,13.534Z"/></svg>
                                    </div>
                                </div>
                        </div>

<!-- accept button -->
                       <div @click="checkEnter" class=" cursor-pointer px-4 py-1 border font-normal border-black rounded-full bg-[#E8C51B] hover-anim  select-none font-aAbstractGroovy text-outline text-center text-xl text-white">
                       enter
                       </div>
                    </form>
                </div>
            </li>

            <li>
                <div :class="operation.joinBtn ? joinForm.sex == 'man' ? 'bg-[#0051ff]' : 'bg-[#ff00b3]' : ' bg-[#E8C51B]'" class="px-4 py-1 border border-black rounded-full  hover-anim  select-none "></div>
            </li>
<!-- GOOGLE UYELİK -->
            <li>
                <div class="flex items-center font-normal justify-evenly gap-2 cursor-pointer px-4 py-1 border border-black rounded-full bg-[#fff] hover-anim  select-none font-aAbstractGroovy  text-outline text-center text-xl text-white">
                    
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 186.69 190.5" xmlns:v="https://vecta.io/nano"><g transform="translate(1184.583 765.171)"><path clip-path="none" mask="none" d="M-1089.333-687.239v36.888h51.262c-2.251 11.863-9.006 21.908-19.137 28.662l30.913 23.986c18.011-16.625 28.402-41.044 28.402-70.052 0-6.754-.606-13.249-1.732-19.483z" fill="#4285f4"/><path clip-path="none" mask="none" d="M-1142.714-651.791l-6.972 5.337-24.679 19.223h0c15.673 31.086 47.796 52.561 85.03 52.561 25.717 0 47.278-8.486 63.038-23.033l-30.913-23.986c-8.486 5.715-19.31 9.179-32.125 9.179-24.765 0-45.806-16.712-53.34-39.226z" fill="#34a853"/><path clip-path="none" mask="none" d="M-1174.365-712.61c-6.494 12.815-10.217 27.276-10.217 42.689s3.723 29.874 10.217 42.689c0 .086 31.693-24.592 31.693-24.592-1.905-5.715-3.031-11.776-3.031-18.098s1.126-12.383 3.031-18.098z" fill="#fbbc05"/><path d="M-1089.333-727.244c14.028 0 26.497 4.849 36.455 14.201l27.276-27.276c-16.539-15.413-38.013-24.852-63.731-24.852-37.234 0-69.359 21.388-85.032 52.561l31.692 24.592c7.533-22.514 28.575-39.226 53.34-39.226z" fill="#ea4335" clip-path="none" mask="none"/></g></svg>
<p v-if="operation.joinBtn">Join With gmail</p>                
<p v-if="!operation.joinBtn">Enter With gmail</p>                
</div>
            </li>
        </ul>
    </div>



<!-- error notification -->
    <div class="  fixed top-10 right-0">
        <ul>
            <li v-for="e in operation.errors" :key="e"  class="w-64 my-2 animate-wiggle   bg-red-500 text-outline  border border-black rounded-l-lg font-Baloo-Regular text-white p-2">
            error : {{ e }}  
            </li>
        </ul>
    </div>
<!-- operation.success notification -->
    <div class="  fixed top-10 right-0">
        <ul>
            <li v-if="operation.success" class="w-64 my-2 animate-wiggle   bg-green-500 text-outline  border border-black rounded-l-lg font-Baloo-Regular text-white p-2">
                welcome to the activitier 
            </li>
        </ul>
    </div>
<!-- ANASAYFAYA DÖN -->
    <div @click="goBack" class=" fixed top-4 left-4 cursor-pointer px-4 py-1 border border-black rounded-full bg-[#0544B8] hover-anim  select-none font-aAbstractGroovy text-outline text-center text-xl text-white">
        back
    </div>


</template>

<script setup>
import { getAuth, signOut , createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
import {  reactive } from "vue"
import router from "/src/router"
import store from "/src/store"

import { getDatabase, set , ref,onValue } from "firebase/database";





// VERİABLES

const enterForm=reactive({
    email:"",
    password:""
})

const joinForm = reactive({
    name:"",
    surname:"",
    email:"",
    password:"",
    age:18,
    sex:"man",
    guideAccept:false,
    bio:"biyo güncel değil."
})

const operation = reactive({
    joinBtn :false,
    passwordStrength :0,
    showPw :false,
    errors :[],
    success :false,
})




const passwdStrCheck=()=>{
    operation.passwordStrength=0
    if (joinForm.password.match(/[a-z]+/)) {
        operation.passwordStrength += 1;
    }
    if (joinForm.password.match(/[A-Z]+/)) {
     operation.passwordStrength += 1;
     }
    if (joinForm.password.match(/[0-9]+/)) {
      operation.passwordStrength += 1;
    }
    if (joinForm.password.match(/[$@#&!.]+/)) {
      operation.passwordStrength += 1;
     }
}

const checkJoin=()=>{
    checkJoinForm(joinForm)
}
// form düzgün ise en sonunda firebase createuser çalışıyor
const checkJoinForm=(form)=>{
    // name check
    if(form.name.length < 3 || form.name.length > 18){
        if(operation.errors.includes("name length"))
        {return}
        else{
            operation.errors.push("name length")
        }

    }
    else if(form.name.match(/\s/) ||  form.name.match(/[0-9]/) ){
        
        if(operation.errors.includes("name format"))
        {return}
        else{
            operation.errors.push("name format")
        }

    }

    // surnamename check
    if(form.surname.length < 3 || form.surname.length > 18){
        if(operation.errors.includes("surname length"))
        {return}
        else{
            operation.errors.push("surname length")
        }


    }
    else if(form.surname.match(/\s/) ||  form.surname.match(/[0-9]/) ){
        if(operation.errors.includes("surname format"))
        {return}
        else{
            operation.errors.push("surname format")
        }

    } 


    // mail check
    if(form.email.includes("@") && form.email.includes(".com")){


    }
    else{
        if(operation.errors.includes("email"))
        {return}
        else{
        operation.errors.push("email")

        }
        
    }
    // password check
    if(form.password != "" || form.password != null || form.password != undefined){

        if(form.password.length < 6 || form.password.length>18){

        if(operation.errors.includes("password")){
            return
        }

        operation.errors.push("password")

         }
  
    }

    // guide check

    if(form.guideAccept == false || form.guideAccept==null || form.guideAccept==undefined){
        if(operation.errors.includes("accept"))
        {return}
        operation.errors.push("accept")

    }


    setTimeout(() => {

        operation.errors=[]
    }, 1500);

    if(operation.errors.length == 0){

    createAccount()
    }
}

const resetJoinForm=()=>{
    joinForm.name=""
    joinForm.surname=""
    joinForm.email=""
    joinForm.password=""
    joinForm.age=18
    joinForm.sex="man"
    joinForm.guideAccept=false
    joinForm.ppUrl=""
}

const checkEnter=()=>{
    checkEnterForm(enterForm)

}
// enter form düzgünse direk sign in yapıyo
const checkEnterForm=(form)=>{


    // mail check
    if(form.email.includes("@") && form.email.includes(".com")){

    }
    else{
        if(operation.errors.includes("email"))
        {return}
        else{
        operation.errors.push("email")

        }
        
    }
    // password check
    if(form.password != "" || form.password != null || form.password != undefined){

        if(form.password.length < 6 || form.password.length>18){

        if(operation.errors.includes("password")){
            return
        }

        operation.errors.push("password")

         }
  
    }

    
    setTimeout(() => {

        operation.errors=[]
    }, 1500);

    if(operation.errors.length == 0){
        signInWithEmailAndPassword(auth, enterForm.email, enterForm.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    operation.success=true
    setTimeout(() => {
            operation.success=false
            const db = getDatabase();
            const auth = getAuth();

            const userId = auth.currentUser.uid;
            // aktif kullanıcının realtimedb den bilgilerini çekiyor
            onValue(ref(db, '/users/' + userId), (snapshot) => {
                store.state.activeUser=snapshot.val()
                if(store.state.activeUser != null)

                {router.push("/profile")}
            }, {
              onlyOnce: true
            });
    }, 1500);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    operation.errors.push(errorMessage)
  });

    }
}




// FİRESTORE KAYIT OLMA
const auth = getAuth();
const createAccount =()=>{
    createUserWithEmailAndPassword(auth, joinForm.email, joinForm.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;


  writeUserData(user.uid,joinForm)
operation.success=true
operation.joinBtn=false
resetJoinForm()
router.push("/login")

        setTimeout(() => {
            operation.success=false

    }, 1500);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

}

// REALTİMEDATABASE KULLANICI BİLGİLERİ ALMA
const database = getDatabase();
const writeUserData=(userId, joinForm)=> {
  set(ref(database, 'users/' + userId), {

    name:joinForm.name,
    surname:joinForm.surname,
    email:joinForm.email,
    age:joinForm.age,
    sex:joinForm.sex,
    city:"turkey",
    twitter:"twitter",
    instagram:"instagram",
    bio:joinForm.bio,
    uid:userId,
    point:2,


  });
}



const goBack=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  router.push("/")

}).catch((error) => {
  // An error happened.
});
}


</script>