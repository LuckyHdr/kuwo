import { reqGetBannerList } from '@/api'
const state = {
    bannerList: [],
}
const mutations = {
    BANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
};

const actions = {
    //获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList();
        console.log(result)
        if (result.code == 200) {
            commit("BANNERLIST", result.data);
        }
    },
};

const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}