<template>
   <div class="goods">
       <div class="head">
           <span  v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
           <p>地址管理</p>
       </div>
       <ul class="center">
           <li>
              <div class="information">
                  <span class="information-m">默认</span>
                  <span class="information-name">jun</span>
                  <span class="phone"> 1659564564654</span>
              </div>
               <div class="address">
                   <span>
                       上海市松江区泗泾镇
                       <router-link to="goods/editor" class="editor">
                           <span>编辑地址</span>
                       </router-link>

                   </span>
               </div>
               <div class="default">
                   <input type="checkbox" checked="checked">
                   默认地址
               </div>
           </li>
           <p>
               <img src="../../assets/img/user/jg.png" alt="">
               最多baocun10个有效地址，每月只能新增或修改10次，您本月已新增或修改 <span>0</span>次</p>
       </ul>
       <div class="new">
           <router-link to="goods/new" class="new-from">
               新增地址
           </router-link>
       </div>
       <router-view></router-view>
   </div>

</template>

<script>
    export default {
        name: "goods",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
        }
    }
</script>

<style lang="less" scoped>
    .goods{
        width: 750px;
        .head {
            width: 750px;
            height: 90px;
            border-bottom: 1px solid #f1f1f1;
            text-align: center;
            line-height: 90px;
            font-size: 30px;
            position: relative;
            background-color:pink;
            p {
                color: #535353;
            }

            span {
                display: inline-block;
                width: 90px;
                height: 62px;
                position: absolute;
                left: 0;
                top: 0;
                img {
                    padding-left: 30px;
                    margin-top: 22px;
                    width: 44px;
                    height: 34px;
                }
            }
        }
        .center{
            width: 750px;
            p{
                font-size:26px ;
                color: #999;
                padding: 10px;
                img{
                    width: 24px;
                    height: 24px;
                }
            }
            li{
                .information{
                    margin: 20px;
                    overflow: hidden;
                    width: 750px;
                    .information-m{
                        display: inline-block;
                         width: 60px;
                         height: 40px;
                         background-color: hotpink;
                         text-align: center;
                         line-height: 40px;
                         color: white;
                         border-radius: 10px;
                    }
                    .information-name{
                        color: gray;
                        font-size: 30px;
                        margin-left: 20px;
                    }
                    .phone{
                        float: right;
                        margin-right: 30px;
                        color: gray;
                        font-size: 30px;
                    }
                }
                .address{
                    overflow: hidden;
                    margin: 20px;
                    border-bottom: 1px  solid  #e2e2e2;
                    span{
                        font-size: 30px;
                        color: gray;
                       .editor{
                          span{
                              display: inline-block;
                               width:150px;
                               margin-bottom: 20px;
                               background: hotpink;
                               color: white;
                              line-height: 60px;
                              text-align: center;
                              border-radius: 30px;
                               float: right;

                           }
                       }

                    }
                }
              .default{
                  input{
                      width: 35px;
                      height: 35px;
                      vertical-align: top;
                  }
                  color: gray;
                  font-size: 30px;
                  margin-bottom: 20px;
                  margin-left: 20px;
              }
            }
        }
        .new{
            width: 750px;
            .new-from{
                display: inline-block;
                width: 400px;
                height: 70px;
                background: hotpink;
                text-align: center;
                position: absolute;
                bottom: 20px;
                left: 175px;
                border-radius: 40px;
                color:white ;
                font-size: 30px;
                line-height: 70px;
            }
        }
    }
</style>