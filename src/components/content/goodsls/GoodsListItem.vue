<template>
  <div class="goods-item">
    <img :src="showImage"
         alt=""
         @load="imgLoad"
         @click="goodsItemClick">
    <!-- 需要监听图片是否加载完成 -->
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <!-- 价格 -->
      <span class="cfav">{{goodsItem.cfav}}</span>
      <!-- 收藏 -->
    </div>
  </div>
</template>

<script>
export default {
  name: "component_name",
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  computed: { //判断看看是首页的图片数据还是详情里面推荐的图片数据
    showImage () {
      console.log(this.goodsItem.image || this.goodsItem.show.img)
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imgLoad () {
      this.$bus.$emit('itemImageLoad')
    },
    goodsItemClick () {
      this.$router.push('/detail/' + this.goodsItem.iid)
      // this.$router.push({        //query方式
      //   path:'/detail',
      //   query:{

      //   }
      // })
    }
  }
}
</script>

<style scoped>
.goods-item {
  padding-bottom: 40px;
  position: relative;
  width: 46%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.jpg") 0 0/14px 14px;
}
</style>