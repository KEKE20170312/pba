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
                       <input type="text" v-model.number="ReginForm.tel" placeholder="输入手机号" >
                   </li>
                   <li class="cf-ph">
                       <img src="../../assets/img/user/email_icon.png" alt="">
                       <input type="text"  placeholder="输入验证码" v-model="inputInfo">
                       <span class="code-style" @click="createCode">{{verificationCode}}</span>
                       <span class="confirm-botton" @click="confirmTheCode">验证</span>


                   </li>
                   <li class="cf-pw">
                       <img src="../../assets/img/user/lock_icon.png" alt="">
                       <input type="password" v-model="ReginForm.password" placeholder="输入密码" >
                   </li>
                   <li class="cf-pw">
                       <img src="../../assets/img/user/lock_icon.png" alt="">
                       <input type="password"  placeholder="再次确认密码" >
                   </li>
                   <li class="cf-pw">
                       <img src="../../assets/img/user/email_icon.png" alt="">
                       <input type="text"  v-model="verification" placeholder="获取手机验证码" >
                       <span v-show="sendAuthCode" class="auth_text auth_text_blue" @click="getAuthCode">获取验证码</span>
                       <span v-show="!sendAuthCode" class="auth_text"> <span class="auth_text_blue">{{auth_time}} </span> 秒之后重新发送验证码</span>
                   </li>
                   <li class="cf-referees">
                       <img src="../../assets/img/user/recom_icon.png" alt="">
                       <input type="text"  placeholder="输入推荐人（非必填）" >
                   </li>
               </ul>
            </form>
            <div class="register-zc"  @click="submit" :loading="logining">注册</div>
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
        data(){
          let confirmpasswordCheck = (rule,value,callback)=>{
              if(value===""){
                  return callback(new Error('密码是必须的'))
              }else {
                  return callback()
              }
          }
            let telCheck = (rule, value, callback) => {
                if (value === '') {
                    return callback(new Error('电话号码是必须的'))
                } else if (!Number.isInteger(value)) {
                    return callback(new Error('电话号码必须是数字'))
                } else if (value.toString().length !== 11) {
                    return callback(new Error('电话号码必须是11位数字'))
                } else {
                    callback()
                }
            }
            return {
                verificationCode:"",
                inputInfo:'',
                ReginForm: {
                    password: '',
                    tel: '',
                },
                logining: false,
                sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮'还是‘倒计时' */
                auth_time: 0, /*倒计时 计数器*/
                verification:"",//绑定输入验证码框框
                rule: {
                    password: [
                        {
                            required: true,
                            message: '密码是必须的！',
                            trigger: 'blur'
                        }
                    ],
                    tel: [
                        {
                            required: true,
                            validator: telCheck,
                            trigger: 'blur'
                        }
                    ],
                }
            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            //  验证
            getAuthCode() {
                const verification =this.ReginForm.tel;
                const url = " "
                console.log("url",url);
                this.$http.get(url).then(function (response) {
                    console.log("请求成功",response)
                }, function (error) {
                    console.log("请求失败",error);
                })
                this.sendAuthCode = false;
                //设置倒计时秒
                this.auth_time = 10;
                var auth_timetimer = setInterval(()=>{
                    this.auth_time--;
                    if(this.auth_time<=0){
                        this.sendAuthCode = true;
                        clearInterval(auth_timetimer);
                    }
                }, 1000);
            },
            // 封装注册发送请求方法
            thisAjax(){
                const passwordData=this.ReginForm.password;
                const phoneData =this.ReginForm.tel;
                const mCodeData=this.verification;
                //  手机注册
//emulateJSON:true设置后post可跨域
                const url = " 填接口"
                this.$http.post(url,{填传入的参数},{emulateJSON:true}).then(function (response)
                {
                    //登录后跳转的页面
                    this.$router.push('/');
                }, function (error) {
                    alert("请求失败",error);
                })
            },
            // ...
            submit () {
                console.log(1);
                this.$refs.ReginForm.validate(valid => {
                    if (valid) {
                        this.logining = true
                        this. thisAjax();
                        console.log('开始写入后台数据！')
                    } else {
                        console.log('submit err')
                    }
                })
            },
            reset () {
                this.$refs.ReginForm.resetFields()
            },
            tologin () {
//已经注册过跳转到登入界面
                this.$router.push('/phoneLogin')
            },
            createCode() {    //通过随机数生成验证码
                this.verificationCode = '';
                var code = '';
                var codeLength = 4;     //验证码长度
                var random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
                for(var i = 0;i<codeLength;i++){
                    var index = Math.floor(Math.random()*36);
                    code += random[index];
                }
                this.verificationCode = code
            },
            confirmTheCode() {      //验证函数
                var customerCode = this.inputInfo.toUpperCase();   //把你输入的小写转化为大写
                if(customerCode === "0"){
                    this.createCode();
                    this.inputInfo = ''
                    alert('请输入验证码')
                }else if(customerCode !== this.verificationCode){
                    this.createCode();
                    this.inputInfo = ''
                    alert('验证码不正确，请重新输入');
                }else {
                    alert('输入正确')
                }
            },
        },
        mounted(){
            this.createCode()
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
                            display: inline-block;
                            position: absolute;
                            right: 0px;
                            top: 20px;
                            width: 200px;
                            text-align: center;
                            line-height:64px;
                            background: white;
                            /*letter-spacing:20px;*/
                            color: crimson;
                        }
                    }
                    .cf-referees{
                        img{
                            width: 48px;
                            height: 56px;
                        }
                    }
                    .cf-ph{
                        position: relative;
                        img{
                            width: 46px;
                            height: 40px;
                        }
                        .code-style{
                            display: inline-block;
                            width: 150px;
                            height: 84px;
                            font-size: 35px;
                            color: red;
                            line-height: 84px;
                            cursor: pointer;
                            position: absolute;
                            top: 0px;
                            right:120px ;
                            background-color: white;
                            text-align: center;
                        }
                        .confirm-botton{
                            display: inline-block;
                            width:80px;
                            height: 84px;
                            text-align: center;
                            line-height: 84px;
                            background-color: #04b4ba;
                            font-size: 30px;
                            color: white;
                            cursor: pointer;
                            position: absolute;
                            top: 0px;
                            right: 0px;
                        }
                    }
                }
            }
            .register-zc{
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