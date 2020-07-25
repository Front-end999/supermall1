import axios from 'axios'


export function request (config){
   //1创建实例

  const instance=axios.create({
      baseURL: 'http://152.136.185.210:8000/api/n3',
      timeout:'5000'
    })
      //2axios拦截器
      //axios.interceptors  这是全局拦截  这要局部拦截
      /* instance.interceptors.request.use(config =>{  //请求拦截
        console.log(config)
          // 为什么要拦截数据呢?
          // 1  比如config中的一些信息不符合服务器的要求
          // 2  每次发送网络请求使,都希望在界面上显示一个请求的图标
          // 2  某些请求(比如登录)必须携带一些特殊的信息

        return config  //不返回就不能返回数据了  下边的函数吊用不了了
      },err =>{
        console.log(err)
      }) */

      instance.interceptors.response.use(res => {  //响应拦截
       // console.log(res)
        return res.data
      },err =>{
        console.log(err)
        //return err
      })

    // 3发送网络请求
    return instance(config)

}