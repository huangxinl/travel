<template>
  <div>
      <home-header :city = "city"></home-header>
      <home-swiper></home-swiper>
      <home-icons :iconList = "iconList"></home-icons>
      <home-recommend :recommendList= "recommendList"></home-recommend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import axios from 'axios'

export default {
  name: 'Home',
  data(){
    return {
      city: '',
      iconList: [],
      recommendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  mounted(){
    this._cityList()
    this._indexList()
  },
  methods: {
    _cityList(){
      const self = this
      axios.get('/static/mock/city.json').then(function(res){
        if(res.data.ret){
          const data = res.data.data
          self.city = data.hotCities[0].name
        }
      })
    },
    _indexList(){
      const self = this
      axios.get('/static/mock/index.json').then(function(res){
        if(res.data.ret){
          console.log(res.data.data)
          const data = res.data.data
          self.iconList = data.iconList
          self.recommendList = data.recommendList
        }
      })
    }
  }
}
</script>

<style>
</style>
