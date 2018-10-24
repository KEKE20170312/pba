<template>
    <div class="makeUp">
        <Search/>
        <SearchList/>
    </div>
</template>

<script>
    import Search from "../search";
    import SearchList from "../../common/searchList";
    export default {
        name: "makeup",
        components: {
            SearchList,
            Search
        }
    }
</script>

<style lang="less" scoped>
    .makeUp{
        height: 100vh;
        background-color: #fff;
    }
</style>