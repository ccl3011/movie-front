import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// view
import Main from '../views/Main'
import Movie from '../views/Movie'
import Confirm from '../views/confirm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/movie',
      name: 'movie',
      component: Movie
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: Confirm,
      props: true
    }
    
  ]
})
