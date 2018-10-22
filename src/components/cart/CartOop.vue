<template>
    <div class="cartOop">
        <p class="demo">商品数量有限，请尽快付款哦</p>
        <Toiletry/>

    </div>
</template>
<script>
    import Toiletry from "./toiletry";
    import axios from "axios";
    export default {
        name: "CartOop",
        components: {
            Toiletry
        },
        data(){
            return {
                data:[]
            }
        },
        created(){
            console.log(this.$route.params.type);
            var types = this.$route.params.type;

            axios.get("/api/type?type=" + types).then((data)=>{
                console.log(data.data);
                this.data = data.data;
            })
        }
    }
</script>

<style lang="less" scoped>
    .cartOop{
        padding-bottom: 240px;
        background-color: #F2F2F2;
        .demo{
            width: 750px;
            height: 60px;
            padding-left: 30px;
            line-height: 60px;
            background-color: #fff;
            color: #999;
            margin-bottom: 20px;
        }
    }
</style>