<template>
  <div>
    <div class="Header_Content">
      <div class="Burger">
        <Burger></Burger>
      </div>
      <div class="right_menu">
        <div class="UserInfo">
          <el-button type="text" @click="toggleUserInfo">사용자 정보</el-button>
        </div>
        <div class="Login">
          <el-button type="text" @click="logingo">로그인</el-button>
        </div>
      </div>
    </div>
    <el-card v-show="showUserInfoCard" class="UserInfoCard">
      <div class="UserInfoContent">
        <p>
          이름: 
          <span v-if="!isEditing">{{ userName }}</span>
          <el-input v-else v-model="userName"></el-input>
        </p>
        <p>
          부서: 
          <span v-if="!isEditing">{{ department }}</span>
          <el-input v-else v-model="department"></el-input>
        </p>
        <p>
          직급: 
          <span v-if="!isEditing">{{ position }}</span>
          <el-input v-else v-model="position"></el-input>
        </p>
      </div>
      <div class="UserInfoButtons">
        <el-button type="primary" size="mini" @click="saveUserInfo" v-if="isEditing">저장</el-button>
        <el-button type="default" size="mini" @click="cancelEdit" v-if="isEditing">취소</el-button>
        <el-button type="text" size="mini" @click="toggleEdit" v-if="!isEditing">수정</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import Burger from '@/components/Sidebar/Burger'

export default {
  components: {
    Burger,
  },
  data() {
    return {
      showUserInfoCard: false, // 사용자 정보 카드 표시 여부
      isEditing: false, // 정보 수정 모드 여부
      userName: '황윤재', // 사용자 이름 데이터 예시
      department: '대기업', // 부서 데이터 예시
      position: '회장', // 직급 데이터 예시
    };
  },
  methods: {
    logingo() {
      this.$router.push({
        path: '/main/login'
      })
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
      // 수정된 정보 저장
      // 여기에 수정된 정보를 서버에 저장하는 로직을 추가하세요.
      this.toggleEdit(); // 수정 모드 종료
    },
    cancelEdit() {
      // 수정 취소
      // 여기에 수정을 취소하고 이전 정보로 되돌리는 로직을 추가하세요.
      this.toggleEdit(); // 수정 모드 종료
    },
  }
}
</script>

<style scoped>
.Header_Content {
  width: 100%;
  height: 50px;
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