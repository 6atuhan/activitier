<template>
<!-- ADD CARD -->
<div v-show="store.state.addPost"  class=" bg-black h-screen w-screen overflow-scroll overflow-x-hidden fixed top-0 left-0 z-[9999] ">
<div  @click="store.state.addPost = false" class="button hover:bg-red-500 bg-red-700 w-fit text-white fixed top-2 right-2">X</div>
    <div :class="store.state.boy ? 'bg-[#51A5DB]':'bg-[#E6686F]'" class=" my-8 flex mx-auto flex-row md:flex-nowrap flex-wrap gap-1 !cursor-default p-4 border border-black rounded-lg w-full md:w-[800px] h-[800px] md:h-[400px] ">
<!-- LEFT AREA        -->
        <div class="md:w-1/2 md:h-full h-1/2 w-full !cursor-default shrink-0 button !rounded-lg text-white bg-[#2A1B58]">
            <div class="button !rounded-lg w-full h-3/4 p-0 overflow-hidden bg-cyan-500">
                <img class="w-full h-full object-cover m-0 p-0 hover:scale-150 transition-all duration-700" src="/src/assets/google-map.png" alt="">
            </div>
            <div class="flex">
                <input v-model="addPost.city" placeholder="city" class="w-1/2 text-left button mt-4 !text-outline-none mx-4 !text-black focus:hover-shadow-full outline-none" type="text">
                <input v-model="addPost.state" placeholder="state" class="w-1/2 text-left button mt-4 !text-outline-none mx-4 !text-black focus:hover-shadow-full outline-none" type="text">
            </div>
        </div>

<!-- RIGHT AREA -->
        <div class="md:w-1/2 md:h-full h-1/2 !cursor-default !px-0 w-full shrink-0 button !rounded-lg text-white bg-[#2A1B58]">
            <!-- GAME SELECTOR -->
            <h3  class="text-left mt-4 px-2 mb-2">Select Game {{ addPost.selectedGame }}</h3>
            <div class="flex items-center  flex-wrap justify-center gap-1 border-t-2 border-b-2  border-[#ED2189] py-2 bg-black !cursor-default">
<!-- puzzle -->
                <input class="hidden" type="radio" id="puzzle" v-model="addPost.selectedGame" name="game" value="puzzle">
                <label for="puzzle" class="!cursor-pointer basis-1/6 md:basis-0 ">
                      <svg :class="addPost.selectedGame=='puzzle' ? 'fill-[#ED2189] scale-105':'scale-90'"  class="cubic-bezier"   fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M18,24h-7.431s.431-1.308,.431-2.5c0-1.379-1.122-2.5-2.5-2.5s-2.5,1.121-2.5,2.5c0,1.013,.431,2.5,.431,2.5H0V8.5c0-1.379,1.122-2.5,2.5-2.5h2.909c-.253-.968-.409-1.903-.409-2.5,0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,.597-.155,1.532-.409,2.5h3.909c1.378,0,2.5,1.121,2.5,2.5v2.909c.969-.254,1.904-.409,2.5-.409,1.93,0,3.5,1.57,3.5,3.5s-1.57,3.5-3.5,3.5c-.596,0-1.531-.155-2.5-.409v6.409Zm-6.18-1h5.18v-6.743s2.103,.743,3.5,.743c1.378,0,2.5-1.121,2.5-2.5s-1.122-2.5-2.5-2.5c-1.064,0-3.5,.743-3.5,.743v-4.243c0-.827-.673-1.5-1.5-1.5h-5.244s.744-2.333,.744-3.5c0-1.379-1.122-2.5-2.5-2.5s-2.5,1.121-2.5,2.5c0,1.218,.744,3.5,.744,3.5H2.5c-.827,0-1.5,.673-1.5,1.5v14.5H5.18c-.116-.595-.18-1.123-.18-1.5,0-1.93,1.57-3.5,3.5-3.5s3.5,1.57,3.5,3.5c0,.377-.064,.905-.18,1.5Z"/></svg>
                </label>

<!-- chess -->
                <input class="hidden" type="radio" id="chess" v-model="addPost.selectedGame" name="game" value="chess">
                <label for="chess" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='chess' ? 'fill-[#ED2189] scale-105':'scale-90'"  class="cubic-bezier" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M20,19.051V8c0-.08-.113-8-9.938-8h-.391l-.095,.379c-.745,2.98-2.023,4.023-3.979,4.816-.971,.393-1.598,1.308-1.598,2.33v1.475h6.389c-.796,3.317-3.363,4.924-4.876,5.6-.919,.409-1.513,1.311-1.513,2.296v2.155c-1.14,.232-2,1.242-2,2.449v2.5H22v-2.5c0-1.208-.86-2.217-2-2.449Zm-14.08-3.538c1.783-.796,4.878-2.755,5.573-6.931l.097-.582H5v-.475c0-.613,.382-1.164,.973-1.403,2.055-.833,3.608-2.036,4.474-5.118,8.425,.192,8.553,6.716,8.554,6.996v11H5v-2.104c0-.591,.36-1.134,.92-1.383Zm15.08,7.487H3v-1.5c0-.827,.673-1.5,1.5-1.5h15c.827,0,1.5,.673,1.5,1.5v1.5Z"/></svg>
                </label>


<!-- billiards -->
<input class="hidden" type="radio" id="billiards" v-model="addPost.selectedGame" name="game" value="billiards">
                <label for="billiards" class="!cursor-pointer basis-1/6 md:basis-0">
                   
                    <svg :class="addPost.selectedGame=='billiards' ? 'fill-[#ED2189] scale-105':'scale-90'" class="cubic-bezier"    fill="#fff" height="32" width="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M256,118.857c-75.621,0-137.143,61.522-137.143,137.143S180.379,393.143,256,393.143S393.143,331.621,393.143,256 S331.621,118.857,256,118.857z M256,374.857c-65.538,0-118.857-53.319-118.857-118.857S190.462,137.143,256,137.143 S374.857,190.462,374.857,256S321.538,374.857,256,374.857z"></path> </g> </g> <g> <g> <path d="M256,0C114.842,0,0,114.842,0,256s114.842,256,256,256s256-114.842,256-256S397.158,0,256,0z M256,493.714 C124.924,493.714,18.286,387.076,18.286,256S124.924,18.286,256,18.286S493.714,124.924,493.714,256S387.076,493.714,256,493.714z "></path> </g> </g> <g> <g> <path d="M298.393,256c7.623-6.708,12.464-16.502,12.464-27.429c0-20.165-16.408-36.571-36.576-36.571h-36.565 c-20.168,0-36.574,16.406-36.574,36.571c0,10.926,4.842,20.721,12.462,27.429c-7.62,6.708-12.462,16.502-12.462,27.429 c0,20.165,16.406,36.571,36.574,36.571h36.565c20.168,0,36.576-16.406,36.576-36.571C310.857,272.502,306.016,262.708,298.393,256 z M274.281,301.714h-36.565c-10.085,0-18.288-8.203-18.288-18.286s8.203-18.286,18.288-18.286h36.565 c10.085,0,18.29,8.203,18.29,18.286S284.366,301.714,274.281,301.714z M274.281,246.857h-36.565 c-10.085,0-18.288-8.203-18.288-18.286s8.203-18.286,18.288-18.286h36.565c10.085,0,18.29,8.203,18.29,18.286 S284.366,246.857,274.281,246.857z"></path> </g> </g> </g></svg>
                    
                </label>

<!-- tennis -->
<input class="hidden" type="radio" id="tennis" v-model="addPost.selectedGame" name="game" value="tennis">
                <label for="tennis" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='tennis' ? 'fill-[#ED2189] scale-105':'scale-90'" class="cubic-bezier"  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M21.958,2.042c-3.145-3.145-8.826-2.582-12.662,1.255-2.422,2.423-3.539,5.58-3.242,8.37-.002,.04,.058,.44,.076,.541,.166,1.17,.481,4.474-.984,5.939L.146,23.146c-.195,.195-.195,.512,0,.707,.098,.098,.226,.146,.354,.146s.256-.049,.354-.146l5-5c1.321-1.322,4.307-1.179,5.797-1.01,.276,.054,1.387,.15,1.577,.15,1.753,0,3.602-.529,5.29-1.562,.742-.522,1.6-1.141,2.187-1.728,3.836-3.837,4.399-9.517,1.255-12.662Zm.022,9.236l-2.545-2.545,3.329-3.329c.487,1.813,.208,3.922-.784,5.873Zm.406-6.909l-3.658,3.658-2.842-2.842,3.625-3.625c.641,.285,1.229,.681,1.738,1.19,.478,.478,.855,1.024,1.136,1.619ZM8.749,15.251c-.509-.509-.905-1.097-1.19-1.738l3.866-3.866,2.842,2.841-3.898,3.898c-.595-.28-1.142-.658-1.619-1.135Zm3.383-6.311l3.049-3.049,2.842,2.842-3.049,3.049-2.842-2.841ZM16.771,1.001c.58,0,1.146,.066,1.687,.199l-3.278,3.278-2.458-2.458c1.324-.673,2.721-1.018,4.048-1.018Zm-6.768,3.002c.569-.569,1.182-1.059,1.821-1.469l2.649,2.649-3.049,3.049-2.698-2.698c.368-.535,.795-1.049,1.277-1.532Zm-1.818,2.406l2.532,2.532-3.518,3.518c-.023-.092-.133-.746-.148-.827-.197-1.675,.193-3.519,1.134-5.222Zm-.932,8.6c.23,.337,.493,.654,.788,.95,.303,.303,.631,.572,.977,.807-.727,.047-1.476,.162-2.159,.387,.232-.685,.348-1.429,.394-2.144Zm5.421,1.97c-.121-.022-.461-.08-.939-.133-.111-.024-.221-.05-.331-.08l3.569-3.569,2.618,2.618c-1.6,.885-3.325,1.283-4.917,1.164Zm5.791-1.704l-2.785-2.785,3.049-3.049,2.736,2.736c-.41,.639-.9,1.252-1.469,1.821-.483,.483-.997,.909-1.532,1.277Z"/></svg>
                </label>


                <!-- video -->
<input class="hidden" type="radio" id="video" v-model="addPost.selectedGame" name="game" value="video">
                <label for="video" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='video' ? 'fill-[#ED2189] scale-105':'scale-90'" class="cubic-bezier"  fill="#fff" width="32" height="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M510.855,299.246C501.34,156.515,423.585,90.021,374.032,90.021c-24.884,0-50.551,5.715-73.203,10.758 c-17.293,3.853-33.628,7.488-45.397,7.488c-11.756,0-27.85-3.635-44.894-7.484c-22.344-5.043-47.673-10.762-72.57-10.762 c-49.553,0-127.309,66.494-136.824,209.225c-4.624,69.323,4.686,107.116,29.293,118.934c5.256,2.521,11.007,3.8,17.337,3.8 c26.429,0,62.797-22.309,113.914-69.216c0.338-0.254,34.742-25.543,93.743-25.543c55.594,0,90.798,22.776,94.638,25.382 c63.781,58.391,104.34,78.593,131.491,65.577C506.169,406.361,515.479,368.568,510.855,299.246z M473.664,401.729 c-18.7,9.011-56.302-12.192-111.713-62.988c-0.254-0.232-0.521-0.45-0.797-0.651c-1.635-1.189-40.778-29.115-105.721-29.115 c-65.02,0-103.102,28.002-105.383,29.766c-55.398,50.787-92.968,71.991-111.713,62.988c-11.377-5.462-23.908-27.467-18.99-101.271 c9.056-135.817,81.729-192.19,118.622-192.19c22.861,0,47.139,5.479,68.552,10.317c18.064,4.076,35.125,7.929,48.912,7.929 c13.774,0,31.062-3.849,49.361-7.925c21.734-4.838,46.364-10.321,69.238-10.321c36.893,0,109.566,56.373,118.622,192.19 C497.572,374.261,485.041,396.267,473.664,401.729z"></path> </g> </g> <g> <g> <path d="M119.722,153.882c-20.122,0-36.492,16.371-36.492,36.492s16.371,36.492,36.492,36.492 c20.122,0,36.492-16.371,36.492-36.492S139.844,153.882,119.722,153.882z M119.722,208.621c-10.063,0-18.246-8.183-18.246-18.246 c0-10.063,8.183-18.246,18.246-18.246c10.063,0,18.246,8.183,18.246,18.246C137.968,200.438,129.785,208.621,119.722,208.621z"></path> </g> </g> <g> <g> <path d="M320.429,226.867c-20.122,0-36.492,16.371-36.492,36.492s16.371,36.492,36.492,36.492s36.492-16.371,36.492-36.492 S340.551,226.867,320.429,226.867z M320.429,281.605c-10.063,0-18.246-8.183-18.246-18.246s8.183-18.246,18.246-18.246 c10.063,0,18.246,8.183,18.246,18.246S330.492,281.605,320.429,281.605z"></path> </g> </g> <g> <g> <rect x="220.071" y="163.005" width="72.984" height="18.246"></rect> </g> </g> <g> <g> <path d="M201.83,208.621c-25.151,0-45.615,20.465-45.615,45.615c0,25.151,20.465,45.615,45.615,45.615 c25.151,0,45.615-20.465,45.615-45.615C247.445,229.085,226.98,208.621,201.83,208.621z M201.83,281.605 c-15.092,0-27.369-12.277-27.369-27.369s12.277-27.369,27.369-27.369s27.369,12.277,27.369,27.369S216.922,281.605,201.83,281.605 z"></path> </g> </g> <g> <g> <circle cx="384.286" cy="153.882" r="18.246"></circle> </g> </g> <g> <g> <circle cx="384.286" cy="208.621" r="18.246"></circle> </g> </g> <g> <g> <circle cx="420.778" cy="181.252" r="18.246"></circle> </g> </g> <g> <g> <circle cx="347.794" cy="181.252" r="18.246"></circle> </g> </g> </g></svg>
                </label>

                <!-- bowling -->
<input class="hidden" type="radio" id="bowling" v-model="addPost.selectedGame" name="game" value="bowling">
                <label for="bowling" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='bowling' ? 'fill-[#ED2189] scale-105':'scale-90'" class="cubic-bezier"  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm-1-13c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm-4,0c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm2-3c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Z"/></svg>
                </label>
                <!-- dex -->
<input class="hidden" type="radio" id="dex" v-model="addPost.selectedGame" name="game" value="dex">
                <label for="dex" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='dex' ? 'fill-[#ED2189] scale-105':'scale-90'" class="cubic-bezier"  fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M19.5,0H4.5C2.019,0,0,2.019,0,4.5v15c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V4.5c0-2.481-2.019-4.5-4.5-4.5ZM1,4.5c0-1.93,1.57-3.5,3.5-3.5h3.793L1,8.293v-3.793Zm0,5.207L9.707,1h1.293v3.293l-6.707,6.707H1v-1.293ZM11,5.707v5.293H5.707l5.293-5.293Zm12,13.793c0,1.93-1.57,3.5-3.5,3.5h-3.793l7.293-7.293v3.793Zm0-5.207l-8.707,8.707h-1.293v-3.293l6.707-6.707h3.293v1.293Zm-10,4v-5.293h5.293l-5.293,5.293Zm10-6.293H12.5c-.276,0-.5,.224-.5,.5v10.5H4.5c-1.93,0-3.5-1.57-3.5-3.5v-7.5H11.5c.276,0,.5-.224,.5-.5V1h7.5c1.93,0,3.5,1.57,3.5,3.5v7.5Z"/></svg>
                </label>

                <!-- basketball -->
<input class="hidden" type="radio" id="basketball" v-model="addPost.selectedGame" name="game" value="basketball">
                <label for="basketball" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='basketball' ? 'fill-[#ED2189] scale-105':'scale-90'" class="cubic-bezier"  fill="#fff" height="32" width="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 492.572 492.572" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M471.527,147.12C445.041,86.938,396.719,40.678,335.45,16.861C274.171-6.976,207.301-5.485,147.142,20.995 C22.94,75.678-33.622,221.226,21.046,345.447c26.481,60.183,74.808,106.442,136.077,130.269 c28.933,11.25,59.106,16.856,89.24,16.856c33.683,0,67.317-7.01,99.067-20.99C469.628,416.899,526.195,271.351,471.527,147.12z M441.428,131.704c-32.328,45.254-79.752,86.073-136.77,118.109c-1.186-1.94-2.418-3.846-3.521-5.847 c-34.279-62.18-21.837-142.695,31.247-206.935C378.623,56.042,416.505,89.053,441.428,131.704z M156.557,38.406 c28.787-12.437,59.188-18.7,89.657-18.7c22.362,0,44.729,3.531,66.525,10.264c-54.507,69.614-66.095,155.935-28.847,223.495 c1.076,1.952,2.284,3.808,3.429,5.709c-9.519,4.888-19.271,9.537-29.237,13.926c-16.26,7.161-32.648,13.389-49.037,18.764 c-4.445-8.734-8.704-17.615-12.689-26.668C162.408,188.041,148.441,107.768,156.557,38.406z M135.658,48.724 c-5.526,69.779,9.364,148.697,42.676,224.397c3.678,8.361,7.581,16.528,11.6,24.586c-22.285,6.353-44.48,11.065-66.261,13.981 c-2.91-7.892-6.012-15.75-9.439-23.538c-19.955-45.344-47.833-86.19-80.74-118.707C51.508,119.567,86.815,76.041,135.658,48.724z M26.95,190.762c28.003,29.52,51.784,65.606,69.254,105.31c2.594,5.894,4.981,11.833,7.264,17.788 c-25.416,2.156-50.098,1.837-73.545-1.029C17.391,272.167,16.97,230.031,26.95,190.762z M39.07,337.524 c-0.616-1.399-1.146-2.815-1.731-4.221c10.926,1.01,21.994,1.702,33.332,1.702c12.942,0,26.167-0.808,39.517-2.101 c11.5,35.413,17.471,71.387,17.606,106.236C88.78,415.267,57.887,380.274,39.07,337.524z M164.258,457.361 c-5.813-2.26-11.415-4.875-16.965-7.565c1.133-39.012-4.64-79.498-17.142-119.302c22.746-3.244,45.841-8.256,69.018-15.049 c32.548,59.74,74.32,109.769,121.049,144.744C269.526,477.81,214.84,477.031,164.258,457.361z M341.88,451.5 c-46.82-32.339-90.252-82.478-123.474-142.001c15.927-5.329,31.835-11.432,47.611-18.379c11.064-4.87,21.861-10.075,32.401-15.547 c33.581,43.558,87.136,70.186,149.339,73.756C425.569,392.839,389.267,429.426,341.88,451.5z M316.039,265.977 c55.392-31.407,102.157-70.903,135.528-114.799c0.607,1.313,1.346,2.538,1.93,3.865c25.394,57.704,24.671,120.397,3.059,174.817 C398.267,328.174,347.678,305.154,316.039,265.977z"></path> </g> </g> </g></svg>
                </label>
  <!-- football -->
<input class="hidden" type="radio" id="football" v-model="addPost.selectedGame" name="game" value="football">
                <label for="football" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='football' ? 'fill-[#ED2189] scale-105':'scale-90'" class="cubic-bezier"  fill="#fff" height="32" width="32" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M461.329,103.278c-0.151-0.254-0.268-0.52-0.446-0.763c-0.267-0.368-0.583-0.676-0.888-0.994 C413.204,39.883,339.177,0,256,0C114.841,0,0,114.841,0,256s114.841,256,256,256s256-114.841,256-256 C512,198.809,493.144,145.941,461.329,103.278z M256,19.692c73.585,0,139.418,33.816,182.791,86.718l-98.658,71.751 L214.124,146.74c-0.625-0.156-1.251-0.23-1.876-0.263L159.225,40.432C188.776,27.112,221.537,19.692,256,19.692z M345.764,320.372 c-0.24,0.461-0.475,0.927-0.646,1.435c-0.061,0.185-0.076,0.372-0.126,0.559l-114.637,46.316l-80.082-95.447l66.023-105.659 l120.891,30.144L345.764,320.372z M19.692,256c0-88.834,49.283-166.366,121.936-206.722l55.727,111.454l-66,105.62L20.51,275.589 C19.977,269.127,19.692,262.596,19.692,256z M198.07,485.113c-90.008-22.769-159.603-97.321-175.118-189.966L135.11,285.8 l81.53,97.168L198.07,485.113z M256,492.308c-13.161,0-26.066-1.1-38.647-3.178l18.437-101.405l124.097-50.138 c0.201-0.081,0.379-0.192,0.57-0.285L462.24,371.23C421.751,443.411,344.483,492.308,256,492.308z M365.352,318.173l-8.92-127.517 l94.197-68.507c26.269,38.077,41.678,84.196,41.678,133.851c0,34.733-7.538,67.739-21.056,97.474L365.352,318.173z"></path> </g> </g> </g></svg>
                </label>
                <!-- other -->
<input class="hidden" type="radio" id="other" v-model="addPost.selectedGame" name="game" value="other">
                <label for="other" class="!cursor-pointer basis-1/6 md:basis-0">
                    <svg :class="addPost.selectedGame=='other' ? 'fill-[#ED2189] scale-105':'scale-90'"  xmlns="http://www.w3.org/2000/svg" class="cubic-bezier"  fill="#fff" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="32" height="32"><path d="M19.5,9h-6c-2.481,0-4.5,2.019-4.5,4.5v6c0,2.481,2.019,4.5,4.5,4.5h6c2.481,0,4.5-2.019,4.5-4.5v-6c0-2.481-2.019-4.5-4.5-4.5Zm3.5,10.5c0,1.93-1.57,3.5-3.5,3.5h-6c-1.93,0-3.5-1.57-3.5-3.5v-6c0-1.93,1.57-3.5,3.5-3.5h6c1.93,0,3.5,1.57,3.5,3.5v6Zm-8-5.5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1Zm5,5c0,.552-.448,1-1,1s-1-.448-1-1,.448-1,1-1,1,.448,1,1ZM9,6c-.552,0-1-.448-1-1s.448-1,1-1,1,.448,1,1-.448,1-1,1Zm-4,2c.552,0,1,.448,1,1s-.448,1-1,1-1-.448-1-1,.448-1,1-1Zm1.913,8.585c-.097,.142-.253,.218-.413,.218-.097,0-.196-.028-.282-.087-.229-.157-.445-.337-.643-.534L1.333,11.939C-.422,10.185-.422,7.33,1.333,5.575L5.575,1.333C6.425,.482,7.556,.015,8.757,.015s2.333,.468,3.182,1.318l4.242,4.242c.197,.197,.377,.414,.534,.643,.155,.228,.098,.539-.131,.695-.225,.154-.537,.098-.695-.131-.121-.178-.261-.346-.415-.5L11.232,2.04c-1.322-1.322-3.628-1.323-4.95,0L2.04,6.282c-1.365,1.365-1.365,3.585,0,4.95l4.242,4.242c.154,.154,.322,.294,.5,.415,.228,.156,.286,.468,.13,.695Z"/></svg>
                </label>

            </div>
            <!-- Note AREA -->
        <h3  class="text-left mt-4 px-2 mb-1">Note</h3>
        <div class="mx-2 h-10 flex">
            <textarea id="text-area" type="text" wrap="hard" v-model="addPost.note" placeholder="absdadç..."  class="w-2/3 h-14 break-words underline underline-offset-4 resize-none font-bold focus:text-black focus:hover-shadow-full cubic-bezier border-transparent focus:border-black bg-transparent text-white focus:bg-white hover:bg-white/10 border rounded-r-xl rounded-tl-xl   focus:outline-0 px-4 py-1">
            </textarea>
            <div class="flex items-center justify-center   ">
                        <label :class="addPost.date == 'today' ? 'hover-shadow-full opacity-100':'opacity-50'" class="cursor-pointer bg-[#77ff89] hover:z-10 h-12 w-fit leading-10 text-center hover-anim border px-2 border-black rounded-l-lg" for="today">
                            today
                        </label>
                        <input v-model="addPost.date" value="today"  id="today" class="hidden "  type="radio" name="date">
                        
                        <label :class="addPost.date == 'tomorrow' ? 'hover-shadow-full opacity-100':'opacity-50'"  class="cursor-pointer bg-[#fdff76] hover:z-10 h-12 w-fit leading-10 text-center hover-anim border px-2 border-black rounded-r-lg" for="tomorrow">
                                tomorrow
                        </label> 
                        <input v-model="addPost.date" value="tomorrow"   id="tomorrow" class="hidden "  type="radio" name="date"> 
                    </div>
            </div>
            <h3  class="text-left mt-8 px-2 mb-1">Needs </h3> 
            <!-- TAGS AREA -->
            <div class=" h-20 flex items-center justify-center w-full gap-2 p-2 flex-wrap">
                <label for="tag-money" :class="addPost.activeTags.includes('money') ? 'hover-shadow-full !opacity-100 ':''" class="h-6 opacity-50 hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                    <div  class="border border-black bg-green-400 rounded-full aspect-square h-4"></div> money
                    <input  id="tag-money" v-model="addPost.activeTags" value="money" class="hidden" type="checkbox">
                </label>
                <label for="tag-game" :class="addPost.activeTags.includes('game') ? 'hover-shadow-full !opacity-100 ':''" class="h-6 opacity-50 hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                    <div  class="border border-black bg-blue-400 rounded-full aspect-square h-4"></div> game
                    <input  id="tag-game" v-model="addPost.activeTags" value="game" class="hidden" type="checkbox">
                </label>

                <label for="tag-place" :class="addPost.activeTags.includes('place') ? 'hover-shadow-full !opacity-100 ':''" class="h-6 opacity-50 hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                    <div  class="border border-black bg-zinc-400 rounded-full aspect-square h-4"></div> place
                    <input  id="tag-place" v-model="addPost.activeTags" value="place" class="hidden" type="checkbox">
                </label>

                <label for="tag-1p" :class="addPost.player=='1p' ? 'hover-shadow-full !opacity-100 ':''" class="h-6  opacity-50 hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                    <div  class="border border-black bg-pink-400 rounded-full aspect-square h-4 "></div> 1 p
                    <input checked  id="tag-1p" v-model="addPost.player" value="1p" class="hidden" name="player" type="radio">
                </label>
                <label for="tag-2p" :class="addPost.player=='2p' ? 'hover-shadow-full !opacity-100 ':''" class="h-6 opacity-50 hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                    <div  class="border border-black bg-pink-500 rounded-full aspect-square h-4"></div> 2 p
                    <input   id="tag-2p" v-model="addPost.player" value="2p" class="hidden" name="player" type="radio">
                </label>
                <label for="tag-3p"  :class="addPost.player=='3p' ? 'hover-shadow-full !opacity-100 ':''"  class=" h-6 opacity-50 hover-anim shrink-0 bg-white border border-black rounded-full w-[100px] text-center flex items-center justify-start pl-2 gap-2 cursor-pointer overflow-hidden ">
                    <div  class="border border-black bg-pink-600 rounded-full aspect-square h-4"></div> 3 p
                    <input    id="tag-3p" v-model="addPost.player" value="3p" class="hidden" name="player" type="radio">
                </label>
            </div>

            <div @click="postGame" class="button bg-purple-700 w-fit m-4 ml-auto">
                 Post
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import store from "/src/store"
import { onMounted,  reactive } from 'vue';
import {db} from '/src/firebase'
import { doc,collection, addDoc,updateDoc } from "firebase/firestore"; 
//#region variables
//add post form
const addPost = reactive({
    selectedGame:"",
    note:"",
    activeTags:[],
    player:"1p",
    date:"today",
    location:"00000000",
    time: "",
    city:"",
    state:"",
    
})

var tempAddGameId=""
//#endregion



//#region Functions

//#endregion



//#region Firebase Functions
// add game post to Firebase
const postGame =()=>{
    const currentTime = new Date();
    const postsRef = collection(db, "posts")

    addDoc(postsRef, {                                                                
        selectedGame : addPost.selectedGame,
        note : addPost.note,
        activeTags : addPost.activeTags,
        player : addPost.player, 
        date : addPost.date,
        location:addPost.location,
        city:addPost.city,
        state:addPost.state,
        isActive : true,
        time:currentTime,
        ownerUid:store.state.activeUser.uid,
        ownerName:store.state.activeUser.name,
        ownerPoint:store.state.activeUser.point,

        
    }).then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
    tempAddGameId=docRef.id
    console.log('store.state.activeUser', store.state.activeUser)
    console.log('tempAddGameId', tempAddGameId)
    //add post id to activeUser
    addPostToUser()
})
    //close addpost modal
    store.state.addPost = false
}

//add post id to in user > gamePosts  push post id  operation
const addPostToUser = () =>									                                                           
{						
const userId = store.state.activeUser.uid
const lastGamePosts = store.state.activeUser.gamePosts
console.log('lastGamePosts', lastGamePosts)
console.log('tempAddGameId', tempAddGameId)
lastGamePosts.push(tempAddGameId)
const updateRef = doc(db, "users", userId);

 updateDoc(updateRef, {
    gamePosts:lastGamePosts,
}).then(()=>{

store.state.activeUser.gamePosts=lastGamePosts 

}
)};                                                                               

//#endregion


onMounted(()=>{
    document.getElementById('text-area').addEventListener('input', function(e){
    this.value = this.value.replace(/\n/g,'')
        } )   



})

</script>