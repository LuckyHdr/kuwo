<template>
  <div>
    <div class="footer">
      <div class="container">
        <div class="foot_tit">
          <p>下载酷我音乐客户端</p>
          <p>协议与声明</p>
          <p>其它</p>
          <p class="other-link">合作链接</p>
        </div>
        <div class="foot_info">
          <div class="item">
            <ul class="download">
              <li>
                <a href="https://down.kuwo.cn/mbox/kwmusic_web_1.exe"
                  ><i class="iconfont icon-banner_icon_windows_"></i>
                  <span>PC版</span></a
                >
                <!---->
              </li>
              <li>
                <a href="javascript:;"
                  ><i class="iconfont icon-banner_icon_android_"></i>
                  <span>Android</span></a
                >
              </li>
              <li>
                <a href="javascript:;"
                  ><i class="iconfont icon-footer_pic_iphone_"></i>
                  <span>iPhone版</span></a
                >
              </li>
            </ul>
          </div>
          <div class="item">
            <p>
              <a
                target="_blank"
                rel="nofollow"
                href="https://h5app.kuwo.cn/m/9c0092e0/kwpcuseragreement.html"
                >用户服务协议</a
              >
              <a
                target="_blank"
                rel="nofollow"
                href="https://h5app.kuwo.cn/m/9c0092e0/kwpcchildrenprivacy.html"
                >儿童隐私政策</a
              >
            </p>
            <p>
              <a
                target="_blank"
                rel="nofollow"
                href="http://yinyue.kuwo.cn/yy/s2/NoBlameDoc.jsp"
                >免责声明</a
              >
              <a
                target="_blank"
                rel="nofollow"
                href="https://h5app.kuwo.cn/m/9c0092e0/privacyPolicypc.html"
                >隐私政策</a
              >
            </p>
            <p>
              <a
                target="_blank"
                rel="nofollow"
                href="https://h5app.kuwo.cn/m/9c0092e0/authorityDetails.html"
                >用户权限</a
              >
              <a
                target="_blank"
                rel="nofollow"
                href="http://yinyue.kuwo.cn/yy/s2/ProtectDoc.jsp"
                >权利声明</a
              >
            </p>
          </div>
          <div class="item">
            <p>
              <a
                target="_blank"
                rel="nofollow"
                href="http://yinyue.kuwo.cn/yy/s2/contact.jsp"
                >联系我们</a
              >
              <a
                target="_blank"
                rel="nofollow"
                href="http://yinyue.kuwo.cn/yy/s2/fuwu.html"
                >广告服务</a
              >
            </p>
            <p>
              <span class="text_line"
                ><a
                  target="_blank"
                  href="https://www.tencentmusic.com"
                  style="margin-right: 40px"
                  >腾讯音乐</a
                >
                <a
                  target="_blank"
                  rel="nofollow"
                  href="http://yinyue.kuwo.cn/yy/s2/introduction.jsp"
                  >诚聘英才</a
                ></span
              >
              <span class="text_line"
                ><!---->
                <a target="_blank" rel="nofollow" href="https://www.12377.cn"
                  >网上有害信息举报专区</a
                ></span
              >
            </p>
          </div>
          <div class="item other-link">
            <p>
              <a target="_blank" href="https://y.qq.com/">QQ音乐</a>
              <a target="_blank" href="https://www.kugou.com/ts/">酷狗听书</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>

<style>
.footer {
  margin-top: 62px;
  height: 220px;
  background: #282828;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
}
.container {
  min-width: 1180px;
  max-width: 1640px;
  padding: 0 120px;
  margin: 0 auto;
}
.foot_tit {
  line-height: 18px;
  padding-top: 49px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 36px;
}

.foot_tit p {
  width: 30%;
}

.foot_tit p.other-link {
  width: 10%;
}
.foot_info{
  display: flex;
  justify-content: space-between;
}

.foot_info .item{
  width: 30%;
  display: flex;
}

.foot_info .item.other-link{
  width: 10%;
}

.foot_info .item .download{
  display: flex;
}

.foot_info .item .download li{
  position: relative;
  top: 6px;
}

.foot_info .item .download li i{
  position: relative;
  top: 10px;
  font-size: 44px;
}

.foot_info .item .download li a{
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  margin-right: 37px;
}

.foot_info .item .download li a:hover {
  color: #ffe12c;
  opacity: 1;
}

.foot_info .item .download li a span{
  margin-top: 20px;
}

.foot_info .item p{
  margin-right: 40px;
}

.foot_info .item p a:hover {
  color: #ffdf1f;
}

.foot_info .item .text_line{
  display: block;
  white-space: nowrap;
}

.foot_info .item .text_line a{
  display: inline-block;
}

.foot_info .item a{
  display: block;
  white-space: nowrap;
  height: 18px;
  font-size: 13px;
  line-height: 18px;
  color: grey;
  margin-bottom: 26px;
}
</style>