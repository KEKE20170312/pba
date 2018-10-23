<template>
    <div class="cart">
        <div class="header">
            <img @click="back" src="../assets/img/home/back2.jpg" alt="">
            <span>购物车</span>
        </div>
        <!--已登录，但还没挑选任何商品-->
        <div v-show="noCarts" class="noCartOop">
            <img src="../assets/img/cart/no-card-oops.png" alt="">
            <p>您的购物车里还没有商品,请先去挑选心爱的宝贝吧</p>
            <div>去逛逛</div>
        </div>
        <!--已登录，购物车已有商品-->
        <div v-show="showCarts" class="cartOop">
            <p class="demo">商品数量有限，请尽快付款哦</p>


            <!--中间商品-->
            <!--单选-->
            <div class="toiletry" v-for="(item,index) in data.goodsList">
                <img :class="{isSelect:!item.isSelected}" @click="select(item)" class="select" src="../assets/img/cart/select.png" alt="">
                <img :class="{isSelect:item.isSelected}" @click="select(item)" class="noSelect" src="../assets/img/cart/noSelect.png" alt="">
                <img class="picture" :src="item.smallImg" alt="">
                <p class="goodsName">{{item.goodsName}}</p>
                <p class="desc">{{item.desc}}</p>
                <p class="goodsMoney">专享价
                    <span>￥{{item.price}}</span>
                </p>
                <div class="shopCart">
                    <span class="reduce" @click="reduce(item)">
                        <img src="../assets/img/cart/minus-circle.png" alt="">
                    </span>
                    <span class="counts">{{item.productNum}}</span>
                    <span class="add" @click="plus(item)">
                        <img src="../assets/img/cart/plus-circle.png" alt="">
                    </span>
                </div>
                <div class="del">删除</div>
            </div>


            <div class="total">
                <!--全选按钮点击需要显示的状态-->
                <img v-show="isAllCheck" @click="change()" class="select" src="../assets/img/cart/select.png" alt="">
                <!--全选按钮未点击需要显示的状态-->
                <img v-show="noAllCheck" @click="change()" class="noSelect" src="../assets/img/cart/noSelect.png"
                     alt="">
                <span class="allCheckText">全选</span>
                <span class="totalText">合计</span>
                <span class="totalMoney">￥520</span>
                <div class="calculate">
                    <span class="calculate-text">去结算</span>
                    <span class="calculate-count">(2)</span>
                </div>
            </div>
        <div class="total">
        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Cart",
        components: {},
        data() {
            return {
                // isSelect: true,
                // noSelect: false,
                isAllCheck: true,
                noAllCheck: false,
                // allSelect: true,
                // isShow: true,
                // count:1,
                data: [],
                // isChecked: [],
                noCarts: true,
                showCarts: false,
                goodsList:[]
            }
        },
        methods: {
            back() {
                this.$router.go(-1)
            },
            select(item) {
                item.isSelected = !item.isSelected;
                var tempBol = true;
                for(var i = 0; i < this.goodsList.length; i++){
                    if(!this.goodsList[i].isSelected){
                        tempBol = false;
                        break;
                    }
                }
                this.isAllCheck = tempBol;
            },

            change() {
                this.isAllCheck = !this.isAllCheck;
                this.noAllCheck = !this.noAllCheck;
            },
            //数量加一
            plus(item) {
                if(item.productNum >= 0){
                    item.productNum++;
                }

            },
            // ...mapMutations(["reduce"]),
            // 数量减一
            reduce(item) {
                //    减少所点这条的数量
                if(item.productNum <= 1){
                    return;
                }
                item.productNum--;
            },
        },
        created() {
            var userId = this.$store.state.userInfo._id;
            // console.log(userId);
            axios.get("/api/cart/userId").then((data) => {
                // console.log(this.$store.state.userInfo._id);
                // console.log(data.data.result);
                let res = data.data;
                console.log(res);
                var goods = res.result[0];
                console.log(goods);
                if (res.status === "0") {
                    this.data = goods;
                    this.noCarts = false;
                    this.showCarts = true;
                } else {
                    this.noCarts = true;
                    this.showCarts = false;
                }
            })


        },
        computed: {
            // ...mapGetters(["selectGoods"])
        },
        watch: {
            // isChecked: {
            //     handler(isSelect) {
            //         if (this.isSelect == true) {
            //             this.isChecked.push(isSelect)
            //             console.log(isChecked);
            //         } else {
            //         }
            //     },
            //     deep: true
            // }
        }
    }
</script>

<style lang="less" scoped>
    .cart {
        width: 750px;
        height: 1334px;
        background-color: #F2F2F2;
        .header {
            width: 750px;
            height: 90px;
            border-bottom: 2px #E2E2E2 solid;
            background-color: #FAFAFA;
            img {
                width: 86px;
                height: 34px;
                margin: 30px;
                vertical-align: middle;
            }
            span {
                font-size: 36px;
                color: #535353;
                margin-left: 200px;
            }
        }
        .noCartOop {
            display: none;
            width: 750px;
            height: 800px;
            padding-top: 380px;
            background-color: #fff;
            text-align: center;
            img {
                width: 172px;
                height: 162px;
                display: block;
                margin: 0px auto 0 auto;
            }
            p {
                font-size: 26px;
                margin-top: 30px;
            }
            div {
                width: 230px;
                height: 62px;
                background-color: #ff498c;
                color: #fff;
                border-radius: 50px;
                margin: 60px auto;
                line-height: 62px;
            }
        }
        .cartOop {
            padding-bottom: 240px;
            background-color: #F2F2F2;
            .demo {
                width: 750px;
                height: 60px;
                padding-left: 30px;
                line-height: 60px;
                background-color: #fff;
                color: #999;
                margin-bottom: 20px;
            }

            .total {
                width: 750px;
                height: 100px;
                box-sizing: border-box;
                border: 2px #fff solid;
                background-color: #fff;
                line-height: 100px;
                position: fixed;
                left: 0;
                bottom: 98px;
                img {
                    width: 40px;
                    height: 40px;
                    margin-left: 10px;
                    vertical-align: middle;
                }
                .allCheckText {
                    font-size: 28px;
                    margin-left: 20px;
                }
                .totalText {
                    color: #999;
                    margin-left: 20px;
                }
                .totalMoney {
                    color: #ff498c;
                    font-size: 28px;
                    margin-left: 10px;
                }
                .calculate {
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
            .toiletry {
                .isSelect{
                    display: none;
                }
                .select, .noSelect{
                    width: 40px;
                    height: 40px;
                    margin-left: 10px;
                    position: absolute;
                    left: 10px;
                    top: 120px;
                }
                width: 750px;
                height: 280px;
                background-color: #fff;
                border-top: 2px #E1E1E1 solid;
                position: relative;
                .picture {
                    width: 210px;
                    height: 210px;
                    position: absolute;
                    left: 80px;
                    top: 30px;
                }
                .goodsName {
                    position: absolute;
                    left: 300px;
                    top: 30px;
                }
                .desc {
                    color: #999;
                    position: absolute;
                    left: 300px;
                    top: 70px;
                }
                .goodsMoney {
                    position: absolute;
                    left: 300px;
                    top: 110px;
                    span {
                        color: #ff498c;
                        font-size: 28px;
                    }
                }
                .shopCart {
                    font-size: 38px;
                    position: absolute;
                    right: 120px;
                    top: 170px;
                    span {
                        font-size: 30px;
                        img {
                            width: 40px;
                            height: 40px;
                            vertical-align: middle;
                        }
                    }
                    .counts {
                        margin: 0 10px
                    }

                }
                .del{
                    color: #888;
                    position: absolute;
                    right: 30px;
                    top: 186px;
                }
            }
        }
    }
</style>