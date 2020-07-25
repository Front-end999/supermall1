import Vue from 'vue'
import Vuex from 'vuex'
//import { resolve, reject } from 'core-js/fn/promise'

// import getters from './getters'
// import getters from './getters'

//1 安装插件
Vue.use(Vuex)

// 2 使用插件
const store = new Vuex.Store({
  state:{
    cartList: []
  },
  mutations:{
    // addCart(state,payload){
    //   // state.cartList.push(payload)
    //   let  oldProduct = null
    //   for(let item of state.careList){
    //     if(item.iid === payload.iid){
    //       oldProduct = item
    //     }
    //     if(oldProduct){
    //       oldProduct.count += 1  // count 数量
    //     }else{
    //       payload.count = 1
    //       state.cartList.push(payload)

    //     }
    //   }
    //   console.log(state.cartList)
    // }
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      payload.checked = true
      state.cartList.push(payload)

    }
  },

  actions:{
    addCart(context,payload){
      return new Promise((resolve,reject) => {
        // state.cartList.push(payload)
        //let  oldProduct = null
        //  /*  for(let item of context.state.careList){
        //     if(item.iid === payload.iid){
        //       oldProduct = item
        //     } */
        let  oldProduct = context.state.cartList.find(item =>item.iid === payload.iid)
        if(oldProduct){  //数量+1
          context.commit('addCounter',oldProduct)
          //oldProduct.count += 1  // count 数量
          resolve('当前商品数量+1')
        }else{
          payload.count = 1
          context.commit('addToCart',payload)
          resolve('添加了新的商品')


        }
        console.log(context.state.cartList)
      })

    }

  },
  getters:{
    cartLength(state) {
      // console.log(state.cartList.length)
      return state.cartList.length

    },
    cartList(state) {
      return state.cartList
    }
  },

})


//3 挂载
export default store