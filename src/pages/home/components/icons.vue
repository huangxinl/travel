<template>
  <div class="icons-wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon-content">
          <ul>
            <li v-for="item of page" class="icon-img-wrapper">
              <div class="icon-limit">
                <img :src="item.imgUrl" alt class="icon-img">
                <p class="icon-text">{{item.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
      return {
        swiperOption: {
            autoplay: false
        }
      }
  },
  props: {
    iconList: Array
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
.icons-wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 50%;
  overflow: hidden;
  margin-top .1rem
  .icon-content {
    width: 100%;
    .icon-img-wrapper {
      position: relative;
      width: 25%;
      padding-bottom: 25%;
      float: left;
      .icon-limit {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0.44rem;
        text-align: center;
        .icon-img {
          display: inline-block;
          height: 100%;
          padding: 0.1rem;
          box-sizing: border-box;
        }
        .icon-text {
          line-height: 0.44rem;
        }
      }
    }
  }
}
</style>
