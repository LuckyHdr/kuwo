<template>
  <div class="searchPage">
    <div class="searchOut">
      <div class="bg"></div>
      <div class="searchInput">
        <div class="searchInput flex_c searchPage">
          <input
            type="text"
            maxlength="128"
            placeholder="搜索音乐/MV/歌单/歌手"
            class="search"
          />
        </div>
      </div>
    </div>
    <div class="search_main">
        <div class="tab">
            <span class="text">搜索结果</span>
            <div>
                <a href="" class="active">单曲</a>
                <a href="">专辑</a>
                <a href="">MV</a>
                <a href="">歌单</a>
                <a href="">歌手</a>
            </div>
        </div>
        <div class="child">
            <div class="btns">
                <button class="play">
                    <i class="iconfont"><svg t="1662987023875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2723" width="16" height="16"><path d="M213.333333 65.386667a85.333333 85.333333 0 0 1 43.904 12.16L859.370667 438.826667a85.333333 85.333333 0 0 1 0 146.346666L257.237333 946.453333A85.333333 85.333333 0 0 1 128 873.28V150.72a85.333333 85.333333 0 0 1 85.333333-85.333333z m0 64a21.333333 21.333333 0 0 0-21.184 18.837333L192 150.72v722.56a21.333333 21.333333 0 0 0 30.101333 19.456l2.197334-1.152L826.453333 530.282667a21.333333 21.333333 0 0 0 2.048-35.178667l-2.048-1.386667L224.298667 132.416A21.333333 21.333333 0 0 0 213.333333 129.386667z" fill="#333333" p-id="2724"></path></svg></i>
                    <span>播放全部</span>
                </button>
                <button >
                    <i class="iconfont"><svg t="1662987122137" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3989" width="16" height="16"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" p-id="3990"></path></svg></i>
                    <span>收藏</span>
                </button>
                <button >
                    <i class="iconfont"><svg t="1662987185981" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4971" width="16" height="16"><path d="M896 672c-17.066667 0-32 14.933333-32 32v128c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-128c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v128c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-128c0-17.066667-14.933333-32-32-32z" p-id="4972"></path><path d="M488.533333 727.466667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l213.333333-213.333334c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-157.866667 157.866667V170.666667c0-17.066667-14.933333-32-32-32s-34.133333 14.933333-34.133333 32v456.533333L322.133333 469.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l211.2 213.333334z" p-id="4973"></path></svg></i>
                    <span>下载歌曲</span>
                </button>
            </div>
            <div>
                <div class="list_head">
                    <ul class="songUl flex_c">
                        <li class="head_num">序号</li>
                        <li class="head_name">歌曲</li>
                        <li class="head_artist">歌手</li>
                        <li class="head_album">专辑</li>
                        <li class="head_time">时长</li>
                    </ul>
                </div>
                <ul class="search_list">
                    <li class="song_item flex_c current">
                        <div class="song_rank flex_c">
                            <div class="rank_num">
                                <span class="playing">
                                    <span class="side1 pause"></span>
                                    <span class="side2 pause"></span>
                                    <span class="side3 pause"></span>
                                </span>
                                <span style="display: none">1</span>
                            </div>
                            <img class="cover" src="https://img3.kuwo.cn/star/albumcover/120/58/74/2885095875.jpg" alt="">
                        </div>
                        <div class="song_name flex_c">
                            <a href="" title="小城夏天" class="name">小城夏天</a>
                            <i class="type">无损</i>
                        </div>
                        <div class="song_artist">
                            <span title="LBI利比">LBI利比</span>
                        </div>
                        <div class="song_album">
                            <span title="小城夏天">小城夏天</span>
                        </div>
                        <div class="song_time">
                            <span>0.25.53</span>
                        </div>
                        <div class="song_opts flex_c">
                            <span>
                                <i class="iconfont"><svg t="1662987023875" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2723" width="16" height="16"><path d="M213.333333 65.386667a85.333333 85.333333 0 0 1 43.904 12.16L859.370667 438.826667a85.333333 85.333333 0 0 1 0 146.346666L257.237333 946.453333A85.333333 85.333333 0 0 1 128 873.28V150.72a85.333333 85.333333 0 0 1 85.333333-85.333333z m0 64a21.333333 21.333333 0 0 0-21.184 18.837333L192 150.72v722.56a21.333333 21.333333 0 0 0 30.101333 19.456l2.197334-1.152L826.453333 530.282667a21.333333 21.333333 0 0 0 2.048-35.178667l-2.048-1.386667L224.298667 132.416A21.333333 21.333333 0 0 0 213.333333 129.386667z" fill="#333333" p-id="2724"></path></svg></i>
                                <i class="iconfont"><svg t="1662990107313" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6446" width="16" height="16"><path d="M512 832a32 32 0 0 0 32-32v-256h256a32 32 0 0 0 0-64h-256V224a32 32 0 0 0-64 0v256H224a32 32 0 0 0 0 64h256v256a32 32 0 0 0 32 32" p-id="6447"></path></svg></i>
                                <i class="iconfont"><svg t="1662990132624" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7474" width="16" height="16"><path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" p-id="7475"></path></svg></i>
                                <i class="iconfont"><svg t="1662987185981" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4971" width="16" height="16"><path d="M896 672c-17.066667 0-32 14.933333-32 32v128c0 6.4-4.266667 10.666667-10.666667 10.666667H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667v-128c0-17.066667-14.933333-32-32-32s-32 14.933333-32 32v128c0 40.533333 34.133333 74.666667 74.666667 74.666667h682.666666c40.533333 0 74.666667-34.133333 74.666667-74.666667v-128c0-17.066667-14.933333-32-32-32z" p-id="4972"></path><path d="M488.533333 727.466667c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466667-8.533333l213.333333-213.333334c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0l-157.866667 157.866667V170.666667c0-17.066667-14.933333-32-32-32s-34.133333 14.933333-34.133333 32v456.533333L322.133333 469.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l211.2 213.333334z" p-id="4973"></path></svg></i>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.searchPage{
    padding: 0 120px;
    margin:  0 auto;
}
/* 搜索框 */
.searchOut {
  position: relative;
  height: 246px;
  width: 100%;
}
.searchOut .bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1519.9px;
  height: 100%;
  background: url("https://h5static.kuwo.cn/www/kw-www/img/searchBg.07b12b9.png");
  z-index: 1;
}
.searchInput {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 720px;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.searchInput .search {
  display: inline-block;
  flex: 1;
  border: none;
  margin-left: 24px;
  padding-left: 10px;
  background: #f5f5f5;
  height: 54px;
  line-height: 54px;
}
/* 搜索信息 */
.tab{
    display: flex;
    align-items: baseline;
    margin-top: 43px;
    margin-bottom: 42px;
}
.tab .text{
font-size: 22px;
font-weight: 600;
line-height: 30px;
margin-right: 40px;
}
.tab a{
    position: relative;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    margin-right: 34px;
    font-weight: 300;
    color: black;
}
.tab a.active {
    font-weight: 600;
}
/* 播放全部 */
.child{
    min-height: 100px;
}
.btns{
    margin-top: 32px;
    margin-bottom: 40px;
    display: flex;
}
.btns button{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 30px;
    height: 40px;
    margin-right: 10px;
    text-align: center;
    border-radius: 22px;
    border: none;
    font-size: 16px;
    cursor: pointer;
}
.btns .play{
    width:150px;
    background: #ffe12c;
}
.btns button .iconfont{
    font-size: 20px;
    margin-right: 5px;
}
/* 内容头部 */
.list_head{
    height: 46px;
    line-height: 46px;
    background: #fafafa;
    color: #999;
}
.list_head .head_num{
    padding: left 2.8%;
    min-width: 180px;
}
.list_head .head_name{
    width: 28.2%;
}
.list_head .head_artist{
width: 24%;
}
.list_head .head_album{
    flex: 1;
}
.list_head .head_time{
    width: 5.8%;
}
/* 搜索内容区 */
.songUl li{
width: 1288px;
height: 70px;
}
.search_list{

}
.song_item {
    height: 70px;
    line-height: 22px;
    color: #666;
}
.song_item .current{
    width: 1288px;
    background: rgba(0, 0, 0, 0.5);
}
.song_item .song_rank{
    width: 13.1%;
    position: relative;
    padding-left: 3.18%;
    min-width: 180px;
    padding-right: 20px;
}
.song_item .song_rank .rank_num{
    flex-shrink: 0;
    height: 20px;
    width: 20px;
    color: #333;
    line-height: 33px;
    text-align: center;
    font-weight: 700;
}
.playing{
    position: relative;
    width: 16px;
    height: 16px;
    line-height: 14px;
    text-align: center;
}
.song_item .song_rank .cover{
    flex-shrink: 0;
    width: 54px;
    height: 54px;
    margin-left: 30%;
}
/* 第二列 */
.search_list .song_item{
    padding-right: 2.43%;
    color: #333;
    width: 28.8%;
}
.song_item .song_name .name{
    flex-shrink: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    cursor: pointer;
    color: #333;
}
.song_item .song_name .type{
    margin-left: 5px;
    flex-shrink: 0;
    font-size: 15px;
    color: #e6b86d;
    cursor: pointer;
}
/* 第三列 */
.search_list .song_item .song_artist{
    width: 24%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-right: 1%;
}
.song_item .song_artist span{
    cursor: pointer;
}
.song_item .song_album{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.song_item .song_album span{
    cursor:pointer; 
}
.search_list .song_item .song_time{
    padding-right: 3.9%;
width: 5.8%;
}
.song_item .song_opts{
    margin-right: 3.93%;
    display: none;
}
</style>