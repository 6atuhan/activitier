import { createRouter, createWebHashHistory} from "vue-router";
import homepage from   "/src/router/views/HomePage.vue"
 const routes=[ {                                                  
         path:'/',                                                 
         name:'Home',                                              
         component:homepage     
     },
     {
        path:'/explore',
        name:'Explore',
        component:()=>import("/src/router/views/ExplorePage.vue")
     },
     {
        path:'/faq',
        name:'Faq',
        component:()=>import("/src/router/views/FaqPage.vue")
     },
     {
        path:'/guide',
        name:'Guide',
        component:()=>import("/src/router/views/GuidePage.vue")
     },
     {
        path:'/hastagTw',
        name:'HastagTw',
        component:()=>import("/src/router/views/HastagTwPage.vue")
     },
     {
        path:'/login',
        name:'Login',
        component:()=>import("/src/router/views/LoginPage.vue")
     },
     {
        path:'/message',
        name:'Message',
        component:()=>import("/src/router/views/MessagePage.vue")
     },
     {
        path:'/profile',
        name:'Profile',
        component:()=>import("/src/router/views/ProfilePage.vue")
     },
     {
      path:'/b06b',
      name:'b06b',
      component:()=>import("/src/router/views/b06bPage.vue")
   },
     {
      path:'/deneme',
      name:'deneme',
      component:()=>import("/src/router/views/DenemePage.vue")
   }


]                                                            
 const router =createRouter({                                      
     history:createWebHashHistory(),                               
     routes,                                                       
 })                                                                
 export default router; 