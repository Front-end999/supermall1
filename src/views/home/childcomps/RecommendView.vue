<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt=""  @load="imgageLoad">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props:{
    recommends:{
      type:Array
    }
  },
  data() {
    return {

    }
  },
  methods:{
    imgageLoad(){

      this.$emit('swiperImageLoad2')
    }
  }
}
</script>

<style>
  .recommend{
    display: flex;
    max-width: 100%;
    padding: 10px 0 20px;
    border-bottom: 6px solid #eee ;

  }
  .recommend-item{
    flex:1;
    text-align: center;
    font-size: 12px;
  }
.recommend-item img{
  width:85%;
  margin:0 auto;
  margin-bottom: 8px;
}

</style>