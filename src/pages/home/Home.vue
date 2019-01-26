<template>
  <div>
      <home-header></home-header>
      <home-swiper :swiperList= "swiperList"></home-swiper>
      <home-icons :iconList = "iconList"></home-icons>
      <home-recommend :recommendList= "recommendList"></home-recommend>
      <home-list :weekendList= "weekendList"></home-list>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeList from './components/list'
import HomeCity from '../city/city'
import Axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data(){
    return {
      iconList: [],
      recommendList: [],
      weekendList: [],
      data: [],
      swiperList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeList,
    HomeCity
  },
  mounted(){
    this.lastCity = this.city
    this._indexList()
  },
  methods: {
    _indexList(){
      const self = this
      Axios.get('/api/index.json?city=' + this.city).then( res => {
        if(res.data.ret){
          console.log(res.data.data)
          const data = res.data.data
          self.iconList = data.iconList
          self.recommendList = data.recommendList
          self.weekendList = data.weekendList
          self.swiperList = data.swiperList
        }
      })
    }
  },
  activated(){
    if(this.lastCity !== this.city) {
      this.lastCity = this.city
      this._indexList()
    }
  }
}
</script>

<style>
</style>
