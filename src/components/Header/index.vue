<template>
  <div>
    <div class="header">
      <div class="container">
        <div class="head">
          <div class="flex_c">
            <a
              href="/"
              aria-current="page"
              class="nuxt-link-exact-active nuxt-link-active"
              ><img
                src="https://h5static.kuwo.cn/www/kw-www/img/logo.7bf8751.png"
                alt=""
                class="logo"
            /></a>
            <ul class="nav">
              <li class="item active">
                <a
                  href="/"
                  aria-current="page"
                  class="nuxt-link-exact-active nuxt-link-active"
                  >发现音乐</a
                >
              </li>
              <li class="item">
                <a href="/down">下载客户端</a>
              </li>
              <li class="item">
                <a
                  rel="nofollow"
                  href="http://g.koowo.com/g.real?aid=text_ad_3214&url=http://x.kuwo.cn/KuwoLive/OpenLiveRoomLinkForKw?from=1001008053"
                  target="_blank"
                  >音乐现场</a
                >
              </li>
              <li class="item">
                <a
                  target="_blank"
                  href="http://vip1.kuwo.cn/vip/added/vip_2016/index.jsp?from=1"
                  >VIP会员</a
                >
              </li>
              <li class="item">
                <a href="/downtingshu">酷我畅听</a>
              </li>
              <li class="item">
                <a
                  target="_blank"
                  rel="nofollow"
                  href="https://kuwosm.tmall.com/?spm=a1z10.1-b.w5001-22211151763.4.5223b735CyzwnI&scene=taobao_shop"
                  >酷我耳机</a
                >
              </li>
              <li class="item sub_out">
                <a href="javascript:;"
                  >更多
                  <i class="down iconfont icon-bar_icon_arrow_"></i>
                  <i class="up iconfont icon-pop_icon_returntop"></i
                ></a>
                <ul class="sub_nav">
                  <li>
                    <a href="/musician">酷我音乐人</a>
                  </li>
                  <li>
                    <a
                      target="_blank"
                      rel="nofollow"
                      href="http://www.kuwo.cn/web/cdpack/index"
                      >HiFi音乐</a
                    >
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="flex_c nav_r">
            <div class="search_out">
              <div>
                <div class="search_inn flex_c">
                  <i class="icon iconfont icon-header_icon_search_"></i>
                  <input
                    maxlength="128"
                    type="text"
                    placeholder="搜索音乐/MV/歌单/歌手"
                    value=""
                    class="search"
                    v-model="keyword"
                   @keyup.enter="goSearch"
                  />
                  <!---->
                </div>
                <div class="list">
                  <!-- <p class="tit" style="display: " >
              大家都在搜
            </p> -->
                  <ul></ul>
                </div>
              </div>
            </div>
            <div class="reg_text">
              <span>登录</span>
              <span>/</span>
              <span>注册</span>
            </div>
          </div>
          <!---->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      keyword:''
    }
  },
  methods: {
    goSearch(){
      if(this.$route.query){
        if(this.keyword != ''){
          let location = {name:"search",params:{keyword:this.keyword || undefined}};
                location.query = this.$route.query;
                this.$router.push(location);
        }
                
            }
    }
  },
};
</script>

<style lang="css" scoped>
body {
  min-width: 1000px;
  overflow-x: auto;
}

.container {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
}

.page {
  overflow: hidden;
}

.header {
  border-bottom: 1px solid #f0f0f0;
}

.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  position: relative;
  top: -3px;
  width: 131px;
  height: 39px;
  margin-right: 39px;
}

.nav {
  display: flex;
  height: 67px;
  line-height: 67px;
  font-size: 16px;
}

.nav .item {
  font-weight: 300;
  margin-right: 4px;
}

.nav .item > a {
  display: inline-block;
  padding: 0 14px;
  width: 100%;
  height: 100%;
}

.nav .item > a:hover {
  color: #000;
}

.nav .item.active {
  background: #ffe443;
  font-weight: 600;
}

.nav a {
  color: #333;
}

.sub_out {
  position: relative;
}

.sub_out .up,
.sub_out:hover .down {
  display: none;
}

.sub_out:hover .up {
  display: inline-block;
}

.sub_out:hover .sub_nav {
  display: block;
}

.sub_out:hover .sub_nav li:hover {
  background: #ffdf1f;
}

.sub_nav {
  position: absolute;
  background: #fff;
  z-index: 100;
  top: 61px;
  left: -45px;
  width: 170px;
  padding-top: 2px;
  box-shadow: 0 0 30px 0 rgba(65, 67, 70, 0.08);
  display: none;
}

.sub_nav li {
  line-height: 50px;
}

.sub_nav li a {
  display: inline-block;
  width: 100%;
  height: 50px;
  padding: 0 20px;
}

.nav_r {
  position: relative;
}

.nav_r span {
  cursor: pointer;
}

.nav_r .user_img_out {
  position: relative;
  padding-left: 28px;
}

.nav_r .user_img_out .exit {
  position: absolute;
  top: 100%;
  right: 0;
  width: 170px;
  font-size: 16px;
  line-height: 67px;
  padding-left: 19px;
  height: 68px;
  background: #fff;
  box-shadow: 0 0 30px 0 rgba(65, 67, 70, 0.08);
  z-index: 10002;
  display: none;
}

.nav_r .user_img_out .exit .iconfont {
  font-size: 22px;
  margin-right: 10px;
}

.nav_r .user_img_out:hover .exit {
  display: flex;
}

.nav_r .reg_text {
  padding-left: 28px;
}

.nav_r .user_icon {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 50%;
  overflow: hidden;
}

.nav_r .user_icon img {
  width: 100%;
}

.nav_r .user_img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  box-shadow: 0 6px 36px 0 rgba(0, 0, 0, 0.08);
}

.search_out {
  position: absolute;
  right: 100%;
  top: 50%;
  width: 294px;
  background: #f5f5f5;
  transform: translateY(-50%);
  z-index: 10001;
  transition: all 0.4s ease-in-out;
}

.search_out.search_focus {
  width: 294px;
}

@media screen and (max-width: 1386px) {
  .search_out {
    width: 33px;
    overflow: hidden;
  }
  .search_out.search_focus {
    overflow: visible;
  }
  .search_out:hover {
    width: 294px;
  }
}

.search_inn {
  position: relative;
  z-index: 10;
  padding-left: 8px;
  border-radius: 2px;
  background: #f5f5f5;
}

.search_inn .icon {
  color: #999;
  cursor: pointer;
}

.search_inn .search {
  display: inline-block;
  height: 34px;
  flex: 1;
  line-height: 34px;
  border: none;
  margin-right: 24px;
  padding-left: 10px;
  background: #f5f5f5;
}

.search_inn input::-webkit-input-placeholder {
  color: #999;
}

.search_inn input:-moz-placeholder,
.search_inn input::-moz-placeholder {
  color: #999;
}

.search_inn input:-ms-input-placeholder {
  color: #999;
}
</style>>
