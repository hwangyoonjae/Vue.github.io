<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
//패치 건수
export default {
  name: "Chart",
  data() {
    return {
      option : {
        legend: {},
        tooltip: {},
        dataset: {
          source: [
            ['product', 'Blue X-ray Enterprise', 'Blue X-ray DLP', '전군 DLP'],
            ['2월', 43.3, 85.8, 93.7],
            ['3월', 83.1, 73.4, 55.1],
            ['4월', 86.4, 65.2, 82.5],
            ['5월', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
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