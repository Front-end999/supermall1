<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <div>
        <img src="~assets/img/profile/head.jpg" />
        <!-- <img :src=userInfo.img /> -->
      </div>
      <div class="login-info ">
        <div>
          <span>登录/注册</span>
          <!-- <div>userInfo.name</div> -->
        </div>
        <div class="phone">
          <img src="~assets/img/profile/phone.jpg" />
          <span>暂无绑定手机号</span>
          <!-- <div>userInfo.phone</div> -->
        </div>
      </div>

    </a>
  </div>
</template>

<script>
	export default {
    name: "UserInfo",
    props:{
      userInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    data(){
      return{

      }
    }
  }

</script>

<style scoped>
  #user-info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;

  }
  #user-info .clear-fix {

    display: flex;
  }
  #user-info .clear-fix img {
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }


  #user-info .login-info {
    color: #fff;
    margin: 10px 0 0 10px;
  }
  #user-info .login-info .phone {
    position: relative;
    font-size: 13px;
    margin-top: 5px;
    margin-left: 15px;
    font-weight: 300;
  }
  #user-info .login-info .phone img {
    position: absolute;
    width: 12px;
    height: 18px;
    left: -15px;
    top: 0px;
  }
</style>