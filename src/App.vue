<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <div style="font-size:18px" >{{title}}</div> -->
   <!--  <MyHead v-bind:name1="name1"></MyHead> -->
    <!-- <Nav></Nav> -->
    <router-view></router-view>
  </div>
</template>

<script>
//import MyHead from './components/MyHead'
import Nav from './components/Nav'
export default {
  name: 'app',
  data(){
    return{
        title:'我是项目主入口',
        name1:"hello"
    }
  },
  components: {
    //Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;

}

body{
  margin:0;
  background-color: #fff
}
</style>
