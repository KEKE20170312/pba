<template>
    <div class="toiletry">
        <img class="picture" src="../../assets/img/home/product_1.jpg" alt="">
        <p class="goodsName">BB霜</p>
        <p class="desc">自然清香，健康安全</p>
        <p class="goodsMoney">专享价
            <span>￥49.90</span>
        </p>
        <div class="shopCart">
            <span>
                <img src="../../assets/img/cart/minus-circle.png" alt="">
            </span>
            <span class="counts">1782354</span>
            <span>
                <img src="../../assets/img/cart/plus-circle.png" alt="">
            </span>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "toiletry"
    }
</script>

<style lang="less" scoped>
    .toiletry{
        width: 750px;
        height: 280px;
        background-color: #fff;
        border-top: 2px #E1E1E1 solid;
        position: relative;
        .picture{
            width: 210px;
            height: 210px;
            position: absolute;
            left: 10px;
            top: 30px;
        }
        .goodsName{
            position: absolute;
            left: 240px;
            top: 30px;
        }
        .desc{
            color: #999;
            position: absolute;
            left: 240px;
            top: 70px;
        }
        .goodsMoney{
            position: absolute;
            left: 240px;
            top: 110px;
            span{
                color: #ff498c;
                font-size: 28px;
            }
        }
        .shopCart{
            font-size: 38px;
            position: absolute;
            right: 40px;
            top: 170px;
            span{
                img{
                    width: 40px;
                    height: 40px;
                    vertical-align: middle;
                }
            }
            .counts{
                margin: 0 10px
            }
        }
    }
</style>