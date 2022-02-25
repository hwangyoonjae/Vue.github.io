<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
// 이슈건수
export default {
  name: "Chart",
  data() {
    return {
      option : {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [{
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Blue X-ray Enterprise' },
            { value: 735, name: 'Blue X-ray DLP' },
            { value: 580, name: '전군 DLP' },
          ]
        }]
      }
    }
  }
}
</script>

<style scoped>
.chart {
  height: 320px;
}
</style>