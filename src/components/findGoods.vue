<template>
    <div class="find">
        <Search/>
        <SearchList/>
        <div @click="change" class="menu">
            <img src="../assets/img/category/menu-icon.png" alt="">
        </div>
    </div>
</template>

<script>
    import Search from "./search";
    import SearchList from "../common/searchList";
    import axios from "axios"
    export default {
        name: "findGoods",
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
        },
        created(){
            var goodsName = this.$route.params.goodsName;
            axios.get("/api/goodsName?goodsName=" + goodsName).then((data)=>{
                this.data = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .find{
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