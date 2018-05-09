<template>
    <div class="lastPrice">
        <div class="price_manage">
            价格管理
        </div>
        <div class='sweet'>
            温馨提示：如需更新价格，请按照下面的步骤操作
        </div>
        <div class="item">
            1、
            <el-button type="primary">下载模版</el-button> &nbsp; &nbsp;并对价格进行更新或者新增。
        </div>
        <div class="item">
            2、 将填写好未来价格模版
            <el-button type="primary">上传文件</el-button>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class futurePrice extends Vue {}
</script>
<style lang="less" scoped>
    .lastPrice {
        padding: 25px 0 0 25px;
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
    .item {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #4A4A4A;
        letter-spacing: 0;
        margin-bottom:20px;
    }
    .el-button {
        height:32px;
        width:98px;
        padding:0;
    }
</style>
