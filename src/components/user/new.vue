<template>
    <div class="new">
        <div class="head">
            <span  v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
            <p>新增地址</p>
        </div>
        <ul class="center">
            <li>
              <span>收货人</span>
                <input type="text"  placeholder="请输入收货人的姓名" ><br>
            </li>
            <li>
                <span>手机号码</span>
                <input type="text"  placeholder="请输入收货人的手机号码" ><br>
            </li>
            <li>
                <span>省市区</span>
                <input type="text"  placeholder="请输入收货人的地址" ><br>
            </li>
            <li>
                <span>详细地址</span>
                <input type="text"  placeholder="请输入收货人的详细地址" ><br>
            </li>
        </ul>
        <div class="save">
            <span>保存地址</span>
        </div>
    </div>
</template>
<script>
    export default {
        name: "new",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>
<style lang="less" scoped>
    .new {
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
        .center{
            li{
                width: 750px;
                height: 90px;
                border-bottom: 1px solid #e2e2e2;
                margin: 0 20px;
                line-height: 86px;
                font-size: 30px;
                color: gray;
                input{
                    outline:none;
                    width: 548px;
                    height: 84px;
                    vertical-align: top;
                    border: none;
                    font-size: 28px;
                    line-height: 84px;
                    margin-left: 50px;
                }
            }
        }
        .save{
            width: 750px;
            margin: 68px 0  30px  0;
            span{
                display: inline-block;
                width: 456px;
                height: 66px;
                background: hotpink;
                color: white;
                line-height: 66px;
                text-align: center;
                margin-left: 150px;
                border-radius: 30px;
            }
        }
    }
</style>