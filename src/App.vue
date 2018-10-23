<template>
    <div id="app">
        <div class="nav">
            <div class="nav">
                <router-link @click.native="selectMapNav(item.text)" :to="item.path" v-for="item in nav">
                    <div class="nav-list" >
                        <img :src="isSelect === item.text ? item.activeIcon : item.navIcon" alt="">
                        <span>{{item.text}}</span>
                    </div>
                </router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                isSelect:"首页",
                nav:[
                    {
                        "path":"/home",
                        "text":"首页",
                        "navIcon":require("./assets/img/nav/icon_home.png"),
                        "activeIcon":require("./assets/img/nav/icon_home_active.png"),
                        "nowImg":"true"
                    },
                    {
                        "path":"/category",
                        "text":"分类",
                        "navIcon":require("./assets/img/nav/icon_category.png"),
                        "activeIcon":require("./assets/img/nav/icon_category_active.png"),
                        "nowImg":"false"
                    },
                    {
                        "path":"/cart",
                        "text":"购物车",
                        "navIcon":require("./assets/img/nav/icon_cart.png"),
                        "activeIcon":require("./assets/img/nav/icon_cart_active.png"),
                        "nowImg":"false"
                    },
                    {
                        "path":"/user",
                        "text":"我的",
                        "navIcon":require("./assets/img/nav/icon_my.png"),
                        "activeIcon":require("./assets/img/nav/icon_my_active.png"),
                        "nowImg":"false"
                    }
                ]
            }
        },
        methods:{
            selectMapNav (text) {
                // this.isSelect = text;
                this.$set(this,"isSelect",text);
            }
        }
    }
</script>
<style lang="less">
    #app{
        width: 750px;
        margin: 0 auto;
        height: 100vh;
        background-color: #fff;
        overflow: scroll;
        /*position: absolute;*/
        /*left: calc(50vw - 375px);*/
        /*top: 0px;*/
    }
    ::-webkit-scrollbar{
        display: none;
    }
    *{
        margin: 0;
        padding: 0;
    }
    .nav{
        width: 750px;
        height: 98px;
        padding: 4px 0;
        background-color: #fff;
        box-sizing: border-box;
        list-style: none;
        position: fixed;
        left: calc(50vw - 375px);
        bottom: 0;
        z-index: 2;
        display: flex;
        justify-content: center;
        border-top: 1px solid #e2e2e2;
        .nav-list{
            width: 187.5px;
            text-align: center;
            img{
                width: 60px;
            }
            span{
                display: block;
                font-size: 12px;
                text-decoration: none;
                margin-top: -12px;
                color: #535353;
                &.router-link-active{
                    color:red;
                }
            }
        }
    }
</style>
