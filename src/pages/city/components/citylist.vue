<template>
<div  class="box" ref="wrapper">
  <div>
    <div class="hot-city">
        <div class="current-city"><span>当前城市</span></div>
        <div class="btn-wrapper">
            <div class="btn">
                <span class="btn-city">{{this. currentCity}}</span>
            </div>
        </div>
    </div>
    <div class="hot-city">
        <div class="current-city"><span>热门城市</span></div>
        <div class="btn-wrapper">
            <div class="btn"  v-for="item of hotCities" :key="item.id">
                <span class="btn-city" @click = "handleBtnClick(item.name)">{{item.name}}</span>
            </div>
        </div>
    </div>
    <div  v-for="(item,key) of cities"  :ref= "key" :key= "key">
        <div class="hot-city">
        <div class="current-city"><span>{{key}}</span></div>
        <div class="list-wrapper"  v-for="tip of item">
            <div class="list-btn" @click = "handleBtnClick(tip.name)">
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
import { mapState,mapMutations } from 'vuex'
export default {
  name: "CityList",
  props: {
    list: Array,
    cityList: Object,
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.BScroll.scrollToElement(element,500)
      }
    }
  },
  methods:{
    handleBtnClick(city){
      //  this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted(){
     this.BScroll = new BScroll(this.$refs.wrapper)
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'

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
        ellipsis()
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
