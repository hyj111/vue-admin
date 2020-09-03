import Vue from "vue";
import Vuex from "vuex";
import  {setToKen,setUsername} from "@/utils/app"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toKen:'',
    username:''
  },
  mutations: {
    setToken(state,value){
      setToKen(value)
      state.toKen = value
    },
    setUsername(state,value){
      setUsername(value)
      state.username = value
    }
  },
  actions: {},
  modules: {}
});
