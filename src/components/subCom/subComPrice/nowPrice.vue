<template>
    <div class="nowPrice">
        <div class="price_manage">
            价格管理
        </div>
        <div class="btn">
            <el-button type="primary">导入excel</el-button>
            <el-button>导出excel</el-button>
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
        <!--分页-->
        <div class="pagination">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
            </el-pagination>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class nowPrice extends Vue {
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
<style lang="less" scoped>
    .nowPrice {
        padding: 25px 25px 0 25px;
    }
    .price_manage {
        padding: 16px 0 20px 0;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .pagination {
        text-align: right;
        margin: 25px;
    }
    .btn {
        .el-input {
            float: right;
            width: 214px;
            position: relative;
        }
    }
    .el-input__icon {
        line-height: 30px;
    }
</style>
