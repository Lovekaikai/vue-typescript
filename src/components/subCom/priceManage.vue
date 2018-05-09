<template>
    <div class="priceManage">
        <el-container>
            <el-aside width="200px">
                <el-menu>
                    <el-menu-item index="1-1">
                        <router-link to="/priceManage/nowPrice">现在价格</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                        <router-link to="/priceManage/futurePrice">未来价格</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-3">
                        <router-link to="/priceManage/lastPrice">最新价格</router-link>
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
    .priceManage {
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
                    padding:0 !important;
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
                        text-indent:20px;
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
   .priceManage .router-link-exact-active {
        outline: 0;
        color: #2ACDCF;
        background-color: #ecf5ff;
        border-right: 2px solid #2ACDCF;
    }
</style>
