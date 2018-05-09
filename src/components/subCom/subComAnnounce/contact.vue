<template>
    <div class="contact">
        <div class="contact_manage">
            联系客服
        </div>
        <div class="screening">
            <span class="address">基地</span>
                     <el-select v-model="value" placeholder="请选择" :multiple='true'>
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <div class="text">
            <span class="content">公告内容</span>
            <div class="editor">
<script id="editor" type="text/plain" style="width:800px;height:300px;">

</script>
            </div>
        </div>
        <div class="accessory">
            <span class="accessory_text">附件：</span>
            <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
                <el-button size="small">上传附件</el-button>
            </el-upload>
        </div>
        <div class="success">
            <el-button type="success">成功按钮</el-button>
        </div>
        <div class="issue">
            <span class="title">已发布事项</span>
            <div class="text">
                发布局部内容显示在这发布局部内容显示在这发布局部内容显示在这发布局部内容显示在这发布局部内容显示在这 发布局部内容显示在这发布局部内容显示在这发布局部内容显示在这超过两行就省略掉呀呀呀，内容就这么多呀…
            </div>
            <span class="time">2018/04/24 10:10</span>
            <span class="change">修改</span>
        </div>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class contact extends Vue {
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
        value: string = ''
        fileList3 = [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
        handleChange(file, fileList) {
          this.fileList3 = fileList.slice(-3)
        }
        mounted() {
          /* eslint-disable no-undef */
          window['UE'].delEditor('editor')
          window['UE'].getEditor('editor')
        }
    }
</script>
<style lang="less">
    .contact {
        padding: 25px 25px 0 25px;
    }
    .contact_manage {
        padding: 16px 0 20px 0;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .screening {
        span.address {
            padding: 12px 30px 26px 25px;
        }
        .el-input {
            width: 200px;
        }
    }
    .text {
        overflow: hidden;
        span.content {
            float: left;
        }
        .editor {
            height: 480px;
            float: left;
            margin: 9px 0 0 24px;
        }
    }
    .accessory {
        overflow: hidden;
        padding: 12px 0;
        .accessory_text {
            float: left;
            padding: 0 4px 0 25px;
        }
        .upload-demo {
            float: left;
            .el-upload {
                float: left;
            }
            padding:0 12px;
            .el-upload-list {
                width: 343px;
                float: left;
                margin-left: 30px;
            }
            .el-upload-list__item:first-child {
                margin-top: 0;
            }
        }
    }
    .success {
        padding-left: 85px;
        .el-button {
            width: 74px;
            height: 32px;
            padding: 0;
        }
    }
    .issue {
        width: 810px;
        height: 165px;
        margin: 29px 0 0 82px;
        background: #F6F6F6;
        border-radius: 2px;
        overflow: hidden;
        .title {
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #000000;
            padding: 18px 0 16px 26px;
            display: block;
            border-bottom: 1px solid #D0D0D0;
        }
        .text {
            padding: 11px 41px 4px 25px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #4A4A4A;
            line-height: 21px;
        }
        .time {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #4A4A4A;
            line-height: 21px;
            padding-left: 25px;
        }
        .change {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #2BCDCF;
            line-height: 21px;
            padding-left: 11px;
        }
    }
</style>
