<template>
  <div class="Schedule_Content">
    <v-date-picker :attributes="attrs"  is-expanded :value="null" color="red" is-range/>
    <div class="Schedule_Button">
      <el-button type="success">등록하기</el-button>
    </div>
    <v-date-picker :attributes="attributes" :today-attribute="attrs" is-expanded :value="null" color="red" is-range/>
  </div>
</template>

<script>
export default {
  data() {
    const todos = [
      {
        description: 'Take Noah to basketball practice.',
        isComplete: false,
        dates: { weekdays: 6 }, // Every Friday
        color: 'red',
      },
    ];
    return {
      attrs: [
        {
          key: 'today',
          //dot: true, 오늘 날짜 점 찍어줌.
          //highlight: 'red', 오늘 날짜 동그라미 색 채워서 찍어줌.
          highlight: {
            color: 'purple',
            fillMode: 'light', // solid, light, outline
          },
          dates: new Date(),
        },
      ],
      incId: todos.length,
      todos,
    };
  },
  computed: {
    attributes() {
      return [
        // Attributes for todos
        ...this.todos.map(todo => ({
          dates: todo.dates,
          dot: {
            color: todo.color,
            class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: todo.description,
            visibility: 'hover',
            hideIndicator: true
          },
          customData: todo,
        })),
      ];
    }
  },
}
</script>

<style scoped>
.Schedule_Content {
  width: 100%;
  padding: 20px;
  background-color: #f0f2f5;
  position: relative;
} 
.Schedule_Button {
  margin: 10px;
}
</style>