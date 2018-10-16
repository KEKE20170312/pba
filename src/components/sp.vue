<template>

    <div class="m-body">
        <div class="headerTop">
            <span class="back2" id="back">
                <img src="../assets/img/home/back2.jpg" alt="">
            </span>
            <span class="title">商品详情</span>
            <span class="right-icon">
            <a class="icon-link" href="#">
                <img src="../assets/img/home/icon_shoppingcart@2x.png" alt="">
                <label class="header-label">0</label>
            </a>
        </span>
        </div>
        <div class="m-body-cont">
            <div class="goods-box">
                <div class="pic-box">
                    <img src="http://appimg.pba.cn/2016/08/25/a2a780df3b71d4ceefe96dcdc496d10d.jpg!240.240" alt="">
                </div>
                <p class="goods-name">PBA 气垫BB</p>
                <div style="display: none" class="type-box">
                    <p>选择颜色分类</p>
                    <ul class="typelist">
                        <li class="type-active">肤色</li>
                    </ul>
                </div>
            </div>
            <div class="section cf">
                <p class="cf rm2">
                    <span class="sp_pri title-p">
                        <span>专享价：</span>
                        <label class="good-price">￥49.90</label>
                    </span>
                    <span class="sp_desc">6508人已购买</span>
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
                            <div class="like-item">
                                <div class="like-goods-pic">
                                    <img src="../assets/img/home/bbs.jpg" alt=""/>
                                </div>
                                <div class="like-goods-name">PBA 柔肤多效BB霜</div>
                                <div class="like-goods-price">￥49.90</div>
                            </div>
                            <div class="like-item"></div>
                            <div class="like-item"></div>
                            <div class="like-item"></div>
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
                        <div class="someImg">
                            <img class="oneImg" src="../assets/img/home/face.jpg" alt=""/>
                            <img class="oneImg" src="../assets/img/home/face.jpg" alt=""/>
                            <img class="oneImg" src="../assets/img/home/face.jpg" alt=""/>
                            <img class="oneImg" src="../assets/img/home/face.jpg" alt=""/>
                            <img class="oneImg" src="../assets/img/home/face.jpg" alt=""/>
                            <img class="oneImg" src="../assets/img/home/face.jpg" alt=""/>
                        </div>
                    </ol>
                </div>
            </div>
        </div>
        <div class="btn-wrap">
            <ul class="left">
                <li class="btn0 contact">客服</li>
                <li class="btn1">分享</li>
            </ul>
            <a class="nojoin" href="">暂无存货</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sp",

    }
</script>

<style lang="less" scoped>
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
                            /*background-color: #fff;*/
                            background-color: yellow;
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
    }
    .btn-wrap{
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
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
            background-color: #b1b1b1;
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