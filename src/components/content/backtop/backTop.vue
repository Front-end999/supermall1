<template>
  <div class="back-top" >
    <img src="~assets/img/common/top.png" alt="回到上面">
  </div>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {

    }
  },

}
</script>

<style scoped>
  .back-top{
    position: fixed;
    right: 6px;
    bottom: 50px;

  }
  .back-top img{
    width: 43px;
  }

</style>