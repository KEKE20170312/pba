<template>
    <div class="opinion">
        <div class="head">
            <span  v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
            <p>意见反馈</p>
        </div>
        <ul class="center">
            <li><span>反馈内容（必填）</span></li>
            <li>
                <input type="text"  placeholder="乐意聆听您对PBA触屏版的意见或建议" ><br>
            </li>
            <li><span>联系方式（选填）</span></li>
            <li>
                <input type="text"  placeholder="手机号或邮箱（选填）" ><br>
            </li>
        </ul>
        <div class="submit"><span>提交</span></div>
    </div>
</template>
<script>
    export default {
        name: "opinion",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>
<style lang="less" scoped>
    .opinion {
        width: 750px;
        height: 100vh;
        background-color: #fff;
        .head {
            width: 750px;
            height: 90px;
            border-bottom: 1px solid #f1f1f1;
            text-align: center;
            line-height: 90px;
            font-size: 30px;
            position: relative;
            background-color: pink;
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
        .center{
            li{
                width: 710px;
                height: 100px;
                border-bottom: 1px solid #e2e2e2;
                padding: 0 20px;
                line-height: 86px;
                font-size: 30px;
                color: black;
                input{
                    outline:none;
                    width: 710px;
                    height: 84px;
                    vertical-align: top;
                    border: none;
                    font-size: 28px;
                    line-height: 84px;
                }
            }
        }
        .submit{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 750px;
            height: 100px;
            border: 1px solid  #e2e2e2;
            line-height: 100px;
            font-size: 40px;
            color: hotpink;
            text-align: center;
        }
    }
</style>