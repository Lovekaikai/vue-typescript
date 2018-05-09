<template>
    <div class="providerMessage">
        <div class="providerMessage_manage">
            批量导入信息
        </div>
        <div class='sweet'>
            导入步骤
        </div>
        <div class="item">
            1、
            <el-button type="primary">下载模版</el-button> &nbsp; &nbsp;下载并填写供应商信息模版
        </div>
        <div class="item">
          2、 将填写好供应商信息模版拖到下面区域上传。
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        </div>
        <el-button @click="orSuccessDialogVisible = true">ok , 我知道了</el-button>
        <el-dialog :visible.sync="orSuccessDialogVisible" width="30%">
            <p class="insert_name">导入结果</p>
            <p class="insert_mess">成功处理110条，失败10条。<span>下载结果报告</span></p>
            <span slot="footer" class="dialog-footer">
                    <el-button @click="orSuccessDialogVisible = false">ok , 我知道了</el-button>
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
export default class providerMessage extends Vue {
        orSuccessDialogVisible: boolean = false
    }
</script>
<style lang="less">
    .providerMessage {
        padding: 25px 0 0 25px;
    }
    .providerMessage_manage {
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
        margin-bottom: 20px;
    }
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
    .el-button {
        height: 32px;
        width: 98px;
        padding: 0;
    }
    .insert_name {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .insert_mess {
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #4A4A4A;
        padding: 0 0 30px 0;
        margin: 0 20px;
        border-bottom: 1px solid #E9E9E9;
        padding-top: 8px;
        span {
            font-family: STHeitiSC-Light;
            font-size: 14px;
            color: #50E3C2;
            letter-spacing: 0
        }
    }
</style>
