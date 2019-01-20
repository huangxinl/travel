<template>
<div  class="box" ref="wrapper">
  <div>
    <div class="hot-city">
        <div class="current-city"><span>当前城市</span></div>
        <div class="btn-wrapper">
            <div class="btn">
                <span class="btn-city">北京</span>
            </div>
        </div>
    </div>
    <div class="hot-city">
        <div class="current-city"><span>热门城市</span></div>
        <div class="btn-wrapper">
            <div class="btn"  v-for="item of hotCities" :key="item.id">
                <span class="btn-city">{{item.name}}</span>
            </div>
        </div>
    </div>
    <div  v-for="(item,key) of cities"  :ref= "key" :key= "key">
        <div class="hot-city">
        <div class="current-city"><span>{{key}}</span></div>
        <div class="list-wrapper"  v-for="tip of item">
            <div class="list-btn border-bottom" >
                {{tip.name}}
            </div>
        </div>
     </div>
    </div> 
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: "CityList",
  props: {
    list: Array,
    cityList: Object,
    hotCities: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        console.log(element)
        this.BScroll.scrollToElement(element)
      }
    }
  },
 mounted(){
     this.BScroll = new BScroll(this.$refs.wrapper)
 }
};
</script>

<style lang="stylus" scoped>

.border-bottom::before 
  border-color #cccccc
.box
 position absolute
 left 0
 top 1.8rem
 bottom 0
 right 0
 overflow hidden
 .hot-city 
  width: 100%;
  .current-city 
    padding-left .2rem
    height .72rem
    line-height: .72rem;
    background-color: #eee;
  .btn-wrapper 
    margin-right: 0.4rem;
    padding .1rem
    overflow: hidden;
    .btn 
      display inline-block
      width: 25%;
      line-height: 0.86rem;
      text-align: center;
      .btn-city 
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #eee;
        padding: 0.1rem 0.4rem;
      .btn-city-line
        line-height .86rem
  .list-wrapper
    height .86rem
    width 100%
    .list-btn
        line-height .86rem
        padding-left .2rem
</style>
