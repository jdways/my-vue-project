<template>
<div>
  <mt-header fixed  title="主题">
    <!-- <router-link to='/' slot="left">
    <mt-button icon="back" v-on:click="$router.go(-1)">back</mt-button>
  </router-link> -->
  <div  slot="left" @click="history.go(-1)"><mt-button icon="back" v-on:click="$router.go(-1)">back</mt-button></div>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
  <div class="mui-content mui-content1">
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
    <div class="mui-card" style="margin-bottom: 35px;" v-html='list' >
        {{list}}
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
  </div>
</template>

<script>
import { Indicator } from 'mint-ui'
export default {
  name: 'Good',
  data () {
    return {
      msg: '我是Hello组件',
      color: 'color',
      list:[],
    }
  },
  created(){
      this.getList(this.$route.path);
      console.log(this.$route.query.gid);
    },
     watch: {
    '$route' (to, from) {
    //刷新参数放到这里里面去触发就可以刷新相同界面了

   // alert(tab)
    //
    }
  },
  methods: {
    handleClose(){
      history.back();
    },
    info () {
      console.log('你点击了我')
        //获取数据 部分
        this.$http.get('https://cnodejs.org/api/v1/topics').then(function(res) {
            console.log(res.data);
            this.list = res.data;
            alert(this.list);
       })
    },
    getList(id){
      Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
      this.$http.get('https://cnodejs.org/api/v1/topic'+id,{
      //传参数
      
}).then(({data})=> {
        Indicator.close();
        //console.log(data.data);
        //this.list = data;
       // var t=JSON.stringify(data.data);
        var t=data.data;
         var s=t.content.replace(/<[^>]+>/g,"");
        this.list=t.content;

      });
    },
    //s是否
  }
}
</script>
<style>
    .color{
        color:#630;
    }

    .mui-content{
      background-color: #fff;
      padding-top: 40px
    }
     
    .mui-table{
      display: flex
    }
    img{
      width: 100%
    }
</style>