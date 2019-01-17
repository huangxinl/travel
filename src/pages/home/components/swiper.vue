<template>
    <div class="wrapper">
        <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of data"  :key="item.id">
            <img :src="item.imgUrl" alt="" class="myGirl">
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
        loop: true
      },
      data: [{
        id: '001',
        imgUrl: 'static/img/wq1.jpeg'
      }, {
        id: '002',
        imgUrl: 'static/img/wq2.jpeg'
      }, {
        id: '003',
        imgUrl: 'static/img/wq3.jpeg'
      }, {
        id: '004',
        imgUrl: 'static/img/wq4.jpeg'
      }, {
        id: '005',
        imgUrl: 'static/img/wq5.jpeg'
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
    height 31.25vw
    .myGirl
        display inline-block
        width 100%
        height 2.6rem
        overflow hidden
</style>
