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
                       <input type="text"  placeholder="输入手机号" >
                   </li>
                   <li class="cf-pw">
                       <img src="../../assets/img/user/lock_icon.png" alt="">
                       <input type="text"  placeholder="输入密码" >
                       <span>显示</span>
                   </li>
                   <li class="cf-referees">
                       <img src="../../assets/img/user/recom_icon.png" alt="">
                       <input type="text"  placeholder="输入推荐人（非必填）" >
                   </li>
               </ul>
            </form>
            <div class="register">注册</div>
            <div class="agreement">
                <input type="checkbox" checked="checked">
                <router-link to="/user/agreement" class="agreement-to">
                    同意用户协议
                </router-link>

            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "register",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
        }
    }
</script>

<style lang="less" scoped>
    .register{
        width: 750px;
        .head{
            width: 750px;
            height: 90px;
            border-bottom: 1px solid #f1f1f1;
            text-align: center;
            line-height: 90px;
            font-size: 30px;
            position: relative;
            background-color:pink;
            p{
                color:#535353;
            }

            span{
                display: inline-block;
                width: 90px;
                height: 62px;
                position: absolute;
                left: 0;
                top: 0;
                img{
                    padding-left: 30px;
                    margin-top:22px ;
                    width: 44px;
                    height: 34px;
                }
            }
        }
        .count{
            width: 750px;
            .count-p{
                color: #555555;
                margin: 10px 18px;
                font-size: 28px;
            }
            .count-form{
                width: 750px;



                .cf{
                    width: 710px;

                    background-color: #f1f1f1;
                    margin-left: 20px;
                    li{
                        width: 676px;
                        height: 84px;
                        border-bottom: 1px solid #e2e2e2;
                        list-style: none;
                    }
                    input{
                        outline:none;
                        width: 608px;
                        height: 84px;
                        vertical-align: top;
                        border: none;
                        background-color: #f1f1f1;
                        font-size: 32px;
                        line-height: 84px;
                        margin-left: 10px;
                    }
                    img{
                        width: 48px;
                        height: 62px;
                        margin-top: 22px;
                        margin-left: 10px;
                    }
                    .cf-pw{
                        position: relative;
                          img{
                              width: 48px;
                              height: 48px;
                          }
                        span{
                            display: block;
                            width: 64px;
                            height: 42px;
                            background-color: #ff498c;
                            border-radius: 20px;
                            padding: 12px;
                            position: absolute;
                            top: 12px;
                            right: 10px;
                            color: white;
                            text-align: center;
                            line-height: 42px;
                            font-size: 32px ;
                        }

                    }
                    .cf-referees{
                        img{
                            width: 48px;
                            height: 56px;
                        }
                    }

                }
            }
            .register{
                margin:20px 18px  10px 18px;
                width: 709px;
                height: 72px;
                background-color: #ff498c;
                font-size: 30px;
                text-align: center;
                line-height: 72px;
                border: 1px solid  #ff498c;
                border-radius: 10px;
                color: white;
            }
        }
        .agreement{
            float: right;
            margin-right: 18px;
            input{
                width: 34px;
                height: 30px;
                vertical-align: bottom;
                margin-right: 10px;

            }
            .agreement-to{
                color: #969696;
                font-size: 30px;
            }
        }
    }

</style>