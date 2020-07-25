<template>
  <div class="wrapper" ref="aa ">
    <ul class="content">
      <button @click="click1">按钮</button>
      <li>我是1</li>
      <li>我是2</li>
      <li>我是3</li>
      <li>我是4</li>
      <li>我是5</li>
      <li>我是6</li>
      <li>我是7</li>
      <li>我是8</li>
      <li>我是9</li>
      <li>我是10</li>
      <li>我是11</li>
      <li>我是12</li>
      <li>我是13</li>
      <li>我是14</li>
      <li>我是15</li>
      <li>我是16</li>
      <li>我是17</li>
      <li>我是18</li>
      <li>我是19</li>
      <li>我是20</li>
      <li>我是21</li>
      <li>我是22</li>
      <li>我是23</li>
      <li>我是24</li>
      <li>我是25</li>
      <li>我是26</li>
      <li>我是27</li>
      <li>我是28</li>
      <li>我是29</li>
      <li>我是30</li>
      <li>我是31</li>
      <li>我是32</li>
      <li>我是33</li>
      <li>我是34</li>
      <li>我是35</li>
      <li>我是36</li>
      <li>我是37</li>
      <li>我是38</li>
      <li>我是39</li>
      <li>我是40</li>
      <li>我是41</li>
      <li>我是42</li>
      <li>我是43</li>
      <li>我是44</li>
      <li>我是45</li>
      <li>我是46</li>
      <li>我是47</li>
      <li>我是48</li>
      <li>我是49</li>
      <li>我是50</li>
      <li>我是51</li>
      <li>我是52</li>
      <li>我是53</li>
      <li>我是54</li>
      <li>我是55</li>
      <li>我是56</li>
      <li>我是57</li>
      <li>我是58</li>
      <li>我是59</li>
      <li>我是60</li>
      <li>我是61</li>
      <li>我是62</li>
      <li>我是63</li>
      <li>我是64</li>
      <li>我是65</li>
      <li>我是66</li>
      <li>我是67</li>
      <li>我是68</li>
      <li>我是69</li>
      <li>我是70</li>
      <li>我是71</li>
      <li>我是72</li>
      <li>我是73</li>
      <li>我是74</li>
      <li>我是75</li>
      <li>我是76</li>
      <li>我是77</li>
      <li>我是78</li>
      <li>我是79</li>
      <li>我是80</li>
      <li>我是81</li>
      <li>我是82</li>
      <li>我是83</li>
      <li>我是84</li>
      <li>我是85</li>
      <li>我是86</li>
      <li>我是87</li>
      <li>我是88</li>
      <li>我是89</li>
      <li>我是90</li>
      <li>我是91</li>
      <li>我是92</li>
      <li>我是93</li>
      <li>我是94</li>
      <li>我是95</li>
      <li>我是96</li>
      <li>我是97</li>
      <li>我是98</li>
      <li>我是99</li>
      <li>我是100</li>
    </ul>
  </div>

</template>

<script>
import BScroll from 'better-scroll'
//import func from '../../../vue-temp/vue-editor-bridge'
export default {
  name:'Category',
  data(){
    return {
      scroll:null

    }
  },

  created(){

    this.scroll = new BScroll('.wrapper',{

    })
  },

  mounted(){
   // this.scroll = new BScroll('.wrapper',{}
   //默认情况下不会实时监听
   //0和1都不侦测 2侦测  滚动过程中侦测 后续惯性不侦测 3 都会侦测

    this.scroll = new BScroll('.wrapper',{
      probeType:2 ,
      click:true , //这样才能监听到按钮点击
      pullUpLoad:true, //上啦加载更多
    })
    //this.scroll = new BScroll('this.$refs.aa',{ })//推荐
    this.scroll.on('scroll',(position)=>{
    //默认情况下不会实时监听
    console.log(position)
    })

    this.scroll.on('pillingUp',function(){
      console.log('上拉加载更多')
  //发送网络请求 加载新的数据

  // 等数据完成后 , 并且新数据展示出来后

     // this.scroll.finishPullUp()
      })


  },
  methods:{
    click1(){
      console.log('1111111111')
    }
  }


}
</script>

<style scoped>
.wrapper{
  height: 200px;
  background-color: red;
  overflow: hidden;
}

</style>