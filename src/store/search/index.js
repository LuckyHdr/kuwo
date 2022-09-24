import { reqSearchInfo } from '@/api'
const state = {
    searchList: [],
}
const mutations = {
    SEARCHLIST(state, searchList) {
        state.searchList = searchList;
    },
};

const actions = {
    async getSearchList({ commit }, keyword) {
        console.log(keyword)
        let result = await reqSearchInfo(keyword);
        if (result.code == 200) {
            commit("SEARCHLIST", result.data);
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