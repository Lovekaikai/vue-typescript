<template>
    <div class="suggestionDetail">
        <div class="con">
            <div class="suggestionDetail_title">
                <div class="back" @click="back">
                    <i class="el-icon-back"></i>返回
                </div>
                <p>表单记录详情</p>
            </div>
            <div class="detail_content">
                <div class="item">
                    <span>表单详情</span>
                    <div class="btn">
                        <el-button type="primary" @click="deal">处理</el-button>
                        <el-button @click="deldialogVisible=true">删除</el-button>
                    </div>
                </div>
                <div class="mess">
                    <span>预约送货表单-邓桂洪-2018081023</span>
                    <div class="btn">
                        运行状态：未处理
                    </div>
                </div>
                <div class="con_table">
                    <el-table :border="true" :data="tableData" style="width: 100%">
                        <el-table-column prop="date" label="日期">
                        </el-table-column>
                        <el-table-column prop="name" label="姓名">
                        </el-table-column>
                        <el-table-column prop="address" label="地址">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
            <div class="detail_content">
                <div class="item">
                    <span>处理信息</span>
                </div>
                <div class="con_table">
                    <el-table :border="true" :data="tableData1" style="width: 100%">
                        <el-table-column prop="date" label="处理人">
                        </el-table-column>
                        <el-table-column prop="name" label="处理时间">
                        </el-table-column>
                        <el-table-column prop="address" label="处理备注">
                        </el-table-column>
                    </el-table>
                </div>
            </div>
        </div>
        <el-dialog :visible.sync="deldialogVisible" width="30%">
            <p class="del_name">确定删除表单</p>
            <p class="del_mess">删除后数据将无法恢复！</p>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="deldialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="deldialogVisible = false">确 定</el-button>
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
export default class suggestions extends Vue {
        dialogVisible: boolean = false;
        deldialogVisible: boolean = false;
        back() {
          this.$router.push({
            path: '/suggestions'
          })
        }
        deal() {
          this.$router.push({
            path: '/dealFormTpl'
          })
        }
        tableData = [{
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞'
        }, {
          date: '宋学子',
          name: '投诉建议表单-邓桂洪-2018081023',
          base: '东莞'
        }]
        tableData1 = [{
          date: '当前管理员',
          name: '2017-06-28 14:24',
          address: '特殊情况'
        }]
    }
</script>
<style lang="less">
    .suggestionDetail {
        height: 100%;
        padding: 24px 116px 0;
        .con {
            background: #FFFFFF;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
            border-radius: 4px;
            height: 100%;
        }
        .suggestionDetail_title {
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
        .con_table {
            padding: 12px 40px;
        }
        .item {
            margin: 20px 23px 5px 27px;
            overflow: hidden;
            .span {
                float: left;
            }
            .btn {
                float: right;
                .el-button {
                    width: 74px;
                    height: 32px;
                    padding: 0;
                }
            }
        }
        .mess {
            margin: 0 23px 5px 27px;
            overflow: hidden;
            font-family: STHeitiSC-Light;
            font-size: 14px;
            color: #4A4A4A;
            letter-spacing: 0;
            .span {
                float: left;
            }
            .btn {
                float: right;
                .el-button {
                    width: 74px;
                    height: 32px;
                    padding: 0;
                }
            }
        }
    } //删除
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
</style>
