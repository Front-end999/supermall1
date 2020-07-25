module.exports = {
  css:{
    loaderOptions: {
        postcss: {
            plugins: [
                require('postcss-plugin-px2rem')({
                    rootValue: 37.5, //换算基数， 默认100  ，可以设置为75这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                    // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                    propWhiteList: ['ignore','tab-bar','tab-bar-item'],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                    // propBlackList: [], //黑名单
                    exclude: /(node_module)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                    // selectorBlackList: [], //要忽略并保留为px的选择器
                    // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                    // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                    mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                    minPixelValue: 1 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                }),
            ]
        }
    }
  }











  /*plugins: {
    /* autoprefixer: {},
    "postcss-px-to-viewport":{
  viewportWidth:375,  //视窗的宽度,对应的是设计稿的宽度
  viewportHeight:667,  //视窗的宽度,对应的是设计稿的高度
  unitPrecision: 5,      //指定px转换的最多的小数位数
  viewportUnit:['ignore','tab-bar','tab-bar-item'],  //这里面的内容不转换
  miniPixelValue:1 ,   //小于或等于1px不转换
  mediaQuery:false,   //允许在媒体查询中转换px
  exclude:[/^TabBar.vue/]   //数组里面必须是正则
} */
  //}
}

