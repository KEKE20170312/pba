<template>
    <div class="center">
        <div class="head">
            <span v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
            <p>售后服务中心</p>
        </div>
        <ul class="service">
            <li>
               <span class="service-my">我的售后记录</span>
                <span class="serve-img">0条
                </span>
            </li>
            <li>
                <span class="service-my">我的换货记录</span>
                <span class="serve-img">0条
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "center",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>

<style lang="less" scoped>
    .center {
        width: 750px;
        .head {
            width: 750px;
            height: 90px;
            border-bottom: 1px solid #f1f1f1;
            text-align: center;
            line-height: 90px;
            font-size: 30px;
            position: relative;
            background-color:pink;
            p {
                color: #535353;
            }
            span {
                display: inline-block;
                width: 90px;
                height: 62px;
                position: absolute;
                left: 0;
                top: 0;
                img {
                    padding-left: 30px;
                    margin-top: 22px;
                    width: 44px;
                    height: 34px;
                }
            }
        }
        .service{
            li{
                width: 690px;
                overflow: hidden;
                padding: 30px;
                border-bottom: 1px solid #e2e2e2;
                border-top: 1px solid #e2e2e2 ;
                margin-top: 20px;

            }
            .service-my{
                font-size: 30px;
            }
            .serve-img{
                float: right;
                font-size: 30px;

            }
        }
    }
</style>