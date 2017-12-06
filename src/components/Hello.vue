<template>
<div>
  <div class="nav" >
    <!-- <mt-tab-item v-for="item in tabs" >{{item.title}}</mt-tab-item> -->
    <!-- <mt-navbar v-model="selected">
      <mt-tab-item id="1" class="active" @click="goRouter(1)">全部</mt-tab-item>
      <mt-tab-item id="2" @click="goRouter(2)">精华</mt-tab-item>
      <mt-tab-item id="3" @click="goRouter(3)">分享</mt-tab-item>
      <mt-tab-item id="2" @click="goRouter(4)">问答</mt-tab-item>
      <mt-tab-item id="3" @click="goRouter(5)">招聘</mt-tab-item>
    </mt-navbar> -->
    <div class="mint-navbar" >
        <div class="mint-tab-item" v-for="(item, index) in tabs" :class="{ active: item.tab === ($route.path || '') }" @click="goRouter(index+1)">
          <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">{{item.title}}</div>
        </div>
        

    </div>
</div>
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
     <mt-loadmore  :bottom-method="loadBottom"  ref="loadmore" >
        <div class="mui-card"  >
            <ul class="mui-table-view" >
              <li class="mui-table-view-cell mui-table mui-table1" v-for="item in list"  @click="goRouter1(item.id)">
                  <img class="mui-media-object mui-pull-right mui-text-right" :src="item.author.avatar_url">
                  <div class=" mui-table-cell mui-col-xs-10 mui-text-left">
                    <div class='mui-ellipsis'>{{item.title}}</div>
                     <p class='mui-ellipsis mui-text-right'>{{item.author.loginname}}</p>
                  </div>
              </li>
            </ul>
        </div> 
     </mt-loadmore> 
  
     <!--    <mt-loadmore :top-method="loadTop" :top-status.sync="topStatus">
  <ul>
    <li v-for="item in list">{{ item.title }}</li>
  </ul>
  <div slot="top" class="mint-loadmore-top">
    <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
    <span v-show="topStatus === 'loading'">Loading...</span>
  </div>
</mt-loadmore> -->

  <!--  <mt-loadmore :top-method="loadTop"  :bottom-method="loadBottom" :bottom-all-loaded="allLoaded">
      <ul>
        <li v-for="item in list">{{ item.title}}</li>
      </ul>
     </mt-loadmore> -->
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
/*import Nav from '../Nav'*/
import { Indicator } from 'mint-ui'
export default {
  name: 'Hello',
  data () {
    return {
      msg: '我是Hello组件',
      color: 'color',
      list:[],
      pageNo: 1,
      tabs: [
          {
            title: '全部',
            tab: '/'
          },
          {
            title: '精华',
            tab: '/good'
          },
          {
            title: '分享',
            tab: '/share'
          },
          {
            title: '问答',
            tab: '/ask'
          },
          {
            title: '招聘',
            tab: '/job'
          }
        ],
    }
    
  },
  created(){
      this.getList(this.$route.query.tab,10);
       //console.log(this.$route.path);
    },
  
  
    watch: {
    '$route' (to, from) {
    //刷新参数放到这里里面去触发就可以刷新相同界面了
    console.log(this.$route.query.tab);
    var tab=this.$route.query.tab;
    this.getList(tab,10);
    this.pageNo=1;
    //
    }
  },
  mounted(){ 
    //alert(8);
   this.getList(this.$route.query.tab)
      //this.loadPageList();  //初次访问查询列表  
    }, 
  methods: {
    goRouter1(id){ //详细页面跳转
      this.$router.push({path: '/'+id});
    },  
    goRouter(index){
        switch (index) {
          case 1:
            this.$router.push({path: '/',query: {tab: "all"}});
            break;
          case 2:
            this.$router.push({path: '/good',query: {tab: "good"}});
            break;
          case 3:
            this.$router.push({path: '/share',query: {tab: "share"}});
            break;
          case 4:
            this.$router.push({path: '/ask',query: {tab: "ask"}});
            break;
          case 5:
            this.$router.push({path: '/job',query: {tab: "job"}});
            break;
        }
      },
    loadTop(id) { //下拉
      this.$broadcast('onTopLoaded', id);
    },
    loadBottom(id) {//上拉
      //limit+10,
      //this.getList(this.$route.query.tab,);
      this.more();
        setTimeout(() => {
             /* let firstValue = this.list[0];
              for (let i = 1; i <= 10; i++) {
                this.list.unshift(firstValue - i);
              }*/
              this.$refs.loadmore.onBottomLoaded();
            }, 2000);
    },
    
    //获取列表数据
    getList:function(tab,limit){
      console.log(limit);
      Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
      this.$http.get('https://cnodejs.org/api/v1/topics',{
      //传参数
      params: {
        'tab': tab,
        'page':1,
        'limit':limit,

      }
      }).then(({data})=> {
        Indicator.close();
        //console.log(data.data);
        //this.list = data;
       // var t=JSON.stringify(data.data);
        var t=data.data;
        console.log(t);
        this.list=t;
        //this.isHaveMore(true);
      });
    },
    more:function (){  
      // 分页查询  
      var limit=(this.pageNo+1)*10;
      this.pageNo++;
      // this.searchCondition.pageNo = parseInt(this.searchCondition.pageNo) + 1;  
      this.getList1(this.$route.query.tab,limit);
    },  
    isHaveMore:function(isHaveMore){  
      // 是否还有下一页，如果没有就禁止上拉刷新 
      this.allLoaded = true; //true是禁止上拉加载  
      if(isHaveMore){  
        this.allLoaded = false;  
      }  
    },
    getList1:function(tab,limit){
      console.log(limit);
     
      this.$http.get('https://cnodejs.org/api/v1/topics',{
      //传参数
      params: {
        'tab': tab,
        'page':1,
        'limit':limit,

      }
      }).then(({data})=> {
        //console.log(data.data);
        //this.list = data;
       // var t=JSON.stringify(data.data);
        var t=data.data;
        console.log(t);
        this.list=t;
        //this.isHaveMore(true);
      });
    },
  }
}
</script>
<style>
    .color{
        color:#630;
    }

    .mui-content1{
      background-color: #fff;
      padding-top: 44px
    }
     
    .mui-table1{
      display: flex
    }
      .hello{
        position: absolute;
        top:43px;
      }

        .mint-tab-item {
    padding: 12px 0 !important;
  }

  .mint-tab-item-label {
    font-size: 16px !important;
  }
  .active{
    border-bottom: 3px solid #26a2ff;
    color: #26a2ff;
    margin-bottom: -3px;
  }

  .header-nav{position: fixed;left: 0;width: 100%;z-index: 1000;border-bottom: 1px solid #e4e4e4}

  .container{padding: 0 10px;width: 100%;overflow: hidden}

  .nav{
    position: fixed;
    background: #fff;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    border-bottom: 1px solid #ddd;
  }

  li{
    float: left
  }

</style>