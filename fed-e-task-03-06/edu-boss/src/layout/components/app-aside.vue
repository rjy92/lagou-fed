<template>
  <el-aside width="200px">
    <router-link to="/" exact title="Back to Home"  class="logo">
    <img :src="require('@/assets/logo.png')" alt="LagouEdu">
      <h1>Edu Boss</h1>
    </router-link>
<!--     <el-link class="logo"><i class="el-icon--right">
      <img :src="require('@/assets/logo.png')" alt="LagouEdu">
      <h1>Edu Boss</h1>
      </i> </el-link> -->
    <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    router>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>权限管理</span>
      </template>
      <el-menu-item index="/role">
        <i class="el-icon-menu"></i>
        <span slot="title">角色管理</span>
      </el-menu-item>
      <el-menu-item index="/menu">
        <i class="el-icon-menu"></i>
        <span slot="title">菜单管理</span>
      </el-menu-item>
      <el-menu-item index="/resource">
        <i class="el-icon-menu"></i>
        <span slot="title">资源管理</span>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="/course">
      <i class="el-icon-menu"></i>
      <span slot="title">课程管理</span>
    </el-menu-item>
    <el-menu-item index="/user">
      <i class="el-icon-menu"></i>
      <span slot="title">用户管理</span>
    </el-menu-item>
    <el-submenu index="4">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>广告管理</span>
      </template>
      <el-menu-item index="/advert">
          <i class="el-icon-menu"></i>
          <span slot="title">广告列表</span>
      </el-menu-item>
      <el-menu-item index="/advert-space">
          <i class="el-icon-menu"></i>
          <span slot="title">广告位列表</span>
      </el-menu-item>
    </el-submenu>
  </el-menu>
  </el-aside>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'AppAside',
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
})
</script>
<style lang="scss" scoped>
.el-aside{
  background: #ffffff;
  .el-menu {
      min-height: 100vh;
  }
}
.logo{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(73, 80, 87);
  line-height: 50px;
  text-align: center;
  text-decoration: none;
}
.logo img{
  width: 30px;
  margin: 10px;
}
.logo h1{
    display: inline-block;
    width: 95px;
    font-size: 20px;
    white-space: nowrap;
    margin: 0px;
    overflow: hidden;
    transition: width 0.3s ease 0s
}
</style>
