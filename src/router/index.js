import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '@/components/Board/Board'
import ContentDetail from '@/components/Board/ContentDetail'
import Create from '@/components/Board/Create'
import Notice from '@/components/Notice/Notice'
import NoticeDetail from '@/components/Notice/NoticeDetail'
import NoticeWrite from '@/components/Notice/Write'
import Login from '@/components/Login/Login'
import Signup from '@/components/Login/Signup'
import Employeelist from '@/components/Employee/Employeelist.vue'
import Checkattendance from '@/components/Checkattendance/Checkattendance.vue'
import CheckattendanceDetail from '@/components/Checkattendance/CheckattendanceDetail.vue'
import CheckattendanceWrite from '@/components/Checkattendance/Write.vue'
import Commute from '@/components/Commute/Commute.vue'
import CommuteWrite from '@/components/Commute/Write.vue'
import ApplyCommute from '@/components/Commute/Applycommute.vue'
import Applycommutewrite from '@/components/Commute/Applycommutewrite.vue'

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
            redirect: '/login'
        },
        {
            path: '/main',
            name: 'Main',
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
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/notice',
            name: 'notice',
            component: Notice
        },
        {
            path: '/notice/write',
            name: 'write',
            component: NoticeWrite
        },
        {
            path: '/notice/detail/:number',
            name: 'NoticeDetail',
            component: NoticeDetail
        },
        {
            path: '/employeelist',
            name: 'Employeelist',
            component: Employeelist
        },
        {
            path: '/checkattendance',
            name: 'Checkattendance',
            component: Checkattendance
        },
        {
            path: '/checkattendance/write/:number?',
            name: 'CheckattendanceWrite',
            component: CheckattendanceWrite
        },
        {
            path: '/checkattendance/detail/:number',
            name: 'CheckattendanceDetail',
            component: CheckattendanceDetail
        },
        {
            path: '/commute',
            name: 'Commute',
            component: Commute
        },
        {
            path: '/commute/write',
            name: 'CommuteWrite',
            component: CommuteWrite
        },
        {
            path: '/applycommute',
            name: 'ApplyCommute',
            component: ApplyCommute
        },
        {
            path: '/applycommutewrite',
            name: 'Applycommutewrite',
            component: Applycommutewrite
        }
    ]
});

export default router;