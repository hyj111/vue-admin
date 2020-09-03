import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login/login.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect:"/login",
    hidden: true,
    meta:{
      name:"主页"
    }
  },
  {
    path:"/login",
    name:"Login",
    hidden:true,
    meta:{
      name:"登录"
    },
    component:Login,  
  },
  {
    path:"/layout",
    name:"Layout",
    redirect:"/console",
    meta:{
      name:"控制台",
      icon:"el-icon-s-home"
    },
    component:()=>import("../views/Layout/layout.vue"),
    children:[
      {
        path: "/console",
        name: "Console",
        meta:{
          name:"首页",
          
        },
        component: ()=>import("../views/Console/console.vue")
      }
    ]
  },
  {
    path:"/info",
    name:"Info", 
    meta:{
      name:"信息管理",
      icon:'el-icon-message'
    },
    component:()=>import("../views/Layout/layout.vue"),
    children:[
      {
        path: "/infoIndex",
        name: "InfoIndex",
        meta:{
          name:"信息列表",
          
        },
        component: ()=>import("../views/Info/info.vue")
      },
      {
        path: "/infoCategory",
        name: "InfoCategory",
        meta:{
          name:"信息分类"
        },
        component: ()=>import("../views/Info/category.vue")
      }
    ]
  },
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
