<template>
    <div class="register">
        <div class="head">
            <span v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
            <p>注册</p>
        </div>
        <div class="count">
            <p class="count-p">
                这是一个神秘的花园，里面有无尽的财富和宝藏等着你去发现，现在就注册账号开启你的美丽探索之旅吧！
            </p>
            <form class="count-form">
                <ul class="cf">
                    <li class="cf-phone">
                        <img src="../../assets/img/user/mobile_icon.png" alt="">
                        <input type="number" @blur="disappear" v-model="newPhone" placeholder="输入手机号"
                               oninput="if(value.length>11)value=value.slice(0,11)">
                    </li>
                    <li class="cf-ph">
                        <img src="../../assets/img/user/email_icon.png" alt="">
                        <input type="text" placeholder="输入验证码" @blur="confirmTheCode" v-model="inputInfo">
                        <span class="code-style" @click="createCode">{{verificationCode}}</span>
                    </li>
                    <li class="cf-pw">
                        <img src="../../assets/img/user/lock_icon.png" alt="">
                        <input type="password" @blur="disappear" v-model="password" placeholder="输入密码">
                    </li>
                    <li class="cf-pw">
                        <img src="../../assets/img/user/lock_icon.png" alt="">
                        <input type="password" @blur="disappear" v-model="repeat" placeholder="再次确认密码">
                    </li>
                    <li class="cf-referees">
                        <img src="../../assets/img/user/recom_icon.png" alt="">
                        <input type="text" v-model="referees" placeholder="输入推荐人（非必填）">
                    </li>
                </ul>
            </form>
            <div class="register-zc" @click="submit">注册</div>
            <div class="confirm-botton" v-show="judge">{{Right_wrong}}</div>
            <div class="agreement">
                <input type="checkbox" checked="checked">
                <router-link to="/user/agreement" class="agreement-to">
                    同意用户协议
                </router-link>
            </div>
        </div>
        <div class="mongolia" v-show="delete_mongolia">
            <div>
                <p>恭喜您注册成功</p>
                <p>请返回登录</p>
                <img src="../../assets/img/user/quxiao.png" alt="" class="delete" @click="cancel">
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"

    export default {
        name: "register",
        data() {
            return {
                verificationCode: "",
                inputInfo: '',
                newPhone: '',
                password: '',
                repeat: '',
                referees: '',
                correct: false,
                Right_wrong: "输入正确",
                delete_mongolia: false,
                //   检测注册
                judge: false,
            }
        },
        methods: {
            back() {
                this.$router.go(-1);//返回上一层
            },
            // 点击注册
            submit() {
                var newPhone = this.newPhone;
                var password = this.password;
                var referees = this.referees;
                var repeat = this.repeat;
                var inputInfo = this.inputInfo;
                //   检测注册
                var judge = judge;

                //判断电话
                if (newPhone == "" || !newPhone) {
                    this.judge = true;
                    this.Right_wrong = "请输入电话号码"
                } else if (!(/^1[3456789]\d{9}$/.test(newPhone))) {
                    this.judge = true;
                    this.Right_wrong = "电话号码格式错误,请重新输入"
                }//判断验证码
                else if (inputInfo == "") {
                    this.judge = true;
                    this.Right_wrong = "请输入验证码";
                }
                //判断密码
                else if (password == "" || !password) {
                    this.judge = true;
                    this.Right_wrong = "请输入密码";
                } else if (password != repeat) {
                    this.judge = true;
                    this.Right_wrong = "两次输入密码不一致，请重新输入";
                } else {
                    this.delete_mongolia = true;
                    axios.post("/api/user/register", {
                        mobile: newPhone,
                        pwd: password,
                    }).then((data) => {
                    })
                }
            },
            createCode() {
                //通过随机数生成验证码
                this.verificationCode = '';
                var code = '';
                var codeLength = 4;     //验证码长度
                var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                for (var i = 0; i < codeLength; i++) {
                    var index = Math.floor(Math.random() * 36);
                    code += random[index];
                }
                this.verificationCode = code
            },
            confirmTheCode() {      //验证函数
                var customerCode = this.inputInfo.toUpperCase();   //把你输入的小写转化为大写
                if (customerCode === "0") {
                    this.createCode();
                    this.inputInfo = ''
                    alert('请输入验证码')
                } else if (customerCode !== this.verificationCode) {
                    this.createCode();
                    this.inputInfo = ''
                } else {
                }
            },
            cancel() {
                this.delete_mongolia = false;
            },
            disappear() {
                this.judge = false;
            }
        },
        mounted() {
            this.createCode()
        }
    }
</script>
<style lang="less" scoped>
    .register {
        width: 750px;
        height: 100vh;
        background-color: #fff;
        position: relative;
        .confirm-botton {
            width: 510px;
            height: 100px;
            text-align: center;
            line-height: 100px;
            background-color: red;
            border-radius: 20px;
            font-size: 30px;
            color: white;
            cursor: pointer;
            margin: 20px 120px;
        }
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
        .count {
            width: 750px;
            .count-p {
                color: #555555;
                margin: 10px 18px;
                font-size: 28px;
            }
            .count-form {
                width: 750px;
                .cf {
                    width: 710px;
                    background-color: #f1f1f1;
                    margin-left: 20px;
                    li {
                        width: 676px;
                        height: 84px;
                        border-bottom: 1px solid #e2e2e2;
                        list-style: none;

                    }
                    .cf-phone {
                        img {
                            width: 40px;
                            height: 50px;
                        }
                    }
                    input {
                        outline: none;
                        width: 608px;
                        height: 84px;
                        vertical-align: top;
                        border: none;
                        background-color: #f1f1f1;
                        font-size: 32px;
                        line-height: 84px;
                        margin-left: 10px;
                    }
                    img {
                        width: 48px;
                        height: 58px;
                        margin-top: 18px;
                        margin-left: 10px;
                    }
                    .cf-pw {
                        position: relative;
                        img {
                            width: 48px;
                            height: 48px;
                        }
                        span {
                            display: inline-block;
                            position: absolute;
                            right: 0px;
                            top: 20px;
                            width: 200px;
                            text-align: center;
                            line-height: 64px;
                            background: white;
                            /*letter-spacing:20px;*/
                            color: crimson;
                        }
                    }
                    .cf-referees {
                        img {
                            width: 48px;
                            height: 56px;
                        }
                    }
                    .cf-ph {
                        position: relative;
                        img {
                            width: 46px;
                            height: 40px;
                        }
                        .code-style {
                            display: inline-block;
                            width: 120px;
                            height: 64px;
                            font-size: 35px;
                            color: red;
                            line-height: 64px;
                            cursor: pointer;
                            position: absolute;
                            top: 10px;
                            right: -30px;
                            background-color: gray;
                            /*top: 0px;*/
                            /*right: 120px;*/
                            text-align: center;
                            font-weight: bolder;
                        }
                    }
                }
            }
            .register-zc {
                margin: 20px 18px 10px 18px;
                width: 709px;
                height: 72px;
                background-color: #ff498c;
                font-size: 30px;
                text-align: center;
                line-height: 72px;
                border: 1px solid #ff498c;
                border-radius: 10px;
                color: white;
            }
        }
        .agreement {
            float: right;
            margin-right: 18px;
            input {
                width: 34px;
                height: 30px;
                vertical-align: bottom;
                margin-right: 10px;
            }
            .agreement-to {
                color: #969696;
                font-size: 30px;
            }
        }
        .mongolia {
            position: absolute;
            top: 0;
            left: 0;
            width: 750px;
            height: 1334px;
            background: rgba(0.3, 0.3, 0.3, 0.7);
            div {
                width: 500px;
                height: 300px;
                background: white;
                margin-top: 500px;
                margin-left: 125px;
                text-align: center;
                line-height: 130px;
                border-radius: 30px;
                position: relative;
                p {
                    font-size: 40px;
                    color: hotpink;
                }
                .delete {
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
            }
        }
    }
</style>