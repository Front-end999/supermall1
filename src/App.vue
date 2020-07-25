<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- 把detail排除 要不然获取不到新的数据 每次点详情都一样 -->
      <router-view></router-view>
    </keep-alive>

    <main-tab-bar> </main-tab-bar>


  </div>
</template>

<script>
  import MainTabBar from 'components/content/MainTabBar/MainTabBar.vue'
  import "./assets/css/base.css"
export default {

  name: 'App',
  components: {
    MainTabBar

  }
}
</script>

<style scoped>
  @import "assets/css/base.css";
  #app{
    height: 100vh;
    overflow: hidden;
  }

</style>
