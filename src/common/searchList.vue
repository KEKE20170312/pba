<template>
    <div class="classify-column">
        <ul>
            <li v-for="(item,index) in data" data-id="">
                <div class="goods-box" tag="div">
                    <router-link @click.native="change(item._id)" :to="'/sp/'+item._id"><img :src="item.smallImg" alt=""/></router-link>
                </div>
                <div class="text">
                    <p class="goods-name">{{item.goodsName}}</p>
                    <p class="goods-tag">{{item.desc}}</p>
                    <p class="goods-price"><span>专享价：</span><span class="price">￥{{item.price}}</span></p>
                    <a class="joinCart" href="#">
                        <img src="../assets/img/home/shopcart-light.png" alt="购物车">
                    </a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import Sp from "../components/sp"
    import axios from "axios"
    export default {
        name: "searchList",
        components:{
            Sp
        },
        data(){
            return {
                data:[]
            }
        },
        watch:{
            $route(){
                var types = this.$route.params.type;
                axios.get("/api/type?type=" + types).then((data)=>{
                    console.log(data.data);
                    this.data = data.data;
                })
            }
        },
        created(){
            var types = this.$route.params.type;
            axios.get("/api/type?type=" + types).then((data)=>{
                console.log(data.data);
                this.data = data.data;
            })
        }
    }
</script>
<style lang="less" scoped>
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