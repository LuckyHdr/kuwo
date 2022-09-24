import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
Vue.config.productionTip = false

// 引入仓库
import store from '@/store';


//统一接口api文件夹里面全部请求函数
//统一引入
import * as API from "@/api"

//引入MockServer js----mock数据
import '@/mock/mockServe';
//引如element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

new Vue({
    render: h => h(App),
    //注册路由：底下的写法kv一致省略v（router小写的）
    //配置全局事件总线
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API
    },
    router,
    //注册仓库
    store
}).$mount('#app')