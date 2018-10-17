<template>
    <div class="cart">
        <div class="header">
            <img @click="back" src="../assets/img/home/back2.jpg" alt="">
            <span>购物车</span>
        </div>
        <CartOop/>
        <!--<NoCartOop/>-->
        <div class="total">
            
        </div>
        <MyNav/>
    </div>
</template>

<script>
    import MyNav from "../common/myNav";
    import NoCartOop from "../components/cart/noCartOop"
    import CartOop from "../components/cart/CartOop"
    export default {
        name: "Cart",
        components:{
            CartOop,
            NoCartOop,
            MyNav,
        },
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="less" scoped>
    .cart{
        width: 750px;
        height: 1334px;
        background-color: #F2F2F2;
        .header{
            width: 750px;
            height: 90px;
            border-bottom: 2px #E2E2E2 solid;
            background-color: #FAFAFA;
            img{
                width: 86px;
                height: 34px;
                margin: 30px;
                vertical-align: middle;
            }
            span{
                font-size: 36px;
                color: #535353;
                margin-left: 200px;
            }


        }
    }
</style>