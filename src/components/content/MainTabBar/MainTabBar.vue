<template>
      <tab-bar>

      <tab-bar-item path="/home" activeColor='hotpink'>
        <template #item-icon>
          <img src="~assets/img/tabbar/home.svg" alt="图片">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/home_active.svg" alt="">
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </tab-bar-item >

      <tab-bar-item path="/category" activeColor='hotpink'>
        <template #item-icon>
          <img src="~assets/img/tabbar/category.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/category_active.svg" alt="">
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/cart" activeColor='hotpink'>
        <template #item-icon>
          <img src="~assets/img/tabbar/shopcart.svg" alt="">
        </template>
        <template #item-icon-active>
          <img src="~assets/img/tabbar/shopcart_active.svg" alt="">
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>

      <tab-bar-item path="/profile" activeColor='hotpink'>
        <template #item-icon>
            <img src="~assets/img/tabbar/profile.svg" alt="">
        </template>
        <template #item-icon-active>
            <img src="~assets/img/tabbar/profile_active.svg" alt="">
        </template>
        <template #item-text>
            <div>我的</div>
        </template>
      </tab-bar-item>

    </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
export default {
  name:"MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }

}
</script>

<style>

</style>