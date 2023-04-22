<template>
            <div :class="store.state.boy ? '!bg-[#E6686F]' : '!bg-[#51A5DB]'"   class="leaderboard bg-[#E6686F]  border border-black rounded-xl mb-5  p-4 shrink-0 relative flex flex-col md:flex-row gap-2 justify-center items-center">
                <h3 :class="store.state.boy ? '!bg-[#E6686F]' : '!bg-[#51A5DB]'"  class=" z-50 button !py-0  bg-[#E6686F] text-white absolute left-0 -top-3  ml-4  font-Baloo-Regular">LEADERBOARD</h3>
                <div id="bilgiler" class="relative font-Quicksand font-medium bg-stone-100  w-[222px] md:w-[292px] h-fit rounded-xl border border-black self-center flex flex-col gap-2 py-2 hover-anim">
                    <div id="profile" class=" flex w-full gap-2 items-center justify-between flex-row px-2 flex-wrap ">
                        <div class="bg-white  shrink-0 h-12 w-12 relative rounded-full  text-center text-[36px] hover-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 box-border cubic-bezier">
                            <div class="h-12 w-12  mx-auto  ">
                                <img src="/src/assets/logo-pp.png" class="object-cover box-border	rounded-full border   border-black h-12 w-12 	" alt="profilePhoto">

                            </div>
                            <div class="w-4 h-4 bg-black text-yellow-400 text-base absolute border select-none border-black -top-1 -left-1   rounded-full text-outline ">1</div>
                        </div>
                        <div>
                            <div id="name-score" class="flex flex-row items-center justify-center  ">
                                <p class="font-bold truncate w-16 md:w-32">
                                    MUSTAFA
                                </p>
                                <p class="font-bold truncate w-4">
                                    K.
                                </p>
                                <p class="p-2 flex items-center justify-center gap-1 select-none group font-Quicksand font-medium ">
                                    4.9
                                    <svg fill="#E04A4F" class="group-hover:scale-125 cubic-bezier"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="profile" class=" flex w-full gap-2 items-center justify-between flex-row px-2 flex-wrap ">
                        <div class="bg-white  shrink-0 h-12 w-12 relative rounded-full  text-center text-[36px] hover-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 box-border cubic-bezier">
                            <div class="h-12 w-12  mx-auto  ">
                                <img src="/src/assets/logo-pp.png" class="object-cover box-border	rounded-full border   border-black h-12 w-12 	" alt="profilePhoto">

                            </div>
                            <div class="w-4 h-4 bg-black text-green-400 text-base text-outline absolute border select-none border-black -top-1 -left-1   rounded-full ">2</div>
                        </div>
                        <div>
                            <div id="name-score" class="flex flex-row items-center justify-center  ">
                                <p class="font-bold truncate w-16 md:w-32">
                                    BATUHAN
                                </p>
                                <p class="font-bold truncate w-4">
                                    B.
                                </p>
                                <p class="p-2 flex items-center justify-center gap-1 select-none group font-Quicksand font-medium ">
                                    2.6
                                    <svg fill="#E04A4F" class="group-hover:scale-125 cubic-bezier"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>

                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="profile" class=" flex w-full gap-2 items-center justify-between flex-row px-2 flex-wrap ">
                        <div class="bg-white  shrink-0 h-12 w-12 relative rounded-full  text-center text-[36px] hover-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 box-border cubic-bezier">
                            <div class="h-12 w-12  mx-auto  ">
                                <img src="/src/assets/logo-pp.png" class="object-cover box-border	rounded-full border   border-black h-12 w-12 	" alt="profilePhoto">

                            </div>
                            <div class="w-4 h-4 bg-black text-red-400 text-base text-outline absolute border select-none border-black -top-1 -left-1   rounded-full ">3</div>
                        </div>
                        <div>
                            <div id="name-score" class="flex flex-row items-center justify-center  ">
                                <p class="font-bold truncate w-16 md:w-32">
                                    FATİH
                                </p>
                                <p class="font-bold truncate w-4">
                                    T.
                                </p>
                                <p class="p-2 flex items-center justify-center gap-1 select-none group font-Quicksand font-medium ">
                                    5.0
                                    <svg fill="#E04A4F" class="group-hover:scale-125 cubic-bezier"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>

                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    
</template>


<script setup>

import store from '/src/store';
//#region variables

//#endregion



//#region Functions

//#endregion



//#region Firebase Functions

                                                                                                             

//#endregion


</script>
