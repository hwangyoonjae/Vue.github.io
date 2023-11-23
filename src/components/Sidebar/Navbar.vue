<template>
  <div>
    <div class="Header_Content">
      <div class="Burger">
        <Burger></Burger>
      </div>
      <div class="right_menu">
        <div class="UserInfo" v-if="isLoggedIn">
          <el-button type="text" @click="toggleUserInfo">사용자 정보</el-button>
        </div>
        <div class="Login" v-else>
          <el-button type="text" @click="logingo">로그인</el-button>
        </div>
      </div>
    </div>
    <el-card v-show="showUserInfoCard" class="UserInfoCard">
      <div class="UserInfoContent">
        <p>
          이름: 
          <span v-if="!isEditing">{{ userInfo.name }}</span>
          <el-input v-else v-model="userInfo.name"></el-input>
        </p>
        <p>
          부서: 
          <span v-if="!isEditing">{{ userInfo.depart }}</span>
          <el-input v-else v-model="userInfo.depart"></el-input>
        </p>
      </div>
      <div class="UserInfoButtons">
        <el-button type="primary" size="mini" @click="saveUserInfo" v-if="isEditing">저장</el-button>
        <el-button type="default" size="mini" @click="cancelEdit" v-if="isEditing">취소</el-button>
        <el-button type="info" size="mini" @click="toggleEdit" v-if="!isEditing">수정</el-button>
        
        <el-button type="danger" size="mini" @click="logout">로그아웃</el-button>
        <el-button type="text" class="CloseButton" @click="closeUserInfoCard">닫기</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Burger from '@/components/Sidebar/Burger'
import { EventBus } from '@/components/event-bus.js';

export default {
  components: {
    Burger,
  },
  data() {
    return {
      showUserInfoCard: false, // 사용자 정보 카드 표시 여부
      isLoggedIn: true, // 로그인 시 로그인 버튼 안보이게 표시
      isEditing: false, // 정보 수정 모드 여부
      userInfo: { // userInfo를 객체로 정의
        name: '',
        depart: '',
      },
      userId: ''
    };
  },
  methods: {
    getData: function() {
      const baseURI = 'http://localhost:8443';
      const id = 'id';

      // 사용자 정보를 가져오는 API 호출
      this.$axios.get(`${baseURI}/login/${id}`)
      .then(result => {
        console.log("===================");
        console.log(result.data);
        console.log("===================");

        // API 응답 데이터에서 사용자 정보를 가져와 할당
        const userData = result.data;

        // userInfo 객체에 사용자 정보 할당
        this.userInfo.name = userData.name;
        this.userInfo.depart = userData.depart;
      })
      .catch(error => {
        console.error('사용자 정보를 가져오는 중 에러 발생:', error);
      });
    },
    toggleUserInfo() {
      // 사용자 정보 카드 표시 여부를 토글
      this.showUserInfoCard = !this.showUserInfoCard;
    },
    toggleEdit() {
      // 수정 모드 토글
      this.isEditing = !this.isEditing;
    },
    saveUserInfo() {
      this.toggleEdit(); // 수정 모드 종료
    },
    cancelEdit() {
      this.toggleEdit(); // 수정 모드 종료
    },
    closeUserInfoCard() {
    // 사용자 정보 카드를 닫음
    this.showUserInfoCard = false;
    },
    logout() {
      // 로그아웃 처리 로직 추가
      this.$router.push({
        path: '/login'
      });
      this.showUserInfoCard = false;
    }
  },
  mounted() {
    this.getData();

    // EventBus를 통해 userLoggedIn 이벤트 수신
    EventBus.$on('userLoggedIn', (userId) => {
      // 이벤트 수신 시 userId 업데이트 및 데이터 로딩
      console.log("userLoggedIn is:", userLoggedIn);
      console.log("userId is:", userId);
      this.userId = userId;
      this.getData();
    });
  }
}
</script>

<style scoped>
.Header_Content {
  width: 100%;
  height: 50px;
  background: white;
}

.Burger {
  float: left;
}

.right_menu {
  height: 100%;
  line-height: 46px;
  float: right;
  margin-right: 10px;
  display: flex;
}

.UserInfo, .Login {
  margin: 0px 10px;
}

.UserInfoCard {
  position: absolute;
  right: 10px;
  top: 60px;
  width: 300px; /* 카드의 너비를 조정하세요 */
  z-index: 1;
}

.UserInfoContent {
  padding: 20px;
}

.UserInfoButtons {
  text-align: right;
  margin-top: 10px;
}
</style>