<template>
    <div>
<<<<<<< HEAD
        this is 我的
=======
        <div class="m-body">
            <div class="log">
                <a href="#">
                    <img src="../assets/img/user/pba-slogan.png" alt="">
                </a>
            </div>
        </div>
>>>>>>> a5500b82c0086da15bd3e5f7d2db30c9c2087ede
        <MyNav/>
    </div>
</template>

<script>
    import MyNav from "../common/myNav";
    export default {
        name: "User",
<<<<<<< HEAD
        components:{MyNav}
=======
        components:{
            MyNav
        }
>>>>>>> a5500b82c0086da15bd3e5f7d2db30c9c2087ede
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