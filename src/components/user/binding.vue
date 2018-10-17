<template>
    <div class="binding">
        <div class="head">
            <span  v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
            <p>修改登录密码</p>
        </div>
        <ul class="center">
            <li><span>你的账号名为 <span>15416542185</span></span></li>
            <li>
                <span>登录密码</span>
                <input type="password"  placeholder="填写当前登录密码" ><br>
            </li>
            <li><span>请重新设置登录密码</span></li>
            <li>
                <span>设置新密码</span>
                <input type="password"  placeholder="6-20位字母、数字组成" ><br>
            </li>
            <li>
                <span>确认新密码</span>
                <input type="password"  placeholder="再次填写密码" ><br>
            </li>
        </ul>
        <div class="complete">完成</div>
    </div>
</template>
<script>
    export default {
        name: "binding",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>
<style lang="less" scoped>
    .binding {
        width: 750px;

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
                width: 750px;
                height: 90px;
                border-bottom: 1px solid #e2e2e2;
                line-height: 86px;
                font-size: 30px;
                color: black;
                padding: 20px 20px ;
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
        .complete{
            width: 710px;
            height: 90px;
            margin: 20px  20px  0px  20px;
            background-color: hotpink;
            text-align: center;
            line-height: 90px;
            font-size: 40px;
            color: white;
        }
    }
</style>