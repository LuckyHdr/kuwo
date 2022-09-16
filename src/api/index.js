import mockRequests from './mockAjax';

//获取banner首页轮播提接口
export const reqGetBannerList = () => mockRequests.get('/banner');

//菜单接口
export const reqBannerInfo = () => mockRequests.get('/bannerInfo')