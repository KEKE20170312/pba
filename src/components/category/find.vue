<template>
    <div class="find">
        <Search/>
        <SearchList/>
        <div @click="change" class="menu">
            <img src="../../assets/img/category/menu-icon.png" alt="">
        </div>
        <ul v-show="liter" class="litterNav">
            <router-link to="/home" tag="li">
                <img src="../../assets/img/category/sy.png" alt="">
                <span>首页</span>
            </router-link>
            <hr/>
            <router-link to="/cart" tag="li">
                <img src="../../assets/img/category/gwc.png" alt="">
                <span>购物车</span>
            </router-link>
            <hr/>
            <router-link to="/user" tag="li">
                <img src="../../assets/img/category/wd.png" alt="">
                <span>我的</span>
            </router-link>
            <hr/>
            <router-link to="/category" tag="li">
                <img src="../../assets/img/category/sp.png" alt="">
                <span>所有商品</span>
            </router-link>
        </ul>

    </div>
</template>

<script>
    import Search from "../search";
    import SearchList from "../../common/searchList";
    export default {
        name: "find",
        data(){
            return{
                liter:false
            }
        },
        components: {SearchList, Search},
        methods:{
            change(liter){
                this.liter = !this.liter;
            }
        }
    }
</script>

<style lang="less" scoped>
    .find{
        position: absolute;
        z-index: 30;
        min-height: 100vh;
        background-color: #fff;
        .menu{
            img{
                width: 80px;
                height: 80px;
                position: fixed;
                left: 20px;
                bottom: 30px;
            }
        }
        .litterNav{
            /*display: none;*/
            width: 216px;
            height: 280px;
            box-sizing: border-box;
            border: 2px #f1f1f1 solid;
            position: fixed;
            left: 20px;
            bottom: 150px;
            background-color: #fff;
            border-radius: 6px;
            hr{
                border-top: 0px;
                border-bottom: 2px #f1f1f1 solid;
            }
            li{
                width: 216px;
                height: 68px;
                padding: 0 0 0 20px;
                border: 0px;
                line-height: 68px;
                img{
                    width: 52px;
                    height: 52px;
                    vertical-align: middle;
                }
                span{
                    font-size: 24px;
                    margin-left: 10px;
                }
            }
        }
    }
</style>