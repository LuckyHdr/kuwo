import mockRequests from './mockAjax';

//获取banner首页轮播提接口
export const reqGetBannerList = () => mockRequests.get('/banner');

//菜单接口
export const reqBannerInfo = () => mockRequests.get('/bannerInfo');

//搜索的信息
export const reqSearchInfo = (keyword) => mockRequests.get(`/searchInfo/${keyword}`)

//推荐歌单
export const reqPlayList = (names) => mockRequests.get(`/tuijian/${names}`)

//搜索mv
export const reqMv = () => mockRequests.get('/mv');