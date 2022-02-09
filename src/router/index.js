import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board/Board'
import ContentDetail from '@/components/Board/ContentDetail'
import Create from '@/components/Board/Create'
import Notice from '@/components/Notice/Notice'
import NoticeWrite from '@/components/Notice/Write'
import NoticeDetail from '@/components/notice/ContentDetail'
import IssueList from '@/components/Issue/IssueList'
import IssueChange from '@/components/Issue/IssueChange'
import Project from '@/components/Project/Project'
import ProjectWrite from '@/components/Project/Write'
import Login from '@/components/Login/Login'
import Signup from '@/components/Login/Signup'
import Todo from '@/components/Todo/TodoMain'
import Schedule from '@/components/Timetable/Timetable'
import AdminList from '@/components/Person/AdminList'
import UserList from '@/components/Person/UserList'

import test from '@/components/test'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            redirect: '/main',
        },
        {
            path: '/main',
            component: () =>
                import ('@/components/Main/Main'),
        },
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
            path: '/notice/write/:number?',
            name: 'NoticeWrite',
            component: NoticeWrite
        },
        {
            path: '/project/detail/:number',
            name: 'NoticeDetail',
            component: NoticeDetail
        },
        {
            path: '/issueList',
            name: 'IssueList',
            component: IssueList
        },
        {
            path: '/issueChange',
            name: 'IssueChange',
            component: IssueChange
        },
        {
            path: '/project/:contentId',
            name: 'Project',
            component: Project
        },
        {
          path: '/project/write',
          name: 'ProjectWrite',
          component: ProjectWrite
        },
        {
            path: '/userlist',
            name: 'UserList',
            component: UserList
        },
        {
            path: '/adminlist',
            name: 'AdminList',
            component: AdminList
        },
        {
            path: '/test',
            name: 'test',
            component: test
        }
    ]
})