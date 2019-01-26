<template>
  <div>
    <div class="search">
       <input type="text" placeholder="输入城市名或拼音" v-model="keyWord">
    </div>
    <div class="search-list" ref= "wrapper" v-show="keyWord">
        <ul>
            <li class="border-bottom tip" v-for="item of list" :key="item.id" @click="handleBtnClick(item.name)">{{item.name}}</li>
            <li class="border-bottom tip" v-show= "hasNoData">没有找到匹配数据</li>
        </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
    name: 'CitySearch',
    props: {
        cities: Object
    },
    data(){
      return {
        keyWord: '',
        timer: null,
        list: []
      }
    },
    computed: {
        hasNoData(){
            return !this.list.length
        }
    },
    methods: {
      handleBtnClick(city){
      //  this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.keyWord = ''
      this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    watch: {
        keyWord() {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            if(!this.keyWord) {
                this.list = []
                return
            }
            const timer = setTimeout(() => {
                const result = []
                for(let i in this.cities) {
                    this.cities[i].forEach((value) => {
                        if (value.name.indexOf(this.keyWord) > -1 ||
                             value.spell.indexOf(this.keyWord) > -1) 
                        {
                            result.push(value)
                        }
                    })                    
                }
                this.list = result
            },100)
           
        }
    },
    mounted(){
        this.scroll = new BScroll(this.$refs.wrapper)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'

.search
    position relative
    height .72rem
    padding .1rem
    background-color $bgColor
    input
        box-sizing border-box
        width 100%
        text-align center
        padding 0 .1rem
        line-height .62rem
        height .62rem
        border-radius .06rem
.search-list
    position absolute
    left 0
    top 1.78rem
    bottom 0
    right 0
    width 100%
    z-index 1
    background-color #eee
    overflow hidden
    ul
        width 100%
        .tip
            padding-left .2rem
            line-height  .62rem
            width 100%
            background-color #ffffff
</style>
