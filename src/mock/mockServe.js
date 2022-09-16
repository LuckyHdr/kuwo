import Mock from 'mockjs';
//把JSON数据格式引入进来
//webpack默认对外暴露的，图片，JSON数据格式等
import banner from './banner.json';
import bannerInfo from './bannerInfo.json';
// import floor from './floor.json';

//mock数据 : 第一个参数是请求地址  第二个参数 ; 请求参数
Mock.mock("/mock/banner", { code: 200, data: banner }); //模拟首页大的轮播图的数据
// Mock.mock("/mock/floor", { code: 200, data: floor });

//mock导航栏菜单
Mock.mock("/mock/bannerInfo", { code: 200, data: bannerInfo });