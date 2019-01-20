<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities = "hotCities" :cities= "cities" :letter = "letter"></city-list>
        <city-rightlist :cities= "cities"  @spot = "spot"></city-rightlist>
    </div>
</template>

<script>
import CityHeader from './components/header'
import CitySearch from './components/search'
import CityList from './components/citylist'
import CityRightlist from './components/rightlist'
import Axios from 'axios'
export default {
    name: 'HomeCity',
    data(){
       return {
           hotCities: [],
           cities:{},
           letter: ''
       }
    },
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityRightlist
    },
    methods: {
        spot(letter){
            this.letter = letter //通过 子 -》 父 -》 子 传递
        }
    },
    mounted(){
        const self = this
        Axios.get('/api/city.json').then(res => {
            res = res.data
            if(res.ret && res.data) {   //确认数据
                self.hotCities = res.data.hotCities
                self.cities = res.data.cities
            }
        })
    }
}
</script>

<style>

</style>
