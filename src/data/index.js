export default {
    Admin: [{
            division: 'admin',
            admin_id: 1,
            id: 'hyj118',
            name: '황윤재',
            email: 'hyj118@naver.com',
            createdat: '2018-09-11 11:42:11',
            updated_at: '2022-01-26 11:42:11'
        },
        {
            division: 'admin',
            admin_id: 2,
            id: 'hyj2001118',
            name: '홍길동',
            email: 'hyj2001118@naver.com',
            createdat: '2018-09-11 11:42:11',
            updated_at: '2022-01-26 11:42:11'
        },
        {
            division: 'admin',
            admin_id: 3,
            id: 'hyj90632',
            name: '황구글',
            email: 'hyj90632@gmail.com',
            createdat: '2018-09-11 11:42:11',
            updated_at: '2022-01-26 11:42:11'
        }
    ],
    User: [{
            division: 'user',
            user_id: 1,
            id: 'aaa',
            name: 'lelana',
            email: 'lelana@naver.com',
            createdat: '2018-09-11 11:42:11'
        },
        {
            division: 'user',
            user_id: 2,
            id: 'aaa',
            name: '아이린',
            email: 'bonobono@naver.com',
            createdat: '2018-09-11 11:42:11'
        },
        {
            division: 'user',
            user_id: 3,
            id: 'aaa',
            name: '조이',
            email: 'happy@naver.com',
            createdat: '2018-09-11 11:42:11'
        },
    ],
    Content: [{
            content_id: 1,
            user_id: 1,
            title: '개린이 르라나의 강의 알람표',
            context: '아직 미정입니다.',
            createdat: '2019-01-01 13:11:42',
            updated_at: null
        },
        {
            content_id: 2,
            user_id: 3,
            title: '레드벨벳 많이 사랑해 주세요^^',
            context: '화이팅!',
            createdat: '2019-01-02 13:11:42',
            updated_at: null
        },
        {
            content_id: 3,
            user_id: 2,
            title: '생일 축하해주신 여러분 감사합니다!',
            context: '^^',
            createdat: '2019-03-29 13:11:42',
            updated_at: null
        }
    ],
    Comment: [{
            comment_id: 1,
            user_id: 1,
            content_id: 3,
            context: '생일 축하해요!',
            createdat: '2019-03-29 14:11:11',
            updated_at: null
        },
        {
            comment_id: 2,
            user_id: 3,
            content_id: 3,
            context: '주현언니 생일 축하해요!',
            createdat: '2019-03-29 16:11:11',
            updated_at: null
        },
        {
            comment_id: 3,
            user_id: 2,
            content_id: 1,
            context: '강의 잘 보고 있습니다 ^^',
            createdat: '2019-03-29 14:11:11',
            updated_at: null
        }
    ],
    filelist: [{
            comment_id: 1,
            name: 'food1.jpeg'
        },
        {
            comment_id: 2,
            name: 'food2.jpeg'
        },
        {
            comment_id: 2,
            name: 'food3.jpeg'
        }
    ],
    SubComment: [{
        subcomment_id: 1,
        comment_id: 3,
        user_id: 1,
        context: '오 아이린님이 직접 댓글을 달아주시다니 ㅠㅠ 영광입니다!!',
        createdat: '2019-03-29 16:22:11',
        updated_at: null
    }],
    ProjectContent: [{
            number: 1,
            title: 'Blue X-ray Enterprise',
            start: '2016-05-03',
            finish: '2016-05-04',
            problem: '2',
            state: '프리세일즈',
            success: '88%',
            license: 100
        },
        {
            number: 2,
            title: 'Blue X-ray DLP',
            start: '2016-05-03',
            finish: '2016-05-04',
            problem: '0',
            state: '프리세일즈',
            success: '100%',
            license: 1500
        },
        {
            number: 3,
            title: '전군PC보안체계',
            start: '2016-05-03',
            finish: '2016-05-04',
            problem: '10',
            state: '사업진행',
            success: '50%',
            license: 500
        },
        {
            number: 4,
            title: 'DBSafer',
            start: '2016-05-03',
            finish: '2016-05-04',
            problem: '20',
            state: '사업종료',
            success: '90%',
            license: 10
        },
    ],
    NoticeContent: [{
            number: 1,
            title: '질문있습니다',
            component: '질문있습니다',
            date: '2016-05-03',
            name: 'Tom',
            check: '출근',
            updated_at: null
        },
        {
            number: 4,
            title: '답변있습니다',
            component: '답변있습니다',
            date: '2016-05-02',
            name: 'John',
            check: '출근',
            updated_at: null
        },
        {
            number: 3,
            title: '대답하겠습니다.',
            component: '대답하겠습니다',
            date: '2016-05-04',
            name: 'Morgan',
            check: '출근',
            updated_at: null
        },
        {
            number: 2,
            title: '공지하겠습니다.',
            component: '공지하겠습니다',
            date: '2016-05-01',
            name: 'Jessy',
            check: '출근',
            updated_at: null
        }
    ],
    search: '',
    IssueContent: [{
            check: 'Blue X-ray Enterprise',
            id: 1,
            title: '국방부_업데이트',
            component: '이슈가 있어 업데이트를 진행해야합니다.',
            name: 'Tom',
            state: '신규',
            level: '높음',
            createdat: '2019-03-29 14:11:11',
            updated_at: null
        },
        {
            check: 'Blue X-ray DLP',
            id: 2,
            title: '환경부_업데이트',
            component: '고도화 진행해야합니다.',
            name: 'Jerry',
            state: '진행',
            level: '낮음',
            createdat: '2019-03-29 14:11:11',
            updated_at: null
        },
        {
            check: '전군DLP',
            id: 3,
            title: '국토부_업데이트',
            component: '이슈가 있어 업데이트를 진행해야합니다.',
            name: 'Groot',
            state: '완료',
            level: '보통',
            createdat: '2019-03-29 14:11:11',
            updated_at: null
        },
    ],
    IssueRequestContent: [{
            division: 'Blue X-ray DLP',
            number: 1,
            title: 'DLP 기능개선',
            component: '고객사 요청으로 인하여 기능개선이 필요합니다.',
            createdat: '2016-05-03',
            name: 'Tom',
            updated_at: null
        },
        {
            division: 'Blue X-ray Enterprise',
            number: 2,
            title: '웹 페이지 UI 수정요청',
            component: '페이지 內 한글 오타로 인하여 수정 요청드립니다.',
            createdat: '2016-05-03',
            name: 'Tom',
            updated_at: null
        },
        {
            division: '전군 DLP',
            number: 3,
            title: '저장매체 구별값 기능개선',
            component: '테스트 해보니 문제 발생한게 있어 기능개선 요청드립니다.',
            createdat: '2016-05-03',
            name: 'Tom',
            updated_at: null
        }
    ],
    CustomerList: [{
        number: 1,
        company: '조은아이앤에스',
        name: '홍길동',
        rank: '사원',
        phone: '010-1234-1234',
        email: 'hong@naver.com',
        createdat: '2016-05-03',
        division: 'Blue X-ray DLP',
    }],
    CheckattendanceContent: [{
        number: 1,
        title: '홍길동',
        component: '연구소',
        date: '2023-10-01',
        name: '팀장',
        check: '출근',
        updated_at: '2023-10-01'
    },
    {
        number: 2,
        title: '홍길동',
        component: '연구소',
        date: '2023-10-01',
        name: '팀장',
        check: '퇴근',
        updated_at: '2023-10-01'
    }
    ],
    CommuteContent: [{
        number: 1,
        name: '홍길동',
        attendancetime: '08:32',
        leaveworktime: '18:01',
        attendancestatus: '정상',
        leaveworkstatus: '미확인',
    }],
}