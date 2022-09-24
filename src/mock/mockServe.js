import Mock from 'mockjs';
//把JSON数据格式引入进来
//webpack默认对外暴露的，图片，JSON数据格式等
import banner from './banner.json';
import bannerInfo from './bannerInfo.json';
import searchInfo from './searchInfo.json';
import meirituijian from './meirituijian.json'
import fanchang from './fanchang.json'
import wangluo from './wangluo.json'
import shanggan from './shanggan.json'
import oumei from './oumei.json'
// import floor from './floor.json';
import mv from './mv.json';

//mock数据 : 第一个参数是请求地址  第二个参数 ; 请求参数
Mock.mock("/mock/banner", { code: 200, data: banner }); //模拟首页大的轮播图的数据
// Mock.mock("/mock/floor", { code: 200, data: floor });

//mock导航栏菜单
Mock.mock("/mock/bannerInfo", { code: 200, data: bannerInfo });
//mock搜索数据
Mock.mock("/mock/searchInfo/周杰伦", { code: 200, data: searchInfo })
    //推荐歌单
Mock.mock("/mock/tuijian/meirituijian", { data: meirituijian })
Mock.mock("/mock/tuijian/fanchang", { data: fanchang })
Mock.mock("/mock/tuijian/wangluo", { data: wangluo })
Mock.mock("/mock/tuijian/shanggan", { data: shanggan })
Mock.mock("/mock/tuijian/oumei", { data: oumei })

//搜索mv
Mock.mock("/mock/mv", { data: mv })