<template>
    <h1 class="text-white w-fit text-2xl text-outline font-Baloo-Regular select-none ml-4 visible md:invisible mt-4 ">#hashtags</h1>

<div class="container min-h-screen pt-10 mx-auto flex flex-col gap-4 font-Quicksand items-center justify-start">


    <tweet-comp v-for="i in 5" :key="i" class="md:hover:opacity-100 md:hover:scale-105 md:opacity-90 md:cubic-bezier" ></tweet-comp>
    
</div>

</template>


<script setup>
import TweetComp from '../../components/TweetComp.vue';
//#region variables

//#endregion



//#region Functions

//#endregion



//#region Firebase Functions

                                                                                                             

//#endregion

</script>