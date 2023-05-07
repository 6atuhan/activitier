<template>
    <h1 class="text-white text-2xl w-fit text-outline font-Baloo-Regular select-none ml-4 visible md:invisible mt-4 ">PROFILE</h1>
<div v-if="store.state.activeUser != null " class="flex flex-col font-Quicksand py-2 md:flex-row px-2 mt-10 md:mt-0 mb-32" >
<div class="container md:order-1 mx-auto w-full md:w-[768px] items-start justify-center flex flex-row flex-wrap gap-4">

    <div class="card bg-[#8E6DFF]  border border-black rounded-xl w-full p-4 shrink-0 relative flex flex-col md:flex-row gap-2 justify-center items-center">
        <h3  class="border z-40 h-[28px] border-black !font-Baloo-Regular bg-[#8E6DFF] rounded-xl absolute left-0 -top-3 px-4 ml-4 hover-anim !text-xl uppercase">{{ store.state.activeUser.name }}</h3>




        <div id="bilgiler" class="bg-[#E6E6E6] w-full m-4 rounded-xl border border-black self-center flex flex-col gap-2 py-2 hover-anim">
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
                            GAME ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            GAME DATE
                        </th>
                        <th scope="col" class="px-6 py-3">
                            GAME
                        </th>
                        <th scope="col" class="px-6 py-3">
                            ACTIVE
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr  v-for="game in store.state.posts" :key="game" :class="game.isActive ?'bg-zinc-600' : 'bg-zinc-400'" class="text-white ">
                        <th v-if="game.ownerUid == store.state.activeUser.uid" scope="row" class="px-6 select-all py-4 font-medium  whitespace-nowrap ">
                            <div @click="deletePost(game.id)" class="button !px-0 !rounded-lg !py-0  !w-6 !h-6 bg-red-500 hover:bg-red-600 hover:scale-105 scale-100 flex items-center justify-center">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M15 2H9c-1.103 0-2 .897-2 2v2H3v2h2v12c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V8h2V6h-4V4c0-1.103-.897-2-2-2ZM9 4h6v2H9V4Zm8 16H7V8h10v12Z"></path>
                                </svg>
                            </div>
                        </th>
                        <th v-if="game.ownerUid == store.state.activeUser.uid" scope="row" class="px-6 select-all py-4 font-medium  whitespace-nowrap ">
                            {{ game.id }}
                        </th>
                        <td v-if="game.ownerUid == store.state.activeUser.uid" class="px-6 py-4 select-none">
                            {{ convertTime(game.time) }}
                        </td>
                        <td v-if="game.ownerUid == store.state.activeUser.uid" class="px-6 py-4 select-none">
                            {{ game.selectedGame }}
                        </td>

                        <td v-if="game.ownerUid == store.state.activeUser.uid" class="px-6 py-4 select-none ">
                            {{ game.isActive ? 'active':'passive' }}
                        </td>

                    </tr>
                    
                </tbody>
                </table>
        
        
      </div>
            </div>
        </div>
<!-- EDİT BUTTONS -->
        <div @click="openEditBox"  class=" button  z-30 !px-0 items-center justify-center flex !py-0 rounded-full  bg-zinc-300 hover:bg-zinc-500 cursor-pointer h-8 w-8 absolute -top-4 right-16 md:top-6 md:-right-4 group ">
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