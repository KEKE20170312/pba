<template>
    <div class="sp">
    <div class="m-body">
        <!--头部nav区-->
        <div class="headerTop">
                <span class="back2" id="back">
                    <img @click="back" src="../assets/img/home/back2.jpg" alt="返回">
                </span>
            <span class="title">商品详情</span>
            <span class="right-icon">
            <a class="icon-link" href="#">
                <router-link to="/cart" tag="div">
                    <img src="../assets/img/home/icon_shoppingcart@2x.png" alt="">
                    <label v-model="oneAdd" class="header-label">{{oneAdd}}</label>
                </router-link>
            </a>
        </span>
        </div>
        <div class="m-body-cont">
            <!--对应的图片详情区-->
            <div class="goods-box">
                <div class="pic-box">
                    <img :src="this.data.largeImg" alt="">
                </div>
                <p class="goods-name">PBA {{this.data.goodsName}}</p>
                <div style="" class="type-box"  v-for="(item,index) in this.data.kinds">
                    <p>选择颜色分类</p>
                    <ul class="typelist">
                        <li class="type-active">{{item}}</li>
                    </ul>
                </div>
            </div>
            <!--专享价和店铺优惠区-->
            <div class="section cf">
                <p class="cf rm2">
                    <span class="sp_pri title-p">
                        <span>专享价：</span>
                        <label class="good-price">￥{{this.data.price}}</label>
                    </span>
                    <span class="sp_desc">{{this.data.sales}}人已购买</span>
                </p>
                <p class="cf pr-resume rm3">
                    <span class="sp_pri title-p type">店铺优惠</span>
                    <span class="sp_desc time discount" style="text-align: right">
                        <a class="free">
                            <img class="blue" src="../assets/img/home/free.jpg" alt=""/>
                            <span class="free-txt">满99包邮</span>
                        </a>
                    </span>
                </p>
                <!--热门商品区-->
                <section class="like-box">
                    <div class="like-header">热门商品</div>
                    <div class="like-container">
                        <div class="like-wrapper cf">
                            <div class="like-item" v-for="(item,index) in make_up" data-id="">
                                <div class="like-goods-pic">
                                    <router-link :to="'/sp/'+item._id">
                                        <img :src="item.largeImg" alt=""/>
                                    </router-link>
                                </div>
                                <div class="like-goods-name">PBA {{item.goodsName}}</div>
                                <div class="like-goods-price">￥{{item.price}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="like-more">
                        <img src="../assets/img/home/like_arror.png" alt="右箭头"/>
                    </div>
                </section>
                <!--图文详情区-->
                <div class="detail-column">
                    <div class="detail-header">图文详情</div>
                    <ol class="detail-show">
                        <div class="someImg" v-for="(item,index) in this.data.detailImgs">
                            <img class="oneImg" :src="item" alt=""/>
                        </div>
                    </ol>
                </div>
            </div>
            <!--提示框区-->
            <div v-show="ModifyPassword_pop_up" @hidden="hiddenShow" class="tip-wrap msgTip" style="display: table;">
                <div class="cont-wrap">
                    <div class="cont">
                        <p>您好，请联系PBA微信客服，微信号：<br>PBA美容顾问</p>
                        <div class="ok-cancel-wrap" style="display: none"></div>
                            <div @click="Hidden()" class="tip-close">确定</div>
                    </div>
                </div>
            </div>
        </div>
        <!--底部组件-->
        <div class="btn-wrap">
            <ul class="left">
                <li @click="ModifyPassword()" class="btn0 contact">客服</li>
                <li class="btn1">分享</li>
            </ul>
            <div @click="toggle()" class="nojoin">加入购物车</div>
        </div>
        <!--加入购物车的动画-->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <img v-show="isshow" src="../assets/img/home/bbs.jpg" class="show" alt="">
        </transition>
    </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "sp",
        props:{
            goodsId:String
        },
        data(){
            return{
                isshow: false,
                data:{},
                make_up:[],
                ModifyPassword_pop_up:false,
                history_pop_up:false,
                oneAdd:0
            }
        },
        methods:{
            back(){
                this.$router.go(-1);
            },
            ModifyPassword(){
                this.ModifyPassword_pop_up=true
            },
            hiddenShow(){
                let that = this;
                that.ModifyPassword_pop_up = false
            },
            Hidden(){
                this.hiddenShow();
            },
            toggle: function () {//以下是动画
                this.isshow = !this.isshow;
                this.oneAdd++;
            },
            beforeEnter: function (el) {
                console.log("beforeEnter");
                el.style = "padding-left:-200px";
                el.style = "width:300px";
             },
            enter: function (el, done) {
                console.log("enter");
                el.offsetHeight;
                el.style = "padding-left:100px";
                el.style = "width:0px";
                done();
            },
            afterEnter: function (el) {
                console.log("afterEnter");
                this.isshow = false;
            }
        },
        created(){
            // console.log("aaa");
            var goodsId = this.$route.params.id;
            axios.get("/api?id="+goodsId).then((data)=>{
                console.log(data.data);
                this.data = data.data[0];
            });
            axios.get("/api/make_up").then((data)=>{
                console.log(data.data);
                this.make_up = data.data;
            })
        },
        watch:{
            $route(){
                var goodsId = this.$route.params.id;
                axios.get("/api?id="+goodsId).then((data)=>{
                    console.log(data.data);
                    this.data = data.data[0];
                });
                axios.get("/api/make_up").then((data)=>{
                    console.log(data.data);
                    this.make_up = data.data;
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .show{
        position: fixed;
        bottom: 1000px;
        left: 300px;
        width: 300px;
        z-index: 19;
        transition: all 1s;
    }
    .blue{
        width: 210.56px;
        height: 38px;
    }
    .oneImg{
        width: 750px;
        height: 280px;
        display: table-cell;
    }
.m-body{
    min-width: 640px;
    max-width: 1280px;
    margin: 0 auto;
    padding-bottom: 80px;
    background: #f1f1f1;
    .headerTop{
        border-bottom: 2px solid #E2E2E2;
        color: #535353;
        width: 750px;
        height: 90px;
        position: fixed;
        top: 0px;
        background-color: #FAFAFA;
        max-width: 1280px;
        min-width: 640px;
        z-index: 1;
        .back2{
            display: inline-block;
            width: 90px;
            padding-left: 30px;
            color: #FFF;
            margin-top: 30px;
            position: absolute;
            left: 0px;
            img{
                width: 86px;
            }
        }
    }
    .title{
        -webkit-flex: 1;
        -webkit-box-flex: 1;
        text-align: center;
        line-height: 90px;
        font-size: 36px;
        display: block;
    }
    .right-icon{
        width: 90px;
        /*height: 525px;*/
        display: inline-block;
        margin-top: 2px;
        position: absolute;
        right: 0px;
        top: 18px;
        font-size: 26px;
        a{
            color: #ff498c;
            text-decoration: none;
            display: inline-block;
            margin-top: 2px;
            img{
                width: 44px;
            }
        }
        .icon-link{
            position: relative;
            .header-label{
                position: absolute;
                top: -12px;
                font-size: 18px;
                background-color: red;
                right: -26px;
                color: #fff;
                text-align: center;
                padding: 6px;
                border-radius: 375px;
                min-width: 22px;
            }
        }
    }
    .m-body-cont{
        margin-top: 92px;
        .goods-box{
            padding: 44px 22.5px;
            text-align: center;
            border-bottom: 2px solid #e2e2e2;
            background-color: #fff;
            .pic-box{
                width: 282px;
                margin: 0 auto;
                img{
                    width: 282px;
                }
            }
            .goods-name{
                margin-top: 20px;
                font-size: 30px;
                color: #000;
                font-weight: bold;
            }
            .type-box{
                margin-top: 44px;
                p{
                    font-size: 30px;
                    margin-bottom: 22.5px;
                    color: #969696;
                    text-align: left;
                }
                .typelist{
                    text-align: left;
                    margin-top: 20px;
                    .type_active{
                        color: #FF82AB;
                        border: 2px solid #FF82AB;
                    }
                    li{
                        width: 345px;
                        margin-left: 22.5px;
                        display: inline-block;
                        text-align: center;
                        border: 2px solid #E5E5E5;
                        border-radius: 54px;
                        padding: 15px 0;
                        font-size: 28px;
                        margin-bottom: 26px;
                        color: #535353;
                        padding: 6px 20px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        white-space: nowrap;
                        box-sizing: border-box;
                    }
                }
            }
        }
        .section{
            margin: 14px 0px;
            .pr-resume{
                .type{
                    font-size: 30px;
                    font-weight: bold;
                    display: inline-block;
                }
                .time{
                    display: inline-block;
                    text-align: right;
                    color: #969696;
                }
            }
            .rm3{
                margin-top: 0!important;
                border-top: none!important;
                .type{
                    width: 150px;
                    vertical-align: middle;
                }
                .discount{
                    width: 554px;
                    vertical-align: middle;
                    float: none;
                    a.free{
                        width: 210px;
                        .free-txt{
                            font-size: 28px;
                            display: inline-block;
                            width: 210px;
                            text-align: center;
                            position: absolute;
                            left: 0;
                            color: #fff;
                            top: 0;
                            margin-top: 8.55px;
                        }
                    }
                    a{
                        display: inline-block;
                        margin-left: 15px;
                        position: relative;
                        img{
                            border: none;
                            height: 54px;
                        }
                    }
                }
            }
            .like-box{
                border-top: 1px solid #e4e4e4;
                border-bottom: 1px solid #e4e4e4;
                background-color: #fff;
                position: relative;
                margin-top: 22.5px;
                .like-header{
                    font-size: 30px;
                    padding: 22.5px;
                    color: #000;
                    font-weight: bold;
                }
                .like-container{
                    width: 750px;
                    position: relative;
                    overflow-y: hidden;
                    overflow-x: scroll;
                    height: 268.78px;
                    .like-wrapper{
                        width: 946px;
                        position: relative;
                        margin-right: 24px;
                        height: 244.5px;
                        .like-item{
                            float: left;
                            width: 182.38px;
                            height: 244px;
                            text-align: center;
                            margin-left: 48px;
                            box-sizing: border-box;
                            background-color: #fff;
                            .like-goods-pic{
                                font-size: 0;
                                img{
                                    width: 144px;
                                }
                            }
                            .like-goods-name{
                                margin-top: 24px;
                                margin: 0;
                                padding: 0;
                                font-size: 24px;
                                line-height: 38px;
                                color: #535353;
                                width: 182.376px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                            .like-goods-price{
                                color: #FF498C;
                                margin: 0;
                                padding: 0;
                                font-size: 24px;
                                line-height: 38px;
                                width: 182.376px;
                                overflow: hidden;
                                white-space: nowrap;
                                text-overflow: ellipsis;
                            }
                        }
                    }
                }
                .like-more{
                    position: absolute;
                    right: 0;
                    top: 60px;
                    bottom: 0;
                    height: 96px;
                    margin: auto;
                    img{
                        width: 96px;
                    }
                }
            }
            .detail-column{
                margin-top: 22.5px;
                border-top: 1px solid #E2E2E2;
                .detail-header{
                    font-size: 28px;
                    text-align: center;
                    padding: 15px 0;
                    background: #fff;
                    border-bottom: 1px solid #E2E2E2;
                    color: #FF498C;
                    .detail-show{
                        width: 750px;
                        .someImg{
                            display: block;
                            width: 750px;
                        }
                    }
                }
            }
            p{
                padding: 22.5px;
                font-size: 24px;
                background: #fff;
                border-bottom: 1px solid #E2E2E2;
                border-top:1px solid #E2E2E2;
                .title-p{
                    font-size: 30px;
                    font-weight: bold;
                    label{
                        color: #ff498c;
                        font-size: 30px;
                    }
                }
                .sp_desc{
                    font-size: 24px;
                    color: #969696;
                    float: right;
                    margin-top: 4px;
                }
                .rm2{margin-bottom: 0!important;}
                .cf:after{
                    content: ".";
                    visibility: hidden;
                    clear: both;
                    height: 0;
                    width: 750px;
                    display: block;
                }
            }
        }
        .tip-wrap{
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.3);
            display: none;
            width: 750px;
            height: 1334px;
            z-index: 2;
            .cont-wrap{
                display: table-cell;
                vertical-align: middle;
                border-radius: 20px;
                -webkit-border-radius: 20px;
                .cont{
                    background: #FF82AB;
                    width: 637.5px;
                    height: 268px;
                    max-width: 1024px;
                    margin: 0 auto;
                    color: #FFF;
                    font-size: 30px;
                    text-align: center;
                    -webkit-border-radius: 10px;
                    border-radius: 10px;
                    p{
                        padding: 50px 0;
                        padding-bottom: 40px;
                        border-bottom: 1px solid #FFF;
                        height: 96px;
                    }
                    .ok-cancel-wrap{
                        overflow: hidden;
                    }
                    .tip-close{
                        line-height: 80px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
    .btn-wrap{
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        z-index: 30;
        margin: 0 auto;
        height: 100px;
        background-color: #f9f9f9;
        border-top: 1px solid #e2e2e2;
        .left{
            display: inline-block;
            width: 375px;
            height: 100px;
            li.btn0{
                background: url(../assets/img/home/message.jpg) no-repeat center 12px;
                background-size: 38px;
                width: 135px;
                margin-left: 26px;
            }
            li{
                display: inline-block;
                line-height: 136px;
                text-align: center;
                font-size: 28px;
                color: #969696;
            }
            li.btn1{
                background: url(../assets/img/home/share.jpg) no-repeat center 12px;
                background-size: 38px;
                width: 135px;
            }
        }
        .nojoin{
            background-color: #ff498c;
            width: 435px;
            height: 100px;
            line-height: 100px;
            display: inline-block;
            color: #fff;
            font-size: 32px;
            text-align: center;
            position: absolute;
            right: 0;
            margin: 0;
            padding: 0;
        }
    }
}
</style>