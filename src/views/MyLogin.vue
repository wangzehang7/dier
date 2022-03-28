<template>
  <div class="login">
    <div class="meform">
      <div class="title">
        <h3>seec3 后台管理系统</h3>
      </div>
      <el-form :model="formdata">
        <el-form-item prop="user">
          <el-input placeholder="用户名"
                    v-model="formdata.user"></el-input>
        </el-form-item>
        <el-form-item prop="pw">
          <el-input placeholder="密码"
                    v-model="formdata.pw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"
                     class="btn"
                     @click="submitfn">登录</el-button>
        </el-form-item>
      </el-form>
      <p class="tip">温馨提示</p>
      <p class="tip">未登录过的新用户，自动注册</p>
      <p class="tip">注册过的用户可凭账号密码登录</p>
    </div>
  </div>
</template>

<script>
import instance from "../api/index.js"
export default {
  name: "MyLogin",
  data () {

    return {
      formdata: {
        user: "admin",
        pw: "123456",
      },
      newdebouncefn: null
    }
  },
  methods: {
    submitfn () {
      //点击提交业务
      this.loginfn()
    },
    newsubmitfn () {
      this.debouncefn(this.loginfn())
    },
    async loginfn () {
      //登录业务
      let user = this.formdata.user
      let pw = this.formdata.pw
      let { data } = await instance.post("/login", { user, pw })
      console.log(data)

      // 存token
      console.log(data.data.token)
      if (data.message === "fail") {
        return this.$message.error("登录失败")
      }
      if (data.message === "success") {
        //存token
        localStorage.setItem("token", data.data.token)
        this.$message({
          type: "success",
          message: "登录成功",
          duration: 2000,
          onClose: () => {
            this.$router.push({ name: "shouye" })
          }
        })
      }
    },
  },

  created () {
    this.newdebouncefn = this.debouncefn(this.loginfn)
  }

}
</script>

<style scoped>
.login {
  background-color: #324057;
  width: 100vw;
  height: 100vh;
}
.title {
  width: 370px;
  position: absolute;
  margin-left: -185px;
  left: 50%;
  top: -80px;
  text-align: center;
}
.login .title h3 {
  color: #fff;
}
.login .meform {
  box-sizing: border-box;
  width: 370px;
  height: 260px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -185px;
  margin-top: -130px;
  background-color: #fff;
  padding: 20px 20px 60px;
}
.login .meform .btn {
  width: 100%;
}
.tip {
  text-align: center;
  font-size: 12px;
  color: red;
}
</style>