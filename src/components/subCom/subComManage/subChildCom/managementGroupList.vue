<template>
    <div class="managementGroupList">
        <div class="managementGroupList_manage">
            管理组
        </div>
        <div class="managementGroupList_table">
            <div class="btn">
                <el-button type="primary">新增管理组</el-button>
            </div>
            <div class="table_con">
                <el-table :data="tableData" style="margin-top:16px" border>
                    <el-table-column align="center" prop="name" label="管理组名称">
                    </el-table-column>
                    <el-table-column prop="number" align="center" label="管理员">
                    </el-table-column>
                    <el-table-column prop="address" align="center" label="管理基地">
                    </el-table-column>
                    <el-table-column prop="deal" align="center" label="操作">
                        <template slot-scope="scope">
                                        <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
                                        <el-button type="text" size="small" @click="disableDialogVisible=true">删除</el-button>
</template>
                    </el-table-column>
                </el-table>
            </div>
        </div>
            <el-dialog
                         :visible.sync="disableDialogVisible"
                        width="30%">
                        <p class="del_name">删除管理组？</p>
                        <p class="del_mess">删除该管理员后，对应的管理员也会被清空</p>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="disableDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="disableDialogVisible = false">确 定</el-button>
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
export default class managementGroupList extends Vue {
        disableDialogVisible: boolean = false
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
        handleClick() {
          this.$router.push({
            path: '/powerManage/managementGroup/modifyManageGroup'

          })
        }
    }
</script>
<style lang="less">
    .managementGroupList {
        padding: 25px 25px 0 25px;
    }
    .managementGroupList_manage {
        padding: 16px 0 20px 0;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .btn {
        .el-button {
            height: 32px;
            width: 98px;
            padding: 0;
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
    .managementGroupList {
        .el-dialog__footer{
            text-align:center;
            .el-button{
                width:74px;
                padding:0;
                height:32px;
            }
        }
    }
</style>
