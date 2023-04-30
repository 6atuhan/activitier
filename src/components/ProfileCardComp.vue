<template>
            <div    class="profile bg-[#8E6DFF]  border border-black rounded-xl mb-5  p-4 shrink-0 relative flex flex-col md:flex-row gap-2 justify-center items-center">
                <h3 @click="goProfile"   class="z-50 border button !py-0 bg-[#8E6DFF] text-white absolute left-0 -top-3 ml-4  font-Baloo-Regular">PROFILE</h3>
                <div id="bilgiler" class="relative font-Quicksand font-medium bg-[#E6E6E6]  w-[222px] md:w-[292px] rounded-xl border border-black self-center flex flex-col gap-2 py-2 hover-anim">
                    <div id="profile" class=" flex w-full gap-2 items-center justify-start px-2 flex-wrap ">
                       <!-- profile photo -->
                        <div class="  shrink-0  mx-auto h-20 md:w-20 rounded-full border border-black text-center text-[36px]  overflow-hidden hover-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 box-border cubic-bezier">
                            <div class="h-20 w-20 relative  mx-auto ">
                                <img :src="store.state.activeUser.ppUrl" class="object-cover	 z-20 h-20 w-20 	" alt="profilePhoto">
                            </div>
                        </div>


                        <div>
                            <div id="name-score" class="flex flex-row items-center justify-between">
                                <!-- premium -->
<div  :class="store.state.activeUser.isPremium ? 'saturate-100' : 'saturate-0'" class="select-none">
<img class="w-4" src="/src/assets/logo-pp.png" alt="">
</div>
                                <p class="font-bold">
                                    {{ store.state.activeUser.name }}
                                  <span class="uppercase">  {{ store.state.activeUser.surname[0] }}.</span>
                                </p>
                                <p class="p-2 flex items-center justify-center gap-1 select-none group font-Quicksand font-medium ">
                                    {{ store.state.activeUser.point }}
                                    <svg fill="#E04A4F" class="group-hover:scale-125 cubic-bezier"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>

                                </p>
                                <div class="flex gap-2 mt-2">
                <!-- instagram link -->
                <a :href="instagramlink" target="_blank" class="cursor-pointer cubic-bezier hover:scale-110">
                    <svg class="fill-pink-600 mb-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve" width="26" height="26">
                    <g>
                    <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z"/>
                    <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z"/>
                    <circle cx="18.406" cy="5.594" r="1.44"/>
                    </g>
                    </svg>
                </a>

                <!-- twitter link -->
                <a :href="twitterlink" target="_blank" class="cursor-pointer cubic-bezier hover:scale-110">
                <svg class="fill-[#1DA1F2] mb-1" width="26" height="26" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
                        <path id="Logo_00000038394049246713568260000012923108920998390947_" d="M21.543,7.104c0.014,0.211,0.014,0.423,0.014,0.636  c0,6.507-4.954,14.01-14.01,14.01v-0.004C4.872,21.75,2.252,20.984,0,19.539c0.389,0.047,0.78,0.07,1.172,0.071  c2.218,0.002,4.372-0.742,6.115-2.112c-2.107-0.04-3.955-1.414-4.6-3.42c0.738,0.142,1.498,0.113,2.223-0.084  c-2.298-0.464-3.95-2.483-3.95-4.827c0-0.021,0-0.042,0-0.062c0.685,0.382,1.451,0.593,2.235,0.616  C1.031,8.276,0.363,5.398,1.67,3.148c2.5,3.076,6.189,4.946,10.148,5.145c-0.397-1.71,0.146-3.502,1.424-4.705  c1.983-1.865,5.102-1.769,6.967,0.214c1.103-0.217,2.16-0.622,3.127-1.195c-0.368,1.14-1.137,2.108-2.165,2.724  C22.148,5.214,23.101,4.953,24,4.555C23.339,5.544,22.507,6.407,21.543,7.104z"/>
                    </svg>
                </a>
            </div>
                            </div>

                            <div id="archives" class=" w-full select-none  overflow-scroll overflow-x-hidden">
                                    <ul class="flex flex-row shrink-0 flex-wrap gap-2 md:gap-0 items-center justify-center border-t pt-4 md:pt-0 border-black">
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96.png" alt=""></li>
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96(1).png" alt=""></li>
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96(2).png" alt=""></li>
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96(3).png" alt=""></li>
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96(4).png" alt=""></li>
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96(5).png" alt=""></li>
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96(6).png" alt=""></li>
                                        <li><img width="32" src="/src/assets/badges/icons8-warranty-96(7).png" alt=""></li>

                                    </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
</template>


<script setup>
import store from '/src/store';
import router from "/src/router"
import { computed } from "vue";

//#region variables

//instagram id to link converter
const instagramlink = computed(()=>{
    return "https://www.instagram.com/"+store.state.activeUser.instagram
})
//instagram id to link converter
const twitterlink = computed(()=>{
    return "https://www.twitter.com/"+store.state.activeUser.twitter
})

//#endregion



//#region Functions
//go profile page
const goProfile=()=>{
    router.push('profile')
}

//#endregion



//#region Firebase Functions

                                                                                                             

//#endregion


</script>
