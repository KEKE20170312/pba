<template>
    <div class="editor">
        <div class="head">
            <span  v-on:click="back"><img src="../../assets/img/user/left-arrow.png" alt=""></span>
            <p>地址修改</p>
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
                <!--<input type="text"  placeholder="请输入收货人的地址" ><br>-->
                <div class="right-r">
                    <div class="city" @click="toAddress">{{city}}</div>
                    <i class="arrow-r"> </i>
                </div>
                <v-distpicker type="mobile" @selected='selected' v-show="addInp"  class="ttt">
                </v-distpicker>
                <div class="mask" v-show="mask"></div>


            </li>

            <li>
                <span>详细地址</span>
                <input type="text"  placeholder="" ><br>
            </li>






        </ul>
        <div class="save">
            <span>保存地址</span>
        </div>
        <div class="delete">
            <span>删除地址</span>
        </div>
        <div class="hazy"  v-show="show"></div>
    </div>

</template>

<script>
    import VDistpicker from 'v-distpicker'
    export default {
        components: { VDistpicker },
        name: "editor",
        data(){
            return{
                city:'请选择',
                addInp :false,
                mask:false,
                show:false
            }
        },
        methods: {
            back() {
                this.$router.go(-1);//返回上一层
            },
            //在methodes中定义方法
// 点击弹出三级联动
            toAddress(){
                this.mask = true;
                this.addInp = true;
                this.show=true;
            },
            // 省市区三级联动
            selected(data){
                this.mask =false;
                this.addInp = false;
                this.city = data.province.value + ' ' + data.city.value +' ' + data.area.value;
                this.show=false;
            },


        }

    }
</script>

<style lang="less" scoped>
    @deep: ~'>>>';
    .editor {
        width: 750px;

    .head {
        width: 750px;
        height: 90px;
        border-bottom: 1px solid #f1f1f1;
        text-align: center;
        line-height: 90px;
        font-size: 30px;
        position: relative;

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
                position: relative;
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
                   top: 0px;

               }
            .ttt{
                   z-index: 5;
                   width: 750px;
                   height: 500px;
                   position: absolute;
                   top: 550px;
                   left: -20px;
                  @{deep} .address-container {
                    height: 410px;
                    overflow: scroll;

                }





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

        .delete{
            width: 750px;
            margin: 48px 0  30px  0;
            span{
                display: inline-block;
                width: 456px;
                height: 66px;
                background: gray;
                color: white;
                line-height: 66px;
                text-align: center;
                margin-left: 150px;
                border-radius: 30px;
            }
        }

        .hazy{
            position: absolute;
            top: 0;
            left: 0;
            width: 750px;
            height: 1334px;
            background: rgba(0.2,0.2,0.2,0.5);

        }

    }

</style>