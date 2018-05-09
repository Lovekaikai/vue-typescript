<template>
    <div class="providerList">
        <div class="providerList_manage">
            华南区
        </div>
        <!--按钮-->
        <div class="btn btn_one">
            <el-button type="primary" class="addProvider" @click="addProvider">添加供应商</el-button>
            <el-button @click="importfile" class="dao">批量导入</el-button>
            <el-button type="primary" @click="dialogVisible = true">修改基地</el-button>
            <el-button @click="baseDialogVisible = true">删除基地</el-button>
            <el-button @click="addDialogVisible = true">新增基地</el-button>
            <el-input placeholder="搜索成员" suffix-icon="el-icon-search" />
        </div>
        <!--表格-->
        <div class="table_con">
            <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="供应商名称" width="120">
                    <template slot-scope="scope">{{ scope.row.date }}
</template>
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="供应商编号"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="账号"
                    show-overflow-tooltip>
                    </el-table-column>
                         <el-table-column
                    prop="phone"
                    label="手机"
                    show-overflow-tooltip>
                    </el-table-column>
                              <el-table-column
                    prop="createTime"
                    label="创建时间"
                    show-overflow-tooltip>
                    </el-table-column>
                              <el-table-column
                    prop="status"
                    label="状态"
                    show-overflow-tooltip>
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-dropdown @command="handleCommand">
                            <el-button type="text" size="small" class="more">更多<i class="el-icon-caret-bottom"></i></el-button>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="a">查看</el-dropdown-item>
                                <el-dropdown-item command="b">修改</el-dropdown-item>
                                <el-dropdown-item command="c">重置密码</el-dropdown-item>
                                <el-dropdown-item command="d">禁用</el-dropdown-item>
                                <el-dropdown-item command="e">删除</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                    </el-table-column>
                 </el-table>
                </div>

                <!--分页-->
                <div class="pagination">
                    <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400">
                    </el-pagination>
                </div>
                    <!--提示框-->
                        <el-dialog class="twoDialog1"
                            title="修改基地                     "
                            :visible.sync="dialogVisible"
                            min-width="30%"
                            >
                            <p><span>上级基地</span><span>华南区</span> </p>
                            <div class="change">
                                <span>基地名称</span>
                                <el-input  placeholder="请输入内容"></el-input>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog>

                         <el-dialog class="twoDialog2"
                            title="新增基地 "
                            :visible.sync="addDialogVisible"
                            min-width="30%"
                            >
                            <p><span>上级基地</span><span>华南区</span> </p>
                            <div class="change">
                                <span>基地名称</span>
                                <el-input  placeholder="输入子基地名称"></el-input>
                            </div>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="addDialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="addDialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog>

                        <el-dialog
                        :visible.sync="centerDialogVisible" class="twoDialog3"
                        min-width="30%">
                        <p class="del_name">删除张三 ?</p>
                        <p class="del_mess">删除之后，该成员将永久无法登陆。</p>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="centerDialogVisible = false">取 消</el-button>
                            <el-button type="danger" @click="centerDialogVisible = false">确 定</el-button>
                        </span>
                        </el-dialog>

                       <el-dialog class="twoDialog4"
                        :visible.sync="baseDialogVisible"
                        min-width="30%">
                        <p class="del_base">确定删除基地</p>
                        <p class="del_messbase">确定删除基地？没有子基地且没有成员才可被删除</p>
                        <span slot="footer" class="dialog-footer delbase">
                            <el-button @click="baseDialogVisible = false">取 消</el-button>
                            <el-button type="danger" @click="baseDialogVisible = false">确 定</el-button>
                        </span>
                        </el-dialog>

                         <el-dialog
                        :visible.sync="disableDialogVisible" class="twoDialog5"
                        min-width="30%">
                        <p class="del_name">确定禁用供应商 ?</p>
                        <p class="del_mess">禁用之后，该成员将无法登陆</p>
                        <span slot="footer" class="dialog-footer">
                            <el-button @click="disableDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="disableDialogVisible = false">确 定</el-button>
                        </span>
                        </el-dialog>

                        <el-dialog
                        :visible.sync="resetDialogVisible" class="twoDialog6"
                        min-width="30%">
                        <p class="del_name">确定重置供应商密码 ?</p>
                        <p class="del_mess">重置之后，该成员密码为111111</p>
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
export default class delivery extends Vue {
        dialogVisible: boolean = false;
        centerDialogVisible: boolean = false;
        baseDialogVisible: boolean = false;
        disableDialogVisible: boolean = false
        addDialogVisible: boolean = false;
        resetDialogVisible: boolean = false;
        tableData3 = [{
          date: '2016-05-03',
          name: '王小虎',
          address: '1231231',
          phone: '1231231',
          createTime: '2018,12,13',
          status: '已有账号'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '1231231',
          phone: '1231231',
          createTime: '2018,12,13',
          status: '已有账号'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '1231231',
          phone: '1231231',
          createTime: '2018,12,13',
          status: '已有账号'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '1231231',
          phone: '1231231',
          createTime: '2018,12,13',
          status: '已有账号'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '1231231',
          phone: '1231231',
          createTime: '2018,12,13',
          status: '已有账号'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '1231231',
          phone: '1231231',
          createTime: '2018,12,13',
          status: '已有账号'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '1231231',
          phone: '1231231',
          createTime: '2018,12,13',
          status: '已有账号'
        }]
        // 修改基地
        handleCommand(val) {
          if (val === 'e') {
            this.centerDialogVisible = true
          }
          if (val === 'd') {
            this.disableDialogVisible = true
          }
          if (val === 'c') {
            this.resetDialogVisible = true
          }
          if (val === 'a') {
            this.$router.push({
              path: '/providerManage/providerDetail'
            })
          }
          if (val === 'b') {
            this.$router.push({
              path: '/providerManage/providerEditor'
            })
          }
        }
        importfile() {
          this.$router.push({
            path: '/providerManage/providerMessage'
          })
        }
        addProvider() {
          this.$router.push({
            path: '/providerManage/providerAdd'
          })
        }
    }
</script>
<style lang="less">
    .providerList {
        min-width: 786px;
        overflow: hidden;
        padding: 25px 25px 0 25px;
    }
    .providerList_manage {
        padding: 16px 0 20px 0;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .btn {
        .addProvider {
            background: #2ACDCF;
            border: 1px solid #2ACDCF;
            border-radius: 4px;
        }
        .el-button--primary {
            padding: 0;
            width: 96px;
            height: 32px;
        }
        .el-button--default {
            padding: 0;
            width: 86px;
            height: 32px;
        }
        .el-input {
            float: right;
            width: 214px;
            position: relative;
            height: 30px;
        }
        .el-input__inner {
            width: 214px;
            position: relative;
            height: 30px;
        }
        .el-input__icon {
            height: 30px;
            line-height: 30px;
        }
    }
    .providerList {
        .pagination{
            text-align:right;
            margin:25px;
        }
        .more {
            color: #2BCDCF;
        }
        .el-dialog {
            height: 241px;
            background: #F6F6F6;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.16);
            border-radius: 6px;
        }
        .el-dialog .el-dialog__body {
            padding: 15px 0;
            color: #606266;
            line-height: 24px;
            font-size: 14px;
            p {
                span {
                    padding-left: 30px;
                }
            }
            .change {
                padding: 15px 0;
                .el-input {
                    width: 350px;
                    height: 32px;
                }
                .el-input__inner {
                    width: 350px;
                    height: 32px;
                }
                span {
                    padding: 0 30px;
                }
            }
        }
    }
    .el-dialog__header {
        .el-icon-close {
            display: none;
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
    .del_base {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .del_messbase {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #4A4A4A;
        padding: 0 0 30px 0;
        margin: 0 20px;
        border-bottom: 1px solid #E9E9E9;
        padding-top: 8px;
    }
    .el-dialog__footer {
        text-align: center;
    }
    .el-dropdown-menu__item:focus,
    .el-dropdown-menu__item:not(.is-disabled):hover {
        background: #D7F6F6;
        color: #2BCDCF;
    }
    .twoDialog1 {
        .el-dialog__body {
            border: 1px solid #ECECEC;
        }
        .el-dialog__footer {
            text-align: right;
            .el-button {
                width: 74px;
                padding: 0;
                height: 32px;
            }
        }
    }
    .twoDialog2 {
        .el-dialog__body {
            border: 1px solid #ECECEC;
        }
        .el-dialog__footer {
            text-align: right;
        }
        .el-button {
            width: 74px;
            padding: 0;
            height: 32px;
        }
    }
    .twoDialog4 {
        .el-dialog__footer {
            .el-button {
                width: 74px;
                padding: 0;
                height: 32px;
            }
        }
    }
    .twoDialog5 {
        .el-dialog__footer {
            .el-button {
                width: 74px;
                padding: 0;
                height: 32px;
            }
        }
    }
    .twoDialog3 {
        .el-dialog__footer {
            .el-button {
                width: 74px;
                padding: 0;
                height: 32px;
            }
        }
    }
    .twoDialog6 {
        .el-dialog__footer {
            .el-button {
                width: 74px;
                padding: 0;
                height: 32px;
            }
        }
    }
</style>
