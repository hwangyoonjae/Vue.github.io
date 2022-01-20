import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board/Board'
import ContentDetail from '@/components/Board/ContentDetail'
import Create from '@/components/Board/Create'
import Main from '@/components/Main/Main'
import Notice from '@/components/Notice/Notice'
import NoticeWrite from '@/components/Notice/Write'
import Project from '@/components/Project/Project'
import Login from '@/components/Login/Login'
import Signup from '@/components/Login/Signup'
import Todo from '@/components/Todo/TodoMain'
import Schedule from '@/components/Timetable/Timetable'

import test from '@/components/test'

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
    },
    {
      path: '/main/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/main/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/timetable',
      name: 'Schedule',
      component: Schedule
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    },
    {
      path: '/notice/write',
      name: 'NoticeWrite',
      component: NoticeWrite
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
