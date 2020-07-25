import Toast from "components/common/toast/Toast"




const obj = {}

obj.install = function(Vue){
  // Vue.prototype.$toast = Toast
  // document.body.appendChild(Toast.$el)

  //1 创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2 new的方式  根据逐渐构造器 创建一个组件对象
  const toast = new toastContrustor

  // 3 将组件对象,手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4 toast.$el 对应的就是那个div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast

 // console.log('toast函数准备好了')
}

export  default obj