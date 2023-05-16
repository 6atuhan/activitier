<template>
    <h1 class="text-white text-2xl w-fit text-outline font-Baloo-Regular select-none ml-4 visible md:invisible mt-4 ">PROFILE</h1>
<div v-if="store.state.activeUser != null " class="flex flex-col font-Quicksand py-2 md:flex-row px-2 mt-10 md:mt-0 mb-32" >
<div class="container md:order-1 mx-auto w-full md:w-[768px] items-start justify-center flex flex-row flex-wrap gap-4">

    <div class="card bg-[#8E6DFF]  border border-black rounded-xl w-full p-4 shrink-0 flex-wrap relative flex flex-col md:flex-row gap-2 justify-center items-center">
        <h3  class="border hover:saturate-100 cursor-pointer z-40 h-[28px] border-black !font-Baloo-Regular bg-[#8E6DFF] rounded-xl absolute left-0 -top-3 px-4 ml-4 hover-anim !text-xl uppercase">{{ store.state.activeUser.name }}</h3>


        <!-- PROFILE TAB -->
        <div  id="bilgiler" class="bg-[#E6E6E6] w-full m-4 mx-auto rounded-xl border border-black self-center flex flex-col gap-2 py-2 hover-anim">
            <div id="profile" class=" flex flex-col w-full gap-2 items-center justify-center px-2 ">
                <!-- premium -->
                <div  :class="store.state.activeUser.isPremium ? 'saturate-100 animate-bounce' : 'saturate-0'">
                    <img class="w-6" src="/src/assets/logo-pp.png" alt="">
                </div>
                <div class="bg-white h-20 w-20 md:h-36 md:w-36 rounded-full border border-black text-center text-[36px]  overflow-hidden hover-shadow hover:-translate-x-0.5 hover:-translate-y-0.5 box-border cubic-bezier">
                    <img :src="store.state.activeUser.ppUrl" class="object-cover	 h-20 w-20 md:h-36 md:w-36 	" alt="profilePhoto">

                </div>
               <div class="w-fit flex items-center gap-5">

                                    <!-- gender -->
                                    <div>
                        <svg v-if="store.state.activeUser.sex =='man'" :class="store.state.activeUser.sex =='man' ?'!fill-[#0051ff] mb-1' : '!fill-[#ff00b3] mb-1'"  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M14.5,13A1.5,1.5,0,1,1,16,11.5,1.5,1.5,0,0,1,14.5,13Zm7.351-4.726A9.975,9.975,0,0,0,12,0C5.1,0,3.124,4.674,1.819,7.767A6.372,6.372,0,0,1,.5,10.136a1,1,0,0,0,.379,1.856,15.806,15.806,0,0,0,7.257-1.1,1.5,1.5,0,1,0,1.724-.84,15.09,15.09,0,0,0,4.956-4.467,1,1,0,1,0-1.626-1.162A13.357,13.357,0,0,1,3,10.027c.227-.453.438-.956.662-1.483C4.892,5.628,6.423,2,12,2a7.978,7.978,0,0,1,7.954,7.15,1,1,0,0,0,.816.878A1.5,1.5,0,0,1,20.5,13a1.606,1.606,0,0,1-.252-.027.994.994,0,0,0-1.117.651C18.215,16.221,15.132,19,12,19h0c-2.9,0-5.6-2.283-6.766-4.539a1,1,0,1,0-1.776.92A11.264,11.264,0,0,0,8,19.953V23a1,1,0,0,0,2,0V20.738a7.708,7.708,0,0,0,4,0V23a1,1,0,0,0,2,0V19.954a11.037,11.037,0,0,0,4.732-4.962,3.5,3.5,0,0,0,1.119-6.718Z"/></svg>
                        <svg v-if="store.state.activeUser.sex =='woman'" :class="store.state.activeUser.sex =='woman' ? '!fill-[#ff00b3] mb-1': '!fill-[#0051ff] mb-1' "  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M14.5,13A1.5,1.5,0,1,1,16,11.5,1.5,1.5,0,0,1,14.5,13Zm9.425,5.144A5,5,0,0,1,19,24H15a1,1,0,0,1-1-1V20.737A7.959,7.959,0,0,1,12,21a7.84,7.84,0,0,1-2-.27V23a1,1,0,0,1-1,1H5A5,5,0,0,1,.075,18.144l.3-1.74a2.939,2.939,0,0,1,5.337-1.138C6.976,17.124,9.409,19,12,19h0c3.13,0,6.214-2.779,7.13-5.376a1.03,1.03,0,0,1,.959-.667l.432.007A1.461,1.461,0,0,0,22,11.5a1.5,1.5,0,0,0-1.23-1.474,1,1,0,0,1-.816-.879A7.977,7.977,0,0,0,12,2C6.423,2,4.892,5.628,3.662,8.544c-.224.527-.435,1.03-.662,1.483A13.354,13.354,0,0,0,13.186,4.419a1,1,0,0,1,1.628,1.162,15.089,15.089,0,0,1-4.956,4.467,1.5,1.5,0,1,1-1.725.84,15.807,15.807,0,0,1-7.257,1.1A1,1,0,0,1,.5,10.136,6.372,6.372,0,0,0,1.819,7.767C3.124,4.674,5.1,0,12,0a9.972,9.972,0,0,1,9.85,8.274A3.5,3.5,0,0,1,24,11.5a3.428,3.428,0,0,1-.854,2.257c.007.026.025.047.03.075ZM8,19.94a11.088,11.088,0,0,1-3.941-3.552.946.946,0,0,0-.783-.424H3.259a.945.945,0,0,0-.911.782l-.3,1.739A3,3,0,0,0,5,22H8Zm13.955-1.455-.628-3.613a3.384,3.384,0,0,1-.579.086A11.033,11.033,0,0,1,16,19.952V22h3a3,3,0,0,0,2.955-3.514Z"/></svg>
                    </div>
                <div class="font-bold">
                    {{ store.state.activeUser.name }}
                    {{ store.state.activeUser.surname }}
                </div>
                <p class="p-2 flex items-center justify-center gap-1 select-none group font-Quicksand font-medium ">
                    {{ store.state.activeUser.point }}

                         <svg fill="#E04A4F" class="group-hover:scale-125 cubic-bezier"  xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"><path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"/></svg>

                </p>
               </div>
               <div class=" my-4 w-full text-center md:px-32 border-b border-black">
                <div class="flex justify-center items-center gap-4 flex-row flex-wrap">

                    <!-- city -->
                    <div class="flex justify-center w-[46%] md:w-fit  items-center gap-0 md:gap-2 ml-0 md:ml-4">
                        <svg class="fill-lime-800" width="36" height="36" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <g>
  <path d="m170.22 208.42c0 29.477 7.293 58.648 21.102 84.531 0.18359 0.79688 0.48828 1.5625 0.90625 2.2891l126.27 218.71c6.5781 11.402 18.367 18.199 31.527 18.199s24.941-6.8047 31.516-18.199l126.27-218.71c0.39844-0.6875 0.67578-1.418 0.84375-2.1719 13.848-25.918 21.156-55.133 21.156-84.648 0-99.141-80.656-179.8-179.8-179.8-99.137 0-179.8 80.656-179.8 179.8zm342.8 0c0 27.461-6.9727 54.629-20.172 78.566-0.32422 0.58203-0.56641 1.1914-0.72266 1.8203l-125.14 216.74c-3.543 6.1367-9.8906 9.8008-16.969 9.8008-7.0898 0-13.434-3.6641-16.98-9.8008l-125.09-216.65c-0.17188-0.65625-0.42578-1.3008-0.76562-1.9102-13.195-23.934-20.176-51.102-20.176-78.566 0-89.879 73.125-163 163-163s163 73.125 163 163z"/>
  <path d="m255.92 208.42c0 51.891 42.211 94.102 94.102 94.102 51.891 0 94.102-42.211 94.102-94.102s-42.211-94.102-94.102-94.102c-51.891 0-94.102 42.219-94.102 94.102zm171.4 0c0 42.621-34.676 77.301-77.301 77.301-42.629 0-77.301-34.676-77.301-77.301 0-42.629 34.676-77.301 77.301-77.301 42.629 0 77.301 34.676 77.301 77.301z"/>
 </g>
                    </svg>
                        <p>{{store.state.activeUser.city}}</p>
                    </div>
                    <!-- age -->
                    <div class="flex justify-center w-[46%] md:w-fit  items-center gap-0 md:gap-2 mr-0 md:mr-4">
                        <svg class="fill-purple-700" width="36" height="36" version="1.1" viewBox="0 0 700 700" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
 <g>
  <path d="m298.98 167.7v76.707h-80.148c-24.52 0-43.73 22.41-43.73 51.016v45.504c0 13.238 5.6211 25.336 14.574 33.695v140.61c0 6.0391 4.8984 10.938 10.938 10.938h298.77c6.0391 0 10.938-4.8984 10.938-10.938v-140.3c9-8.2891 14.574-20.426 14.574-34.008v-52.789c0-24.113-19.617-43.73-43.73-43.73h-80.148v-76.707c0-6.0391-4.8984-10.938-10.938-10.938h-80.156c-6.043 0-10.938 4.8984-10.938 10.938zm-87.43 336.6v-56.875h276.89v56.875zm276.89-78.75h-276.89v-39.938c1.1602 0.20312 2.3359 0.36719 3.5273 0.46875 12.137 0.93359 24.289-3.3477 33.355-11.742 1.0898-1.0078 2.1211-2.0625 3.0938-3.1641 8.0195 9.1523 19.793 14.938 32.887 14.938 13.043 0 24.773-5.7422 32.793-14.828 8.0195 9.0859 19.746 14.828 32.793 14.828 13.043 0 24.773-5.7422 32.793-14.828 8.0195 9.0859 19.746 14.828 32.793 14.828 12.906 0 24.523-5.6211 32.535-14.539 1.2031 1.3984 2.4961 2.7188 3.8789 3.957 7.875 7.0469 17.773 10.793 28.297 10.793 1.6016 0 3.2227-0.085937 4.8477-0.26172 1.1172-0.097657 2.2148-0.25 3.3047-0.42969zm14.574-137.41v52.789c0 12.367-8.5312 22.406-19.848 23.348-0.097656 0.007813-0.19922 0.015625-0.30078 0.027344-6.0859 0.67969-11.875-1.125-16.285-5.0742-4.625-4.1367-7.2734-10.277-7.2734-16.848 0-6.0391-4.8984-10.938-10.938-10.938s-10.938 4.8984-10.938 10.938c0 12.254-9.6016 21.855-21.855 21.855-12.254 0-21.855-9.6016-21.855-21.855 0-6.0391-4.8984-10.938-10.938-10.938-6.0391 0-10.938 4.8984-10.938 10.938 0 12.254-9.6016 21.855-21.855 21.855s-21.855-9.6016-21.855-21.855c0-6.0391-4.8984-10.938-10.938-10.938s-10.938 4.8984-10.938 10.938c0 12.254-9.6016 21.855-21.855 21.855s-21.855-9.6016-21.855-21.855c0-6.0391-4.8984-10.938-10.938-10.938-6.0391 0-10.938 4.8984-10.938 10.938 0 6.0078-2.5273 11.656-7.1133 15.906-4.6094 4.2695-10.73 6.4453-16.707 5.9922-10.965-0.95313-19.887-11.43-19.887-23.352v-45.504c0-16.34 9.6016-29.141 21.855-29.141h262.33c12.055 0 21.859 9.8047 21.859 21.855zm-123.88-109.5v65.77h-58.281v-65.77z"/>
  <path d="m319.6 122.25c8.5234 8.5234 19.465 12.785 30.402 12.785 10.941 0 21.879-4.2617 30.402-12.785 0.058594-0.058594 0.12109-0.12109 0.17969-0.18359 16.211-16.984 16.211-44.621 0-61.605-0.027343-0.027344-0.054687-0.054688-0.078125-0.082032l-22.672-23.25c-2.0586-2.1094-4.8828-3.3008-7.832-3.3008s-5.7734 1.1914-7.832 3.3008l-22.668 23.25c-0.027344 0.027344-0.054688 0.054688-0.078125 0.082032-16.211 16.984-16.211 44.621 0 61.605 0.054687 0.0625 0.11328 0.125 0.17578 0.18359zm15.609-46.645 14.793-15.172 14.793 15.172c8.0586 8.4844 8.0781 22.758 0.050781 31.27-8.4844 8.3945-21.203 8.3945-29.691 0-8.0195-8.5117-8.0039-22.785 0.054687-31.27z"/>

 </g>
                        </svg>
                        <p>{{store.state.activeUser.age}}</p>

                    </div>

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
               <div class=" my-4 text-center px-4 md:px-32 ">
                <p>{{store.state.activeUser.bio}}</p>
            </div>
               
            <h1 class="text-outline uppercase text-white font-Baloo-Regular">all my posts</h1>
               <div class="relative w-full  h-40 overflow-x-auto overflow-y-scroll  ">
            <table class="w-full text-sm text-left">
                <thead class="text-xs uppercase bg-zinc-950 text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                        </th>
                        <th scope="col" class="px-6 py-3">
                            GAME
                        </th>
                        <th scope="col" class="px-6 py-3">
                            INFO
                        </th>
                        <th scope="col" class="px-6 py-3">
                            GAME DATE
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="game in store.state.posts" :key="game" :class="{' bg-zinc-900':game.isActive==true,' bg-zinc-600':game.isActive==false}"  class="text-white">
                        <th v-if="game.ownerUid == store.state.activeUser.uid" scope="row" class="px-6 select-all py-4 font-medium  whitespace-nowrap  flex items-center justify-between gap-2">
                            <div @click="deletePost(game.id)" class="button !px-0 !rounded-lg !py-0  !w-6 !h-6 bg-red-500 hover:bg-red-600 hover:scale-105 scale-100 flex items-center justify-center">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2ZM9 4h6v2H9V4Zm8 16H7V8h10v12Z"></path>
                                </svg>
                            </div>
                            <div @click="changeActivity(game.id , game.isActive)" :class="{'bg-green-200 hover:rotate-6': game.isActive ==false,'bg-red-200 hover:-rotate-6':game.isActive==true}" class="w-8 h-4 !py-0  group hover-anim rounded-lg border-black border  flex flex-col items-center justify-center ">
                                <div :class="{'bg-green-500 self-start': game.isActive ==false,'bg-red-500 self-end':game.isActive==true}" class="w-4 h-4  group-hover:mx-1 group-hover:hover-shadow-full rounded-full cubic-bezier  border border-black">
                                </div>
                            </div>
                        </th>
                        <td v-if="game.ownerUid == store.state.activeUser.uid" class="px-6 py-4 select-none">
                                <!-- GAME LOGOS -->
    <div :class=" game.selectedGame=='puzzle' ? 'bg-[#DA0358]' : game.selectedGame=='chess' ? 'bg-[#05002C]': game.selectedGame=='billiards' ? 'bg-[#E80014] ' : game.selectedGame=='tennis' ? 'bg-[#39CE12]' : game.selectedGame=='video' ? 'bg-[#029e96]' : game.selectedGame=='bowling' ? 'bg-[#C82638]' : game.selectedGame=='dex' ? 'bg-[#AB3F00] ' : game.selectedGame=='basketball' ? 'bg-[#ff370a]' : game.selectedGame=='football' ? 'bg-[#26D542]': game.selectedGame=='other' ? 'bg-[#170E17]':'' " class=" font-Quicksand h-8 w-8 z-40 button  text-white !py-0 !px-0  flex items-center justify-center overflow-hidden ">
      <svg v-if="game.selectedGame=='puzzle' "  class=" cubic-bezier pl-1 pb-1 scale-110"   fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M18,24h-7.431s.431-1.308,.431-2.5c0-1.379-1.122-2.5-2.5-2.5s-2.5,1.121-2.5,2.5c0,1.013,.431,2.5,.431,2.5H0V8.5c0-1.379,1.122-2.5,2.5-2.5h2.909c-.253-.968-.409-1.903-.409-2.5,0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,.597-.155,1.532-.409,2.5h3.909c1.378,0,2.5,1.121,2.5,2.5v2.909c.969-.254,1.904-.409,2.5-.409,1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5c-.596,0-1.531-.155-2.5-.409v6.409Zm-6.18-1h5.18v-6.743s2.103,.743,3.5,.743c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5c-1.064,0-3.5,.743-3.5,.743v-4.243c0-.827-.673-1.5-1.5-1.5h-5.244s.744-2.333,.744-3.5c0-1.379-1.122-2.5-2.5-2.5s-2.5,1.121-2.5,2.5c0,1.218,.744,3.5,.744,3.5H2.5c-.827,0-1.5,.673-1.5,1.5v14.5H5.18c-.116-.595-.18-1.123-.18-1.5,0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,.377-.064,.905-.18,1.5Z"/></svg>
         <svg v-if="game.selectedGame=='chess' "  class="cubic-bezier" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M20,19.051V8c0-.08-.113-8-9.938-8h-.391l-.095,.379c-.745,2.98-2.023,4.023-3.979,4.816-.971,.393-1.598,1.308-1.598,2.33v1.475h6.389c-.796,3.317-3.363,4.924-4.876,5.6-.919,.409-1.513,1.311-1.513,2.296v2.155c-1.14,.232-2,1.242-2,2.449v2.5H22v-2.5c0-1.208-.86-2.217-2-2.449Zm-14.08-3.538c1.783-.796,4.878-2.755,5.573-6.931l.097-.582H5v-.475c0-.613,.382-1.164,.973-1.403,2.055-.833,3.608-2.036,4.474-5.118,8.425,.192,8.553,6.716,8.554,6.996v11H5v-2.104c0-.591,.36-1.134,.92-1.383Zm15.08,7.487H3v-1.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5v1.5Z"/></svg>
   <svg v-if="game.selectedGame=='billiards' " class="cubic-bezier"    fill="#fff" height="32" width="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,118.857c-75.621,0-137.143,61.522-137.143,137.143S180.379,393.143,256,393.143S393.143,331.621,393.143,256 S331.621,118.857,256,118.857z M256,374.857c-65.538,0-118.857-53.319-118.857-118.857S190.462,137.143,256,137.143 S374.857,190.462,374.857,256S321.538,374.857,256,374.857z"></path> </g> </g> <g> <g> <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,493.714 C124.924,493.714,18.286,387.076,18.286,256S124.924,18.286,256,18.286S493.714,124.924,493.714,256S387.076,493.714,256,493.714z "></path> </g> </g> <g> <g> <path d="M298.393,256c7.623-6.708,12.464-16.502,12.464-27.429c0-20.165-16.408-36.571-36.576-36.571h-36.565 c-20.168,0-36.574,16.406-36.574,36.571c0,10.926,4.842,20.721,12.462,27.429c-7.62,6.708-12.462,16.502-12.462,27.429 c0,20.165,16.406,36.571,36.574,36.571h36.565c20.168,0,36.576-16.406,36.576-36.571C310.857,272.502,306.016,262.708,298.393,256 z M274.281,301.714h-36.565c-10.085,0-18.288-8.203-18.288-18.286s8.203-18.286,18.288-18.286h36.565 c10.085,0,18.29,8.203,18.29,18.286S284.366,301.714,274.281,301.714z M274.281,246.857h-36.565 c-10.085,0-18.288-8.203-18.288-18.286s8.203-18.286,18.288-18.286h36.565c10.085,0,18.29,8.203,18.29,18.286 S284.366,246.857,274.281,246.857z"></path> </g> </g> </g></svg>
    <svg v-if="game.selectedGame=='tennis' " class="cubic-bezier"  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M21.958,2.042c-3.145-3.145-8.826-2.582-12.662,1.255-2.422,2.423-3.539,5.58-3.242,8.37-.002,.04,.058,.44,.076,.541,.166,1.17,.481,4.474-.984,5.939L.146,23.146c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l5-5c1.321-1.322,4.307-1.179,5.797-1.01,.276,.054,1.387,.15,1.577,.15,1.753,0,3.602-.529,5.29-1.562,.742-.522,1.6-1.141,2.187-1.728,3.836-3.837,4.399-9.517,1.255-12.662Zm.022,9.236l-2.545-2.545,3.329-3.329c.487,1.813,.208,3.922-.784,5.873Zm.406-6.909l-3.658,3.658-2.842-2.842,3.625-3.625c.641,.285,1.229,.681,1.738,1.19,.478,.478,.855,1.024,1.136,1.619ZM8.749,15.251c-.509-.509-.905-1.097-1.19-1.738l3.866-3.866,2.842,2.841-3.898,3.898c-.595-.28-1.142-.658-1.619-1.135Zm3.383-6.311l3.049-3.049,2.842,2.842-3.049,3.049-2.842-2.841ZM16.771,1.001c.58,0,1.146,.066,1.687,.199l-3.278,3.278-2.458-2.458c1.324-.673,2.721-1.018,4.048-1.018Zm-6.768,3.002c.569-.569,1.182-1.059,1.821-1.469l2.649,2.649-3.049,3.049-2.698-2.698c.368-.535,.795-1.049,1.277-1.532Zm-1.818,2.406l2.532,2.532-3.518,3.518c-.023-.092-.133-.746-.148-.827-.197-1.675,.193-3.519,1.134-5.222Zm-.932,8.6c.23,.337,.493,.654,.788,.95,.303,.303,.631,.572,.977,.807-.727,.047-1.476,.162-2.159,.387,.232-.685,.348-1.429,.394-2.144Zm5.421,1.97c-.121-.022-.461-.08-.939-.133-.111-.024-.221-.05-.331-.08l3.569-3.569,2.618,2.618c-1.6,.885-3.325,1.283-4.917,1.164Zm5.791-1.704l-2.785-2.785,3.049-3.049,2.736,2.736c-.41,.639-.9,1.252-1.469,1.821-.483,.483-.997,.909-1.532,1.277Z"/></svg>
    <svg v-if="game.selectedGame=='video' " class="cubic-bezier"  fill="#fff" width="24" height="24" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M510.855,299.246C501.34,156.515,423.585,90.021,374.032,90.021c-24.884,0-50.551,5.715-73.203,10.758 c-17.293,3.853-33.628,7.488-45.397,7.488c-11.756,0-27.85-3.635-44.894-7.484c-22.344-5.043-47.673-10.762-72.57-10.762 c-49.553,0-127.309,66.494-136.824,209.225c-4.624,69.323,4.686,107.116,29.293,118.934c5.256,2.521,11.007,3.8,17.337,3.8 c26.429,0,62.797-22.309,113.914-69.216c0.338-0.254,34.742-25.543,93.743-25.543c55.594,0,90.798,22.776,94.638,25.382 c63.781,58.391,104.34,78.593,131.491,65.577C506.169,406.361,515.479,368.568,510.855,299.246z M473.664,401.729 c-18.7,9.011-56.302-12.192-111.713-62.988c-0.254-0.232-0.521-0.45-0.797-0.651c-1.635-1.189-40.778-29.115-105.721-29.115 c-65.02,0-103.102,28.002-105.383,29.766c-55.398,50.787-92.968,71.991-111.713,62.988c-11.377-5.462-23.908-27.467-18.99-101.271 c9.056-135.817,81.729-192.19,118.622-192.19c22.861,0,47.139,5.479,68.552,10.317c18.064,4.076,35.125,7.929,48.912,7.929 c13.774,0,31.062-3.849,49.361-7.925c21.734-4.838,46.364-10.321,69.238-10.321c36.893,0,109.566,56.373,118.622,192.19 C497.572,374.261,485.041,396.267,473.664,401.729z"></path> </g> </g> <g> <g> <path d="M119.722,153.882c-20.122,0-36.492,16.371-36.492,36.492s16.371,36.492,36.492,36.492 c20.122,0,36.492-16.371,36.492-36.492S139.844,153.882,119.722,153.882z M119.722,208.621c-10.063,0-18.246-8.183-18.246-18.246 c0-10.063,8.183-18.246,18.246-18.246c10.063,0,18.246,8.183,18.246,18.246C137.968,200.438,129.785,208.621,119.722,208.621z"></path> </g> </g> <g> <g> <path d="M320.429,226.867c-20.122,0-36.492,16.371-36.492,36.492s16.371,36.492,36.492,36.492s36.492-16.371,36.492-36.492 S340.551,226.867,320.429,226.867z M320.429,281.605c-10.063,0-18.246-8.183-18.246-18.246s8.183-18.246,18.246-18.246 c10.063,0,18.246,8.183,18.246,18.246S330.492,281.605,320.429,281.605z"></path> </g> </g> <g> <g> <rect x="220.071" y="163.005" width="72.984" height="18.246"></rect> </g> </g> <g> <g> <path d="M201.83,208.621c-25.151,0-45.615,20.465-45.615,45.615c0,25.151,20.465,45.615,45.615,45.615 c25.151,0,45.615-20.465,45.615-45.615C247.445,229.085,226.98,208.621,201.83,208.621z M201.83,281.605 c-15.092,0-27.369-12.277-27.369-27.369s12.277-27.369,27.369-27.369s27.369,12.277,27.369,27.369S216.922,281.605,201.83,281.605 z"></path> </g> </g> <g> <g> <circle cx="384.286" cy="153.882" r="18.246"></circle> </g> </g> <g> <g> <circle cx="384.286" cy="208.621" r="18.246"></circle> </g> </g> <g> <g> <circle cx="420.778" cy="181.252" r="18.246"></circle> </g> </g> <g> <g> <circle cx="347.794" cy="181.252" r="18.246"></circle> </g> </g> </g></svg>
    <svg v-if="game.selectedGame=='bowling' " class="cubic-bezier"  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm-1-13c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm2-3c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
   <svg v-if="game.selectedGame=='dex' " class="cubic-bezier"  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="36" height="36"><path d="M19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5ZM1,4.5c0-1.93,1.57-3.5,3.5-3.5h3.793L1,8.293v-3.793Zm0,5.207L9.707,1h1.293v3.293l-6.707,6.707H1v-1.293ZM11,5.707v5.293H5.707l5.293-5.293Zm12,13.793c0,1.93-1.57,3.5-3.5,3.5h-3.793l7.293-7.293v3.793Zm0-5.207l-8.707,8.707h-1.293v-3.293l6.707-6.707h3.293v1.293Zm-10,4v-5.293h5.293l-5.293,5.293Zm10-6.293H12.5c-.276,0-.5,.224-.5,.5v10.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-7.5H11.5c.276,0,.5-.224,.5-.5V1h7.5c1.93,0,3.5,1.57,3.5,3.5v7.5Z"/></svg>
    <svg v-if="game.selectedGame=='basketball' " class="cubic-bezier"  fill="#fff" height="32" width="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 492.572 492.572" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M471.527,147.12C445.041,86.938,396.719,40.678,335.45,16.861C274.171-6.976,207.301-5.485,147.142,20.995 C22.94,75.678-33.622,221.226,21.046,345.447c26.481,60.183,74.808,106.442,136.077,130.269 c28.933,11.25,59.106,16.856,89.24,16.856c33.683,0,67.317-7.01,99.067-20.99C469.628,416.899,526.195,271.351,471.527,147.12z M441.428,131.704c-32.328,45.254-79.752,86.073-136.77,118.109c-1.186-1.94-2.418-3.846-3.521-5.847 c-34.279-62.18-21.837-142.695,31.247-206.935C378.623,56.042,416.505,89.053,441.428,131.704z M156.557,38.406 c28.787-12.437,59.188-18.7,89.657-18.7c22.362,0,44.729,3.531,66.525,10.264c-54.507,69.614-66.095,155.935-28.847,223.495 c1.076,1.952,2.284,3.808,3.429,5.709c-9.519,4.888-19.271,9.537-29.237,13.926c-16.26,7.161-32.648,13.389-49.037,18.764 c-4.445-8.734-8.704-17.615-12.689-26.668C162.408,188.041,148.441,107.768,156.557,38.406z M135.658,48.724 c-5.526,69.779,9.364,148.697,42.676,224.397c3.678,8.361,7.581,16.528,11.6,24.586c-22.285,6.353-44.48,11.065-66.261,13.981 c-2.91-7.892-6.012-15.75-9.439-23.538c-19.955-45.344-47.833-86.19-80.74-118.707C51.508,119.567,86.815,76.041,135.658,48.724z M26.95,190.762c28.003,29.52,51.784,65.606,69.254,105.31c2.594,5.894,4.981,11.833,7.264,17.788 c-25.416,2.156-50.098,1.837-73.545-1.029C17.391,272.167,16.97,230.031,26.95,190.762z M39.07,337.524 c-0.616-1.399-1.146-2.815-1.731-4.221c10.926,1.01,21.994,1.702,33.332,1.702c12.942,0,26.167-0.808,39.517-2.101 c11.5,35.413,17.471,71.387,17.606,106.236C88.78,415.267,57.887,380.274,39.07,337.524z M164.258,457.361 c-5.813-2.26-11.415-4.875-16.965-7.565c1.133-39.012-4.64-79.498-17.142-119.302c22.746-3.244,45.841-8.256,69.018-15.049 c32.548,59.74,74.32,109.769,121.049,144.744C269.526,477.81,214.84,477.031,164.258,457.361z M341.88,451.5 c-46.82-32.339-90.252-82.478-123.474-142.001c15.927-5.329,31.835-11.432,47.611-18.379c11.064-4.87,21.861-10.075,32.401-15.547 c33.581,43.558,87.136,70.186,149.339,73.756C425.569,392.839,389.267,429.426,341.88,451.5z M316.039,265.977 c55.392-31.407,102.157-70.903,135.528-114.799c0.607,1.313,1.346,2.538,1.93,3.865c25.394,57.704,24.671,120.397,3.059,174.817 C398.267,328.174,347.678,305.154,316.039,265.977z"></path> </g> </g> </g></svg>
    <svg v-if="game.selectedGame=='football' " class="cubic-bezier"  fill="#fff" height="32" width="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M461.329,103.278c-0.151-0.254-0.268-0.52-0.446-0.763c-0.267-0.368-0.583-0.676-0.888-0.994 C413.204,39.883,339.177,0,256,0C114.841,0,0,114.841,0,256s114.841,256,256,256s256-114.841,256-256 C512,198.809,493.144,145.941,461.329,103.278z M256,19.692c73.585,0,139.418,33.816,182.791,86.718l-98.658,71.751 L214.124,146.74c-0.625-0.156-1.251-0.23-1.876-0.263L159.225,40.432C188.776,27.112,221.537,19.692,256,19.692z M345.764,320.372 c-0.24,0.461-0.475,0.927-0.646,1.435c-0.061,0.185-0.076,0.372-0.126,0.559l-114.637,46.316l-80.082-95.447l66.023-105.659 l120.891,30.144L345.764,320.372z M19.692,256c0-88.834,49.283-166.366,121.936-206.722l55.727,111.454l-66,105.62L20.51,275.589 C19.977,269.127,19.692,262.596,19.692,256z M198.07,485.113c-90.008-22.769-159.603-97.321-175.118-189.966L135.11,285.8 l81.53,97.168L198.07,485.113z M256,492.308c-13.161,0-26.066-1.1-38.647-3.178l18.437-101.405l124.097-50.138 c0.201-0.081,0.379-0.192,0.57-0.285L462.24,371.23C421.751,443.411,344.483,492.308,256,492.308z M365.352,318.173l-8.92-127.517 l94.197-68.507c26.269,38.077,41.678,84.196,41.678,133.851c0,34.733-7.538,67.739-21.056,97.474L365.352,318.173z"></path> </g> </g> </g></svg>
    <svg v-if="game.selectedGame=='other' "  xmlns="http://www.w3.org/2000/svg" class="cubic-bezier"  fill="#fff" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M19.5,9h-6c-2.481,0-4.5,2.019-4.5,4.5v6c0,2.481,2.019,4.5,4.5,4.5h6c2.481,0,4.5-2.019,4.5-4.5v-6c0-2.481-2.019-4.5-4.5-4.5Zm3.5,10.5c0,1.93-1.57,3.5-3.5,3.5h-6c-1.93,0-3.5-1.57-3.5-3.5v-6c0-1.93,1.57-3.5,3.5-3.5h6c1.93,0,3.5,1.57,3.5,3.5v6Zm-8-5.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm5,5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1ZM9,6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm-4,2c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm1.913,8.585c-.097,.142-.253,.218-.413,.218-.097,0-.196-.028-.282-.087-.229-.157-.445-.337-.643-.534L1.333,11.939C-.422,10.185-.422,7.33,1.333,5.575L5.575,1.333C6.425,.482,7.556,.015,8.757,.015s2.333,.468,3.182,1.318l4.242,4.242c.197,.197,.377,.414,.534,.643,.155,.228,.098,.539-.131,.695-.225,.154-.537,.098-.695-.131-.121-.178-.261-.346-.415-.5L11.232,2.04c-1.322-1.322-3.628-1.323-4.95,0L2.04,6.282c-1.365,1.365-1.365,3.585,0,4.95l4.242,4.242c.154,.154,.322,.294,.5,.415,.228,.156,.286,.468,.13,.695Z"/></svg>
    </div>
                            {{ game.selectedGame }}
                        </td>
                        
                        <td v-if="game.ownerUid == store.state.activeUser.uid" class="px-6 py-4 select-none ">
                            {{ game.state }} / {{ game.city }} 

                        </td>
                            <td v-if="game.ownerUid == store.state.activeUser.uid" class="px-6 py-4 select-none">
                                {{ convertTime(game.time) }}
                            </td>


                    </tr>
                    
                </tbody>
                </table>
        
        
      </div>
            </div>
        </div>
<!-- EDİT BUTTONS -->
        <div @click="openEditBox"  class=" button  z-30 !px-0 items-center justify-center flex !py-0 rounded-full  bg-zinc-300 hover:bg-zinc-500 cursor-pointer h-8 w-8 absolute top-12 right-12  md:top-6 md:-right-4 group ">
        <svg class="group-hover:fill-white" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
  <path d="M5.035 12.705a7.08 7.08 0 0 1 0-1.41L3.206 9.232l2-3.464 2.701.553a6.99 6.99 0 0 1 1.222-.707L10 3h4l.872 2.614c.432.195.841.432 1.221.707l2.701-.553 2 3.464-1.829 2.063a7.078 7.078 0 0 1 0 1.41l1.83 2.063-2 3.464-2.702-.553c-.38.275-.789.512-1.221.707L14 21h-4l-.871-2.614a6.991 6.991 0 0 1-1.222-.707l-2.7.553-2.001-3.464 1.83-2.063Z"></path>
  <path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
        </svg>    
    </div> 
    
    


    </div>

</div>
</div>

<div v-show="editForm.edit" :class="editForm.isValid ? 'bg-black/50':'bg-red-500/50'" class="flex items-center justify-center  h-screen w-screen overflow-scroll overflow-x-hidden fixed top-0 left-0 z-[9999] "> 

    <!-- editForm.edit area -->


        <form action=""  @submit.prevent class="bg-amber-900 flex flex-col justify-center items-center flex-wrap border font-Quicksand mx-auto p-4 border-black hover-shadow-full relative rounded-lg  w-96 h-96">
        <!-- name -->
        <label for="name" class="text-outline font-Baloo-Regular tracking-widest text-white" >Name :</label>
        <input    v-model="editForm.name" autocomplete="off"   class="py-1 w-2/5 border outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" id="name" placeholder="name" type="text" required/>

         <!-- surname -->
         <label for="surname" class="text-outline font-Baloo-Regular tracking-widest text-white" >surname :</label>
        <input    v-model="editForm.surname" autocomplete="off"   class="py-1 w-2/5 border outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" id="surname" placeholder="surname" type="text" required/>
        
        <!-- city -->
        <label for="city" class="text-outline font-Baloo-Regular tracking-widest text-white" >city :</label>
        <input    v-model="editForm.city" autocomplete="off"   class="py-1 w-2/5 border outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" id="city" placeholder="city" type="text" required/>        
        
        
                 <!-- age -->
                 <label for="age" class="text-outline font-Baloo-Regular tracking-widest text-white" >age :</label>
        <input    v-model="editForm.age" autocomplete="off"   class="py-1 w-2/5 border outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" id="age" placeholder="age" type="number" required/>

                 <!-- instagram -->
                 <label for="instagram" class="text-outline font-Baloo-Regular tracking-widest text-white" >instagram :</label>
        <input    v-model="editForm.instagram" autocomplete="off"   class="py-1 w-2/5 border outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" id="instagram" placeholder="username" type="text" required/>

                 <!-- twitter -->
                 <label for="twitter" class="text-outline font-Baloo-Regular tracking-widest text-white" >twitter :</label>
        <input    v-model="editForm.twitter" autocomplete="off"   class="py-1 w-2/5 border outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black" id="twitter" placeholder="username" type="text" required/>
        

        <!-- pp -->
        <div class="profile-pic">
              <label class="-label" for="file">
                <span>Change Image</span>
              </label>
              <input id="file" type="file" @change="updatePhoto($event)"  accept="image/jpg, image/png, image/jpeg" />
              <img :src="photo.tempUrl" id="output" width="200" />
            </div>
         <!-- bio -->
         <label for="bio" class="text-outline  h-1/2 w-2/5 flex flex-col font-Baloo-Regular tracking-widest text-white" >bio :
        <textarea v-model="editForm.bio" id="bio"   autocomplete="off"   class="py-1 h-full resize-none w-full border font-Quicksand outline-none focus:hover-shadow-full cubic-bezier border-black rounded-lg px-2 text-black"  placeholder="bio" >
            </textarea>
        </label>
        <!-- BUTTONS -->
        <!-- save -->
            <button type="button" @click="updateEdit" v-show="editForm.edit" class=" button  z-30 !px-0 items-center justify-center flex !py-0 rounded-full  bg-green-400 hover:bg-green-600 cursor-pointer h-8 w-8 absolute -bottom-4 right-6 md:bottom-16 md:-right-4  group ">
                <svg  width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m3 12 6 6L21 6"></path>
                </svg>
            </button>
            <!-- discard -->
            <button type="button" @click="discardEdit" v-show="editForm.edit"  class=" button  z-30 !px-0 items-center justify-center flex !py-0 rounded-full  bg-red-400 hover:bg-red-600 cursor-pointer h-8 w-8 absolute -bottom-4 right-16 md:bottom-6 md:-right-4  group ">
                <svg  width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m5 5 14 14M5 19 19 5"></path>
                </svg>
            </button>
    </form>
</div>

<!-- POST DELETE MODAL -->
<div v-if="postDelete.open" class="w-screen h-screen fixed top-0 left-0 z-[99999] flex items-center justify-center bg-black/40">
    <div class="w-64 px-4 h-32 mx-auto  flex items-center flex-row flex-wrap justify-center border border-black bg-white rounded-lg hover-shadow-full">
        <h1 class="text-white text-outline text-lg basis-full text-center">Are you really want to delete ? </h1>
        <div @click="    closeDeleteItem()" class="button basis-1/3 mx-2 text-center pb-2 hover:bg-red-600 bg-red-500 text-white">no</div>
        <div @click="    deleteItem()" class="button basis-1/3 mx-2 text-center pb-2 hover:bg-green-600 bg-green-500 text-white">yes</div>
    </div>
</div>

<!-- EDITFORM LOADING  -->
<div v-if="editForm.loading" class="bg-black/40 w-screen h-screen fixed top-0 left-0 z-[99999]">
    <div class="w-full h-full flex items-center justify-center">
        <img src="/src/assets/sm-logo.png" class="w-32 animate-spin" alt="">
    </div>
</div>

</template>

<script setup>
import store from "/src/store";
import { computed, onMounted, reactive } from "vue";
import { doc, updateDoc,deleteDoc,collection, onSnapshot , query, orderBy } from "firebase/firestore";
import {db} from "/src/firebase"
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";





const photo= reactive({
    url:null,
    tempUrl:""
})





//#region variables

//edit form 
const editForm = reactive({
        edit:false,
        name:"",
        surname:"",
        city:"",
        age:18,
        instagram:"",
        twitter:"",
        bio:"", 
        isValid:true,
        loading:false   

})

const postDelete=reactive({
    open:false,
    accept:false,
    tempid:"",
})

//object to be edited from store.
var tempUser = {}
tempUser=store.state.activeUser

//instagram username convert to link
const instagramlink = computed(()=>{
    return "https://www.instagram.com/"+store.state.activeUser.instagram
})
//twitter username convert to link
const twitterlink = computed(()=>{
    return "https://www.twitter.com/"+store.state.activeUser.twitter
})
//#endregion



//#region Functions

//convert timestamp(firebase) to date and format dd/mm/yyyy
const convertTime =(t)=>{
    const dt = t.toDate()
    return (dt.getDate() + "/" + (dt.getMonth() + 1)  +"/"+ dt.getFullYear()  )
}

//open edit modal and match with input and recent value
const openEditBox =()=>{
    editForm.edit = true
    photo.tempUrl=tempUser.ppUrl
    editForm.surname = tempUser.surname
    editForm.name = tempUser.name
    editForm.city = tempUser.city
    editForm.age = tempUser.age
    editForm.instagram = tempUser.instagram
    editForm.twitter = tempUser.twitter
    editForm.bio = tempUser.bio
}


// change tempUser value from editForm
const updateEdit=()=>{

    //check editForm
    if(editForm.name=="" || editForm.surname=="" || editForm.city=="" || editForm.instagram=="" || editForm.twitter=="" || editForm.bio=="" || editForm.age <= 17)
    {
        editForm.isValid = false
        return false
    }
    else{
        editForm.loading = true
        //check inputs is valid
        editForm.isValid = true
        //updating temp user object for import to firebase
    tempUser.name=editForm.name
    tempUser.surname=editForm.surname
    tempUser.city=editForm.city
    tempUser.age=editForm.age
    tempUser.instagram=editForm.instagram
    tempUser.twitter=editForm.twitter
    tempUser.bio=editForm.bio
        // updating on firebase 
        updateUserInfo(tempUser.uid)
        //close edit modal
        editForm.edit = false
    }
}
//close edit modal
const discardEdit=()=>{
    editForm.edit=false
}


//delete post open modal 
const deletePost = id =>{
    postDelete.open = true
    postDelete.tempid=id
}
//close delete post modal
const closeDeleteItem = ()=>{
    postDelete.open = false
    postDelete.tempid=""
}

//#endregion



//#region Firebase Functions

//firebase firestore update function
const updateUserInfo = id =>									                                                           
{						
const updateRef = doc(db, "users", id);
 updateDoc(updateRef, {
    name:tempUser.name,
    surname:tempUser.surname,
    city:tempUser.city,
    age:tempUser.age,
    instagram:tempUser.instagram,
    twitter:tempUser.twitter,
    bio:tempUser.bio,
}).then(()=>{
    //update user on vuex 
    store.state.activeUser=tempUser
    //update pp from firebase
    updatePpFromFirebase()
}
)};                                                                                                                  

//add and update pp photo
const updatePhoto=(event)=>{
    photo.tempUrl = URL.createObjectURL(event.target.files[0]);
    photo.url=event.target.files[0]


}

const updatePpFromFirebase=()=>{
    const storage = getStorage();
    //ref(storage, 'uid');
    const imageRef = ref(storage, store.state.activeUser.uid);
    if(photo.url == null){
        //UPDATE pphoto - name - poin IN ALL GAME POSTS
        store.state.activeUser.gamePosts.forEach(element => {
            const updatePostPPref = doc(db, "posts", element);
            updateDoc(updatePostPPref, {
                  ownerName: store.state.activeUser.name,
                  ownerPoint: store.state.activeUser.point,
    
            });
        });
        editForm.loading = false
    
    }
    else if(photo.url != null ){

        // 'file' comes from the Blob or File API
        uploadBytes(imageRef, photo.url).then((snapshot) => {
          getDownloadURL(imageRef).then((url)=>{
            store.state.activeUser.ppUrl=url
    
            updateDoc( doc(db, "users", store.state.activeUser.uid), {
                ppUrl:url
    }).then(()=>{
        //UPDATE pphoto - name - poin IN ALL GAME POSTS
        store.state.activeUser.gamePosts.forEach(element => {
            const updatePostPPref = doc(db, "posts", element);
            updateDoc(updatePostPPref, {
                  ownerPpUrl: store.state.activeUser.ppUrl,
                  ownerName: store.state.activeUser.name,
                  ownerPoint: store.state.activeUser.point,
    
            });
        });
        editForm.loading = false
    
    }
    )
    })
    });
    }
    else{
        editForm.loading = false
    }

}

//delete post from firebase
const deleteItem = () =>{									                                                           
	deleteDoc(doc(collection(db, "posts"), postDelete.tempid)).then(deleteFromProfile())						                                         
	}	


//delete in profile from "users"
const deleteFromProfile=()=>{

const q= collection(db, "users")
const id = store.state.activeUser.uid

var gamePostsTemp = store.state.activeUser.gamePosts
gamePostsTemp = gamePostsTemp.filter(post => post != postDelete.tempid)
                                                                                             
updateDoc(doc(q,id), {						                                           
  gamePosts : gamePostsTemp								                                             
}).then(closeDeleteItem());

}


//change post activity
const changeActivity = (id,activity) =>{
    console.log('id :>> ', id);
    console.log('activity :>> ', activity);

    const updateActivityRef = doc(db, "posts", id);
    
    if(activity==true){

        updateDoc(updateActivityRef, {isActive: false}) 
    }
    else if (activity==false){

        updateDoc(updateActivityRef, {isActive: true})
    }

}
//#endregion



onMounted(()=>{
    //textarea disable enter button and multi lines.
    document.getElementById('bio').addEventListener('input', function(e){
    this.value = this.value.replace(/\n/g,'')
        } )   


    //pull datas from firebase
    
const siraliPosts = query (collection(db, "posts"), orderBy("time","desc"));
onSnapshot(siraliPosts, (querySnapshot) => {                                                                
	 const veriler = [];                                                                                  
	 querySnapshot.forEach((doc) => {                                                                    
                                                           
       const cekilenVeri = 
       {                                                                                
        id:doc.id,                                                                                       
        selectedGame : doc.data().selectedGame,
        note : doc.data().note,
        activeTags : doc.data().activeTags,
        player : doc.data().player,                                                                             
        date : doc.data().date,
        location:doc.data().location,
        city:doc.data().city,
        state:doc.data().state,
        isActive : doc.data().isActive,
        time:doc.data().time,
        ownerUid:doc.data().ownerUid,
        ownerName:doc.data().ownerName,
        ownerPoint:doc.data().ownerPoint,
        ownerPpUrl:doc.data().ownerPpUrl,
        }                                                                                                
        veriler.push(cekilenVeri)                                                                                                                                                
	 });                                                                                                 
  store.state.posts=veriler                                                   

  console.log(  store.state.posts)  
});                                         
                
})

</script>

<style scoped >
.profile-pic {
	 color: transparent;
	 transition: all 0.3s ease;
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 position: relative;
	 transition: all 0.3s ease;
}
 .profile-pic input {
	 display: none;
}
 .profile-pic img {
	 position: absolute;
	 object-fit: cover;
	 width: 165px;
	 height: 165px;
	 border-radius: 50%;
	 z-index: 0;
     border: black 1px solid;
}
 .profile-pic .-label {
	 cursor: pointer;
	 height: 165px;
	 width: 165px;
}
 .profile-pic:hover .-label {
	 display: flex;
	 justify-content: center;
	 align-items: center;
	 background-color: rgba(0, 0, 0, 0.8);
	 z-index: 10000;
	 color: #fafafa;
	 transition: background-color 0.2s ease-in-out;
	 border-radius: 100px;
	 margin-bottom: 0;
}
 .profile-pic span {
	 display: inline-flex;
	 padding: 0.2em;
	 height: 2em;
}
 body a:hover {
	 text-decoration: none;
}
 
</style>