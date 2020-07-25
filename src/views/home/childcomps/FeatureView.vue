<template>
  <div class="feature">
    <a href="https://act.mogujie.com/zzlx67" >
      <img src="~assets/img/home/recommend_bg.jpg" alt="" @load="imgageLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: "FeatureView",
  data() {
    return {

    }
  },
  methods:{
    imgageLoad(){

      this.$emit('swiperImageLoad3')
    }
  }
}
</script>

<style scoped>
.feature img {
    width: 100%;
    padding: 0;
    margin: 0;
  }

</style>