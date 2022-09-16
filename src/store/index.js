import Vue from "vue";
import Vuex from 'vuex';
//使用插件
Vue.use(Vuex);

import home from "./home";

export default new Vuex.Store({
    //实现Vuex仓库模块化开发存储数据
    modules: {
        home,
    }
})