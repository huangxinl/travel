<template>
  <div>
      <home-header :city = "city"></home-header>
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

export default {
  name: 'Home',
  data(){
    return {
      city: '',
      iconList: [],
      recommendList: [],
      weekendList: [],
      data: [],
      swiperList: []
    }
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
    this._cityList()
    this._indexList()
  },
  methods: {
    _cityList(){
      const self = this
      Axios.get('/api/city.json').then(res =>{
        if(res.data.ret){
          const data = res.data.data
          self.city = data.hotCities[0].name
        }
      })
    },
    _indexList(){
      const self = this
      Axios.get('/api/index.json').then(res => {
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
  }
}
</script>

<style>
</style>
