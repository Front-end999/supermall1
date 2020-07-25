<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot name='scroll'> </slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll:null,


    }
  },
  mounted(){

                      //细节部分见category  和home平行的组件

    // 第一步创建better-scroll对象
    this.scroll= new BScroll(this.$refs.wrapper,{
      probeType:this. probeType ,
      click:true , //这样才能监听到按钮点击
      pullUpLoad:this.pullUpLoad, //上啦加载更多

    })
    //2监听滚动位置
    this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })

    // scrollHeight  计算影响的卡顿
    // console.log(scroll)
    // this.scroll.refresh()


    //3 监听上拉事件
    if(this.pullUpLoad){
      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      })
    }


  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll&&this.scroll.scrollTo(x,y,time)

    },
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    refresh(){
      console.log('啦啦啦')
      this.scroll&&this.scroll.refresh()
    },
    getScrollY(){
      return this.scroll.y ? this.scroll.y : 0
    }
  }


}
</script>

<style scoped>

</style>