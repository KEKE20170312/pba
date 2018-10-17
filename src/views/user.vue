<template>
    <div class="center">
        <div class="head">
            <router-link to="user/loginbtn" class="immediately">
                立即登录/注册
            </router-link>
            <div class="enjoy">享受更多贴心服务</div>
        </div>
        <!--登录后的页面-->
        <div class="head-two">
            <div  class="immediately">
                欢迎小主
                <span>15981837003</span>
            </div>
            <div class="enjoy">享受更多贴心服务</div>
        </div>
        <ul class="money">
            <li class="wallet">
                <span class="my">我的钱包</span>
                <span  class="wallet-b">
                    <span class=" balance ">余额:￥3000 </span>
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
            <li class="exit">退出登录</li>
        </ul>
        <MyNav></MyNav>
        <router-view></router-view>
    </div>
</template>
<script>
    import MyNav from "../common/myNav";
    export default {
        name: "User",
        components: {MyNav}
    }
</script>
<style lang="less" scoped>
    .center{
        .head{
            width: 750px;
            height: 500px;
            background-color: #FFEEF3;
            overflow: hidden;
            .immediately{
                text-decoration:none;
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
            .enjoy{
                width: 750px;
                height: 100px;
                font-size: 60px;
                text-align: center;
                line-height: 100px;
                color: pink;
                margin-top: 20px;
            }
        }
        .head-two{
            display: none;
            width: 750px;
            height: 500px;
            background-color: #FFEEF3;
            overflow: hidden;
            .immediately{
                text-decoration:none;
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
                span{
                    color: gray;
                }
            }
            .enjoy{
                width: 750px;
                height: 100px;
                font-size: 60px;
                text-align: center;
                line-height: 100px;
                color: pink;
                margin-top: 20px;
            }
        }
        .money{
            width: 750px;
            height: 200px;
            border-top: 1px solid #f1f1f1 ;
            border-bottom: 1px solid #f1f1f1;
            margin-top: 20px;
            li{
                padding:0 20px;
                width: 710px;
                height: 100px;
                border-bottom:1px solid #f1f1f1 ;
                line-height: 100px;
                font-size: 30px;
                overflow: hidden;
                .wallet-b{
                    float: right;
                    overflow: hidden;
                    .balance{
                        color: gray;
                    }
                    img{
                        width: 25px;
                        height: 25px;
                        margin-left: 10px;
                        margin-top: 20px;
                    }
                }
                .my{
                    color: hotpink;
                }
            }
            .collection{
                li{
                    span{
                        color: hotpink;
                    }
                    img{
                        float: right;
                        width: 25px;
                        height:25px;
                        margin-top: 35px;
                    }
                }

            }
            .exit{
                text-align: center;
                border-bottom: 1px solid #f1f1f1;
            }
        }
    }
</style>