<template>
    <div class="nav">
        <div class="nav">
            <router-link to="/home" tag="div">
                <div class="nav-list">
                    <img src="../assets/img/nav/icon_home.png" alt="">
                    <span>首页</span>
                </div>
            </router-link>
            <router-link to="/category" tag="div">
                <div class="nav-list">
                    <img src="../assets/img/nav/icon_category.png" alt="">
                    <span>分类</span>
                </div>
            </router-link>
            <router-link to="/cart" tag="div">
                <div class="nav-list">
                    <img src="../assets/img/nav/icon_cart.png" alt="">
                    <span>购物车</span>
                </div>
            </router-link>
            <router-link to="/user" tag="div">
                <div class="nav-list">
                    <img src="../assets/img/nav/icon_my.png" alt="">
                    <span>我的</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "myNav"
    }
</script>

<style lang="less">
    *{
        margin: 0;
        padding: 0;
    }
    .nav{
        width: 750px;
        height: 98px;
        padding: 4px 0;
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

    /*.active{*/
    /*color:#ff488c*/
    /*}*/
</style>