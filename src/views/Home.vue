<template>
    <div>
        <Search></Search>
        <!--轮播图部分-->
        <template>
            <swiper class="container" :options="swiperOption" ref="mySwiper">
                <router-link to="sp" tag="swiper">
                    <!-- slides -->
                    <swiper-slide class="imgBox"><img src="../assets/img/home/LB_1.jpg" alt=""/></swiper-slide>
                    <swiper-slide class="imgBox"><img src="../assets/img/home/LB_2.jpg" alt=""/></swiper-slide>
                    <swiper-slide class="imgBox"><img src="../assets/img/home/LB_3.jpg" alt=""/></swiper-slide>
                    <!-- Optional controls -->
                    <div class="swiper-pagination"  slot="pagination"></div>
                    <div class="swiper-button-prev" slot="button-prev"></div>
                    <div class="swiper-button-next" slot="button-next"></div>
                </router-link>
            </swiper>

        </template>

        <!--三个活动图-->
        <ul class="main-product">
            <li>
                <router-link to="sp" tag="li">
                    <img src="../assets/img/home/product_1.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="sp" tag="li">
                    <img src="../assets/img/home/product_2.jpg" alt="">
                </router-link>
            </li>
            <li>
                <router-link to="sp" tag="li">
                    <img src="../assets/img/home/product_3.jpg" alt="">
                </router-link>
            </li>
        </ul>
        <!--人气商品-->
        <div class="banner">
            <img src="../assets/img/home/banner-hot.jpg" alt="人气商品"/>
        </div>
        <!--所有推荐商品-->
        <div class="classify-column">
            <ul>
                <li>
                    <div class="goods-box" tag="div">
                        <router-link to="sp"><img src="http://appimg.pba.cn/2016/08/25/a2a780df3b71d4ceefe96dcdc496d10d.jpg!240.240
" alt=""/></router-link>
                        <img class="newProduct" src="../assets/img/home/new-product.png" alt="新品"/>
                    </div>
                    <div class="text">
                        <p class="goods-name">气垫BB</p>
                        <p class="goods-tag">水润清透 打造空气感裸妆</p>
                        <p class="goods-price"><span>专享价：</span><span class="price">￥49.90</span></p>
                        <a class="joinCart" href="#">
                            <img src="../assets/img/home/shopcart-unlight.png" alt="购物车">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <MyNav/>
        <router-view></router-view>
    </div>

</template>

<script>
    import Search from "../components/search";
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import Sp from "../components/sp";
    import MyNav from "../common/myNav";
    export default {
        name: "home",
        components:{
            Search,
            swiper,
            swiperSlide,
            Sp,
            MyNav
        },
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        }
    }
</script>

<style lang="less" scoped>
    * {
        list-style: none;
    }
    .container{
        width: 750px;
        height: 280px;
        .imgBox{
            width: 750px;
            img{
                width: 750px;
            }
        }
    }

    .main-product{
        width: 750px;
        height: 300px;
        border-bottom: 1px solid #e2e2e2;
        display: flex;
        li{
            width: 250px;
            height: 298px;
            img{
                width: 250px;
                height: 298px;
            }
        }
    }
    .banner{
        width: 750px;
        height: 125px;
        border-bottom: 2px solid #f1f1f1;
        img{
            width: 750px;
            height: 125px;
        }
    }
    .classify-column{
        width: 750px;
        ul{
            width: 750px;
            padding: 0;
            margin-bottom: 120px;
            li{
                width: 750px;
                zoom:1;
                padding: 30px 22.5px;
                list-style: none;
                box-sizing: border-box;
                border-bottom: 2px solid #f1f1f1;
                height: 280px;
                .goods-box{
                    width: 225px;
                    display: inline-block;
                    vertical-align: middle;
                    position: relative;
                    a{
                        display: inline-block;
                        text-decoration: none;
                        img{
                            border: none;
                            height: 211.5px;
                        }
                    }
                    .newProduct{
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 84.6px;
                    }
                }
                .text{
                    display: inline-block;
                    margin-left: 22.5px;
                    width: 457px;
                    vertical-align: middle;
                    position: relative;
                    p{
                        display: inline-block;
                        width: 348px;
                    }
                    .goods-name{
                        font-size: 28px;
                        margin-bottom: 15px;
                        color: #000;
                    }
                    .goods-tag{
                        font-size: 26px;
                        margin-bottom: 15px;
                        color: #969696;
                    }
                    .goods-price{
                        font-size: 26px;
                        color: #585858;
                        .price{color: #FD4688;}
                    }
                    .joinCart{
                        position: absolute;
                        right: 22.5px;
                        width: 59.56px;
                        img{
                            width: 59.56px;
                        }
                    }
                }
            }
        }
    }


</style>
