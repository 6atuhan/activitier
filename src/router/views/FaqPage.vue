<template>
    <h1 class="text-white text-2xl w-fit text-outline font-Baloo-Regular select-none ml-4 visible md:invisible mt-4 ">FAQS</h1>

<div class="container mx-auto">
    <!-- send q area -->
    <img width="80" height="80" class="-scale-x-100 -mb-4  relative -z-10 mt-16" src="/src/assets/cat_closed.png" alt="">
<div  class="bg-teal-500 border transition-all z-0 relative  border-black rounded-lg p-4 text-white font-Quicksand font-bold">
   <h1 class="text-outline">Tell me What Happened</h1>
    <div class="text-area w-full   h-1/5 text-black items-center justify-center flex flex-row relative overflow-hidden">
        <input type="text" v-model="faq.question"  class="w-4/5 resize-none m-4 border-black border rounded-r-xl rounded-tl-xl  focus:hover-shadow-full cubic-bezier focus:outline-0 p-4">
        <div @click="faq.openModal= true" class="m-4 select-none cursor-pointer bg-lime-600 hover:bg-lime-500 cubic-bezier hover-anim text-white text-outline  border-black border !rounded-l-xl !rounded-tr-xl   focus:outline-0 p-4">
            Send
            </div>
    </div>

</div>
<!-- faq area -->
<img width="80" height="80" class=" -mb-4 ml-auto relative -z-10 mt-16" src="/src/assets/cat_closed.png" alt="">

    <div  :class="faq.hideQuestion ? 'h-14 overflow-hidden' : 'h-fit'" class="bg-teal-500 border transition-all border-black rounded-lg p-4 text-white font-Quicksand font-bold ">
        <table class="rounded-lg " >
            <tr @click="faq.hideQuestion = !faq.hideQuestion" class="cursor-pointer">
                <th class="pb-4">Author</th>
                <th class="pb-4">Your Question</th>
                <th class="pb-4">Our Answer</th>
            </tr>
            <tr v-for="i in faqQuestions" :key="i" v-show="i.isAnswered" class="even:!bg-cyan-900 odd:!bg-cyan-700 border  border-white">
                <td class="px-2 border-r  "> 
                <div  class="w-8 h-8 relative group  "> 
                    <img :class="i.author == 'anon' ? 'opacity-40' : 'opacity-100'" src="/src/assets/logo-pp.png" class="rounded-full cursor-pointer overflow-hidden">
                    <div class="hover-shadow-full bg-cyan-400 rounded-lg  absolute -top-10 -left-1/3 w-32 invisible text-center !opacity-80 group-hover:visible text-outline px-2 py-1 ">{{i.author == 'anon' ?'anonymous':'active user'}}</div>
                </div>
                </td>
                <td class=" px-2 py-3 w-1/2 border-r"> {{i.question}}</td>
                <td class=" px-2 py-3 w-1/2"> {{ i.answer=="" ? ' cevaplanmadı':i.answer }}</td>
            </tr>

        </table>
    </div>
    <div v-show="faq.openModal" class="fixed top-0 font-Quicksand left-0 h-screen w-screen cubic-bezier bg-black/70 z-[999]">

        <div class="bg-teal-500 border border-black rounded-lg hover-shadow-full flex justify-center items-center flex-col gap-2 w-11/12 md:w-96 h-32 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 class="text-outline text-white text-center text-xl">Are you sure you want to ask this ?</h1>
            <div class="flex items-center justify-center flex-row gap-2">
                <div @click="faq.openModal=false" class="button w-fit bg-green-400 hover:bg-green-600 relative group text-white font-Baloo-Regular">
                        no
                </div>
                <div @click="sendQuestion"  class="button w-fit bg-red-400 hover:bg-red-600 text-white font-Baloo-Regular">
                        yes
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script setup>
import { onMounted, reactive,ref } from "vue";
import store from "/src/store"
import {db} from '/src/firebase'
import { collection, addDoc,onSnapshot,query,orderBy } from "firebase/firestore"; 
//#region variables
const faq =reactive({
    question:"",
    answer:"",
    hideQuestion:false,
    openModal:false,
    time:""
})
//pull Qs from firebase
const faqQuestions = ref([])

//#endregion



//#region Functions
const sendQuestion=()=>{
    
    addQuestionToFirebase()
}

//#endregion



//#region Firebase Functions
//adding question to faqs>
const addQuestionToFirebase=()=>{
    const qRef = collection(db, "faqs")
    var authorUid = store.state.activeUser == null ? 'anon' :  store.state.activeUser.uid
addDoc(qRef, {                                                                
    question: faq.question,
    answer: faq.answer,
    author: authorUid,
    isAnswered : false,
    qTime: new Date(),
    aTime:""
    
}).then(function(docRef) {
    faq.openModal=false
    faq.question=""

})
}
                                                                                                             

//#endregion

onMounted(()=>{
    const qQuery = query (collection(db, "faqs"), orderBy("qTime", "desc"));	 
    const q = collection(db, "faqs")
    onSnapshot(qQuery, (querySnapshot) => {                                                                
	 const qs = [];                                                                                  
 	 querySnapshot.forEach((doc) => {                                                                    
  	    qs.push(doc.data());           
    });                                                            

      faqQuestions.value=qs                                                                               
	});    

})
</script>
