<template>
    <div class="inputBox shadow">
       <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keyup.enter="addTodo"> <!-- v-on:keyup.enter는 input박스에서 Enter 했을때 동작 -->
       <span class="addContainer" v-on:click="addTodo"> 
           <i class="addBtn fas fa-plus" aria-hidden="true"></i> <!-- 어썸아이콘의 + 아이콘 추가 -->
       </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newTodoItem: '' // input박스의 텍스트를 입력하면 newTodoItem의 값도 같이 갱신
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== "") { // input박스의 입력 값이 있을 때만 저장
                var value = this.newTodoItem && this.newTodoItem.trim(); // input박스에 입력된 텍스트의 앞뒤 공백 문자열 제거   
                this.$emit('addTodo', value); // 이벤트를 전달할 때 할 일 텍스트 값인 vcalue 객체를 인자 값으로 전달  
                this.clearInput(); // input박스의 입력 값을 초기화  
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }

    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px; 
    }

    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }

    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
        cursor: pointer;    
    }

    .addBtn {
        color: white;
        vertical-align: middle;
    }
</style>
