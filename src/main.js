// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import axios from "axios";

Vue.prototype.$axios = axios;

// Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css' 

// Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })

// echart
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { PieChart } from 'echarts/charts'
import { LabelLayout } from 'echarts/features'
import { GridComponent, TooltipComponent, DatasetComponent, LegendComponent } from 'echarts/components'

use([
  CanvasRenderer,
  BarChart,
  PieChart,
  LabelLayout,
  GridComponent,
  TooltipComponent,
  DatasetComponent,
  LegendComponent
]);

// register globally (or you can do it locally)
Vue.component('v-chart', ECharts)

// v-calendar 
import VCalendar from 'v-calendar'
import Calendar from 'v-calendar/lib/components/calendar.umd'
import DatePicker from 'v-calendar/lib/components/date-picker.umd'

Vue.component('calendar', Calendar)
Vue.component('date-picker', DatePicker)
Vue.use(VCalendar);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})