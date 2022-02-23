import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board/Board'
import ContentDetail from '@/components/Board/ContentDetail'
import Create from '@/components/Board/Create'
import Notice from '@/components/Notice/Notice'
import NoticeWrite from '@/components/Notice/Write'
import NoticeDetail from '@/components/Notice/NoticeDetail'
import IssueList from '@/components/Issue/IssueList'
import IssueListDetail from '@/components/Issue/IssueListDetail'
import IssueChange from '@/components/Issue/IssueChange'
import IssueWrite from '@/components/Issue/Write'
import Project from '@/components/Project/Project'
import ProjectWrite from '@/components/Project/Write'
import ProjectDetail from '@/components/Project/ProjectDetail'
import ProjectOutputs from '@/components/Project/ProjectOutputs'
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
            path: '/notice/detail/:number',
            name: 'NoticeDetail',
            component: NoticeDetail
        },
        {
            path: '/issueList',
            name: 'IssueList',
            component: IssueList
        },
        {
            path: '/issueList/write/:number?',
            name: 'IssueWrite',
            component: IssueWrite
        },
        {
            path: '/issueList/detail/:number',
            name: 'IssueListDetail',
            component: IssueListDetail
        },
        {
            path: '/issueChange',
            name: 'IssueChange',
            component: IssueChange
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
        },
        {
            path: '/project/write/:number?',
            name: 'ProjectWrite',
            component: ProjectWrite
        },
        {
            path: '/projectoutputs',
            name: 'ProjectOutputs',
            component: ProjectOutputs
        },
        {
            path: '/project',
            name: 'Project',
            component: Project
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