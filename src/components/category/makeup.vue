<template>
    <div>
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

</style>