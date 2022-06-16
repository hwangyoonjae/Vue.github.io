import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/Board/Board'
import ContentDetail from '@/components/Board/ContentDetail'
import Create from '@/components/Board/Create'
import Notice from '@/components/Notice/Notice'
import NoticeDetail from '@/components/Notice/NoticeDetail'
import NoticeWrite from '@/components/Notice/Write'
import IssueList from '@/components/Task/IssueList/IssueList'
import IssueListDetail from '@/components/Task/IssueList/IssueListDetail'
import IssueWrite from '@/components/Task/IssueList/Write'
import IssueRequestList from '@/components/Task/Issuerequest/IssueRequestList'
import IssueRequestWrite from '@/components/Task/Issuerequest/Write'
import IssueRequestDetail from '@/components/Task/Issuerequest/IssueRequestDetail'
import CustomerList from '@/components/Task/Customer/CustomerList'
import CustomerWrite from '@/components/Task/Customer/Write'
import CustomerDetail from '@/components/Task/Customer/CustomerDetail'
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
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history', // 주소에 # 제거 방식
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: () => import ('@/components/Main/Main'),
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
            children: [
                {
                    path: 'write',
                    component: NoticeWrite
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
            path: '/issuerequest/list/detail/:id',
            name: 'IssueRequestDetail',
            component: IssueRequestDetail
        },
        {
            path: '/customerlist',
            name: 'CustomerList',
            component: CustomerList
        },
        {
            path: '/customerlist/write/:number?',
            name: 'CustomerWrite',
            component: CustomerWrite
        },
        {
            path: '/customerlist/detail/:number',
            name: 'CustomerDetail',
            component: CustomerDetail
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
        }
    ]
});

export default router;