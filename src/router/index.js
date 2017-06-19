import Vue from 'vue'
import Router from 'vue-router'

import index from '../views/index'
import modelList from '../views/modelList'
import search from '../views/search'
import userCenter from '../views/userCenter'
//import login from '../components/user/login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/list',
      name: 'modelList',
      component: modelList
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
  ]
})
