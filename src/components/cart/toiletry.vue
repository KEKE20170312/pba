<template>

</template>

<script>
    // import {mapGetters,mapMutations} from 'vuex'
    export default {
        name: "toiletry",
        data(){
            return {
                count:0
            }
        },
        methods:{
            // ...mapMutations(["reduce"]),
        },
        computed:{
            // ...mapGetters(["selectGoods"])
        }
    }
</script>

<style lang="less" scoped>
    .toiletry{
        .select,.noSelect{
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
        .picture{
            width: 210px;
            height: 210px;
            position: absolute;
            left: 80px;
            top: 30px;
        }
        .goodsName{
            position: absolute;
            left: 300px;
            top: 30px;
        }
        .desc{
            color: #999;
            position: absolute;
            left: 300px;
            top: 70px;
        }
        .goodsMoney{
            position: absolute;
            left: 300px;
            top: 110px;
            span{
                color: #ff498c;
                font-size: 28px;
            }
        }
        .shopCart{
            font-size: 38px;
            position: absolute;
            right: 40px;
            top: 170px;
            span{
                font-size: 30px;
                img{
                    width: 40px;
                    height: 40px;
                    vertical-align: middle;
                }
            }
            .counts{
                margin: 0 10px
            }
        }
        .isclick{
            .reduce{
                display: block;
            }
            em{
                display: block;
            }
        }
    }
</style>