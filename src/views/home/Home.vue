/* eslint-disable no-unused-vars */
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #center>
        <div>
          购物车
        </div>
      </template>
    </nav-bar>

    <!-- <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in banners" :key="item">
            <a :href="item.link">
              <img :src="item.image" alt="">
            </a>
          </el-carousel-item>
        </el-carousel>
      </div> -->
    <tab-control :titles="['流行','新款','精选']"
                 ref="tabControl1"
                 class="tab-control"
                 @tabClick="tabClick"
                 v-show="isTabFixed"></tab-control>
    <scroll class="contenta"
            ref="scroll"
            :probe-type='3'
            @scroll="contentScroll"
            :pull-up-load="true"
            @pullingUp="loadMore">
      <template #scroll>
        <home-swiper :banners="banners"
                     @swiperImageLoad="swiperImageLoad"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>
        <FeatureView></FeatureView>
        <tab-control :titles="['流行','新款','精选']"
                     ref="tabControl2"
                     @tabClick="tabClick"
                     v-show="!isTabFixed"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </template>
    </scroll>
    <!-- 监听原生组件点击 (在修饰符哪里) -->
    <back-top @click.native="backTop"
              v-show="isShowBackTop"></back-top>

  </div>

</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import TabControl from "components/content/tabcontrol/TabControl"
import GoodsList from "components/content/goods/GoodsList"
import Scroll from "components/common/scroll/Scroll.vue"
import backTop from "components/content/backtop/backTop"


import HomeSwiper from "./childcomps/HomeSwiper.vue"
import RecommendView from "./childcomps/RecommendView.vue"
import FeatureView from "./childcomps/FeatureView"


import { getHomeMultidata, getHomeGoods } from 'network/home'
// import ElBanner from "components/common/elbanner/ElBanner.vue"
import { debounce } from 'common/utils.js'
import { itemListennerMixin } from 'common/mixin.js' //混入




export default {
  name: 'Home',
  mixins: [itemListennerMixin],  //混入

  components: {
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    backTop,

    // ElBanner,
    HomeSwiper,
    RecommendView,
    FeatureView,



  },
  data () {
    return {
      //result:null
      banners: [],
      recommends: [],
      goods: {
      'pop': {page: 1, list: []},
      'new': {page: 1, list: []},
      'sell': {page: 1, list: []}
    },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      SaveY: 0,
      //ItemImgListenner: null,  混入里面

      // scrollImg1:false,
      // scrollImg2:false,
      // scrollImg3:false
    }
  },
  computed: {
    showGoods () {

      return this.goods[this.currentType].list
    },
    activated () { //用户进入界面
      console.log('this.SaveY')
      return this.$refs.scroll.scrollTo(0, this.SaveY) &&
        this.$refs.Scroll.refresh()

    },
    deactivated () { //用户离开界面
      // 1 保存y值
      return this.SaveY = this.$refs.scroll.getScrollY() && this.$bus.$off('itemImageLoad', this.ItemImgListenner)
      // 2 取消全局事件的监听

    }
  },
  created () {
    // 1 请求多个数据
    this.getHomeMultidata()
    // 2 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')



  },
  mounted () {
    /*  //1图片加载完成事件监听
    let refresh = debounce(this.$refs.scroll.refresh,500)


     // 对监听事件进行保存
    this.ItemImgListenner = ()=>{refresh(111)}

     //3 监听item中图片加载完成  需要在main.js原型添加$bus 否则为空
     //刷新数据
    this.$bus.$on('itemImageLoad', this.ItemImgListenner)
     // 获取tab-control的offsetTop
     // 所有组件都有一个属性$el:用于获取组件中的元素
     //this. tabOffsetTop */
    this.$bus.$off('itemImageLoad', this.ItemImgListenner)

  },
  destroyed () {
    console.log('我怎么被销毁了 应该是better-scroll的问题')
  },
  methods: {
    // 事件监听相关
    // 防抖



    tabClick (index) {
      console.log(index)
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index

      //回到顶部
    },
    backTop () {
      //this.$refs.scroll.scroll.scrollTo(0,0,1000)  // detail里面也要用 可以同混入
      this.$refs.scroll.scrollTo(0, 0, 1000)
    },

    //网络请求
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        console.log(res)
        //this.result= res
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        console.log(res)
        // res.data.list
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        // this.$refs.scroll.scroll.finishPullUp()     全称 scroll组件里面的scroll方法
        this.$refs.scroll.finishPullUp() //已经在scroll组件里面封装了
      })
    },
    contentScroll (position) {
      // 1 判断BackTop是否显示
      // if(-position.y>1000){
      //   this.isShowBackTop=true
      //console.log(position)
      // }else{
      //    this.isShowBackTop=false
      // }
      this.isShowBackTop = -position.y > 1200     // detail里面也要用 可以同混入  不建议用
      // 2 判断tabcontrol是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop
    },
    loadMore () {
      this.getHomeGoods(this.currentType)

    },

    // swiperImageLoad1(){

    //   return  this.scrollImg1 =true
    // },

    // swiperImageLoad2(){
    //   return  this.scrollImg2 =true
    // },
    // swiperImageLoad3(){
    //   return this.scrollImg3 =true
    // }
    swiperImageLoad () {
      // 1
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop - 44
      console.log(this.tabOffsetTop)
    },
  }
}
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: #ff8198;
  color: white;
  /* position: fixed;
  left: 0;
  right: 0;
  top:0;
  z-index: 9; */
}
/* .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  } */

/* .tab-control{
  position:sticky;
  top: 44px;
  z-index: 8;

} */

/*
.content{


  position: absolute;
  top:44px ;
  left:0 ;
  bottom: 49px;
  overflow: hidden;

} */
.contenta {
  height: calc(100% - 93px);
  /* 运算符前后要保留一个空格 */
  overflow: hidden;
}
.tab-control {
  position: relative;

  z-index: 9;
}
</style>