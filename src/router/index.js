import Vue from 'vue'
import Router from 'vue-router'
import Board from '@/components/Board/Board'
import ContentDetail from '@/components/Board/ContentDetail'
import Create from '@/components/Board/Create'
import Notice from '@/components/Notice/Notice'
import NoticeDetail from '@/components/Notice/NoticeDetail'
import NoticeWrite from '@/components/Notice/Write'
import IssueList from '@/components/Issue/IssueList/IssueList'
import IssueListDetail from '@/components/Issue/IssueList/IssueListDetail'
import IssueWrite from '@/components/Issue/IssueList/Write'
import IssueRequestList from '@/components/Issue/Issuerequest/IssueRequestList'
import IssueRequestWrite from '@/components/Issue/Issuerequest/Write'
import IssueRequestDetail from '@/components/Issue/Issuerequest/IssueRequestDetail'
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

// 여기에 등록된 라우터와 다른 페이지에서 클릭 이벤트로 접속하는 라우터가 겹쳐도 무시하도록 수정
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'Main',
            children: [{
                path: "main",
                component: () => import ('@/components/Main/Main'),
                name: 'Main'
            }]
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
            component: () => import('../components/Notice/Notice.vue'),
            name: 'Notice',
            children: [
                {
                    path: 'write/:number?',
                    component: NoticeWrite,
                    name: 'NoticeWrite',
                },
                {
                    path: 'detail/:number',
                    component: NoticeDetail,
                    name: 'NoticeDetail'
                }
            ]
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
            path: '/issuerequest/list',
            name: 'IssueRequestList',
            component: IssueRequestList
        },
        {
            path: '/issuerequest/list/write/:number?',
            name: 'IssueRequestWrite',
            component: IssueRequestWrite
        },
        {
            path: '/issuerequest/list/detail/:number',
            name: 'IssueRequestDetail',
            component: IssueRequestDetail
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
            path: '/project/detail/:number',
            name: 'ProjectDetail',
            component: ProjectDetail
        },
        {
            path: '/projectoutputs',
            name: 'ProjectOutputs',
            component: ProjectOutputs
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
    ]
})