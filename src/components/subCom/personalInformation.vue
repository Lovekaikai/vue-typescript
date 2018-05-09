<template>
    <div class="Personal_information">
        <el-container>
            <el-aside width="200px">
                <el-menu>
                    <el-menu-item index="1-1">个人中心</el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <div class="title">
                    登录账号信息
                </diV>
                <div class="zh_mess">
                    <span>管理账号</span>
                    <span>13751889114</span>
                </div>
                <div class="zh_num clearfix">
                    <div class="num">
                        <span>登录密码</span>
                        <span v-show="!changeNum">********</span>
                        <span @click="onClick" v-show="!changeNum">修改</span>
                    </div>
                    <div class="change_num" v-show="changeNum">
                        <el-form status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
                            <el-input type="password" placeholder="输入原密码" auto-complete="off"></el-input>
                            <el-input type="password" placeholder="输入新密码" auto-complete="off"></el-input>
                            <div class="btn">
                                <el-button type="primary" @click="submitForm()">保存</el-button>
                                <el-button @click="resetForm()">取消</el-button>
                            </div>
                        </el-form>
                    </div>
                </div>
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
    .Personal_information {
        height: 100%;
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
                .el-menu-item {
                    padding-left: 33px !important;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #2ACDCF;
                    height: 52px;
                }
            }
            .el-menu-item,
            .el-menu-item {
                outline: 0;
                background-color: #ecf5ff;
                border-right: 2px solid #2ACDCF;
            }
        }
        .el-main {
            height: 100%;
            background: #ffffff;
            padding: 0;
            .title {
                font-family: PingFangSC-Regular;
                font-size: 20px;
                color: #4A4A4A;
                padding: 25px 0 16px 22px;
                background: #FFFFFF;
                border-bottom: 1px solid #ECECEC;
            }
            .zh_mess {
                height: 68px;
                margin-left: 22px;
                line-height: 68px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #4A4A4A;
                border-bottom: 1px solid #ECECEC;
                span:last-child {
                    padding-left: 61px;
                }
            }
            .zh_num {
                padding: 24px 0;
                margin-left: 22px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #4A4A4A;
                padding: 24px 0;
                border-bottom: 1px solid #ECECEC;
                span:nth-child(2) {
                    padding-left: 61px;
                }
                span:nth-child(3) {
                    padding-left: 20px;
                    font-family: PingFangSC-Regular;
                    font-size: 14px;
                    color: #50E3C2;
                    cursor: pointer;
                }
                .num {
                    float: left;
                }
                .el-form-item_content {
                    line-height: 40px;
                    position: relative;
                    font-size: 14px;
                    margin-left: 64px !important;
                }
                .btn {
                    .el-button {
                        padding: 0;
                        width: 74px;
                        height: 32px;
                        display: inline-block;
                        float: left;
                    }
                }
                .change_num {
                    width: 200px;
                    padding: 0 0 11px 64px;
                    .el-form {
                        .el-input {
                            margin-bottom: 11px;
                        }
                    }
                    float: left;
                }
            }
        }
    }
</style>
