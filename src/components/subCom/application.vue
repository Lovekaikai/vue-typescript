<template>
    <div class="application">
        <el-container>
            <el-main class="app_main">
                <ul class="clearfix">
                    <li>
                        <router-link to="/receive">
                            <i class="el-icon-picture"></i>
                            <p>预约回收表单</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/sendTpl">
                            <i class="el-icon-picture"></i>
                            <p>预约回收表单</p>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/suggestions">
                            <i class="el-icon-picture"></i>
                            <p>投诉建议表单</p>
                        </router-link>
                    </li>
                </ul>
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
export default class application extends Vue {}
</script>
<style lang="less" >
    .application {
         min-width: 786px;
        overflow: hidden;
        .app_main{
            background:rgb(236, 236, 236) !important;
        }
        ul {
            margin: 50px 0 0 116px;
            li {
                cursor: pointer;
                float: left;
                background: #FFFFFF;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14);
                border-radius: 4px;
                width: 167px;
                height: 180px;
                text-align: center;
                margin-right: 24px;
                overflow: hidden;
                i {
                    display: block;
                    font-size: 30px;
                    color: #2BCDCF;
                }
                p {
                    margin-top: 20px;
                    font-family: PingFangSC-Regular;
                    font-size: 16px;
                    color: #4A4A4A;
                }
                a {
                    text-decoration: none;
                    display: block;
                    width: 100%;
                    height: 120px;
                    padding-top: 60px;
                }
            }
        }
    }
</style>
