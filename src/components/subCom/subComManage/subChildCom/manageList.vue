<template>
    <div class="manageList">
        <div class="manageList_manage">
            管理员
        </div>
        <div class="manageList_table">
            <div class="btn">
                <el-button class="add" type="primary" @click="addManage">新增管理员</el-button>
            </div>
            <div class="table_con">
                <el-table :data="tableData" style="margin-top:16px" border>
                    <el-table-column align="center" prop="name" label="管理组名称">
                    </el-table-column>
                    <el-table-column prop="number" align="center" label="管理员">
                    </el-table-column>
                    <el-table-column prop="address" align="center" label="管理基地">
                    </el-table-column>
                    <el-table-column prop="deal" align="center" label="操作" class="manageList_btn">
                        <template slot-scope="scope">
                                         <el-button type="text" size="small" @click="resetDialogVisible = true">重置密码</el-button>
                                         <el-button type="text" size="small"  @click="disableDialogVisible = true">删除</el-button>
</template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
                       <el-dialog class="Dialog1"
                         :visible.sync="disableDialogVisible"
                        width="600px">
                        <p class="del_name">删除管理员</p>
                        <p class="del_mess">删除该管理员后，删除后将无法登陆</p>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="disableDialogVisible = false">取 消</el-button>
                            <el-button type="default" @click="disableDialogVisible = false">确 定</el-button>
                        </span>
                          </el-dialog>

                         <el-dialog class="twoDialog"
                            title="重置管理员密码 "
                            :visible.sync="resetDialogVisible"
                            width="600px"
                            >
                            <div class="addManage">
                                <span>原密码</span>
                                <el-input  placeholder="输入原密码"></el-input>
                            </div>
                              <div class="addManage">
                                <span>新密码</span>
                                <el-input  placeholder="输入新密码"></el-input>
                            </div>
                                 <div class="addManage three">
                                <span>确认新密码</span>
                                <el-input  placeholder="输入新密码"></el-input>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="resetDialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="resetDialogVisible = false">确 定</el-button>
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
export default class manageList extends Vue {
        disableDialogVisible: boolean = false
        resetDialogVisible: boolean = false
        region: string = ''
        tableData = [{
          name: '2016-05-02',
          number: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '2016-05-02',
          number: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '2016-05-02',
          number: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          name: '2016-05-02',
          number: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
        ]
        handleClick() {}
        addManage() {
          this.$router.push({
            path: '/powerManage/managementNumber/addManageMunber'
          })
        }
    }
</script>
<style lang="less">
    .manageList {
        padding: 25px 25px 0 25px;
    }
    .manageList_manage {
        padding: 16px 0 20px 0;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .sweet {
        padding: 0 0 17px 0;
        font-family: STHeitiSC-Light;
        font-size: 14px;
        color: #000000;
        letter-spacing: 0;
    }
    .btn {
        .add {
            height: 32px;
            width: 98px;
            padding: 0;
            background: #2ACDCF;
            border: 1px solid #2ACDCF;
            border-radius: 4px;
            color: #fff;
        }
    }
    .item {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #4A4A4A;
        letter-spacing: 0;
        margin-bottom: 20px;
        .upload-demo {
            margin-top: 16px;
            .el-upload-dragger {
                width: 480px;
                height: 128px;
                .el-icon-upload {
                    font-size: 67px;
                    color: #c0c4cc;
                    margin: 30px 0 16px 0;
                    line-height: 50px;
                }
            }
        }
    }
    .manageList .el-dialog {
        height: 210px;
        background: #F6F6F6;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
        border-radius: 6px;
    }
    .Dialog1 {
        .el-dialog__body {
            padding: 30px 20px 0;
        }
        .el-dialog__footer {

            padding: 10px 20px 0;
            .el-button {
                width: 74px;
                height: 32px;
                padding: 0;
            }
            .el-button:nth-child(2) {
                background: #2ACDCF;
                border: 1px solid #2ACDCF;
                border-radius: 4px;
                color: #fff;
            }
        }
        .del_name {
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: 20px;
            color: #4A4A4A;
        }
        .del_mess {
            text-align: center;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #4A4A4A;
            padding: 0 0 30px 0;
            margin: 0 20px;
            border-bottom: 1px solid #E9E9E9;
            padding-top: 8px;
        }
    }
    .manageList {
        .manageList_btn {
            .el-button {
                color:#2ACDCF;
            }
        }
        .twoDialog {
            .el-dialog {
                height: 318px;
            }
            .el-dialog__body {
                padding: 0 0 12px 0;
                border: 1px solid #ECECEC;
                overflow: hidden;
                .addManage {
                    padding: 22px 0 12px 77px;
                }
                span {
                    margin-right: 20px;
                }
                .el-input {
                    width: 290px;
                    height: 32px;
                }
                .three {
                    padding: 22px 0 12px 53px;
                }
            }
            .el-dialog__footer {
                .el-button:nth-child(2) {
                    background: #2ACDCF;
                    border: 1px solid #2ACDCF;
                    border-radius: 4px;
                    color: #fff;
                }
                padding: 5px 20px;
                .el-button {
                    width: 74px;
                    height: 32px;
                    padding: 0;
                }
            }
        }
    }
</style>
