<template>
    <div class="powerManage">
        <el-container>
            <el-aside width="200px">
                <el-menu>
                    <el-menu-item index="1-1">
                        <router-link to="/powerManage/managementGroup">管理组</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/powerManage/managementNumber/manageList">管理员</router-link>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class PersonalInformation extends Vue {
        changeNum: boolean = false
        onClick() {
          this.changeNum = true
        }
        resetForm() {
          this.changeNum = false
        }
        submitForm() {
          this.changeNum = false
        }
    }
</script>
<style lang="less" scoped>
    .powerManage {
        height: 90%;
        padding: 26px 116px 0;
    }
    .el-container {
        height: 100%;
        border: 1px solid #ECECEC;
        .el-aside {
            padding-top: 24px;
            height: 100%;
            width: 200px;
            opacity: 0.9;
            background: #F6F6F6;
            .el-menu {
                background: #F6F6F6;
                .el-menu-item {
                    padding: 0 !important;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #4A4A4A;
                    height: 52px;
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #4A4A4A;
                        text-decoration: none;
                        text-indent: 20px;
                    }
                }
            }
        }
        .el-main {
            height: 100%;
            background: #ffffff;
            padding: 0;
        }
    }
    .powerManage .is-active {
        outline: 0;
        color: #2ACDCF;
        background-color: #ecf5ff;
        border-right: 2px solid #2ACDCF;
    }
    .router-link-active {
        outline: 0;
        color: #2ACDCF;
        background: #D7F6F6;
        border-right: 3px solid #2ACDCF;
        color: #2ACDCF !important;
    }
</style>
