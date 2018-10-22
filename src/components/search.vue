<template>
    <div class="search">
        <div class="head">
            <div class="search_k">
                <input type="text" class="search_val" placeholder="搜索商品" v-model="searchgoods">
                <router-link :to="'/category/findGoods/' + this.searchgoods" class="search_a">
                    <img src="../assets/img/search-input.png" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "Search",
        data(){
            return{
                searchgoods:""
            }
        },
        methods:{

        }

    }
</script>
<style lang="less" scoped>
    .head{
        width: 750px;
        height: 120px;
        background-color: #f1f1f1;
        box-sizing: border-box;
        padding: 22px;
        border-bottom: 2px #E2E2E2 solid;
        .search_k{
            width: 662px;
            height: 76px;
            padding: 0 22px;
            background-color: #fff;
            .search_val{
                width: 592px;
                height: 42px;
                padding: 16px 12px;
                outline: none;
                border: 0px;
                font-size: 32px;
            }
            .search_a{
                width: 40px;
                height: 46px;
                padding-top: 18px;
                display: inline-block;
                float: right;
                img{
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
</style>