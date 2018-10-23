<template>
    <div class="category">
        <Search/>
        <MyNav/>
        <div class="column">
            <h1>
                <img src="../assets/img/category/caption-all.jpg" alt="">
            </h1>
            <div class="products">
                <router-link :to="'/category/'+'彩妆'">
                    <img src="../assets/img/category/makeup.jpg" alt="">
                </router-link>
                <router-link :to="'/category/' + '护肤'">
                    <img src="../assets/img/category/skin.jpg" alt="">
                </router-link>
                <router-link :to="'/category/' + '面膜'">
                    <img src="../assets/img/category/mask.jpg" alt="">
                </router-link>
                <router-link :to="'/category/' + '香水洗护'">
                    <img src="../assets/img/category/perfume.jpg" alt="">
                </router-link>
                <router-link :to="'/category/' + '工具仪器'">
                    <img src="../assets/img/category/tools.jpg" alt="">
                </router-link>
                <router-link :to="'/category/' + '休闲食品'">
                    <img src="../assets/img/category/foods.jpg" alt="">
                </router-link>
            </div>
            <h1>
                <img src="../assets/img/category/caption-category.jpg" alt="">
            </h1>
            <div class="pinlei">
                <router-link :to="'/category/find/' + '洁面'">
                    洁面
                </router-link>
                <router-link :to="'/category/find/' + 'BB霜'">
                    BB霜
                </router-link>
                <router-link :to="'/category/find/' + '底妆'">
                    底妆
                </router-link>
                <router-link :to="'/category/find/' + '隔离'">
                    隔离
                </router-link>
                <router-link :to="'/category/find/' + '面霜'">
                    面霜
                </router-link>
                <router-link :to="'/category/find/' + '乳液'">
                    乳液
                </router-link>
                <router-link :to="'/category/find/' + '面膜'">
                    面膜
                </router-link>
                <router-link :to="'/category/find/' + '香水'">
                    香水
                </router-link>
                <router-link :to="'/category/find/' + '精华水'">
                    精华水
                </router-link>
                <router-link :to="'/category/find/' + '眼妆'">
                    眼妆
                </router-link>
                <router-link :to="'/category/find/' + '唇妆'">
                    唇妆
                </router-link>
                <router-link :to="'/category/find/' + '卸妆'">
                    卸妆
                </router-link>
                <router-link :to="'/category/find/' + '粉饼'">
                    粉饼
                </router-link>
            </div>
            <h1>
                <img src="../assets/img/category/caption-effect.jpg" alt="">
            </h1>
            <div class="pinlei">
                <router-link :to="'/category/find/' + '补水'">
                    补水
                </router-link>
                <router-link :to="'/category/find/' + '保湿'">
                    保湿
                </router-link>
                <router-link :to="'/category/find/' + '祛痘'">
                    祛痘
                </router-link>
                <router-link :to="'/category/find/' + '美白'">
                    美白
                </router-link>
                <router-link :to="'/category/find/' + '控油'">
                    控油
                </router-link>
                <router-link :to="'/category/find/' + '遮瑕'">
                    遮瑕
                </router-link>
                <router-link :to="'/category/find/' + '去黑眼圈'">
                    去黑眼圈
                </router-link>
                <router-link :to="'/category/find/' + '淡斑'">
                    淡斑
                </router-link>
                <router-link :to="'/category/find/' + '去黑头'">
                    去黑头
                </router-link>
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
