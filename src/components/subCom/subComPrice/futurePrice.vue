<template>
    <div class="futurePrice">
        <div class="price_manage">
            价格管理
        </div>
        <div class="message" v-show="false">
            <div class='sweet'>
                温馨提示：如需更新价格，请按照下面的步骤操作
            </div>
            <div class="item">
                1、
                <el-button type="primary">下载模版</el-button> &nbsp; &nbsp;并对价格进行更新或者新增。
            </div>
            <div class="item">
                2、 将填写好未来价格模版
                <el-button type="primary" @click="dialogVisible = true">上传文件</el-button>
            </div>
            <div class="item">
                3、 将填写好价格信息模版拖到下面区域上传。
                <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                </el-upload>
            </div>
        </div>
        <div class="price_table">
            <div class="btn">
                <el-button type="primary" @click="dialogVisibleT= true">推送价格</el-button>
                <el-button>调整价格</el-button>
                <el-button>取消发布</el-button>
                <el-input placeholder="输入基地或事项" suffix-icon="el-icon-search">
                </el-input>
            </div>
            <div class="table_con">
                <el-table :data="tableData" style="margin-top:16px" border>
                    <el-table-column align="center" prop="date" label="基地" width="250">
                    </el-table-column>
                    <el-table-column prop="name" align="center" label="事项" width="180">
                    </el-table-column>
                    <el-table-column prop="address" align="center" label="现在价格(元)">
                    </el-table-column>
                </el-table>
            </div>
        </div>
        <!--分页-->
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
        <el-dialog class="send_price" title="导入未来价格" :visible.sync="dialogVisibleT" width="600">
            <div class="demo-input-suffix">
                <span class="time">生效时间</span>
                <el-select placeholder="请选择活动区域">
                    <el-option label="东莞" value="东莞"></el-option>
                    <el-option label="上海" value="上海"></el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogVisibleT = false">取 消</el-button>
                            <el-button type="primary" @click="dialogVisibleT = false">确 定</el-button>
                            </span>
        </el-dialog>
        <el-dialog title="导入未来价格" :visible.sync="dialogVisible" width="600">
            <div class="demo-input-suffix">
                <span class="time">生效时间</span>
                <el-input placeholder="输入成员标签名称">
                </el-input>
            </div>
            <div class="choose clearfix">
                <span>未来价格</span>
                <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/">
                    <div>选取文件</div>
                </el-upload>
            </div>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
export default class futurePrice extends Vue {
        dialogVisible: boolean = false
        dialogVisibleT: boolean = false
        region: string = ''
        tableData = [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
</script>
<style lang="less">
    .futurePrice {
        padding: 25px 25px 0 25px;
    }
    .pagination {
        text-align: right;
        margin: 25px;
    }
    .price_manage {
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
    .el-button {
        height: 32px;
        width: 98px;
        padding: 0;
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
    /**
                                    弹出框的开始
                                */
    .el-dialog {
        .el-dialog__close {
            display: none;
        }
        .el-dialog__header {
            border: 1px solid #E4E4E4;
        }
        span.time {
            padding: 29px 30px 17px 38px;
        }
        .el-input {
            width: 200px;
        }
    }
    .choose {
        .upload-demo {
            width: 100px;
            float: left;
            padding: 29px 30px 17px 38px;
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #2ACDCF;
            letter-spacing: 0;
        }
        span {
            padding: 29px 30px 17px 38px;
            float: left;
        }
    }
    /**弹出框的结束*/
    .send_price {
        .el-dialog__body {
            border: 1px solid #E4E4E4;
        }
    }
    .btn {
        .el-input {
            float: right;
            width: 214px;
            position: relative;
            height: 30px;
            .el-input__inner {
                height: 30px;
            }
        }
    }
    .el-input__icon {
        line-height: 30px;
    }
</style>
