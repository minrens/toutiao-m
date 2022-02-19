import Vue from 'vue'
import App from './App.vue'
import router from './router'
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
  render: h => h(App)
}).$mount('#app')
