//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 先把VueRouter原型对象的push，先保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
// 重写push|replace
//第一个参数：告诉原来的push方法 往哪里跳转(传递哪些参数)
VueRouter.prototype.push = function(location, resolve, reject) {
        if (resolve && reject) {
            // call|| apply 区别
            // 相同点，都可以调用函数一次，都可以篡改函数的上下文一次
            // 不同点 ： call与apply传递参数：call 传递参数用逗号隔开，apply方法执行，传递数组
            originPush.call(this, location, resolve, reject);
        } else {
            originPush.call(this, location, () => {}, () => {});
        }
    }
    //重写replace
    //第一个参数：成功回调
    // 第二个参数: 失败回调
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, () => {}, () => {});
    }
}


export default new VueRouter({
    //配置路由
    routes: [{
            path: '/content',
            component: () =>
                import ('@/pages/content'),
        },
        {
            path: "/search/:keyword?",
            name: "search",
            component: () =>
                import ('@/pages/search'),
        },
        {
            path: '*',
            redirect: "/content"
        }
    ]
})