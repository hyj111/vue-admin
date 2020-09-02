<template>
  <div>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm login-form"
      size="medium"
    >
      <el-form-item label="邮箱" prop="username">
        <el-input type="text" v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
          minlength="6"
          maxlength="12"
        ></el-input>
      </el-form-item>

      <el-form-item label="确认密码" prop="checkPass" v-if="currentIndex!=0">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="验证码" prop="code">
        <el-row :gutter="0">
          <el-col :span="14">
            <el-input v-model.number="ruleForm.code"></el-input>
          </el-col>
          <el-col :span="12">
            <el-button
              type="success"
              class="verification"
              minlength="6"
              maxlength="6"
              @click="getSms"
            >验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item>
        <el-button
          type="danger"
          @click="submitForm('ruleForm')"
          class="block"
          :disabled="true"
        >{{currentIndex==0?'登录':'注册'}}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { GetSms } from "@/api/login.js";
import { stripscript } from "@/utils/validate";
export default {
  name: "Sign",
  props: {
    currentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    //验证码规则
    var alidateCode = (rule, value, callback) => {
      this.ruleForm.code = stripscript(value);
      value = this.ruleForm.code;
      let reg = /^[a-z0-9]{6}$/;
      if (!value) {
        return callback(new Error("请输入验证码"));
      } else if (!reg.test(value)) {
        callback(new Error("验证码格式不正确"));
      } else {
        callback();
      }
    };

    //账户规则
    var validateUsername = (rule, value, callback) => {
      let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("用户名格式不正确"));
      } else {
        callback();
      }
    };

    //密码规则
    var validatePassword = (rule, value, callback) => {
      this.ruleForm.password = stripscript(value);
      value = this.ruleForm.password;
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!reg.test(value)) {
        callback(new Error("密码格式不对"));
      } else {
        callback();
      }
    };
    //验证2次密码word
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        code: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }],
        code: [{ validator: alidateCode, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
  },
  computed: {
    
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 获取验证码
    getSms() {
      let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
      if(this.ruleForm.username == ''){
        this.$message.error('邮箱不能为空')
        return false
      }else if(reg.test(this.ruleForm.username)==false){
        this.$message.error('邮箱格式错误')
         return false
      }
      let requestData = { username: this.ruleForm.username,module:'login'}
      GetSms(requestData).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  margin: 30px auto;
}
.verification {
  position: absolute;
  right: 0;
  top: 0;
}
.block {
  width: 100%;
}
</style>

