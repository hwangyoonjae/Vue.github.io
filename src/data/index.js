export default {
  Admin: [
    {
      admin_number: 1,
      admin_id: 'hyj118',
      name: '황윤재',
      email: 'hyj118@naver.com',
      created_at: '2018-09-11 11:42:11',
      updated_at: '2022-01-26 11:42:11'
    },
    {
      admin_number: 2,
      admin_id: 'hyj2001118',
      name: '홍길동',
      email: 'hyj2001118@naver.com',
      created_at: '2018-09-11 11:42:11',
      updated_at: '2022-01-26 11:42:11'
    },
    {
      admin_number: 3,
      admin_id: 'hyj90632',
      name: '황구글',
      email: 'hyj90632@gmail.com',
      created_at: '2018-09-11 11:42:11',
      updated_at: '2022-01-26 11:42:11'
    }
  ],
  User: [
    {
      user_id: 1,
      id: 'aaa',
      name: 'lelana',
      email: 'lelana@naver.com',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 2,
      id: 'aaa',
      name: '아이린',
      email: 'bonobono@naver.com',
      created_at: '2018-09-11 11:42:11'
    },
    {
      user_id: 3,
      id: 'aaa',
      name: '조이',
      email: 'happy@naver.com',
      created_at: '2018-09-11 11:42:11'
    },
  ],
  Content: [
    {
      content_id: 1,
      user_id: 1,
      title: '개린이 르라나의 강의 알람표',
      context: '아직 미정입니다.',
      created_at: '2019-01-01 13:11:42',
      updated_at: null
    },
    {
      content_id: 2,
      user_id: 3,
      title: '레드벨벳 많이 사랑해 주세요^^',
      context: '화이팅!',
      created_at: '2019-01-02 13:11:42',
      updated_at: null
    },
    {
      content_id: 3,
      user_id: 2,
      title: '생일 축하해주신 여러분 감사합니다!',
      context: '^^',
      created_at: '2019-03-29 13:11:42',
      updated_at: null
    }
  ],
  Comment: [
    {
      comment_id: 1,
      user_id: 1,
      content_id: 3,
      context: '생일 축하해요!',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    },
    {
      comment_id: 2,
      user_id: 3,
      content_id: 3,
      context: '주현언니 생일 축하해요!',
      created_at: '2019-03-29 16:11:11',
      updated_at: null
    },
    {
      comment_id: 3,
      user_id: 2,
      content_id: 1,
      context: '강의 잘 보고 있습니다 ^^',
      created_at: '2019-03-29 14:11:11',
      updated_at: null
    }
  ],
  filelist: [
    {
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
  SubComment: [
    {
      subcomment_id: 1,
      comment_id: 3,
      user_id: 1,
      context: '오 아이린님이 직접 댓글을 달아주시다니 ㅠㅠ 영광입니다!!',
      created_at: '2019-03-29 16:22:11',
      updated_at: null
    }
  ],
  NoticeContent: [
    {
      number : 1,
      title : '질문있습니다',
      component : '질문있습니다',
      date: '2016-05-03',
      name: 'Tom',
      updated_at: null
    }, 
    {
      number : 4,
      title : '답변있습니다',
      component : '답변있습니다',
      date: '2016-05-02',
      name: 'John',
      updated_at: null
    }, 
    {
      number : 3,
      title : '대답하겠습니다.',
      component : '대답하겠습니다',
      date: '2016-05-04',
      name: 'Morgan',
      updated_at: null
    }, 
    {
      number : 2,
      title : '공지하겠습니다.',
      component : '공지하겠습니다',
      date: '2016-05-01',
      name: 'Jessy',
      updated_at: null
    }],
    search: '',
}