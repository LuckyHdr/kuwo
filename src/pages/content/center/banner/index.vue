<template>
   <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(carousel,index) in bannerList" :key="carousel.id">
            <img :src="carousel.imgUrl">
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
</div>
</template>

<script>
import {mapState} from 'vuex'
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name: "banner",
  data() {
    return {
    //   img:[
    //     {imgersssd:require("./images/3.jpg")},
    //     {imgersssd:require("./images/1.jpg")},
    //     {imgersssd:require("./images/2.jpg")},
    //     {imgersssd:require("./images/4.jpg")},
    //     {imgersssd:require("./images/5.jpg")},
    //   ]
    }
  },
  computed:{
      ...mapState({
        bannerList:(state) => state.home.bannerList
      })
  },
  mounted() {
     this.$store.dispatch('getBannerList');
  },
  watch:{
    img:{
        //立即监听，不管你数据有没有变化，上来就开始监听一次
        immediate:true,
        handler(){
                this.$nextTick(() => {
                var mySwiper = new Swiper(
                this.$refs.cur,
                {
                    loop:true,
                    autoplay:true,
                    pagination:{
                        el:".swiper-pagination",
                        //点击小球
                        clickable:true,
                    },
                    navigation:{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                });
            });
        }
    }
}
};
</script>

<style>
.swiper-pagination-bullet {
    background: hsla(0,0%,100%,.8);
}
div.swiper-button-prev{
  background: #000;
  margin: -22px 0px 0px;
}
</style>>

