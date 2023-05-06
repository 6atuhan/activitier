import { createStore } from "vuex";
const store = createStore({
    state:{
        homePageCheck:true,
        boy :true,
        addPost:false,
        posts:[],
        activeUser:null,
        messageUser:null,
        messages:[],
        messageGroupTemp:"",
    },


})

export default store; 
