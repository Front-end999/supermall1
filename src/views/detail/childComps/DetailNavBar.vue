<template>
  <div id='navbar'>
    <nav-bar>
      <template #center >
        <div class="title">
          <div v-for="(item,index) in titles" :key="item" class="title-item" :class="{active:index===currentIndex}" @click="titleClick(index)">{{item}}</div>
        </div>
      </template>
      <template #left >
        <div class="left" @click="backClick">
          <img src="~assets/img/common/back.svg" alt="">
        </div>
      </template>

    </nav-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  name: "component_name",
  data() {
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  components:{
    NavBar
  },
  methods:{
    titleClick(index){
    this.currentIndex=index
    this.$emit('titleClick',index)

    },
    backClick(){
      this.$router.go(-1)
      // this.$router.back()
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  flex-direction:row;
  font-size: 13px;
}

.title-item{
  flex: 1;
}
.left{
  width: 100%;
  text-align: center;
}
.left img{
  margin-top: 12px;

}
.active{
  color: hotpink;
}
</style>