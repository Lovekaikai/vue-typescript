<template>
    <div class="supplierManage">
        <el-container>
            <el-aside width="200px">
asdasdsad
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
    }
</script>
<style lang="less" scoped>
    .supplierManage {
        height: 90%;
        padding: 26px 116px 0;
    }
    .el-container {
        height: 100%;
        border: 1px solid #ECECEC;
        .el-aside {
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
    .router-link-exact-active {
        outline: 0;
        color: #2ACDCF;
        background-color: #ecf5ff;
        border-right: 2px solid #2ACDCF;
    }
</style>
