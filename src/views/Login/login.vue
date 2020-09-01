<template>
  <div class="login">
    <ul class="menu-tab">
      <li
        v-for="(item,index) in menuTab"
        :key="item"
        @click="check(index)"
        :class="{current:currentIndex==index}"
        
      >{{item}}</li>  
    </ul>
     <sign :currentIndex="currentIndex"/>
  </div>
</template>

<script>
import sign from 'components/public/sign/sign.vue'
export default {
  data() {  
    return {
      menuTab: ["登录", "注册"],
      currentIndex: 0,     
    }
  },
  components :{
      sign
  },
  methods: {
    check(index) {
      this.currentIndex = index;
    },     
  }
};
</script>
<style lang="scss" scoped>
.login {
box-sizing: border-box;
  height: 100vh;
  
  padding: 15vw 40vw 0 40vw;
  background-color: #344a5f;
  .menu-tab {
    // width: 330px;
    margin: auto;
    text-align: center;
    li {
      display: inline-block;
      width: 88px;
      font-style: 14px;
      line-height: 36px;
      cursor: pointer;
      color: #fff;
    }
    .current {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
}
</style>

