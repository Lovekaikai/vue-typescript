<template>
    <div class="providerManage">
        <el-container>
            <el-aside width="260px">
                <div class='title'>
                    通讯录
                </div>
                <el-tree :data="data" ref="tree">
                </el-tree>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
    @Component({
      components: {}
    })
export default class announceManage extends Vue {
        data = [{
          label: '中南国废有限公司',
          children: [{
            label: '华南区',
            children: [{
              label: '东莞'
            },
            {
              label: '泉州'
            }
            ]
          }]
        }, {
          label: '华东区',
          children: [{
            label: '太仓',
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
          label: '西南区',
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
    }
</script>
<style lang="less">
    .providerManage {
        .title {
            padding: 15px 0 7px 15px;
            font-family: PingFangSC-Regular;
            font-size: 20px;
            color: #4A4A4A;
            border: 1px solid #ECECEC;
        }
        padding: 26px 116px 0;
        height: 90%;
    }
    .el-container {
        height: 100%;
        border: 1px solid #ECECEC;
        .el-aside {
            overflow: hidden;
            height: 100%;
            width: 260px;
            opacity: 0.9;
            background: #F6F6F6;
            .el-menu {
                background: #F6F6F6;
                .el-menu-item {
                    padding: 0 !important;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: #4A4A4A;
                    height: 52px;
                    a {
                        display: block;
                        width: 100%;
                        height: 100%;
                        color: #4A4A4A;
                        text-decoration: none;
                        text-indent: 20px;
                    }
                }
            }
        }
        .el-main {
            height: 100%;
            background: #ffffff;
            padding: 0;
        }
    }
    .providerManage .router-link-exact-active {
        outline: 0;
        color: #2ACDCF;
        background-color: #ecf5ff;
        border-right: 2px solid #2ACDCF;
    }
    .el-tree {
        padding: 21px 0 0 16px;
        background: #F6F6F6;
    }
    span.el-tree-node__label::before {
        content: "";
        background-size: 10px 10px;
        width: 10px;
        display: inline-block;
        background-image: url("../../assets/folder-icon.png");
        height: 10px;
        padding-right: 4px;
        background-repeat: no-repeat;
    }
</style>
