import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Good from '@/components/Good'
import Share from '@/components/Share'
import Ask from '@/components/Ask'
import AllDetail from '@/components/AllDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path:'/good',
      component:Hello
    },
    {
      path:'/share',
      component:Hello
    },
    {
      path:'/ask',
      component:Hello
    },
    {
      path:'/:id',
      component:AllDetail
    }
  ]
})
