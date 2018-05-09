<template>
    <div class="addManageMunber">
        <div class="con">
            <div class="addManageMunber_title">
                <div class="back" @click="back">
                    <i class="el-icon-back"></i>返回
                </div>
                <p>新增管理员</p>
            </div>
            <p class="mess">管理员信息</p>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="管理员账号" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="输入手机号" style="width:200px;height:32px"></el-input>
                    <span class="save">唯一标识，保存后不可修改</span>
                </el-form-item>
                <el-form-item label="登录密码" prop="name">
                    <el-input v-model="ruleForm.name" placeholder="请输入6～16位密码" style="width:200px;height:32px"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="name">
                    <el-input v-model="ruleForm.name" style="width:200px;height:32px"></el-input>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:200px;height:32px">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item class="bottom_btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                    <el-button @click="resetForm('ruleForm')">取消</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class addManageMunber extends Vue {
        resetDialogVisible: boolean = false
        ruleForm = {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        rules = {
          name: [{
            required: true,
            message: '请输入活动名称',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 5,
            message: '长度在 3 到 5 个字符',
            trigger: 'blur'
          }
          ],
          region: [{
            required: true,
            message: '请选择活动区域',
            trigger: 'change'
          }],
          date1: [{
            type: 'date',
            required: true,
            message: '请选择日期',
            trigger: 'change'
          }],
          date2: [{
            type: 'date',
            required: true,
            message: '请选择时间',
            trigger: 'change'
          }],
          type: [{
            type: 'array',
            required: true,
            message: '请至少选择一个活动性质',
            trigger: 'change'
          }],
          resource: [{
            required: true,
            message: '请选择活动资源',
            trigger: 'change'
          }],
          desc: [{
            required: true,
            message: '请填写活动形式',
            trigger: 'blur'
          }]
        }
        back() {
          history.back()
        }
    }
</script>
<style lang="less">
    .addManageMunber {
        height: 100%;
        .addManageMunber_title {
            height: 50px;
            line-height: 50px;
            position: relative;
            text-align: center;
            border-bottom: 1px solid #ECECEC;
            font-family: STHeitiSC-Light;
            font-size: 16px;
            color: #484848;
            .back {
                margin: 10px 0 0 24px;
                position: absolute;
                width: 58px;
                height: 27px;
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
        .mess {
            margin: 21px 0 27px 27px;
        }
        .el-form {
            margin: 25px 60px;
            .save {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #727272;
                padding-left: 15px;
            }
            .el-form-item__label {
                margin-right: 40px;
            }
            .bottom_btn {
                margin-left: 40px;
                .el-button{
                    padding:0;
                    width:74px;
                    height:32px;
                }
            }
        }
    }
    .addManageMunber .router-link-exact-active {
        outline: 0;
        color: #2ACDCF;
        background-color: #ecf5ff;
        border-right: 2px solid #2ACDCF;
    }
</style>
