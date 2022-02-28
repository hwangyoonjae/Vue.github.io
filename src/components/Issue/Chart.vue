<template>
  <div>
    <v-chart class="chart" :option="option"/>
  </div>
</template>

<script>
import data from '@/data'
// 이슈건수
export default {
  name: "Chart",
  data() {
    let count = data.IssueContent.filter(element => 'Blue X-ray Enterprise' === element).length;

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
            { value: 1, name: 'Blue X-ray Enterprise' },
            { value: 2, name: 'Blue X-ray DLP' },
            { value: 3, name: '전군 DLP' },
          ]
        }]
      },
    }
  }
}
</script>

<style scoped>
.chart {
  height: 320px;
}
</style>