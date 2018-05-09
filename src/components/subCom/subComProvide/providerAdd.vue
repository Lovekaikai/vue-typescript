<template>
    <div class="providerEditor">
        <div class="providerEditor_title">
            <div class="back" @click="back">
                <i class="el-icon-back"></i>返回
            </div>
            <p>供应商详情</p>
        </div>
        <div class="providerEditor_content">
            <div class="title_mess">
                供应商基本信息
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="姓名" prop="name">
                    <el-col :span="5" :offset="1">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="手机" prop="region">
                    <el-col :span="5" :offset="1">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="供应商编号" required>
                    <el-col :span="5" :offset="1">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="所属基地" prop="delivery">
                    <el-col :span="5" :offset="1">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="区域" prop="type">
                    <el-col :span="5" :offset="1">
                        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-col>
                </el-form-item>
                <el-form-item label="级别" prop="resource">
                    <el-col :span="5" :offset="1">
                        <el-input v-model="ruleForm.name"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="账号" prop="desc">
                    <el-col :span="24" :offset="1">
                        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                        <span class="reset">（账号为供应商编号，初始密码为111111）</span>
                    </el-col>
                </el-form-item>
                <div class="line"></div>
                <div class="title_mess">
                    业务员信息
                </div>
                <el-form-item label="业务员" prop="resource">
                    <el-col :span="5" :offset="1">
                        <el-input v-model="ruleForm.name" placeholder="请输入名称"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="手机" prop="desc">
                    <el-col :span="5" :offset="1">
                        <el-input v-model="ruleForm.name" placeholder="请输入手机"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item style="margin-top:40px" class="btn">
                    <el-col :span="24" :offset="1">
                        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                        <el-button @click="resetForm('ruleForm')">取消</el-button>
                    </el-col>
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
export default class providerMessage extends Vue {
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
          this.$router.push({
            path: '/providerManage'
          })
        }
    }
</script>
<style lang="less">
    .providerEditor_title {
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
    .providerEditor_content {
        .title_mess {
            margin: 21px 0 26px 26px;
        }
    }
    .demo-ruleForm {
        padding: 0 25px;
        .btn {
            .el-button {
                wdith: 74px;
                height: 32px;
                padding: 0;
            }
            .el-button:nth-child(1) {
                background: #2ACDCF;
                border: 1px solid #2ACDCF;
                border-radius: 4px;
            }
        }
    }
    .line {
        margin: 0 25px;
        background: #FFFFFF;
        border: 1px solid #ECECEC;
        width: 96%;
    }
    .reset {
        font-family: STHeitiSC-Light;
        font-size: 14px;
        color: #9B9B9B;
        letter-spacing: 0;
    }
</style>
