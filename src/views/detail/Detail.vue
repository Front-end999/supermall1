<template>
  <div id="detail" >
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"></detail-nav-bar>
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <template #scroll>

        <detail-swiper :topImages="topImages"></detail-swiper>
        <detail-base-info :goods="goods"></detail-base-info>
        <detail-shop-info :shop="shop"></detail-shop-info>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
        <param-info1 :param-info="paramInfo" ref="params"></param-info1>
        <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
        <goods-list :goods="recommend" ref="recommend"></goods-list>
      </template>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"></detail-bottom-bar>
      <back-top @click.native="backTop" v-show="isShowBackTop"></back-top>
      <!-- <toast :message="message" :show="show"></toast>  传字符串前面不加冒号 --> <!-- 笨方法 不好用 -->
      <toast  ref="toast"></toast> <!-- 传字符串前面不加冒号 -->

  </div>

</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper  from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'
import ParamInfo1 from './childComps/ParamInfo1.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailBottomBar from './childComps/DetailBottomBar.vue'

import GoodsList from "components/content/goods/GoodsList"
import backTop from "components/content/backtop/backTop"


import Scroll from "components/common/scroll/Scroll.vue"
import Toast from "components/common/toast/Toast"


import {getDetail,Goods,Shop,GoodsParam,getRecommend} from "network/detail.js"
import {debounce} from 'common/utils.js'
import {itemListennerMixin} from 'common/mixin.js' //混入\

import {mapActions} from 'vuex'


export default {

  name: "Detail",
  mixins:[itemListennerMixin],  //混入
  data() {
    return {
      iid:null,
      topImages:[],
      res:null,
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      commentInfo:{},
      recommend:[],
      themeTopYs:[],
      getThemeTopY:null,
      currentIndex:0,
      isShowBackTop:false,
    /*  message:'',
      show:false, */  //笨方法


    }
  },
  components:{
  DetailNavBar,
  DetailSwiper,
  DetailBaseInfo,
  DetailShopInfo,
  Scroll,
  DetailGoodsInfo,
  ParamInfo1,
  DetailCommentInfo,
  GoodsList,
  DetailBottomBar,
  backTop,
  Toast,

  //ItemImgListenner: null,  混入里面


  },
  created(){
    // 1 保存传入的iid
    console.log(this.$route.params.iid)//路由iid 获取值也要iid
    this.iid=this.$route.params.iid
    // 2 根据iid 请求详细数据
    getDetail(this.iid).then(res=>{
      console.log(res)

      // 1 获取顶部的图片轮播数据
      const data = res.result
      this.topImages = data.itemInfo.topImages
       // console.log(this.topImages )

        // 2 获取商品信息
        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        console.log(this.goods)
        // 3 创建店铺信息
        this.shop = new Shop(data.shopInfo)
        console.log(this.shop)
        // 4  获取商品详细信息
        this.detailInfo = data.detailInfo


        console.log(data.itemParams.info)
        console.log(data.itemParams.rule)

        // 5 保存参数信息
        this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        // 6 评论信息
        if (data.rate.crate !==0) {
        this.commentInfo = data.rate.list[0]
        console.log(data.rate.list[0])
    //第一次获取值不对  没有加载呢
        //当所有数据赋值完成之后再拿这个数据 直接这样还是那要不到 要等一会才能拿到
        // this.themeTopYs = []
        // this.themeTopYs.push(0)
        // this.themeTopYs.push(this.refs.params.$el.offsetTop)
        // this.themeTopYs.push(this.refs.comment.$el.offsetTop)
        // this.themeTopYs.push(this.refs.recommend.$el.offsetTop)
    // 第二次 图片没加载
        // this.$nextTick(()=>{ //当上面的所有完成后回调这个
        // // 是根据最新的数据 对应的dom 已经被渲染出来
        // // 但是图片依然是没有加载完成的  offsetTop 是不包含图片的
        //   this.themeTopYs = []
        //   this.themeTopYs.push(0)
        //   this.themeTopYs.push(this.refs.params.$el.offsetTop)
        //   this.themeTopYs.push(this.refs.comment.$el.offsetTop)
        //   this.themeTopYs.push(this.refs.recommend.$el.offsetTop)
        //   console.log(this.themeTopYs)
        // })
        this.getThemeTopY = debounce(()=>{
          this.themeTopYs = []
          this.themeTopYs.push(0)
          this.themeTopYs.push(this.$refs.params.$el.offsetTop/* -44 */)
          this.themeTopYs.push(this.$refs.comment.$el.offsetTop/* -44 */)
          this.themeTopYs.push(this.$refs.recommend.$el.offsetTop/* -44 */)
          this.themeTopYs.push(Number.MAX_VALUE)

          console.log(this.themeTopYs)
        })
    }
    })
     // 请求推荐数据
    getRecommend().then(res=>{
      this.recommend=res.data.list
      console.log(res)
    })

  },
  mounted(){


  },
  methods:{
    ...mapActions(['addCart']),
    // ...mapActions({
    //   add:"addCart"
    // }),
    imageLoad(){

      this.$refs.scroll.refresh()
      this.getThemeTopY()
    },
    titleClick(index){
      this.$refs.scroll.scrollTo(0,- this.themeTopYs[index],500)

    },
    contentScroll(position){
      // 1 获取y值
      const positionY = -position.y
      // console.log( this.themeTopYs.length)
      // 2 对y值进行对比
      let length = this.themeTopYs.length
      for(var i = 0; i < length-1 ;i++){
        // console.log(i)
        // console.log(this.themeTopYs)

        // if( this.currentIndex!= i&&(i<length -1 && positionY>= this.themeTopYs[i] &&  positionY< this.themeTopYs[i+1])
        //   ||(i ===length -1 && positionY>= this.themeTopYs[i])) {
          if( this.currentIndex!= i&&( positionY>= this.themeTopYs[i] &&  positionY< this.themeTopYs[i+1])) {

          // console.log(this.themeTopYs[i])

            this.currentIndex = i
            console.log(i)
            this.$refs.nav.currentIndex = this.currentIndex//this.currentIndex
        }
        // if((i < length - 1 && positionY >= this.themeTopYs[i] && this. positionY < this.themeTopYs[i+1]) ||
        //   (i ===length -1 && positionY>= this.themeTopYs[i]) ){
        //   console.log(i)

        // }

          // 3 是否显示回到顶部
          this.isShowBackTop=-position.y > 1200  //在home复制过来的
      }

    },
    backTop(){
        //this.$refs.scroll.scroll.scrollTo(0,0,1000)   //在home复制过来的
        this.$refs.scroll.scrollTo(0,0,1000)
      },
      addToCart(){

        //1 获取当前商品需要展示信息
        // console.log(111111)
        const product = {}
        product.img = this.topImages[0]
        product.title = this.goods.title
        product.desc= this.goods.desc
        product.price= this.goods.realPrice
        product.iid= this.iid
        console.log(product)
        //2 将商品添加到购物车
        // this.$store.cartList.push() 要啊通过mutation修改state
        // this.$store.commit('addCart',product)
        // this.$store.dispatch('addCart',product).then(res =>{
        //   console.log(res)
        // })

        this.addCart(product).then(res =>{
          /* this.show = true
          this.message = res

          setTimeout(() => {       // 笨方法
            this.show = false
            this.message = ''

          },1500) */
          console.log(res)
          this.$toast.show("恭喜你添加成功了哦!",2000)
        })

        // this.add(product).then(res =>{
        //   console.log(res)
        // })

      }
  }
}
</script>

<style scoped>
#detail{
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: 100vh;
}
.content{
  /* 100%是父元素的100% */
  height: calc(100% - 44px - 49px);
/* 运算符前后要保留一个空格 */
  overflow: hidden;
}
.detail-nav{
  position: relative;
  z-index:9px;
  background-color: #fff;
}

</style>