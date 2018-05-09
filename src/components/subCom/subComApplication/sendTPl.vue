<template>
    <div class="sendTPl">
        <div class="con">
            <div class="sendTPl_title">
                <div class="back" @click="back">
                    <i class="el-icon-back"></i>返回
                </div>
                <p>预约回收表单</p>
            </div>
            <div class="sendTPl_content">
                <div class="demo-input-suffix">
                    属性方式：
                    <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                    <div class="block">
                        <span class="demonstration">申请时间</span>
                        <el-date-picker type="date" placeholder="选择日期">
                        </el-date-picker>
                        <span class="demonstration">至</span>
                        <el-date-picker type="date" placeholder="选择日期">
                        </el-date-picker>
                    </div>
                    <div class="block search">
                        <el-input placeholder="搜索实例子名称">
                            <i slot="suffix" class="el-input__icon el-icon-search"></i>
                        </el-input>
                    </div>
                    <div class="block">
                        <el-button>导出excel</el-button>
                    </div>
                </div>
            </div>
            <el-table :border="true" ref="multipleTable" :data="tableData3" tooltip-effect="dark">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column label="申请人">
                    <template slot-scope="scope">{{ scope.row.date }}
</template>
                        </el-table-column>
                        <el-table-column
                        prop="name"
                        label="实例名称"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="base"
                        label="所属基地"
                        show-overflow-tooltip>
                        </el-table-column>
                           <el-table-column
                        prop="suggestion"
                        label="货物重量"
                        show-overflow-tooltip>
                        </el-table-column>
                        <el-table-column
                        prop="status"
                        label="回收时间"
                        show-overflow-tooltip>
                        </el-table-column>
                           <el-table-column
                        prop="status"
                        label="状态"
                        show-overflow-tooltip>
                        </el-table-column>
                            <el-table-column
                        prop="app"
                        label="操作"
                        show-overflow-tooltip>
<template slot-scope="scope">
    <el-dropdown @command="handleCommand">
        <el-button type="text" size="small">操作<i class="el-icon-caret-bottom"></i></el-button>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">查看</el-dropdown-item>
            <el-dropdown-item command="b">处理</el-dropdown-item>
            <el-dropdown-item command="c">删除</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
                        </el-table-column>
                    </el-table>
        </div>
                <!---弹框-->
                       <el-dialog
                        :visible.sync="resetDialogVisible"
                        width="30%">
                        <p class="del_base">确定删除表单</p>
                        <p class="del_messbase">删除后数据将无法恢复！</p>
            <span slot  ="footer" class="dialog-footer">
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
export default class sendTPl extends Vue {
        resetDialogVisible: boolean = false
        options = [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
        value = ''
        tableData3 = [{
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞',
          suggestion: '过磅机器不准啊',
          status: '已处理/未处理',
          app: '操作'
        }, {
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞',
          suggestion: '过磅机器不准啊',
          status: '已处理/未处理',
          app: '操作'
        }, {
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞',
          suggestion: '过磅机器不准啊',
          status: '已处理/未处理',
          app: '操作'
        }, {
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞',
          suggestion: '过磅机器不准啊',
          status: '已处理/未处理',
          app: '操作'
        }, {
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞',
          suggestion: '过磅机器不准啊',
          status: '已处理/未处理',
          app: '操作'
        }, {
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞',
          suggestion: '过磅机器不准啊',
          status: '已处理/未处理',
          app: '操作'
        }, {
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞',
          suggestion: '过磅机器不准啊',
          status: '已处理/未处理',
          app: '操作'
        }]
        back() {
          this.$router.push({
            path: '/application'
          })
        }
        handleCommand(val) {
          if (val === 'c') {
            this.resetDialogVisible = true
          }
          if (val === 'b') {
            this.$router.push({
              path: '/sendDealTpl'
            })
          }
          if (val === 'a') {
            this.$router.push({
              path: '/sendDetail'
            })
          }
        }
    }
</script>
<style lang="less">
    .sendTPl {
        height: 100%;
        padding: 24px 116px 0;
        .con {
            background: #FFFFFF;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
            border-radius: 4px;
            height: 100%;
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
        .sendTPl_title {
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
        .el-table {
            width: 97%;
            margin: 0 25px;
            .el-table__header {
                width: 1200px;
            }
        }
        .sendTPl_content {
            padding: 26px 25px;
            .el-input__inner {
                width: 200px;
                height: 32px;
            }
            .el-icon-date {
                line-height: 32px;
            }
            .el-button {
                width: 86px;
                height: 32px;
                padding: 0;
            }
            .suggestion_status {
                width: 200px;
                height: 32px;
            }
            .block {
                display: inline-block;
                margin-left: 20px;
            }
            .search {
                margin-left: 80px;
            }
        }
    }
</style>
