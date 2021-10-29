<template> 
    <div class="Todo_Content">
      <!-- 등록된 컴포넌트 4개를 HTML에 표시 -->
      <TodoHeader></TodoHeader> 
      <TodoInput v-on:addTodo="addTodo"></TodoInput>
      <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
      <TodoFooter v-on:removeAll="clearAll"></TodoFooter> 
    </div>
</template>

<script> 
import TodoHeader from './TodoHeader.vue' // 컴포넌트 내용을 불러오기 위한 ES6 import 구문
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'

export default { // 지역 컴포넌트 등록
    created() {
        if (localStorage.length > 0) {
            for(var i = 0; i < localStorage.length; i++) {
                this.todoItems.push(localStorage.key(i));
            }
        }
    },
    data() {
        return {
            todoItems:[] // 데이터 속성 todoItems 선언 
        }
    },
    methods: {
    addTodo(todoItem) {
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
        },
    clearAll() {
        localStorage.clear();
        this.todoItems = [];
        },
    removeTodo(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);    
        }        
    },
    components: {
      'TodoHeader' : TodoHeader,
      'TodoInput' : TodoInput,
      'TodoList' : TodoList,
      'TodoFooter' : TodoFooter
    }
}
</script>

<style>
.Todo_Content {
    text-align: center;
}
</style>
