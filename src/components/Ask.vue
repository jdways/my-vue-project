<template>
 
  <div class="mui-content">
    <!-- <h1 @click="info" :class="color">{{ msg }}</h1> -->

    <!-- <mt-cell :title="item.title" v-for="item in list">
      <img slot="icon" :src="item.author.avatar_url"  width="34" height="34">
    </mt-cell> -->

    <!-- <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in list" >
            <img class="mui-media-object mui-pull-left" :src="item.author.avatar_url">
            <div class="mui-media-body">
              <p class='mui-ellipsis'>能和心爱的人一起睡觉</p>
            </div>
        </li>
    </ul> -->
    <div class="mui-card" style="margin-bottom: 35px;" >
        <ul class="mui-table-view" >
          <li class="mui-table-view-cell mui-table" v-for="item in list">
              <img class="mui-media-object mui-pull-right mui-text-right" :src="item.author.avatar_url">
              <div class=" mui-table-cell mui-col-xs-10 mui-text-left">
                <div class='mui-ellipsis'>{{item.title}}</div>
                 <p class='mui-ellipsis mui-text-right'>{{item.author.loginname}}</p>
              </div>
          </li>
        </ul>
    </div>
        <!-- <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
            <li class="mui-table-view-cell"  v-for="item in list">
                <div class="mui-table">
                    <div class="mui-table-cell mui-col-xs-10">
                        <h4 class="mui-ellipsis">信息化推进办公室张彦合同付款信息化</h4>
                        <h5>申请人：李四</h5>
                        <p class="mui-h6 mui-ellipsis">Hi，李明明，申请交行信息卡，100元等你拿，李明明，申请交行信息卡，100元等你拿，</p>
                    </div>
                    <div class="mui-table-cell mui-col-xs-2 mui-text-right">
                         <img class="mui-media-object mui-pull-right" :src="item.author.avatar_url">
                    </div>
                </div>
            </li>
        </ul> -->

  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'Ask',
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

    .mui-content{
      background-color: #fff;
      padding-top: 44px
    }
     
    .mui-table{
      display: flex
    }
      .hello{
        position: absolute;
        top:43px;
      }
</style>