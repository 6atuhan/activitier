<template>
<div class="container text-Quicksand w-full h-screen text-white text-lg flex ">
    <!-- sidemenu -->
    <ul class="border-r border-cyan-600 w-fit h-full ">
        <div @click="goHome" class="flex select-none hover:saturate-200 transition-all cursor-pointer hover:bg-zinc-800  items-center justify-center w-48"><img src="/src/assets/full-logo.png" class="h-16 w-16" alt=""> Activitier</div>
        <li @click="goDashboard"  :class="activePage =='dashboard' ? 'bg-zinc-800 text-cyan-400':''" class="flex w-48 h-16 px-4 hover:bg-zinc-800 transition-all cursor-pointer items-center justify-between"><img src="/src/assets/sm-logo.png" class="h-4 w-4" alt="">dashbord</li>
        <li @click="goUsers"  :class="activePage =='users' ? 'bg-zinc-800 text-cyan-400':''" class="flex w-48 h-16 px-4 hover:bg-zinc-800 transition-all cursor-pointer items-center justify-between"><img src="/src/assets/sm-logo.png" class="h-4 w-4" alt="">users</li>
        <li @click="goFaqs"  :class="activePage =='faqs' ? 'bg-zinc-800 text-cyan-400':''" class="flex w-48 h-16 px-4 hover:bg-zinc-800 transition-all cursor-pointer items-center justify-between"><img src="/src/assets/sm-logo.png" class="h-4 w-4" alt="">faqs</li>
        <li @click="goReports" :class="activePage =='reports' ? 'bg-zinc-800 text-cyan-400':''"  class="flex w-48 h-16 px-4 hover:bg-zinc-800 transition-all cursor-pointer items-center justify-between"><img src="/src/assets/sm-logo.png" class="h-4 w-4" alt="">reports</li>
    </ul>
    <!-- pages -->
    <div class=" shrink-0 scroll-smooth w-calc h-full overflow-hidden ">
        <!-- dashboard -->
        <div id="dashboard" class=" shrink-0  h-full mb-10">
            <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-3xl">Dashboard</h1>
            <div class="flex w-full h-full items-start justify-center flex-wrap gap-5 overflow-scroll">
                <div class="w-[450px] p-4 border bg-neutral-200 border-cyan-500 rounded-lg"><canvas id="gamesCount"></canvas></div>
                <div class="w-[240px] p-4 border shrink-0 bg-neutral-200 border-cyan-500 rounded-lg"><canvas id="postCount"></canvas></div>
                <div class="w-[450px] p-4 border bg-neutral-200 border-cyan-500 rounded-lg text-sm text-black"><canvas id="countryCount"></canvas></div>
                <div class="w-[240px] p-4 border shrink-0 bg-neutral-200 border-cyan-500 rounded-lg"><canvas id="genderChart"></canvas></div>
               
            </div>
        </div>

        <div id="users" class=" shrink-0  h-full ">
            <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline mb-10 text-3xl">users</h1>
            <div class="relative ml-4 h-4/5 overflow-x-auto overflow-y-scroll  shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    userID
                </th>
                <th scope="col" class="px-6 py-3">
                    Point
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    City
                </th>
                <th scope="col" class="px-6 py-3">
                    Join Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Game
                </th>
                <th scope="col" class="px-6 py-3">
                    Post
                </th>
                <th scope="col" class="px-6 py-3">
                    Rep day
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 52" :key="i" class="text-white even:bg-gray-900 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                    18293
                </th>
                <td class="px-6 py-4">
                    4.7
                </td>
                <td class="px-6 py-4">
                    batuhan boran
                </td>
                <td class="px-6 py-4">
                    ankara
                </td>
                <td class="px-6 py-4">
                    02/04/2023
                </td>
                <td class="px-6 py-4">
                    7
                </td>
                <td class="px-6 py-4">
                  11
                </td>
                <td class="px-6 py-4">
                    1 day
                </td>

                <td class="px-6 py-4">
                    <ul class="flex justify-center items-center gap-2">
                        <li>
                            <div id="block"  @click="openDialog($event.target.id)" class="w-4 h-4 rounded-full bg-red-500 hover:bg-red-700 cubic-bezier hover-anim cursor-pointer"></div>
                            <!-- BLOCK -->
                        </li>
                        <li>
                            <div  id="report" @click="openDialog($event.target.id)" class="w-4 h-4 rounded-full bg-yellow-500 hover:bg-yellow-700 cubic-bezier hover-anim cursor-pointer"></div>
                            <!-- REPORT -->
                        </li>
                        <li>
                            <div  id="save" @click="openDialog($event.target.id)" class="w-4 h-4 rounded-full bg-green-500 hover:bg-green-700 cubic-bezier hover-anim cursor-pointer"></div>
                            <!-- SAVE -->
                        </li>
                        <li>
                            <div id="message"  @click="openDialog($event.target.id)" class="w-4 h-4 rounded-full bg-blue-500 hover:bg-blue-700 cubic-bezier hover-anim cursor-pointer"></div>
                            <!-- MESSAGE -->
                        </li>
                        <li class="self-end">
                            <img src="/src/assets/sm-logo.png" class="w-6 h-6 rounded-full  cubic-bezier  cursor-pointer">
                                <!-- PREMIUM -->
                        </li>
                    </ul>
                </td>
            </tr>

        </tbody>
    </table>
          </div>
        </div>
        <div id="faqs" class="shrink-0  h-full">
            <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-3xl">faqs</h1>
            <div class="relative ml-4 h-2/5 overflow-x-auto overflow-y-scroll  shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    faqID
                </th>
                <th scope="col" class="px-6 py-3">
                    userID
                </th>
                <th scope="col" class="px-6 py-3">
                    question
                </th>


                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 8" :key="i" class="text-white even:bg-gray-900 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                  FQ9029
                </th>
                <td class="px-6 py-4">
                  18293
                </td>
                <td class="px-6 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur reprehenderit aut est voluptatum nulla provident.
                </td>

                <td class="px-6 py-4 text-blue-500 cursor-pointer ">
                    <p class="hover:border-blue-500 border-transparent border-b w-fit text-center">Check</p>
                </td>

            </tr>
            
          </tbody>
        </table>
        
        
      </div>
      <h2  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-xl mt-4">FQ9029</h2>
      <h2  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est sequi, deleniti molestias optio atque!</h2>
      <input type="text" placeholder="faq answer..."  class="w-4/5 resize-none text-black m-4 border-black border rounded-r-xl rounded-tl-xl  focus:hover-shadow-full cubic-bezier focus:outline-0 p-4">


  <button @click="operationTab.openTab=false"  class="button bg-green-500 uppercase !text-white">submit</button>

          </div>
        <div id="reports" class=" shrink-0  h-full">
            <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-3xl">reports</h1>
            <div class="relative ml-4 h-4/5 overflow-x-auto overflow-y-scroll  shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs uppercase bg-gray-700 text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    faqID
                </th>
                <th scope="col" class="px-6 py-3">
                    userID
                </th>
                <th scope="col" class="px-6 py-3">
                    REPORT
                </th>


                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="i in 8" :key="i" class="text-white even:bg-gray-900 border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium  whitespace-nowrap ">
                  RP00321
                </th>
                <td class="px-6 py-4">
                  18293
                </td>
                <td class="px-6 py-4">
                    Tenetur reprehenderit aut est voluptatum nulla provident.
                </td>

                <td class="px-6 py-4  cursor-pointer flex gap-2 ">
                  <p class="hover:border-red-500 text-red-500 border-transparent border-b w-fit text-center">BLOCK</p>
                    <p class="hover:border-yellow-500 text-yellow-500 border-transparent border-b w-fit text-center">REPORT</p>
                    <p class="hover:border-blue-500 text-blue-500 border-transparent border-b w-fit text-center">DELETE</p>
                </td>

            </tr>
            
          </tbody>
        </table>
        
        
      </div>
          </div>
    </div>

</div>

<!-- USER OPERATION -->
<div v-if="operationTab.openTab"  class="flex items-center justify-center bg-black/50 h-screen w-screen overflow-scroll overflow-x-hidden fixed top-0 left-0 z-[9999] "> 


<!-- BLOCK TAB -->
<div v-if="operationTab.activeTab=='block'" class="bg-red-700 flex flex-col justify-center items-center flex-wrap border font-Quicksand mx-auto p-4 border-black hover-shadow-full relative rounded-lg  w-96 h-96">
  <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-3xl">Block User</h1>
  <h2  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-xl">User Info</h2>
  <div class="text-white p-2 m-2 border border-white rounded-lg">
    <p>id: 187978</p>
    <p>name: batuhan boran</p>
    <p>city: ankara</p>
    <p>point: 4,7</p>
    <p>date: 02.04.2023</p>
    <p>game: 7</p>
    <p>post: 11</p>
    <p>rep day: 1</p>
  </div>
  <div class="flex gap-4">
    <button @click="operationTab.openTab=false"  class="button bg-rose-500 uppercase !text-white">nooo</button>
  <button @click="operationTab.openTab=false"  class="button bg-green-500 uppercase !text-white">yess</button>
  </div>
</div>
<!-- REPORT TAB -->

<div v-if="operationTab.activeTab=='report'" class="bg-yellow-700 flex flex-col justify-center items-center flex-wrap border font-Quicksand mx-auto p-4 border-black hover-shadow-full relative rounded-lg  w-96 h-96">
  <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-3xl">Report User</h1>
  <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-xl">rep history : 1day</h1>
  <input type="text" placeholder="report message..."  class="w-4/5 resize-none text-black m-4 border-black border rounded-r-xl rounded-tl-xl  focus:hover-shadow-full cubic-bezier focus:outline-0 p-4">
 
  <div class="flex gap-4 flex-wrap items-center justify-center">
    <input type="radio" value="1day" v-model="reportDay" name="reportDay" id="report1day" class="hidden" > <label for="report1day"  :class="reportDay == '1day' ? 'hover-shadow-full opacity-100':'' " class="button opacity-50 bg-fuchsia-500 uppercase !text-white">  1 day</label>
    <input type="radio" value="3day" v-model="reportDay" name="reportDay" id="report3day" class="hidden" > <label for="report3day"  :class="reportDay == '3day' ? 'hover-shadow-full opacity-100':'' " class="button opacity-50 bg-fuchsia-500 uppercase !text-white">  3 day</label>
    <input type="radio" value="7day" v-model="reportDay" name="reportDay" id="report7day" class="hidden" > <label for="report7day"  :class="reportDay == '7day' ? 'hover-shadow-full opacity-100':'' " class="button opacity-50 bg-fuchsia-500 uppercase !text-white">  7 day</label>
  <input type="radio" value="15day" v-model="reportDay" name="reportDay" id="report15day" class="hidden" > <label for="report15day" :class="reportDay == '15day' ? 'hover-shadow-full opacity-100':'' "  class="button opacity-50 bg-fuchsia-500 uppercase !text-white">  15 day</label>
  <input type="radio" value="30day" v-model="reportDay" name="reportDay" id="report30day" class="hidden" > <label for="report30day" :class="reportDay == '30day' ? 'hover-shadow-full opacity-100':'' "  class="button opacity-50 bg-fuchsia-500 uppercase !text-white">  30 day</label>
  </div>
  <div class="flex gap-4 flex-wrap items-center justify-center mt-2">
    <button @click="operationTab.openTab=false"  class="button bg-red-500 uppercase !text-white">decline</button>
    <button @click="operationTab.openTab=false"  class="button bg-green-500 uppercase !text-white">accept</button>
  </div>

</div>
<!-- SAVE TAB -->
<div v-if="operationTab.activeTab=='save'" class="bg-green-700 flex flex-col justify-center items-center flex-wrap border font-Quicksand mx-auto p-4 pt-2 border-black hover-shadow-full relative rounded-lg  w-96 h-96">
  <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-3xl">Save User</h1>
  <h2  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-xl">User Info</h2>
  <div class="text-white p-2 m-2 border border-white rounded-lg">
    <p>id: 187978</p>
    <p>name: batuhan boran</p>
    <p>city: ankara</p>
    <p>point: 4,7</p>
    <p>date: 02.04.2023</p>
    <p>game: 7</p>
    <p>post: 11</p>
    <p>rep day: 1</p>
    <p>blocked?: no</p>
  </div>


  <div class="flex gap-4 flex-wrap items-center justify-center mt-2">
    <button @click="operationTab.openTab=false"  class="button bg-red-500 uppercase !text-white">no save </button>
    <button @click="operationTab.openTab=false"  class="button bg-green-500 uppercase !text-white">yes save</button>
  </div>
</div>
<!-- MESSAGE TAB -->
<div v-if="operationTab.activeTab=='message'" class="bg-blue-700 flex flex-col justify-center items-center flex-wrap border font-Quicksand mx-auto p-4 border-black hover-shadow-full relative rounded-lg  w-96 h-96">
  <h1  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-3xl">Message to User</h1>
  <h2  class="select-none mx-4 font-Baloo-Regular text-white text-outline text-xl">187978  batuhan boran </h2>
  <input type="text" placeholder="message..."  class="w-4/5 resize-none text-black m-4 border-black border rounded-r-xl rounded-tl-xl  focus:hover-shadow-full cubic-bezier focus:outline-0 p-4">
  <div class="flex gap-4 flex-wrap items-center justify-center mt-2">
      <button @click="operationTab.openTab=false"  class="button bg-red-500 uppercase !text-white">delete </button>
      <button @click="operationTab.openTab=false"  class="button bg-green-500 uppercase !text-white">send</button>
    </div>
</div>

</div>
</template>
<script setup>
import { onMounted, reactive, ref } from "vue";
import Chart from 'chart.js/auto'
import router from "/src/router"

//#region variables
const reportDay = ref("")
//operation variables from userlist
const operationTab=reactive({
    openTab:false,
    activeTab:""
})

//active tab from sidemenu
const activePage=ref("")
//#endregion





//#region Functions


//user action modal
const openDialog=(event)=>{
    operationTab.activeTab=event
    operationTab.openTab=true

}

//sidemenu tabs rout.
const goDashboard=()=>{
    document.getElementById('dashboard').scrollIntoView();
    activePage.value="dashboard"
}
const goUsers=()=>{
    document.getElementById('users').scrollIntoView();
    activePage.value="users"

}
const goFaqs=()=>{
    document.getElementById('faqs').scrollIntoView();
    activePage.value="faqs"
    
}
const goReports=()=>{
    document.getElementById('reports').scrollIntoView();
    activePage.value="reports"

}

//return home page
const goHome = ()=>{
  router.push("/")
}
//#endregion



//#region Firebase Functions

//#endregion



//charts
onMounted(()=>{
// GENDER COUNT
(async function() {
    const data = {
  labels: [
    'girls count',
    'boys count',
  ],
  datasets: [{
    label: 'Gender',
    data: [37, 144],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)'
    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1,
  },
]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'USERS GENDER'
      }
    }
  },
};

 new Chart(
    document.getElementById('genderChart'),config
  );

  

})();
//  POST COUNT 
(async function() {


    const data = {
  labels: [
    'girls post',
    'boys post',
  ],
  datasets: [{
    label: 'Gender',
    data: [14, 23],
    backgroundColor: [
      'rgba(255, 99, 132,0.7)',
      'rgba(54, 162, 235,0.7)'
    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1,
  },
]
};

const config = {
  type: 'doughnut',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'POSTS GENDER'
      }
    }
  },
};



new Chart(
    document.getElementById('postCount'),config
  );

  

})();
 
// GAMES COUNT

(async function() {




    // const labels = ["puzzle","chess","billiards","tennis","video","bowling","deck","basketball","football","other"]
    const labels = ["games"]
const data = {

  labels: labels,
  datasets: [
    {

    label: "puzzle",
    data: [17],
    fill: false,
    backgroundColor: [
    "#11CDDE"
    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'chess',
    data: [59],
    fill: false,
    backgroundColor: [
    "#fff"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'billiards',
    data: [29],
    fill: false,
    backgroundColor: [
    "#FF1C5C"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'tennis',
    data: [12],
    fill: false,
    backgroundColor: [
    "#B9132A"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'video',
    data: [88],
    fill: false,
    backgroundColor: [
    "#07E21C"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'bowling',
    data: [3],
    fill: false,
    backgroundColor: [
    "#F9EE2F"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'deck',
    data: [13],
    fill: false,
    backgroundColor: [
    "#0F61FF"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'basketball',
    data: [10],
    fill: false,
    backgroundColor: [
    "#FF6B0A"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'football',
    data: [73],
    fill: false,
    backgroundColor: [
    "#FF1723"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'other',
    data: [31],
    fill: false,
    backgroundColor: [
    "#F7FC00"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
]
};


const config = {
  type: 'bar',
  data,
options: {

    responsive: true,
    plugins: {

      title: {
        display: true,
        text: 'PLAYED GAMES'
      }
    }
  },
};


new Chart(
    document.getElementById('gamesCount'),config
  );

  

})();

// COUNTRY COUNT
(async function() {




    
    const labels = ["citys in turkey"]
const data = {

  labels: labels,
  datasets: [
    {

    label: "ankara",
    data: [27],
    fill: false,
    backgroundColor: [
    "#FFE200"
    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'istanbul',
    data: [23],
    fill: false,
    backgroundColor: [
    "#3BD500"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'izmir',
    data: [14],
    fill: false,
    backgroundColor: [
    "#FF1C5C"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'antalya',
    data: [21],
    fill: false,
    backgroundColor: [
    "#0068C2"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
  {

    label: 'eskişehir',
    data: [9],
    fill: false,
    backgroundColor: [
    "#B9132A"

    ],
    borderColor: [
      'rgb(0, 0, 0)',
    ],
    borderWidth: 1
  },
]
};


const config = {
  type: 'bar',
  data,
options: {

    responsive: true,
    plugins: {

      title: {
        display: true,
        text: 'TOP 5 CITIES USERS'
      }
    }
  },
};


new Chart(
    document.getElementById('countryCount'),config
  );

  

})();
 
})



</script>

<style scoped>
.w-calc{
    width: calc(100% - 8em);
}
</style>