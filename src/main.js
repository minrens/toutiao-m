import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store'

// 加载 Vant 核心组件库
import Vant from 'vant'

// 加载 Vant 全局样式
import 'vant/lib/index.css'

// 加载全局样式
import './styles/index.less'

// 加载动态设置 REM 基准值
import 'amfe-flexible'

// 加载 dayjs 初始化配置
import './utils/dayjs'

// 注册使用 Vant 组件库
Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
=======
// 加载vant核心组件库
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'
// 加载动态设置REM基准值
import 'amfe-flexible'
// import代码格式规范：import中间除了注释和import不能出现其他代码
// 加载全局样式
import './styles/index.less'
Vue.config.productionTip = false
// 注册使用vant组件
Vue.use(Vant)
new Vue({
  router,
>>>>>>> 06c83fedcdeb05cae8dd77f3b9f2401d3b006177
  render: h => h(App)
}).$mount('#app')
