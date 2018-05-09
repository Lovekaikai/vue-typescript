<template>
  <div class="header">
    <div class="header_con clearfix">
      <div class="logo">
        <h1>中南国废采购平台</h1>
      </div>
      <el-menu class="el-menu-demo" mode="horizontal" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1">
          <router-link to="/providerManage">供应商管理</router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <router-link to="/application">表单应用</router-link>
        </el-menu-item>
        <el-menu-item index="3">
          <router-link to="/priceManage">价格管理 </router-link>
        </el-menu-item>
        <el-menu-item index="4">
          <router-link to="/powerManage">权限管理 </router-link>
        </el-menu-item>
        <el-menu-item index="5">
          <router-link to="/announceManage">公告管理</router-link>
        </el-menu-item>
        <el-menu-item index="6">
          <router-link to="/messageSend">消息推送 </router-link>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { Component, Emit, Inject, Model, Prop, Provide, Watch } from 'vue-property-decorator'
import {
  Component
} from 'vue-property-decorator'
  @Component({})
export default class App extends Vue {
    name: string = 'HelloWorld'
    msg: string = 'Welcome to Your Vue.js App'
    doSomeThing() {
      alert(123)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .header {
     min-width:1208px;
     overflow:hidden;
    opacity: 0.8;
    background: rgb(245, 245, 245);
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.14);
    a {
      text-decoration: none;
    }
    .logo {
      float: left;
      font-family: STHeitiSC-Medium;
      line-height: 64px;
      color: #FFFFFF;
      h1 {
        font-size: 32px !important;
        font-family: STHeitiSC-Medium;
        color: #345D8D;
      }
    }
    .header_con {
      overflow:hidden;
      min-width:1208px;
      margin: 0 116px;

    }
    .el-menu--horizontal {
      border-right: none;
      border-bottom: none;
    }
    .el-menu-demo {
      .is-active{
        border:none !important;
      }
      li {
        a {
          display: block;
          width: 100%;
          font-family: PingFangSC-Regular;
          font-size: 14px;
          color: #4A4A4A;
          height: 100%;
        }
      }
      height: 64px;
      float: right;
      background: rgb(245, 245, 245) !important;
    }
    .el-menu--horizontal>.el-menu-item {
      float: left;
      height: 64px;
      line-height: 64px;
      padding: 0;
      width: 110px;
      margin-left: 25px;
      text-align: center;
      border-bottom: 2px solid transparent;
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #4A4A4A;
      background: rgb(245, 245, 245) !important;
    }
    .el-menu--horizontal>.el-menu-item a:hover {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #2BCDCF;
    }
  }
  .router-link-active{
    color: #2BCDCF !important;
  }
</style>
