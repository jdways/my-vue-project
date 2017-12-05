<template>
<div class="nav" v-model="selected">
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
</template>
 
<script type="es6">
  export default {
    name: 'Nav',
    computed: {
    	selected: {
    		get(){
    			//return this.$store.getters.selected
		    },
		    set(nav) {
    			const index = nav.substr(-1)
					//this.$store.commit('setHeadNav', nav)
			    this.goRouter(Number(index))
		    }
	    }
    },
    data () {
      return {
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
        ]
      }
    },
    methods: {
      goRouter(index){
        switch (index) {
          case 1:
            this.$router.push({path: '/'});
            break;
          case 2:
            this.$router.push({path: '/good'});
            break;
          case 3:
            this.$router.push({path: '/share'});
            break;
          case 4:
            this.$router.push({path: '/ask'});
            break;
          case 5:
            this.$router.push({path: '/job'});
            break;
        }
      }
    }
  }
</script>

<style>
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
