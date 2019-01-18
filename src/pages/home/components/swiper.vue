<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of data"  :key="item.id">
          <div class="girl-limt">
             <img :src="item.imgUrl" alt="" class="myGirl">
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true,
        autoplay: false
      },
      data: [{
        id: '001',
        imgUrl: 'static/img/wq1.png'
      }, {
        id: '002',
        imgUrl: 'static/img/wq2.png'
      }, {
        id: '003',
        imgUrl: 'static/img/wq3.png'
      }, {
        id: '004',
        imgUrl: 'static/img/wq4.png'
      }, {
        id: '005',
        imgUrl: 'static/img/wq5.png'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
    background-color #fff
.wrapper
    width 100%
    height 0
    padding-bottom 31.25%
    background-color #eee
    overflow hidden
    .girl-limt
      height 0
      padding-bottom 31.25%
      .myGirl
          width 100%
</style>
