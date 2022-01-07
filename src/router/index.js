import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board/Board'
import ContentDetail from '@/components/Board/ContentDetail'
import Create from '@/components/Board/Create'
import Main from '@/components/Main/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/board/free',
      name: 'Board',
      component: Board
    },
    {
      path: '/board/free/detail/:contentId',
      name: 'ContentDetail',
      component: ContentDetail
    },
    {
      path: '/board/free/create/:contentId?', // ?는 선택적으로
      name: 'Create',
      component: Create
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    }
  ]
})
