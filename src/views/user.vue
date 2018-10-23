<template>
    <div class="users">
        <div class="center" v-show="centerShow">
            <div class="head" v-show="noheadShow">
                <div class="immediately" @click="change">
                    立即登录/注册
                </div>
                <div class="enjoy">享受更多贴心服务</div>
            </div>
            <!--登录后的页面-->
            <div class="head-two" v-show="headShow">
                <div class="immediately">
                    欢迎小主
                    <p class="information">{{this.$store.state.userMobile}}</p>
                </div>

                <div class="enjoy">享受更多贴心服务</div>
            </div>
            <ul class="money" v-show="before_after">
                <li class="wallet">
                    <span class="my">我的钱包</span>
                    <span class="wallet-b">
                    <span class=" balance ">余额:￥{{this.$store.state.userInfo.age}} </span>
                </span>
                </li>
                <router-link to="user/goods" class="collection">
                    <li>
                        <span>收货地址</span>
                        <img src="../assets/img/user/timg.jpg" alt="">
                    </li>
                </router-link>
                <router-link to="user/center" class="collection">
                    <li>
                        <span>服务中心</span>
                        <img src="../assets/img/user/timg.jpg" alt="">
                    </li>
                </router-link>
                <router-link to="user/binding" class="collection">
                    <li>
                        <span>修改登录密码</span>
                        <img src="../assets/img/user/timg.jpg" alt="">
                    </li>
                </router-link>
                <router-link to="user/opinion" class="collection">
                    <li>
                        <span>意见反馈</span>
                        <img src="../assets/img/user/timg.jpg" alt="">
                    </li>
                </router-link>
                <li class="exit" @click="logout">退出登录</li>
            </ul>
        </div>
        <div class="user" v-show="userShow">
            <div class="head">
                <router-link to="/home">
                    <img src="./../assets/img/user/pba-slogan.png" alt="">
                </router-link>
            </div>
            <!--登录界面-->
            <div class="count">
                <form method="get">
                    <input type="number" placeholder="账号" v-model="mobile"><br>
                    <input type="password" placeholder="密码" v-model="pwd">
                </form>
                <div to="/user" class="loginbtn" @click="login">
                    立即登录
                </div>
                <p v-show="errTip1">账号或者密码不能为空</p>
                <p v-show="errTip2">账号或密码错误</p>
                <div class="help">
                    <a href="">忘记密码？
                    </a>
                </div>
                <router-link to="/user/register" class="register">
                    注册PBA账号
                </router-link>
                <div class="thirdparty">
                    <img src="./../assets/img/user/left-line.jpg" class="left-line" alt="">
                    <span>第三方登录</span>
                    <img src="./../assets/img/user/right-line.jpg" class="right-line" alt="">
                </div>
                <div class="third-log">
                    <div>
                        <a href="">
                            <img src="./../assets/img/user/icon_qq.png" class="qq" alt="">
                            <span>QQ登录</span>
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <img src="./../assets/img/user/icon_weibo.png" class="wb" alt="">
                            <span>微博登录</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    import {mapMutations} from "vuex"

    export default {
        name: "User",
        components: {},
        data() {
            return {
                centerShow: true,
                userShow: false,
                noheadShow: true,
                headShow: false,
                mobile: "",
                pwd: "",
                errTip1: false,
                errTip2: false,
                userInfo: [],
                before_after: false
            }
        },
        computed: {
            nickName() {
                return this.$store.state.userInfo.name;
            },
            money() {
                return this.$store.state.userInfo.age;
            }
        },
        watch: {
            $route() {
                this.login();
            }
        },
        mounted() {
            this.checkLogin();
        },
        methods: {
            ...mapMutations(["updateUserInfo", "updateUserId","updateUserMobile"]),
            checkLogin() {
                axios.get("/api/user/checklogin").then((data) => {
                    let res = data.data;
                    if (res.status === "0") {
                        this.updateUserMobile(res.result);
                        this.headShow = true;
                        this.noheadShow = false;
                        this.before_after = true;
                    }
                })
            },
            login() {
                if (!this.mobile || !this.pwd) {
                    this.errTip1 = true;
                    return;
                }
                axios.post("/api/user/login", {
                    mobile: this.mobile,
                    pwd: this.pwd
                }).then((data) => {
                    let res = data.data;
                    if (res.status === "0") {
                        this.updateUserMobile(res.result.userInfo.mobile);
                        this.updateUserId(res.result.userInfo._id);
                        this.errTip = false;
                        this.centerShow = true;
                        this.userShow = false;
                        this.headShow = true;
                        this.noheadShow = false;
                        this.before_after = true;
                    } else {
                        this.errTip1 = false;
                        this.errTip2 = true;
                        this.before_after = false;
                    }
                })
            },
            logout() {
                axios.post("/api/user/logout").then((data) => {
                    let res = data.data;
                    if (res.status === "0") {
                        this.updateUserId("");
                        this.updateUserInfo("");
                        this.noheadShow = true;
                        this.headShow = false;
                        this.before_after = false;
                    }
                })
            },
            change() {
                this.centerShow = false;
                this.userShow = true;

            }
        },
        created() {
            if (this.$store.state.userId) {
                this.noheadShow = false;
            }
        }
    }
</script>
<style lang="less" scoped>
    .users {
        width: 750px;
        height: 100vh;
        background-color: #fff;
        .center {
            width: 750px;
            height: 100vh;
            overflow: hidden;
            .head {
                width: 750px;
                height: 500px;
                overflow: hidden;
                margin-top: 300px;
                .immediately {
                    text-decoration: none;
                    display: inline-block;
                    width: 400px;
                    height: 100px;
                    border: 1px solid #ffeef3;
                    background-color: pink;
                    border-radius: 20px;
                    font-size: 50px;
                    text-align: center;
                    line-height: 100px;
                    color: white;
                    margin-left: 175px;
                    margin-top: 120px;
                }
                .enjoy {
                    width: 750px;
                    height: 100px;
                    font-size: 60px;
                    text-align: center;
                    line-height: 100px;
                    color: pink;
                    margin-top: 20px;
                }
            }
            .head-two {
                width: 750px;
                height: 500px;
                background-color: #FFEEF3;
                overflow: hidden;
                .immediately {
                    text-decoration: none;
                    display: inline-block;
                    width: 400px;
                    height: 100px;
                    border: 1px solid #ffeef3;
                    background-color: pink;
                    border-radius: 20px;
                    font-size: 50px;
                    text-align: center;
                    line-height: 100px;
                    color: white;
                    margin-left: 175px;
                    margin-top: 120px;
                    .information {
                        color: lightseagreen;
                    }
                }
                .enjoy {
                    width: 750px;
                    height: 100px;
                    font-size: 60px;
                    text-align: center;
                    line-height: 100px;
                    color: pink;
                    margin-top: 20px;
                }
            }
            .money {
                width: 750px;
                height: 200px;
                border-top: 1px solid #f1f1f1;
                border-bottom: 1px solid #f1f1f1;
                margin-top: 20px;
                li {
                    padding: 0 20px;
                    width: 710px;
                    height: 100px;
                    border-bottom: 1px solid #f1f1f1;
                    line-height: 100px;
                    font-size: 30px;
                    overflow: hidden;
                    .wallet-b {
                        float: right;
                        overflow: hidden;
                        .balance {
                            color: gray;
                        }
                        img {
                            width: 25px;
                            height: 25px;
                            margin-left: 10px;
                            margin-top: 20px;
                        }
                    }
                    .my {
                        color: hotpink;
                    }
                }
                .collection {
                    li {
                        span {
                            color: hotpink;
                        }
                        img {
                            float: right;
                            width: 25px;
                            height: 25px;
                            margin-top: 35px;
                        }
                    }

                }
                .exit {
                    width: 500px;
                    height: 80px;
                    line-height: 80px;
                    border-radius: 30px;
                    margin-left: 125px;
                    margin-top: 20px;
                    color: white;
                    background: gray;
                    text-align: center;
                    font-size: 35px;
                    border-bottom: 1px solid #f1f1f1;
                }
            }
        }

        .user {
            width: 750px;
            .head {
                width: 750px;
                img {
                    margin: 60px 150px 0px 150px;
                    width: 450px;
                }
            }
            .count {
                p {
                    width: 600px;
                    height: 160px;
                    border-radius: 10px;
                    line-height: 160px;
                    font-size: 40px;
                    text-align: center;
                    background: grey;
                    color: white;
                    margin: 20px 65px;
                }
                margin: 24px 22px 0 24px;
                input {
                    padding: 2px 14px;
                    width: 672px;
                    height: 76px;
                    font-size: 28px;
                    border: 1px solid #e2e2e2;
                    outline: none;
                }
                .loginbtn {
                    display: inline-block;
                    width: 702px;
                    height: 72px;
                    margin: 20px 0 10px 0;
                    background-color: #ff498c;
                    text-align: center;
                    line-height: 72px;
                    color: white;
                    font-size: 28px;
                    border: 1px solid #ff498c;
                    border-radius: 6px;
                    text-decoration: none;
                }
                .help {
                    overflow: hidden;
                    margin-bottom: 20px;
                    a {
                        color: #969696;
                        font-size: 24px;
                        text-decoration: none;
                        float: right;
                    }
                }
                .register {
                    width: 690px;
                    height: 72px;
                    border: 1px solid #e2e2e2;
                    color: #535353;
                    text-decoration: none;
                    display: block;
                    text-align: center;
                    font-size: 28px;
                    line-height: 72px;
                }
                .thirdparty {
                    width: 422px;
                    height: 1px;
                    margin: 70px 40px 40px 140px;
                    text-align: center;
                    .left-line {
                        width: 84px;
                        float: left;
                    }
                    .right-line {
                        float: right;
                        width: 84px;
                    }
                    span {
                        text-align: center;
                        line-height: 1px;
                        font-size: 24px;
                        color: #969696;
                        vertical-align: top;
                    }
                }
                .third-log {
                    width: 508px;
                    height: 160px;
                    margin: 0 100px;
                    text-align: center;
                    div {
                        width: 120px;
                        height: 160px;
                        display: inline-block;
                        text-align: center;
                        padding: 0 30px;
                    }
                    a {
                        text-decoration: none;
                        img {
                            width: 120px;
                            height: 120px;
                        }
                        span {
                            font-size: 24px;
                            color: #969696;
                        }
                    }

                }
            }
        }
    }
</style>