<template>
    <div>
        <Search/>
        <SearchList/>
        <MyNav/>
    </div>
</template>

<script>
    import Search from "../search";
    import MyNav from "../../common/myNav";
    import SearchList from "../../common/searchList";
    export default {
        name: "makeup",
        components: {
            SearchList,
            MyNav,
            Search
        }
    }
</script>

<style lang="less" scoped>

</style>