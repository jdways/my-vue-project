<template>
  <div class="hello">
    <h1 @click="info" :class="color">{{ msg }}</h1>

    <ul>
      <li  v-for="item in list">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'Welcome',
  data () {
    return {
      msg: '我是Hello组件',
      color: 'color',
      list:[],
    }
  },
  created(){
      this.getList()
    },
  methods: {
    info () {
      console.log('你点击了我')
        //获取数据 部分
        this.$http.get('https://cnodejs.org/api/v1/topics').then(function(res) {
            console.log(res.data);
            this.list = res.data;
            alert(this.list);
       })
    },
    getList(){
      Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
      this.$http.get('https://cnodejs.org/api/v1/topics',{
      //传参数
      params: {
        'tab': 'ask',
        'page':1,
        'limit':10,

      }
}).then(({data})=> {
        Indicator.close();
        //console.log(data.data);
        //this.list = data;
       // var t=JSON.stringify(data.data);
        var t=data.data;
        console.log(t);
        this.list=t;

      });
    },
  }
}
</script>
<style>
    .color{
        color:#630;
    }

     ul {
      overflow: hidden;
      padding: 0;
      margin: 0;
    }
      li {
        position: relative;
        list-style: none;
        line-height: 49px;
        text-align: center;
      }
</style>