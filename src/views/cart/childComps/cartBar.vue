<template>
  <div class="cart-bar">
    <div class="check-content">
      <check-button :value="isSlectAll" @click.native="selectAll" class="check-button"></check-button>
      <span>全选</span>
    </div>
    <div class="total">合计:{{totalPrice}}</div>
    <div class="calc" @click="calcClick">结算({{checkLength}})</div>
    </div>

</template>

<script>
import CheckButton from './checkButton'
export default {
  name: "care-bar",
  data() {
    return {

    }
  },
  components:{
    CheckButton,
  },
  computed:{
    totalPrice(){
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((pre,item) => {
        return  pre + item.price * item.count
      }, 0 ).toFixed(2) // 0是初始化值
    },
    checkLength(){
      console.log(this.$store.state.cartList.length)
      return  this.$store.state.cartList.filter(item => item.checked ).length
    },
    isSlectAll(){
      // if (this.$store.state.cartList.length ===0) {
      //   return false
      // }else{
      // return  this.$store.state.cartList.filter(item => item.checked ).length===this.$store.state.cartList.length
      // }  下边这个性能高一点
      if (this.$store.state.cartList.length ===0) {
        return false
      }else{
      return  !this.$store.state.cartList.find(item => !item.checked) // 找是否有没有选择中的 有 取反
      }
    },

  },
  methods:{
    selectAll(){
      console.log('-------')
      if(this.isSlectAll){ //全部选中
        this.$store.state.cartList.forEach(item => item.checked = false)
      }else{
        this.$store.state.cartList.forEach(item => item.checked = true)
      }

      //this.$store.state.cartList.forEach(item => item.checked = !this.isSelectAll)  //在这不可以 上边要是也用的遍历的话 这两个会乱
    },
    calcClick(){
      if(!this.isSlectAll){
          this.$toast.show("请选择购买商品",2000)


      }

    }
  }
}
</script>

<style scoped>
.cart-bar{
  height: 40px;
  background-color: #eee;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  line-height: 40px;
  display: flex;
  font-size: 14px;

}
.check-content{
  display:flex;
  align-items: center;
  margin-left: 10px;
  width: 60px;


}
.check-button{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 5px;

}
.total{
  margin-left: 25px;
  flex: 1;
}
.calc{
  background-color: orangered;
  width: 80px;
  color: #fff;
  text-align: center;
  font-size:  700;




}
</style>