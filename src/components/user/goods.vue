<template>
   <div class="goods">
       <div class="head">
           <span  v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
           <p>地址管理</p>
       </div>
       <ul class="center">
           <li v-for="(item,index) in this.addressList" >
              <div class="information">
                  <span class="information-m">默认</span>
                  <span class="information-name">{{item.consignee}}</span>
                  <span class="phone">{{item.mobile}}</span>
              </div>
               <div class="address">
                   <span>
                       {{item.address}}
                   </span>
                   <div class="default">
                       <input type="checkbox" checked="checked">
                       默认地址
                       <router-link :to="{path:'goods/editor',query:{data:item}}" class="editor">
                           <span>编辑地址</span>
                       </router-link>
                   </div>

               </div>

           </li>
       </ul>
       <div class="new">
           <router-link to="/user/goods/new" class="new-from">
               新增地址
           </router-link>
       </div>

       <router-view></router-view>
   </div>

</template>

<script>
    import axios from "axios"
    export default {
        name: "goods",
        data(){
            return{
                addressList:[]
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
        },
        created(){
            axios.get("/api/addressList").then((data)=>{
                let res = data.data;
                if(res.status == 0){
                    this.addressList = res.result;
                    // console.log(this.addressList)
                }else{

                }
            })
        }

    }
</script>

<style lang="less" scoped>
    .goods{
        width: 750px;
        min-height: 100vh;
        background: white;

        left: 0;
        top: 0;
        z-index: 20;
        position: relative;
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
            height: 1100px;
            overflow-x: hidden;
            overflow-y: scroll;
            position: relative;
            li{
                margin-bottom: 50px;
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
                        font-size: 36px;
                        color: gray;


                    }
                    .default{
                        margin: 40px   0 ;
                        input{
                            width: 35px;
                            height: 35px;
                            vertical-align: top;
                        }
                        color: gray;
                        font-size: 30px;
                        .editor{
                            span{
                                display: inline-block;
                                width:145px;
                                height: 50px;
                                /*margin: 30px  0;*/
                                background: hotpink;
                                color: white;
                                line-height: 50px;
                                text-align: center;
                                border-radius: 30px;
                                float: right;
                                font-size: 26px;

                            }
                        }
                    }
                }

            }

        }
        .new{
            width: 750px;
            height: 70px;
            position: absolute;
            left: 0;
            bottom: 0;
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