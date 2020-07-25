<template>
  <div class="tab-bar">
    <slot></slot>
      <!-- <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/1.jpg" alt="">
       首页
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/1.jpg" alt="">
        分类
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/1.jpg" alt="">
        购物车
      </div>
      <div class="tab-bar-item">
        <img src="../../assets/img/tabbar/1.jpg" alt="">
        我的</div> -->
  </div>
</template>

<script>
export default {
  name:"TabBar"

}
</script>

<style>
 body{
  padding: 0;
  margin: 0;
}
.tab-bar{
  display: flex;
  background-color:#f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px -2px 1px rgba(100, 100, 100,0.15);
  z-index: 10;
}

/*.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
}
.tab-bar-item img {
  width:24px ;
  height:24px ;
} */

</style>