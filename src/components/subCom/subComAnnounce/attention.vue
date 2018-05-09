<template>
    <div class="attention" >
        <div class="attention_manage">
            公告管理
        </div>
        <div class="screening">
            <span class="address">基地</span>
            <div class="address_btn" @click="treeShow">
                <span class="tag-item-name">运营中心<i class="el-icon-close"></i></span>
            </div>
            <div class="tree_con" v-show="treeOrShow" >
                <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
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
            <el-button class="success_btn">发布</el-button>
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
export default class attention extends Vue {
    treeOrShow:boolean=false;
        data = [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }]
        obj = {
          'base_id_arr': [{
            '0': '313045',
            '1': '313049'
          }],
          'file': [{
            'ext': 'jpg',
            'filehash': 'asdfasdfasdadfa',
            'hash': '11',
            'name': 'im1',
            'size': '4',
            'type': 'image',
            'url': 'asdfad'
          },
          {
            'ext': 'md',
            'filehash': '4353246',
            'hash': '12',
            'name': 'fl2',
            'size': '44',
            'type': 'file',
            'url': 'asdfad'
          }
          ],
          'information': 'manybase',
          'notice_id': '4'
        }
        options = [{
          value: '黄金糕',
          label: '黄金糕'
        }, {
          value: '双皮奶',
          label: '双皮奶'
        }, {
          value: '蚵仔煎',
          label: '蚵仔煎'
        }, {
          value: '龙须面',
          label: '龙须面'
        }, {
          value: '北京烤鸭',
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
        created() {
          this.getViewNotice()
        }
        treeShow() {
          this.treeOrShow = true
        }
        treeHide() {
          this.treeOrShow = false
        }
        selectChange(val) {
          this.obj.base_id_arr = val
        }
        // 公告管理 查看列表
        getViewNotice() {
          //   var obj = {
          //     'data': {
          //       'base_id_arr': [
          //         {
          //           '0': '313045',
          //           '1': '313049'
          //         }
          //       ],
          //       'file': [
          //         {
          //           'ext': 'jpg',
          //           'filehash': 'asdfasdfasdadfa',
          //           'hash': '11',
          //           'name': 'im1',
          //           'size': '4',
          //           'type': 'image',
          //           'url': 'asdfad'
          //         },
          //         {
          //           'ext': 'md',
          //           'filehash': '4353246',
          //           'hash': '12',
          //           'name': 'fl2',
          //           'size': '44',
          //           'type': 'file',
          //           'url': 'asdfad'
          //         }
          //       ],
          //       'information': 'manybase',
          //       'notice_id': '4'
          //     }
          //   }
          this.$http('index.php?model=notice&m=ajax&a=index&cmd=100', {
            'base_id_arr': [{
              '0': '313045',
              '1': '313049'
            }],
            'file': [{
              'ext': 'jpg',
              'filehash': 'asdfasdfasdadfa',
              'hash': '21313213131321321',
              'name': 'im1',
              'size': '4',
              'type': 'image',
              'url': 'asdfad'
            },
            {
              'ext': 'md',
              'filehash': '4353246',
              'hash': '54654654654654646',
              'name': 'fl2',
              'size': '44',
              'type': 'file',
              'url': 'asdfad'
            }
            ],
            'information': 'manybase',
            'notice_id': '4'
          }).then(function(res) {
            console.log(res)
          })
        }
    }
</script>
<style lang="less">
    .attention {
        padding: 25px 25px 0 25px;
    }
    .attention_manage {
        padding: 16px 0 20px 0;
        font-family: PingFangSC-Regular;
        font-size: 20px;
        color: #4A4A4A;
    }
    .screening {
        position: relative;
        padding: 15px;
        span.address {
            margin-right: 30px;
        }
        .address_btn {
            padding-right: 30px;
            .tag-item-name {
                line-height: 25px;
                color: #2e2e2e;
                display: inline-block;
                padding: 0 8px 0 5px;
                background: rgb(238, 238, 238);
            }
            cursor: pointer;
            min-width: 200px;
            height: 30px;
            line-height: 30px;
            border: 1px solid #CECECE;
            border-radius: 2px;
            display: inline-block;
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
            background: #2BCDCF;
            border: 1px solid #2BCDCF;
            border-radius: 4px;
            color: #fff;
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
    .el-tree {
        padding: 21px 0 0 16px;
        background: #F6F6F6;
        position: absolute;
        left: 80px;
        top: 45px;
        z-index: 1000;
        width: 200px;
        border-radius: 5px;
        overflow: auto;
        padding: 10px;
    }
    span.el-tree-node__label::before {
        content: "";
        background-size: 10px 10px;
        width: 10px;
        display: inline-block;
        background-image: url("../../../assets/folder-icon.png");
        height: 10px;
        padding-right: 4px;
        background-repeat: no-repeat;
    }
</style>
