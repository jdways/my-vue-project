<template>

    <div>
        <mt-header title="multiple button">
  <router-link to="/" slot="left">
    <mt-button icon="back" @click="next">back</mt-button>
    <mt-button @click="prevent">close</mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
        <h3>{{title}}--{{name1}}</h3>
        <input type="button" value="前进" @click="next"/>
        <input type="button" value="后进" @click="prevent"/>
        <ul>
            <li><router-link to="/">Hello页面</router-link></li>
            <li><router-link :to="word">word页面</router-link></li>
        </ul>

        <mt-navbar v-model="selected">
  <mt-tab-item id="1">option A</mt-tab-item>
  <mt-tab-item id="2">option B</mt-tab-item>
  <mt-tab-item id="3">option C</mt-tab-item>
</mt-navbar>

    </div>
</template>

<script>
import { Navbar, TabItem } from 'mint-ui';
    export default{
        props:['name1'],
        data(){
            return{
                title:'我是项目主入口',
                word:'/word'
            }
        },
        methods:{
            next(){
                this.$router.go(1);
            },
            prevent(){
                this.$router.go(-1);
            }
        }
    }
</script>


<style>
    a{
        text-decoration:none;
    }
    .router-link-exact-active{
        color:#f00;
    }
</style>