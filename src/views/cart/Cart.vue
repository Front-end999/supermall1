<template>
  <div>
    <nav-bar class="nav-bar">
      <template #center>
        <div>购物车({{cartLength}})</div>
      </template>
    </nav-bar>
    <!-- 商品列表 -->
    <cart-list></cart-list>

    <!-- 底部汇总 -->
    <cart-bar></cart-bar>

  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import cartList from "./childComps/cartList"
import cartBar from "./childComps/cartBar"

//  import {mapGetters} from 'vuex'



export default {
  name: 'Cart',
  data () {
    return {

    }

  },
  computed: {
    // cartLength(){
    //   return this.$store.state.cartList.length
    // },
    cartLength () {
      return this.$store.getters.cartLength
    },



    //两种语法 对象数组
    //...mapGetters(['cartLength' , 'cartList']),  //把这两个转换为计算属性
    //   ...mapGetters({
    //     Length:'cartLength',  //可用Length 替代cartLength
    //     List:'cartList'

    //   })
  },
  components: {
    NavBar,
    cartList,
    cartBar
  }

}
</script>

<style>
.nav-bar {
  color: #fff;
  background-color: #ff8198;
  font-weight: 700;
}
</style>