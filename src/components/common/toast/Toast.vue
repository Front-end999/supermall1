<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name: "toast",
  props:{
    // message:{
    //   type:String,
    //   default:''
    // },
    // show:{
    //   type:Boolean,
    //   default:false
    // }

  },
  data() {
    return {
      message:'',
      isShow:false

    }
  },
  methods:{
    show (message = '默认文字',duration = 2000) {
      this.isShow = true
      this.message = message
      setTimeout(() =>{
        this.isShow = false
      this.message = ''
      }, duration)
    }
  }
}
</script>

<style scoped>
.toast{
  position: fixed;
  top: 50%;
  left: 50%;
  background-color:rgba(0, 0, 0, .75);
  transform:translate(-50%,-50%) ;
  color: #fff;
  padding: 8px 10px;
  z-index: 9999;
  white-space:nowrap
}
</style>