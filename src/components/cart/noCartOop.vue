<template>
    <div class="noCartOop">
        <img src="../../assets/img/cart/no-card-oops.png" alt="">
        <p>您的购物车里还没有商品,请先去挑选心爱的宝贝吧</p>
        <div>去逛逛</div>
    </div>
</template>

<script>
    export default {
        name: "noCartOop"
    }
</script>

<style lang="less" scoped>
    .noCartOop{
        width: 750px;
        height: 800px;
        padding-top: 380px;
        background-color: #fff;
        text-align: center;
        img{
            width: 172px;
            height: 162px;
            display: block;
            margin: 0px auto 0 auto;
        }
        p{
            font-size: 26px;
            margin-top: 30px;
        }
        div{
            width: 230px;
            height: 62px;
            background-color: #ff498c;
            color: #fff;
            border-radius: 50px;
            margin: 60px auto;
            line-height: 62px;
        }
    }
</style>