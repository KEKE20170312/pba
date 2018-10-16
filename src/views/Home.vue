<template>
    <div>
        <Search/>
      this is home
        <MyNav/>
        <router-view></router-view>
    </div>

</template>

<script>
    import Search from "../components/search";
    import MyNav from "../common/myNav";
    export default {
        name: "home",
        components:{
            Search,
            MyNav
        }
    }
</script>

<style lang="less" scoped>


</style>
