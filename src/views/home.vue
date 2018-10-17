<template>
    <div>
        <Search/>
        <input type="text">
      this is home
        <MyNav/>
    </div>
</template>

<script>
    import Search from "../components/search"
    import MyNav from "../common/myNav"
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
