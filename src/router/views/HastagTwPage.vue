<template>

<div class="container min-h-screen pt-16 mx-auto flex flex-col gap-4 font-Quicksand items-center justify-start">


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