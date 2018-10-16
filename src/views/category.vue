<template>
    <div class="category">
        <Search/>
        this is 分类
        <MyNav/>
        <div class="column">
            <h1>
                <img src="../assets/img/category/caption-all.jpg" alt="">
            </h1>
            <div class="products">
                <router-link to="/category/makeup">
                        <img src="../assets/img/category/makeup.jpg" alt="">
                </router-link>
                <router-link to="/category/skin">
                        <img src="../assets/img/category/skin.jpg" alt="">
                </router-link>
                <router-link to="/category/mask">
                        <img src="../assets/img/category/mask.jpg" alt="">
                </router-link>
                <router-link to="/category/perfime">
                        <img src="../assets/img/category/perfume.jpg" alt="">
                </router-link>
                <router-link to="/category/tools">
                        <img src="../assets/img/category/tools.jpg" alt="">
                </router-link>
                <router-link to="/category/foods">
                        <img src="../assets/img/category/foods.jpg" alt="">
                </router-link>
            </div>
            <h1>
                <img src="../assets/img/category/caption-category.jpg" alt="">
            </h1>
            <div class="pinlei">
                <a href="">
                    洁面
                </a>

                <a href="">
                    BB霜
                </a>
                <a href="">
                    底妆
                </a>
                <a href="">
                    隔离
                </a>
                <a href="">
                    面霜
                </a>
                <a href="">
                    乳液
                </a>
                <a href="">
                    面膜
                </a>
                <a href="">
                    香水
                </a>
                <a href="">
                    精华水
                </a>
                <a href="">
                    眼妆
                </a>
                <a href="">
                    唇妆
                </a>
                <a href="">
                    卸妆
                </a>
                <a href="">
                    粉饼
                </a>
            </div>
            <h1>
                <img src="../assets/img/category/caption-effect.jpg" alt="">
            </h1>
            <div class="pinlei">
                <a href="">
                    补水
                </a>

                <a href="">
                    保湿
                </a>
                <a href="">
                    祛痘
                </a>
                <a href="">
                    美白
                </a>
                <a href="">
                    控油
                </a>
                <a href="">
                    遮瑕
                </a>
                <a href="">
                    去黑眼圈
                </a>
                <a href="">
                    淡斑
                </a>
                <a href="">
                    去黑头
                </a>
            </div>

        </div>

        <MyNav/>
        <router-view></router-view>
    </div>
</template>

<script>
    import Search from "../components/search"
    import MyNav from "../common/myNav"
    export default {
        name: "Category",
        components:{
            Search,
            MyNav
        }
    }
</script>

<style lang="less" scoped>
    .category{
        width: 750px;
        height: 2400px;
        background-color: #F2F2F2;
        .column{
            width: 750px;
            /*height: 2300px;*/
            background-color: #ffffff;
            h1{
                width: 705px;
                height: 100px;
                padding: 22px;
                img{
                    width: 705px;
                    height: 100px;
                }
            }
            .products{
                width: 750px;
                /*height: 350px;*/
                margin-top: 16px;
                a{
                    width: 338px;
                    height: 222px;
                    display: inline-block;
                    box-shadow: 0px 6px 16px 2px #e2e2e2;
                    margin-left: 23px;
                    margin-bottom: 30px;
                    img{
                        width: 100%;
                        height: 216px;
                    }
                }
            }
            .pinlei{
                width: 705px;
                word-break: break-all;
                padding: 10px 22px;
                a{
                    width: 198px;
                    height: 40px;
                    display: inline-block;
                    /*box-sizing: border-box;*/
                    border: 2px #E5E5E5 solid;
                    border-radius: 54px;
                    padding: 14px 0;
                    margin: 0 0 24px 22px;
                    text-decoration: none;
                    color: #535353;
                    font-size: 28px;
                    text-align: center;
                }
            }
        }
    }
</style>
