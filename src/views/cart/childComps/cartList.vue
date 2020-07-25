<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll" >
      <template #scroll>
          <cart-list-item v-for="(item,index) in cartList " :key="index" :item-info='item'></cart-list-item>
      </template>
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue"
import cartListItem from "./cartListItem.vue"


export default {

  name: "cartList",
  data() {
    return {
      list:{}
    }
  },
  computed:{
    cartList(){
      return  this.$store.getters.cartList
    }
  },
  components:{
    Scroll,
    cartListItem
  },
  activated(){
    console.log(1111)
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list{
    height: 100vh;

}
.content{
  height:  calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}

</style>