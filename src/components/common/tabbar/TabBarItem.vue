/* eslint-disable vue/no-dupe-keys */
<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <slot name="item-icon"></slot>
    <slot name="item-text"></slot> -->

       <div v-if="!isActive"><slot  name="item-icon"></slot></div>
       <div  v-else><slot  name="item-icon-active"></slot></div>
       <div :style="activeStyle"><slot  name="item-text"></slot> </div>       <!-- 行内样式 动态绑定计算属性 -->

  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return{
      //isActive:true
    }

  },
  computed:{
    isActive(){

      return this.$route.path.indexOf(this.path) !==-1
      //return this.$route.path.inClude(this.path)
    },
    activeStyle(){
      return this.isActive ? {color:this.activeColor} : {}

    }
  },
  methods:{
    itemClick(){

     // console.log("监听到了")
      this.$router.push(this.path).catch(err=>{
        console.log(err)
      })
    }
  }
}

</script>

<style>
.tab-bar-item{
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width:24px ;
  height:24px ;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}


</style>