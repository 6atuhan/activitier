<template>
<header-comp v-if="store.state.homePageCheck"></header-comp>

  <router-view  ></router-view>
<footer-comp v-if="store.state.homePageCheck"></footer-comp>
</template>


<script setup>

import FooterComp from './components/FooterComp.vue';
import HeaderComp from './components/HeaderComp.vue';
import store from "/src/store"
import router from "/src/router"



var r = document.querySelector(':root');

router.beforeResolve(to => {
  checkPageName(to)
})


const checkPageName = (to)=>{

if(to.name == "Home"){
store.state.homePageCheck=false
r.style.setProperty('--bgcolor', '#ED2189');

}
else if (to.name == "Message"){
store.state.homePageCheck=true
r.style.setProperty('--bgcolor', '#FFB256');
}

else if (to.name == "Guide"){
store.state.homePageCheck=true
r.style.setProperty('--bgcolor', '#165842');
}
else if (to.name == "Faq"){
store.state.homePageCheck=true
r.style.setProperty('--bgcolor', '#EB88A6');
}
else if (to.name == "b06b"){
store.state.homePageCheck=false
r.style.setProperty('--bgcolor', '#09090b');
}
else if (to.name == "Login"){
store.state.homePageCheck=false
r.style.setProperty('--bgcolor', '#DF2760');

}
else if (to.name == "HastagTw"){
store.state.homePageCheck=true
r.style.setProperty('--bgcolor', '#2A1B58');
}
else if (to.name == "Explore"){

store.state.homePageCheck=true
if(store.state.activeUser.sex=='man'){
//boy
  r.style.setProperty('--bgcolor', '#51A5DB');
}
else{
//girl
  r.style.setProperty('--bgcolor', '#E6686F');
}
}
else if (to.name == "Profile"){

store.state.homePageCheck=true
if(store.state.activeUser.sex=='man'){
//boy
  r.style.setProperty('--bgcolor', '#51A5DB');
}
else{
//girl
  r.style.setProperty('--bgcolor', '#E6686F');
}
}
else {
  store.state.homePageCheck=true
r.style.setProperty('--bgcolor', '#35A1DF');

}
}




</script>


<style>
:root{
 --bgcolor:#ED2189
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}


/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #ffffff #ffffff;
  }
  .overlay{
  overflow: overlay
}

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 10px;
    border: 1px solid #000000;
  }



</style>