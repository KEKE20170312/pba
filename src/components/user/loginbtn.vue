<template>
    <div class="user">
        <div class="head">
            <router-link to="/home">
                <img src="../../assets/img/user/pba-slogan.png" alt="">
            </router-link>
        </div>
        <div class="count">
            <form  method="get">
                <input type="text"  placeholder="账号" ><br>
                <input type="password" placeholder="密码">
            </form>
            <router-link to="/user" class="loginbtn">
                立即登录
            </router-link>
            <div class="help">
                <a href="">忘记密码？</a>
            </div>
            <router-link to="/user/register" class="register">
                注册PBA账号
            </router-link>
            <div class="thirdparty">
                <img src="../../assets/img/user/left-line.jpg" class="left-line" alt="">
                <span>第三方登录</span>
                <img src="../../assets/img/user/right-line.jpg" class="right-line" alt="">
            </div>
            <div class="third-log">
                <div>
                    <a href="">
                        <img src="../../assets/img/user/icon_qq.png" class="qq" alt="">
                        <span>QQ登录</span>
                    </a>
                </div>
                <div>
                    <a href="">
                        <img src="../../assets/img/user/icon_weibo.png" class="wb" alt="">
                        <span>微博登录</span>
                    </a>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: "Loginbtn"
    }
</script>
<style lang="less" scoped>
    .user{
        width: 750px;
        height: 100vh;
        background-color: #fff;
        .head{
            width: 750px;
            img{
                margin: 60px 150px 0px 150px;
                width: 450px;
            }
        }
        .count{
            margin: 24px 22px  0  24px;
            input{
                padding: 2px 14px;
                width: 672px;
                height: 76px;
                font-size: 28px;
                border: 1px solid #e2e2e2;
                outline:none;
            }
            .loginbtn{
                display: inline-block;
                width:702px ;
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
            .help{
                overflow: hidden;
                margin-bottom: 20px;
                a{
                    color: #969696;
                    font-size: 24px;
                    text-decoration:none;
                    float: right;
                }
            }
            .register {
                width: 690px;
                height: 72px;
                border: 1px solid #e2e2e2;
                color:#535353;
                text-decoration:none;
                display: block;
                text-align: center;
                font-size: 28px;
                line-height: 72px;
            }
            .thirdparty{
                width: 422px;
                height: 1px;
                margin: 70px 40px 40px 140px;
                text-align: center;
                .left-line{
                    width: 84px;
                    float: left;
                }
                .right-line{
                    float: right;
                    width: 84px;
                }
                span{
                    text-align: center;
                    line-height: 1px;
                    font-size:24px;
                    color: #969696;
                    vertical-align: top;
                }
            }
            .third-log{
                width: 508px;
                height: 160px;
                margin: 0 100px;
                text-align: center;
                div{
                    width: 120px;
                    height: 160px;
                    display:inline-block ;
                    text-align: center;
                    padding: 0 30px;
                }
                a{
                    text-decoration:none;
                    img{
                        width: 120px;
                        height: 120px;
                    }
                    span{
                        font-size: 24px;
                        color: #969696;
                    }
                }
            }
        }
    }
</style>