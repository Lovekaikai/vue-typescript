<template>
    <div class="modifyManageGroup">
        <div class="con">
            <div class="modifyManageGroup_title">
                <div class="back" @click="back">
                    <i class="el-icon-back"></i>返回
                </div>
                <p>修改管理组</p>
            </div>
            <p class="mess">管理组基本信息</p>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="管理组信息" prop="name">
                    <el-input v-model="ruleForm.name" style="width:200px;height:32px"></el-input>
                </el-form-item>
                <el-form-item label="管理员" prop="name">
                    <el-input suffix-icon="el-icon-close" style="width:200px;height:32px">
                    </el-input>
                    <span class="add" @click="modifyDialogVisible=true">添加</span>
                </el-form-item>
                <el-form-item label="活动区域" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择活动区域" style="width:200px;height:32px" :multiple="true">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="应用权限" prop="name">
                    <span class="add" @click="powerDialogVisible=true">编辑</span>
                </el-form-item>
                <el-form-item class="bottom_btn">
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-dialog class="twoDialog" title="添加管理员 " :visible.sync="modifyDialogVisible" width="30%">
            <div class="addManage">
                <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm" label-width="100px" class="demo-ruleForm2">
                    <el-form-item label="管理员" prop="name">
                        <el-select v-model="ruleForm2.region" placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </div>
            <span slot="footer" class="dialog-footer">
                                                                    <el-button @click="modifyDialogVisible = false">取 消</el-button>
                                                                    <el-button type="primary" @click="modifyDialogVisible = false">确 定</el-button>
                                                                </span>
        </el-dialog>
        <el-dialog class="power" title="添加应用权限 " :visible.sync="powerDialogVisible" width="30%">
            <div class="addManage">
                <div class="item">
                    <p>供应商管理</p>
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="item">
                    <p>表单应用</p>
                    <el-checkbox-group v-model="checkList1">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="item">
                    <p>价格管理</p>
                    <el-checkbox-group v-model="checkList2">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                    </el-checkbox-group>
                </div>
                <div class="item">
                    <p>价格管理</p>
                    <el-checkbox-group v-model="checkList3">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="禁用"></el-checkbox>
                        <el-checkbox label="选中且禁用"></el-checkbox>
                    </el-checkbox-group>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                         <el-button @click="powerDialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="powerDialogVisible = false">确 定</el-button>
                    </span>
        </el-dialog>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class modifyManageGroup extends Vue {
        modifyDialogVisible: boolean = false
        powerDialogVisible: boolean = false
        checkList = []
        checkList1 = []
        checkList2 = []
        checkList3 = []
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
          }]
        }
        ruleForm2 = {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
        rules2 = {
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
          }]
        }
        back() {
          history.back()
        }
    }
</script>
<style lang="less">
    .modifyManageGroup {
        height: 100%;
        .modifyManageGroup_title {
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
        .demo-ruleForm {
            margin: 25px 60px;
            .el-form-item__label {
                margin-right: 40px;
            }
            .bottom_btn {
                margin-left: 40px;
                .el-button {
                    padding: 0;
                    width: 74px;
                    height: 32px;
                }
            }
            .add {
                margin-left: 10px;
                color: green;
                cursor: pointer;
            }
        }
    }
    .modifyManageGroup .router-link-exact-active {
        outline: 0;
        color: #2ACDCF;
        background-color: #ecf5ff;
        border-right: 2px solid #2ACDCF;
    }
    .modifyManageGroup {
        .power {
            .el-dialog {
                hieght: 559px;
                width: 687px;
                .el-dialog__body {
                    padding: 0 0 12px 0;
                    border: 1px solid #ECECEC;
                    height: 345px;
                    overflow-y: scroll;
                    .addManage {
                        padding: 22px 0 12px 0;
                        .item {
                            width: 461px;
                            p {
                                margin: 0 0 7px 24px;
                            }
                        }
                        .el-checkbox:first-child {
                            text-indent: 15px;
                        }
                    }
                    .el-input {
                        width: 350px;
                        height: 32px;
                    }
                }
                .el-dialog__footer {
                    .el-button {
                        width: 74px;
                        height: 32px;
                        padding: 0;
                    }
                }
            }
        }
        .twoDialog {
            .el-dialog__body {
                padding: 0 0 12px 0;
                border: 1px solid #ECECEC;
                overflow: hidden;
                .addManage {
                    padding: 22px 0 12px 0;
                }
                .el-input {
                    width: 350px;
                    height: 32px;
                }
            }
            .el-dialog__footer {
                .el-button {
                    width: 74px;
                    height: 32px;
                    padding: 0;
                }
            }
        }
    }
</style>
