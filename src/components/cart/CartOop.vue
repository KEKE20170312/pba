<template>
    <div class="cartOop">
        <p class="demo">商品数量有限，请尽快付款哦</p>
        <Toiletry/>
        <div v-for="(item,index) in data" class="total">
            <!--全选按钮点击需要显示的状态-->
            <img class="select" src="../../assets/img/cart/select.png" alt="">
            <!--全选按钮未点击需要显示的状态-->
            <!--<img class="noSelect" src="../../assets/img/cart/noSelect.png" alt="">-->
            <span class="allCheckText">全选</span>
            <span class="totalText">合计</span>
            <span class="totalMoney">￥520</span>
            <div class="calculate">
                <span class="calculate-text">去结算</span>
                <span class="calculate-count">(2)</span>
            </div>
        </div>
    </div>
</template>
<script>
    import Toiletry from "./toiletry";
    import axios from "axios";
    export default {
        name: "CartOop",
        components: {
            Toiletry
        },
        data(){
            return {
                data:[]
            }
        },
        created(){
            console.log(this.$route.params.type);
            var types = this.$route.params.type;

            axios.get("/api/type?type=" + types).then((data)=>{
                console.log(data.data);
                this.data = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .cartOop{
        padding-bottom: 240px;
        background-color: #F2F2F2;
        .demo{
            width: 750px;
            height: 60px;
            padding-left: 30px;
            line-height: 60px;
            background-color: #fff;
            color: #999;
            margin-bottom: 20px;
        }

        .total{
            width: 750px;
            height: 100px;
            box-sizing: border-box;
            border: 2px #fff solid;
            background-color: #fff;
            line-height: 100px;
            position: fixed;
            left: 0;
            bottom: 98px;
            img{
                width: 40px;
                height: 40px;
                margin-left: 10px;
                vertical-align: middle;
            }
            .allCheckText{
                font-size: 28px;
                margin-left: 20px;
            }
            .totalText{
                color: #999;
                margin-left: 20px;
            }
            .totalMoney{
                color: #ff498c;
                font-size: 28px;
                margin-left: 10px;
            }
            .calculate{
                display: inline-block;
                width: 250px;
                height: 72px;
                background-color: #ff498c;
                color: #fff;
                line-height: 72px;
                text-align: center;
                font-size: 28px;
                border-radius: 70px;
                float: right;
                margin-right: 26px;
                margin-top: 14px;
            }
        }
    }
</style>