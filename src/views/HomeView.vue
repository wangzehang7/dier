<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2"
                 background-color="#545c64"
                 text-color="#fff"
                 active-text-color="red"
                 :router="true"
                 class="aside">
          <el-menu-item class="item"
                        index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <!--  -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>数据管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">用户列表</el-menu-item>
              <el-menu-item index="2-2">商家列表</el-menu-item>
              <el-menu-item index="2-3">食品列表</el-menu-item>
              <el-menu-item index="2-4">订单列表</el-menu-item>
              <el-menu-item index="2-5">管理员列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>添加数据</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">添加用户</el-menu-item>
              <el-menu-item index="3-2">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!--  -->
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <div>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item v-for="(item,index) in this.$route.meta"
                                  :key="index">{{item}}</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
<style scoped>
.aside {
  height: 100vh;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #eff2f7;
}
</style>
