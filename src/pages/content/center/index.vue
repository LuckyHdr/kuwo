<template>
  <div>
    <!-- 导航区 -->
    <div class="main">
        <div class="sub_nav">
            <div >
                  <a href="javascript:;" class="active" >推荐</a
                  ><a href="javascript:;" >排行榜</a
                  ><a href="javascript:;" >歌手</a
                  ><a href="javascript:;" >歌单</a
                  ><a href="javascript:;" >MV</a>
            </div>
        </div>
        <!-- 轮播图区 -->
        <div class="banner_out">
           <div class="banner">
              <div class="swiper_one">
                <Banner></Banner>
              </div>    
          </div>
          <div class="download" >
                                <ul class="btns" >
                                    <li >
                                        <a href="https://down.kuwo.cn/mbox/kwmusic_web_1.exe" ><i
                          class="iconfont icon-banner_icon_windows_"
                          
                        ></i>
                        <span >下载PC版</span></a
                      >
                      <!---->
                    </li>
                    <li class="split" ></li>
                    <li >
                      <a href="javascript:;" 
                        ><i
                          class="iconfont icon-banner_icon_android_"
                          
                        ></i>
                        <span >下载Android版</span></a
                      >
                    </li>
                    <li class="split" ></li>
                    <li >
                      <a href="javascript:;" 
                        ><i
                          class="iconfont icon-footer_pic_iphone_"
                          
                        ></i>
                        <span >下载iPhone版</span></a
                      >
                    </li>
                    <li class="split" ></li>
                    <li >
                      <a href="javascript:;" 
                        ><i
                          class="iconfont icon-banner_icon_platform"
                        ></i>
                        <span >下载其它版本</span></a
                      >
                    </li>
                  </ul>
          </div>
        </div>
    <!-- 推荐歌单 -->
    <div class="rec_nav">
      <h3 class="title">推荐歌单</h3>
      <div>
        <a href="javascript:;" class="active">每日推荐</a
        ><a href="javascript:;">翻唱</a><a href="javascript:;">网络</a
        ><a href="javascript:;">伤感</a><a href="javascript:;">欧美</a>
      </div>
      <a href="/playlists" class="more flex_c"
        ><span>更多</span><i class="iconfont icon-icon_pagedown_"></i
      ></a>
    </div>
    <div class="rec_list">
      <div class="item">
        <div class="pic_out">
          <div class="cover">
            <span class="play icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <img
            alt="每日最新单曲推荐"
            src="	https://img1.kuwo.cn/star/userpl2015/10/13/1649904612537_132026710_500.jpg"
            class="pic"
          />
        </div>
        <p class="name">
          <span title="每日最新单曲推荐">每日最新单曲推荐</span>
        </p>
        <p class="count" style="display: ">
          <i class="iconfont icon-icon_play_"></i>20359.6万
        </p>
      </div>
      <div class="item">
        <div class="pic_out">
          <div class="cover">
            <span class="play icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <img
            alt="经典老歌丨音乐响起，莫名的感动涌上心头"
            src="https://img1.kuwo.cn/star/userpl2015/58/87/1542417610522_184816158_500.jpg"
            class="pic"
          />
        </div>
        <p class="name">
          <span title="经典老歌丨音乐响起，莫名的感动涌上心头"
            >经典老歌丨音乐响起，莫名的感动涌上心头</span
          >
        </p>
        <p class="count" style="display: ">
          <i class="iconfont icon-icon_play_"></i>814.9万
        </p>
      </div>
      <div class="item">
        <div class="pic_out">
          <div class="cover">
            <span class="play icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <img
            alt="【Jazz-funk】身躯爆发 灵魂释放"
            src="https://img1.kuwo.cn/star/userpl2015/74/18/1541398121349_395182674_500.jpg"
            class="pic"
          />
        </div>
        <p class="name">
          <span title="【Jazz-funk】身躯爆发 灵魂释放"
            >【Jazz-funk】身躯爆发 灵魂释放</span
          >
        </p>
        <p class="count" style="display: ">
          <i class="iconfont icon-icon_play_"></i>24.0万
        </p>
      </div>
      <div class="item">
        <div class="pic_out">
          <div class="cover">
            <span class="play icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <img
            alt="『Jazz』融合律动，性感注脚。"
            src="https://img1.kuwo.cn/star/userpl2015/57/40/1570333252878_407432857_500.jpg"
            class="pic"
          />
        </div>
        <p class="name">
          <span title="『Jazz』融合律动，性感注脚。"
            >『Jazz』融合律动，性感注脚。</span
          >
        </p>
        <p class="count" style="display: ">
          <i class="iconfont icon-icon_play_"></i>18.8万
        </p>
      </div>
      <div class="item">
        <div class="pic_out">
          <div class="cover">
            <span class="play icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <img
            alt="【华语翻唱】无损高品质试音发烧女声"
            src="https://img1.kuwo.cn/star/userpl2015/39/41/1531725564827_412265939_500.jpg"
            class="pic"
          />
        </div>
        <p class="name">
          <span title="【华语翻唱】无损高品质试音发烧女声"
            >【华语翻唱】无损高品质试音发烧女声</span
          >
        </p>
        <p class="count" style="display: ">
          <i class="iconfont icon-icon_play_"></i>119.9万
        </p>
      </div>
      <!----><!----><!----><!----><!----><!---->
    </div>
    <!-- 排行榜 -->
    <div>
      <div class="rec_nav">
        <h3 class="title">排行榜</h3>
        <a href="/rankList" class="more flex_c"
          ><span>更多</span><i class="iconfont icon-icon_pagedown_"></i
        ></a>
      </div>
      <div class="rec_list">
        <div class="bang">
          <div class="bang_top">
            <div class="top_bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/d8faf807ce667092ef29f8d62237bfbf3a1f127a6370664705722a67c8f9e23b.png"
                alt
                class="img_tip"
              />
            </div>
            <img alt="" class="bang_bg" />
            <span class="icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <ul class="list_con">
            <li>
              <div class="top_img top1"></div>
              <!---->
              <div class="info">
                <p title="晴天" class="song_name">晴天</p>
                <p title="周杰伦" class="artist">周杰伦</p>
              </div>
            </li>
            <li>
              <div class="top_img top2"></div>
              <!---->
              <div class="info">
                <p title="兰亭序" class="song_name">兰亭序</p>
                <p title="周杰伦" class="artist">周杰伦</p>
              </div>
            </li>
            <li>
              <div class="top_img top3"></div>
              <!---->
              <div class="info">
                <p title="青花瓷" class="song_name">青花瓷</p>
                <p title="周杰伦" class="artist">周杰伦</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">4</div>
              <div class="info">
                <p title="稻香" class="song_name">稻香</p>
                <p title="周杰伦" class="artist">周杰伦</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">5</div>
              <div class="info">
                <p title="孤勇者" class="song_name">孤勇者</p>
                <p title="陈奕迅" class="artist">陈奕迅</p>
              </div>
            </li>
            <!---->
            <!---->
            <!---->
          </ul>
        </div>
        <div class="bang">
          <div class="bang_top">
            <div class="top_bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/fb29b783091117318dbb5dac53f8a7deee25b34054f7d00fb91640f6106773c6.png"
                alt
                class="img_tip"
              />
            </div>
            <img alt="" class="bang_bg" />
            <span class="icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <ul class="list_con">
            <li>
              <div class="top_img top1"></div>
              <!---->
              <div class="info">
                <p title="写给他们的歌" class="song_name">写给他们的歌</p>
                <p
                  title="TF家族&amp;TF家族-苏新皓&amp;TF家族-张极&amp;TF家族-张泽禹&amp;TF家族-张峻豪&amp;TF家族-陈天润"
                  class="artist"
                >
                  TF家族&amp;TF家族-苏新皓&amp;TF家族-张极&amp;TF家族-张泽禹&amp;TF家族-张峻豪&amp;TF家族-陈天润
                </p>
              </div>
            </li>
            <li>
              <div class="top_img top2"></div>
              <!---->
              <div class="info">
                <p title="100道光芒" class="song_name">100道光芒</p>
                <p title="时代少年团" class="artist">时代少年团</p>
              </div>
            </li>
            <li>
              <div class="top_img top3"></div>
              <!---->
              <div class="info">
                <p title="淡蓝色回忆" class="song_name">淡蓝色回忆</p>
                <p title="半吨兄弟" class="artist">半吨兄弟</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">4</div>
              <div class="info">
                <p title="枕边人与心上人" class="song_name">枕边人与心上人</p>
                <p title="L（桃籽）" class="artist">L（桃籽）</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">5</div>
              <div class="info">
                <p title="海风吹" class="song_name">海风吹</p>
                <p title="王源" class="artist">王源</p>
              </div>
            </li>
            <!---->
            <!---->
            <!---->
          </ul>
        </div>
        <div class="bang">
          <div class="bang_top">
            <div class="top_bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/fcd292e95c97704678ae6a77191df0b915dd9b9657296ca20b9f19047f672055.png"
                alt
                class="img_tip"
              />
            </div>
            <img alt="" class="bang_bg" />
            <span class="icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <ul class="list_con">
            <li>
              <div class="top_img top1"></div>
              <!---->
              <div class="info">
                <p title="17岁" class="song_name">17岁</p>
                <p title="刘德华" class="artist">刘德华</p>
              </div>
            </li>
            <li>
              <div class="top_img top2"></div>
              <!---->
              <div class="info">
                <p title="十七岁" class="song_name">十七岁</p>
                <p title="刘德华" class="artist">刘德华</p>
              </div>
            </li>
            <li>
              <div class="top_img top3"></div>
              <!---->
              <div class="info">
                <p title="一起走过的日子" class="song_name">一起走过的日子</p>
                <p title="刘德华" class="artist">刘德华</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">4</div>
              <div class="info">
                <p title="练习" class="song_name">练习</p>
                <p title="刘德华" class="artist">刘德华</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">5</div>
              <div class="info">
                <p title="今天" class="song_name">今天</p>
                <p title="刘德华" class="artist">刘德华</p>
              </div>
            </li>
            <!---->
            <!---->
            <!---->
          </ul>
        </div>
        <div class="bang">
          <div class="bang_top">
            <div class="top_bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/8eef6e95406eb46f8ed544384bb457e20c8d66a33c3077c586e58537b620ecf5.png"
                alt
                class="img_tip"
              />
            </div>
            <img alt="" class="bang_bg" />
            <span class="icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <ul class="list_con">
            <li>
              <div class="top_img top1"></div>
              <!---->
              <div class="info">
                <p title="Bones" class="song_name">Bones</p>
                <p title="Imagine Dragons" class="artist">Imagine Dragons</p>
              </div>
            </li>
            <li>
              <div class="top_img top2"></div>
              <!---->
              <div class="info">
                <p title="Bet On Me" class="song_name">Bet On Me</p>
                <p title="Walk Off the Earth&amp;D Smoke" class="artist">
                  Walk Off the Earth&amp;D Smoke
                </p>
              </div>
            </li>
            <li>
              <div class="top_img top3"></div>
              <!---->
              <div class="info">
                <p title="Smells Like Me" class="song_name">Smells Like Me</p>
                <p title="Charlie Puth" class="artist">Charlie Puth</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">4</div>
              <div class="info">
                <p title="ENEMY (宿敌)" class="song_name">ENEMY (宿敌)</p>
                <p
                  title="Imagine Dragons&amp;J.I.D&amp;英雄联盟"
                  class="artist"
                >
                  Imagine Dragons&amp;J.I.D&amp;英雄联盟
                </p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">5</div>
              <div class="info">
                <p title="Beautiful Love(Free Fire)" class="song_name">
                  Beautiful Love(Free Fire)
                </p>
                <p title="Justin Bieber" class="artist">Justin Bieber</p>
              </div>
            </li>
            <!---->
            <!---->
            <!---->
          </ul>
        </div>
        <div class="bang">
          <div class="bang_top">
            <div class="top_bg">
              <img
                src="https://h5static.kuwo.cn/upload/image/838f7519b40479695a6f5a22923704600d2dfceb4e8d6ad0099b5a169ae0df03.png"
                alt
                class="img_tip"
              />
            </div>
            <img alt="" class="bang_bg" />
            <span class="icon_play"
              ><i class="iconfont icon-icon_play_1"></i
            ></span>
          </div>
          <ul class="list_con">
            <li>
              <div class="top_img top1"></div>
              <!---->
              <div class="info">
                <p
                  title="如果你也想起我 (When The Wind Blows)"
                  class="song_name"
                >
                  如果你也想起我 (When The Wind Blows)
                </p>
                <p title="允儿" class="artist">允儿</p>
              </div>
            </li>
            <li>
              <div class="top_img top2"></div>
              <!---->
              <div class="info">
                <p title="NO ONE (Feat. B.I of iKON)" class="song_name">
                  NO ONE (Feat. B.I of iKON)
                </p>
                <p title="李夏怡&amp;B.I" class="artist">李夏怡&amp;B.I</p>
              </div>
            </li>
            <li>
              <div class="top_img top3"></div>
              <!---->
              <div class="info">
                <p title="Feedback" class="song_name">Feedback</p>
                <p title="BoA&amp;Nucksal (넉살)" class="artist">
                  BoA&amp;Nucksal (넉살)
                </p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">4</div>
              <div class="info">
                <p title="너에게 못했던 내 마지막 말은" class="song_name">
                  너에게 못했던 내 마지막 말은
                </p>
                <p title="DAVICHI (다비치)" class="artist">DAVICHI (다비치)</p>
              </div>
            </li>
            <li>
              <!---->
              <div class="index">5</div>
              <div class="info">
                <p title="고고베베" class="song_name">고고베베</p>
                <p title="MAMAMOO" class="artist">MAMAMOO</p>
              </div>
            </li>
            <!---->
            <!---->
            <!---->
          </ul>
        </div>
      </div>
    </div>
    <!-- 歌手推荐 -->
    <div>
        <div class="rec_nav">
            <h3 class="title">歌手推荐</h3>
            <div>
                <a href="" class="active">华语</a></a>
                <a href="" >欧美</a>
                <a href="" >日韩</a>
                <a href="" >组合</a>
            </div>
            <a href="" class="more flex_c">
                <span>更多</span>
                <i class="iconfont icon-icon_pagedown_"></i>
            </a>
        </div>
        <div class="rec_list">
            <div class="artist_item">
                <div class="artist">
                    <div class="pic_out">
                        <img src="https://img1.kuwo.cn/star/starheads/300/8/10/2150960774.jpg" alt="" class="pic">
                    </div>
                    <p class="name flex_c">
                        <span title="周杰伦" class="text">周杰伦</span>
                    </p>
                    <p class="num">173首歌曲</p>
                </div>
            </div>
            <div class="artist_item">
                <div class="artist">
                    <div class="pic_out">
                        <img src="https://img1.kuwo.cn/star/starheads/300/8/10/2150960774.jpg" alt="" class="pic">
                    </div>
                    <p class="name flex_c">
                        <span title="周杰伦" class="text">周杰伦</span>
                    </p>
                    <p class="num">173首歌曲</p>
                </div>
            </div>
            <div class="artist_item">
                <div class="artist">
                    <div class="pic_out">
                        <img src="https://img1.kuwo.cn/star/starheads/300/8/10/2150960774.jpg" alt="" class="pic">
                    </div>
                    <p class="name flex_c">
                        <span title="周杰伦" class="text">周杰伦</span>
                    </p>
                    <p class="num">173首歌曲</p>
                </div>
            </div>
            <div class="artist_item">
                <div class="artist">
                    <div class="pic_out">
                        <img src="https://img1.kuwo.cn/star/starheads/300/8/10/2150960774.jpg" alt="" class="pic">
                    </div>
                    <p class="name flex_c">
                        <span title="周杰伦" class="text">周杰伦</span>
                    </p>
                    <p class="num">173首歌曲</p>
                </div>
            </div>
            <div class="artist_item">
                <div class="artist">
                    <div class="pic_out">
                        <img src="https://img1.kuwo.cn/star/starheads/300/8/10/2150960774.jpg" alt="" class="pic">
                    </div>
                    <p class="name flex_c">
                        <span title="周杰伦" class="text">周杰伦</span>
                    </p>
                    <p class="num">173首歌曲</p>
                </div>
            </div>
            <div class="artist_item">
                <div class="artist">
                    <div class="pic_out">
                        <img src="https://img1.kuwo.cn/star/starheads/300/8/10/2150960774.jpg" alt="" class="pic">
                    </div>
                    <p class="name flex_c">
                        <span title="周杰伦" class="text">周杰伦</span>
                    </p>
                    <p class="num">173首歌曲</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</div>
</template>

<script>
import Banner from "./banner/index.vue";
export default {
  name: "center",
  components: {
    Banner,
  },
};
</script>

<style scoped>
/* 导航区第一部分 */
.sub_nav {
  padding-left: 206px;
  height: 54px;
  line-height: 54px;
}
.rec_nav {
  display: flex;
  align-items: baseline;
  height: 40px;
  line-height: 40px;
  margin-top: 70px;
  margin-bottom: 28px;
}

.rec_nav .title {
  font-size: 28px;
  margin-right: 40px;
}

.rec_nav .more {
  position: relative;
  color: #999;
  font-size: 13px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
}

.rec_list {
  display: flex;
  justify-content: space-between;
}
/* 轮播图第二部分 */
.banner {
  position: relative;
  height: 340px;
  overflow: hidden;
}
.swiper_one {
  height: 340px;
  overflow: hidden;
}
.blue {
  overflow: hidden;
  position: absolute;
  left: 0;
  height: 60px;
  width: 100%;
  z-index: 99;
  background-color: #bbb;
}

/* 导航去第三部分 */
.banner_out {
            position: relative;
            max-height: 400px;
            overflow: hidden;
        }
        
        .banner_out .download {
            position: relative;
            height: 60px;
            line-height: 60px;
            width: 100%;
            color: #fff;
            font-size: 16px;
            z-index: 99;
            padding: 0 13.5%;
            background: rgba(0, 0, 0, 0.15);
        }
        
        .banner_out .download .split {
            width: 1px;
            height: 28px;
            background: hsla(0, 0%, 100%, 0.1);
            border-radius: 1px;
        }
        
        .banner_out .download .btns {
            position: relative;
            z-index: 100;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        
        .banner_out .download .btns a,
        .banner_out .download .btns li {
            color: #fff;
            display: flex;
            align-items: center;
        }
        
        .banner_out .download .btns .iconfont {
            font-size: 28px;
            margin-right: 10px;
        }
/* ```````````````````` */
a {
  position: relative;
  display: inline-block;
  height: 20px;
  line-height: 20px;
  margin-right: 34px;
  font-weight: 300;
  color: #333;
}

a.active,
a:hover {
  color: #000;
}

a.active {
  font-weight: 600;
}

a.active:after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 1px;
  width: 100%;
  height: 6px;
  background: #ffe443;
  z-index: -1;
}

.item {
  width: 18.85%;
}

.item:hover .pic_out .pic {
  transform: scale(1.07);
}

.item .pic_out {
  position: relative;
  padding-bottom: 100%;
  overflow: hidden;
}

.item .pic_out .cover {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background: transparent;
  z-index: 3;
  transition: all 0.2s ease-in-out;
}

.item .pic_out .cover .play {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 66px;
  height: 66px;
  line-height: 66px;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.2s ease-in-out;
  display: none;
}

.item .pic_out .cover .play .iconfont {
  font-size: 30px;
  color: #333;
}

.item .pic_out .pic {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: transform 0.75s cubic-bezier(0, 1, 0.75, 1);
}

.item .pic_out:hover .cover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.2);
}

.item .pic_out:hover .play {
  display: inline-block;
}

.item .name {
  margin-top: 16px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;
}

.item .name span {
  cursor: pointer;
}

.item .name span:hover {
  font-weight: bolder;
}

.item .count {
  margin-top: 10px;
  color: #999;
}

.item .count .iconfont {
  margin-right: 2px;
}
/* 排行榜 */
.rec_nav {
  display: flex;
  align-items: baseline;
  height: 40px;
  line-height: 40px;
  margin-top: 70px;
  margin-bottom: 28px;
}

.rec_nav .title {
  font-size: 28px;
  margin-right: 40px;
}

.rec_nav .more {
  position: relative;
  color: #999;
  font-size: 13px;
  font-weight: 400;
  height: 20px;
  line-height: 20px;
}
.rec_list {
  display: flex;
  justify-content: space-between;
}
.bang {
  width: 18.85%;
  box-shadow: 0 0 30px 0 rgba(65, 67, 70, 0.08);
}

.bang_top {
  position: relative;
  padding-bottom: 54.8%;
  overflow: hidden;
}

.bang_top .top_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(46, 32, 60, 0.7);
  z-index: 10;
}

.bang_top .img_tip {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 54.3%;
  z-index: 10;
}

.bang_top .bang_bg {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  transform: translateY(-50%);
}

.bang_top .icon_play {
  position: absolute;
  right: 12px;
  bottom: 12px;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #fff;
  border-radius: 50%;
  display: none;
  z-index: 15;
  cursor: pointer;
}

.bang_top .icon_play .iconfont {
  font-size: 14px;
}

.bang_top:hover .icon_play {
  display: inline-block;
}

.list_con {
  padding: 28px 20px 26px;
}

.list_con .top_img {
  width: 20px;
  height: 33px;
}

.list_con .top_img.top1 {
  background: url(https://h5static.kuwo.cn/www/kw-www/img/icon_first.df06fb1.png)
    center 4px no-repeat;
  background-size: 168%;
}

.list_con .top_img.top2 {
  background: url(https://h5static.kuwo.cn/www/kw-www/img/icon_secondary.d99e73e.png)
    center 4px no-repeat;
  background-size: 168%;
}

.list_con .top_img.top3 {
  background: url(https://h5static.kuwo.cn/www/kw-www/img/icon_third.8abbb65.png)
    center 4px no-repeat;
  background-size: 168%;
}

.list_con li {
  display: flex;
  justify-content: space-between;
}

.list_con li + li {
  margin-top: 23px;
}

.list_con .index {
  padding-top: 3px;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  width: 20px;
  text-align: center;
}

.list_con .info {
  width: 85%;
  padding-left: 10px;
}

.list_con .info .song_name {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 400;
  height: 22px;
  line-height: 22px;
  cursor: pointer;
}

.list_con .info .song_name:hover {
  font-weight: 600;
}

.list_con .info .artist {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 300;
  color: #999;
  height: 20px;
  line-height: 20px;
  cursor: pointer;
}

.list_con .info .artist:hover {
  color: #333;
}
/* 歌手推荐 */
.artist_item {
  width: 13%;
}
.artist_item .artist {
  text-align: center;
}
.artist_item .artist .pic_out {
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;
  border-radius: 50%;
  font-size: 0;
  cursor: pointer;
}
.pic_out img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.artist .name {
  position: relative;
  height: 22px;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  margin-top: 17px;
  flex-wrap: nowrap;
  justify-content: center;
  padding: 0.5px;
}
.artist .name .text {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
}
.artist .num {
  margin-top: 6px;
  font-size: 12px;
  color: #999;
}
</style>