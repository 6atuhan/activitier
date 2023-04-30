<template>
     <div class="header font-Quicksand font-semibold relative">
        

        <div active-class="text-red-400 fill-red-400 scale-105" @click="logOutFunc" class="cursor-pointer hover:text-red-400 transition-all ">
            <div class="hidden md:inline-flex items-center">
                <img class=" w-16" src="/src/assets/full-logo.png" alt=""> <p>activitier</p>

            </div>
            <img class="visible md:hidden w-8" src="/src/assets/sm-logo.png" alt="">
        </div>
                <router-link v-if="store.state.activeUser != null" active-class="text-red-400 fill-red-400 scale-105" to="explore" class="cursor-pointer hover:text-red-400 transition-all ">
                    <p class="hidden md:inline-flex" >explore</p>
                    <svg  class="visible md:hidden hover:fill-red-600 cubic-bezier" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048A10.211,10.211,0,0,1,16.5,12ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17Zm11.252,4.644A19.676,19.676,0,0,0,17.426,17h3.221A10.031,10.031,0,0,1,14.605,21.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/></svg>

                </router-link>
                <router-link active-class="text-red-400 fill-red-400 scale-105" to="faq"  class="cursor-pointer hover:text-red-400 transition-all ">
                    <p class="hidden md:inline-flex" >faq</p>
                    <svg  class="visible md:hidden hover:fill-red-600 cubic-bezier" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24"><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"/><path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z"/><rect x="11" y="17" width="2" height="2" rx="1"/></svg>

                </router-link>
                <router-link active-class="text-red-400 fill-red-400 scale-105" to="guide"  class="cursor-pointer hover:text-red-400 transition-all ">
                    <p class="hidden md:inline-flex" >guide</p>
                    <svg  class="visible md:hidden hover:fill-red-600 cubic-bezier" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M17,0H7C4.243,0,2,2.243,2,5v15c0,2.206,1.794,4,4,4h11c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,5v11H8V2h4V10.347c0,.623,.791,.89,1.169,.395l1.331-1.743,1.331,1.743c.378,.495,1.169,.228,1.169-.395V2c1.654,0,3,1.346,3,3ZM6,2.184v13.816c-.732,0-1.409,.212-2,.556V5c0-1.302,.839-2.402,2-2.816Zm11,19.816H6c-2.629-.047-2.627-3.954,0-4h14v1c0,1.654-1.346,3-3,3Z"/></svg>

                </router-link>

        <router-link active-class="text-red-400 fill-red-400 scale-105" to="hastagTw" class="cursor-pointer hover:text-red-400 transition-all ">
            <p class="hidden md:inline-flex" >#activitier</p>
            <svg  class="visible md:hidden hover:fill-red-600 cubic-bezier" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="M22.5,9a1.5,1.5,0,0,0,0-3H18.872l.613-4.288a1.5,1.5,0,1,0-2.97-.424L15.842,6H9.872l.613-4.288a1.5,1.5,0,1,0-2.97-.424L6.842,6H2.5a1.5,1.5,0,0,0,0,3H6.413l-.857,6H1.5a1.5,1.5,0,0,0,0,3H5.128l-.613,4.288a1.5,1.5,0,0,0,2.97.424L8.158,18h5.97l-.613,4.288a1.5,1.5,0,0,0,2.97.424L17.158,18H21.5a1.5,1.5,0,0,0,0-3H17.587l.857-6Zm-7.944,6H8.587l.857-6h5.969Z"/></svg>

        </router-link>
        <router-link v-if="store.state.activeUser != null" active-class="text-red-400 fill-red-400 scale-105" to="profile" class="cursor-pointer hover:text-red-400 transition-all ">
            <p class="hidden md:inline-flex" >profile</p>
            <svg  class="visible md:hidden hover:fill-red-600 cubic-bezier" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24"><path d="m16,24h-8c-2.757,0-5-2.243-5-5V7c0-2.757,2.243-5,5-5h.171C8.584.836,9.696,0,11,0h2C14.304,0,15.416.836,15.829,2h.171c2.757,0,5,2.243,5,5v12c0,2.757-2.243,5-5,5ZM8,4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h8c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3h-1c-.552,0-1-.448-1-1s-.449-1-1-1h-2c-.551,0-1,.449-1,1s-.448,1-1,1h-1Zm4,9c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5Zm4.249,5.968c.535-.137.857-.683.719-1.217-.559-2.173-2.648-3.751-4.968-3.751s-4.409,1.578-4.968,3.751c-.138.535.184,1.08.719,1.217.537.138,1.08-.184,1.217-.719.33-1.282,1.633-2.249,3.032-2.249s2.702.967,3.032,2.249c.116.452.522.751.968.751.082,0,.166-.01.25-.032Z"/></svg>
        </router-link>
        <div v-if="store.state.activeUser != null" @click="logOut = !logOut" :class="logOut? ' hover-shadow-full':''" class="border z-30 group  border-black rounded-full text-center bg-red-500 hover:bg-red-700 cursor-pointer h-8 w-8 absolute -top-4 right-4  ml-4 hover-anim !text-xl font-bold">
            <svg fill="#000" class="group-hover:fill-white cubic-bezier mx-auto mt-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.301 512.301" style="enable-background:new 0 0 512.301 512.301;" xml:space="preserve" width="20" height="20">
<g>
	<path d="M320.119,82.112L320.119,82.112c0.137,8.67,5.409,16.432,13.419,19.755c71.67,31.535,117.01,103.433,114.581,181.696   c-1.72,106.039-89.076,190.605-195.115,188.885c-106.039-1.72-190.606-89.076-188.885-195.115c0,0,0,0,0,0   c0.101-76.006,45.028-144.798,114.581-175.445c8.013-3.343,13.282-11.117,13.419-19.797l0,0c0.019-11.782-9.518-21.348-21.3-21.367   c-2.745-0.004-5.466,0.521-8.012,1.548C43.898,113.824-10.705,252.01,40.848,370.919S230.586,544.43,349.495,492.878   c118.909-51.552,173.511-189.738,121.959-308.647c-23.698-54.66-67.299-98.261-121.959-121.959   c-10.913-4.442-23.36,0.804-27.802,11.716C320.643,76.568,320.108,79.327,320.119,82.112z"/>
	<path d="M256.119,0L256.119,0c11.782,0,21.333,9.551,21.333,21.333v128c0,11.782-9.551,21.333-21.333,21.333l0,0   c-11.782,0-21.333-9.551-21.333-21.333v-128C234.785,9.551,244.337,0,256.119,0z"/>
</g>
            </svg>
        </div>

        
    </div>

    <div v-if="logOut" class="bg-[#F5F5F4] border flex items-center justify-center flex-col gap-2 w-96 h-32 fixed top-1/2 left-1/2   -translate-x-48 -translate-y-16 z-[99999] border-black rounded-lg hover-shadow-full">
        <div class="flex items-center justify-center flex-row gap-2">
            <p class="text-white font-Baloo-Regular text-outline text-xl">
                Do you really want to log out 
            </p>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="#000" width="32" height="32" viewBox="0 0 24 24"><path d="M21,18.305c1.256-1.787,2-3.959,2-6.305,0-6.065-4.935-11-11-11S1,5.935,1,12c0,2.346,.744,4.517,2,6.305v1.606c-1.861-2.115-3-4.879-3-7.911C0,5.383,5.383,0,12,0s12,5.383,12,12c0,3.032-1.139,5.796-3,7.911v-1.606Zm-13,3.931v1.064c1.253,.445,2.596,.7,4,.7s2.747-.255,4-.7v-1.064c-1.242,.487-2.588,.764-4,.764s-2.758-.277-4-.764Zm1-11.236h1c0-1.889-1.069-4-2.5-4s-2.5,2.111-2.5,4h1c0-1.43,.785-3,1.5-3s1.5,1.57,1.5,3Zm7.5-4c-1.431,0-2.5,2.111-2.5,4h1c0-1.43,.785-3,1.5-3s1.5,1.57,1.5,3h1c0-1.889-1.069-4-2.5-4Zm-6.5,10c0-1.683,.878-3,2-3s2,1.317,2,3-.878,3-2,3-2-1.317-2-3Zm1,0c0,1.145,.528,2,1,2s1-.855,1-2-.528-2-1-2-1,.855-1,2Zm7,7h1V13h-1v11Zm-13,0h1V13h-1v11Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" fill="#000" width="32" height="32" viewBox="0 0 24 24"><path d="M12,24C5.383,24,0,18.617,0,12S5.383,0,12,0s12,5.383,12,12-5.383,12-12,12ZM12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1ZM7.5,19c-1.378,0-2.5-1.121-2.5-2.5,0-1.241,.968-2.837,1.618-3.607,.21-.249,.517-.392,.841-.393h.002c.323,0,.628,.141,.839,.388,.631,.737,1.699,2.328,1.699,3.612,0,1.379-1.122,2.5-2.5,2.5Zm-.118-5.463c-.574,.68-1.382,2.049-1.382,2.963,0,.827,.673,1.5,1.5,1.5s1.5-.673,1.5-1.5c0-.923-.873-2.277-1.459-2.963h-.159Zm10.507,3.277c.173-.214,.141-.528-.073-.702-.106-.087-2.638-2.112-5.815-2.112-.181,0-.359,.006-.536,.019-.275,.02-.483,.259-.463,.534,.019,.275,.251,.481,.534,.464,.153-.011,.308-.017,.464-.017,2.815,0,5.162,1.87,5.186,1.889,.093,.074,.203,.111,.313,.111,.146,0,.29-.063,.39-.186Z"/><circle cx="8" cy="10" r="1"/><circle cx="16" cy="10" r="1"/></svg>
        </div>
        <div class="flex items-center justify-center flex-row gap-2">

        <div @click="logOut = false" class="button w-fit bg-green-400 hover:bg-green-600 relative group text-white font-Baloo-Regular">
                no
        <img src="/src/assets/gifs/abstract-1449.gif" alt="" class=" opacity-0 delay-100 group-hover:opacity-100 cubic-bezier absolute top-0 -left-7">
        <img src="/src/assets/gifs/abstract-1449.gif" alt="" class=" opacity-0 delay-200 group-hover:opacity-100 cubic-bezier absolute bottom-0 -right-4">
        <img src="/src/assets/gifs/abstract-1449.gif" alt="" class=" opacity-0 delay-300 group-hover:opacity-100 cubic-bezier absolute bottom-2 right-4">
        <img src="/src/assets/gifs/abstract-1449.gif" alt="" class=" opacity-0 delay-100 group-hover:opacity-100 cubic-bezier absolute -bottom-8 left-2">


        </div>
        <div @click="logOutFunc" class="button w-fit bg-red-400 hover:bg-red-600 text-white font-Baloo-Regular">
                yes
        </div>
        </div>

    </div>
</template>

<script setup>
import store from "/src/store"
import { ref } from "vue";
import { getAuth,signOut  } from "firebase/auth";
import router from "/src/router"

//#region variables
const logOut=ref(false)

//#endregion



//#region Functions

//signout and go home page
const logOutFunc=()=>{
    const auth = getAuth();
if(auth.currentUser !=null){
    signOut(auth).then(() => {
    store.state.activeUser=null
  router.push("/")
    }).catch((error) => {
        console.log('error', error)
});
}else{
    router.push("/")
}
}
//#endregion



//#region Firebase Functions
//#endregion





</script>
