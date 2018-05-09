<template>
    <div class="providerMessage">
        <div class="providerMessage_title">
            <div class="back" @click="back">
                <i class="el-icon-back"></i>返回
            </div>
            <p>供应商详情</p>
        </div>
        <div>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        <img src="../../../assets/folder-icon.png">
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        <el-row :gutter="20">
                            <el-col :span="5">
                                <div class="grid-content provider_name bg-purple">
                                    <p>小二</p>
                                    <p>供应商编号：694705032</p>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="grid-content bg-purple">
                                    <el-button type="primary">主要按钮</el-button>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        手机
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        15521004142
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        所属地
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        东莞
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        所属地
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        东莞
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        区域
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        广东省
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        级别
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        12
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        账号
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        未开设
                    </div>
                </el-col>
            </el-row>
            <div class="line"></div>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        业务员
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        伊丽莎白
                    </div>
                </el-col>
            </el-row>
            <el-row>
                <el-col :lg="3">
                    <div class="grid-content bg-purple">
                        手机
                    </div>
                </el-col>
                <el-col :lg="21">
                    <div class="grid-content bg-purple-light">
                        166 3373 9453
                    </div>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class providerMessage extends Vue {
      back() {
        this.$router.push({
          path: '/providerManage'
        })
      }
    }
</script>
<style lang="less">
    .providerMessage_title {
        height: 40px;
        line-height: 40px;
        position: relative;
        padding: 10px 0 0 24px;
        text-align: center;
        border-bottom: 1px solid #ECECEC;
        font-family: STHeitiSC-Light;
        font-size: 16px;
        color: #484848;
        .back {
            position: absolute;
            width: 58px;
            height: 28px;
            background: #FFFFFF;
            border: 1px solid #9B9B9B;
            border-radius: 3px;
            font-family: STHeitiSC-Light;
            font-size: 12px;
            color: #484848;
            line-height: 28px;
            text-align: center;
            cursor: pointer;
        }
    }
    .line {
        margin: 0 25px;
        background: #FFFFFF;
        border: 1px solid #ECECEC;
        width: 100%;
    }
    .el-row {
        margin: 10px 20px 20px 24px;
    }
    .el-col-lg-3 {
        .grid-content {
            text-align: right;
            img {
                display: inline-block;
                width: 70px;
                height: 70px;
            }
        }
    }
    .el-col-lg-21 {
        padding-left: 50px;
        .provider_name {
            p:first-child {
                font-family: STHeitiSC-Light;
                font-size: 20px;
                color: #000000;
                letter-spacing: 0;
            }
            p:last-child {
                font-family: STHeitiSC-Light;
                font-size: 14px;
                color: #949494;
                letter-spacing: 0;
            }
        }
        .el-button {
            background: #2ACDCF;
            border: 1px solid #27BFC2;
            border-radius: 4px;
            padding: 0;
            height: 30px;
            width: 74px;
        }
    }
</style>
