<template>
    <div class="new">
        <div class="head">
            <span  v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
            <p>新增地址</p>
        </div>
        <ul class="center">
            <li>
              <span>收货人</span>
                <input type="text"  placeholder="请输入收货人的姓名" v-model="consignee" ><br>
            </li>
            <li>
                <span>手机号码</span>
                <input type="number"  placeholder="请输入收货人的手机号码" v-model="mobile" oninput="if(value.length>11)value=value.slice(0,11)" ><br>
            </li>
            <li>
                <span>省市区</span>
                <!--<input type="text"  placeholder="请输入收货人的地址" ><br>-->
                <div class="right-r">
                    <div class="city" @click="toAddress" ref="address_city">{{city}}</div>
                    <i class="arrow-r"> </i>
                </div>
                <v-distpicker type="mobile" @selected='selected' v-show="addInp"  class="ttt">
                </v-distpicker>
                <div class="mask" v-show="mask"></div>
            </li>
            <li class="detailed">
                <span>详细地址</span>
                <input type="text"   placeholder="请输入收货人的详细地址"  v-model="detailed"><br>
            </li>
        </ul>
        <div class="save">
            <span @click="save">保存地址</span>
            <div v-show="success" class="success" >保存成功
                <img src="../../assets/img/user/quxiao.png" alt="" class="delete" @click="cancel">
            </div>
        </div>
        <div class="confirm-botton" v-show="judge">{{Right_wrong}}</div>
        <div v-show="show"  class="hazy"></div>
    </div>
</template>
<script>
    import VDistpicker from 'v-distpicker'
    import axios from "axios"
    export default {
        components: { VDistpicker },
        name: "new",
        data(){
            return{
                city:'请选择',
                Right_wrong:"",
                addInp :false,
                mask:false,
                show:false,
                success:false,
                mobile:"",
                consignee:"",
                address_city:"",
                detailed:"",
                judge:false,

            }
        },
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            },
            //点击保存
            save(){
                var mobileNum = this.mobile;
                var consignee = this.consignee;
                var address_city = this.address_city;
                var detailed = this.detailed;
                var getMenuText = this.$refs.address_city.innerText;
                if (getMenuText==="请选择"){
                    getMenuText="";
                }
                var detailed_getMenuText = getMenuText + detailed ;
                if( consignee==""||!consignee ){
                    this.Right_wrong= "请输入收货人姓名";
                    this.judge = true;
                    setTimeout(()=>{
                        this.judge= false;
                    },2000)

                }else if(mobileNum == "" || !mobileNum) {
                    this.judge = true;
                    this.Right_wrong= "请输入电话号码";
                    setTimeout(()=>{
                        this.judge= false;
                    },2000)
                } else  if (!(/^1[3456789]\d{9}$/.test(mobileNum))) {
                    this.judge = true;
                    this.Right_wrong= "电话号码格式错误,请重新输入";
                    setTimeout(()=>{
                        this.judge= false;
                    },2000)
                }else if(getMenuText=="" ){
                    this.judge = true;
                    this.Right_wrong= "请选择地址";
                    setTimeout(()=>{
                        this.judge= false;
                    },2000)
                }else if(detailed==""){
                    this.judge = true;
                    this.Right_wrong= "请输入详细地址";
                    setTimeout(()=>{
                        this.judge= false;
                    },2000)
                }else {
                    this.success=true;
                    this.show=true;
                    this.judge = false;
                    axios.post("/api/addAddress",{
                        mobile:mobileNum,
                        consignee:consignee,
                        addressLarge:getMenuText,
                        addressSmall:detailed,
                        detailed_getMenuText:detailed_getMenuText,
                    }).then((data)=>{

                    })
                }

            },
            //点击取消
            cancel(){
               this.success=false;
                this.show=false;
                this.$router.push({path:"/user/goods"})
            },

            //在methodes中定义方法
            // 点击弹出三级联动
            toAddress(){
                this.mask = true;
                this.addInp = true;
                this.show = true;

            },
            // 省市区三级联动
            selected(data){
                this.mask =false;
                this.addInp = false;
                this.show = false;
                this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value

            }

        }
    }
</script>
<style lang="less" scoped>
    @deep: ~'>>>';
    .new {
        width: 750px;
        height: 100vh;
        position: relative;
        .confirm-botton{
            position: absolute;
            width: 400px;
            height: 100px;
            background-color: rgba(0.5,0.5,0.5,0.5);
            text-align: center;
            line-height: 100px;
            border-radius: 10px;
            font-size: 30px;
            color: white;
            top: 460px;
            left: 175px;
        }
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
            position: relative;
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
                .right-r{
                    width: 580px;
                    position: absolute;
                    left:160px;
                    top: 180px;
                }
                .ttt{
                    z-index:5;
                    width: 750px;
                    height: 550px;
                    position: fixed;
                    bottom: 70px;
                    left: calc(50vw - 375px);
                    @{deep} .address-container {
                        height: 410px;
                        overflow: scroll;
                    }
                }
            }
            .detailed{
                height: 150px;

            }
        }
        .save{
            width: 750px;
            margin: 68px 0  30px  0;
            position: relative;
            span{
                display: inline-block;
                width: 456px;
                height: 66px;
                background: green;
                color: white;
                line-height: 66px;
                text-align: center;
                margin-left: 150px;
                border-radius: 30px;
            }
            .success{
                position: absolute;
                top: -40px;
                left: 150px;
                width:456px;
                height: 200px;
                line-height: 200px;
                text-align: center;
                font-size: 40px;
                border-radius: 20px;
                background: white;
                border: 10px solid indianred;
                z-index: 20;
                .delete {
                    width: 50px;
                    height: 50px;
                    position: absolute;
                    top: 20px;
                    right: 20px;
                }
            }
        }
        .hazy{
            position: absolute;
            top: 0;
            left: 0;
            width: 750px;
            height: 100vh;
            background: rgba(0.2,0.2,0.2,0.5);
        }
    }
</style>