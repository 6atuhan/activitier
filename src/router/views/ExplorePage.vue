<template >
    <add-post-comp></add-post-comp>
    <div v-if="store.state.activeUser != null && store.state.addPost==false " @click="store.state.addPost=true" class="button bg-yellow-500 fixed bottom-36 md:bottom-10 right-4 z-[99999] text-white">
        <div class="relative group ">
            Post
            <img class="absolute delay-1000  opacity-0 group-hover:opacity-100 cubic-bezier -top-5  left-0 -scale-50" width="32" src="/src/assets/gifs/dazzle-star.gif" alt="">
            <img class="absolute delay-[200]  opacity-0 group-hover:opacity-100 cubic-bezier -top-0  right-8 scale-95" width="32" src="/src/assets/gifs/dazzle-star.gif" alt="">
            <img class="absolute delay-300  opacity-0 group-hover:opacity-100 cubic-bezier -top-5  -right-5 scale-125" width="32" src="/src/assets/gifs/dazzle-star.gif" alt="">
            <img class="absolute delay-[400]  opacity-0 group-hover:opacity-100 cubic-bezier top-4 -left-4 rotate-90" width="32" src="/src/assets/gifs/dazzle-star.gif" alt="">
            <img class="absolute delay-[600]  opacity-0 group-hover:opacity-100 cubic-bezier -top-4 -left-4 -z-10 rotate-180" width="32" src="/src/assets/gifs/dazzle-star.gif" alt="">
            <img class="absolute delay-300  opacity-0 group-hover:opacity-100 cubic-bezier -bottom-4 -right-4 -z-10 rotate-180 scale-75" width="32" src="/src/assets/gifs/dazzle-star.gif" alt="">
            <img class="absolute delay-700  opacity-0 group-hover:opacity-100 cubic-bezier -bottom-6 -right-0 -z-10 rotate-180" width="32" src="/src/assets/gifs/dazzle-star.gif" alt="">
        
    </div>
</div>
    <div class="flex flex-col md:flex-row px-2 mt-10 md:mt-0 ">
        <div class="container  order-2 md:order-1 mx-auto md:pb-0 pb-24  items-start justify-center flex flex-row flex-wrap gap-8 md:gap-4">
            <post-card-comp :posts="posts" ></post-card-comp>
        </div>
        <div class="sidebar-sm order-1 md:order-2 md:sticky md:top-16 h-fit w-fit self-start mx-auto mb-4 ">
            <profile-card-comp v-if="store.state.activeUser != null" ></profile-card-comp>
            <leaderboard-card-comp></leaderboard-card-comp>
        </div>
    </div>
    
    

</template>

<script setup>
import store from '/src/store';
import ProfileCardComp from "/src/components/ProfileCardComp.vue"
import LeaderboardCardComp from "/src/components/LeaderboardCardComp.vue"
import PostCardComp from '/src/components/PostCardComp.vue';
import AddPostComp from "/src/components/AddPostComp.vue";



//#region variables
const posts = store.state.posts

//#endregion



//#region Functions

//#endregion



//#region Firebase Functions

                                                                                                             

//#endregion


</script>
