<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
            <img :src="item.image" alt="" @load="imgageLoad">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"
export default {
  name: "HomeSwiper",
  props:{
    banners:{
      type:Array,
      default(){
        return [1,2,3,4]
      }
    }
  },
  data() {
    return {
      isLoad:false
    }
  },
  components:{
    Swiper,
    SwiperItem
  },
  methods:{
    imgageLoad(){
      if(!this.isLoad){
      this.$emit('swiperImageLoad')
      this.isLoad=true
      }
    }
  }
}
</script>

<style scoped>

</style>