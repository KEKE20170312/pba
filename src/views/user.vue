<template>
    <div>
        <div class="m-body">
            <div class="log">
                <a href="#">
                    <img src="../assets/img/user/pba-slogan.png" alt="">
                </a>
            </div>
        </div>
        <MyNav/>
    </div>
</template>

<script>
    import MyNav from "../common/myNav";
    export default {
        name: "User",
        components:{
            MyNav
        }
    }
</script>

<style lang="less" scoped>
    .m-body{
        .log{
            a{
                width: 450px;
                height: 166px;
                text-align: center;
                margin: 0 auto;
                img{
                    width: 450px;
                    height: 166px;
                    text-align: center;
                }
            }
        }
    }
</style>