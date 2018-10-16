<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
      components:{

      },
      methods:{
          change(){

          }
      }
  }

</script>

<style lang="less">
  #app{
    width: 750px;
    height: 1334px;
    overflow: hidden;
    overflow-y: scroll;
  }
  ::-webkit-scrollbar{
    display: none;
  }

</style>
