<template>
 <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe66b;</div>
    </div>
    <div class="header-content">
      <span class="iconfont ">&#xe819;</span>
      名称，地点，主题等
    </div>
    <router-link to="/city">
       <div class="header-city">
        {{this.city}}
       <span class="iconfont  city-icon">&#xe627;</span>
      </div>
    </router-link>
 </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
  display flex
  background-color $bgColor
  line-height $nav-height
  height  $nav-height
  color #fff
  .header-left
    float left
    width .64rem
    .back-icon
      text-align center
      font-size .4rem
      transform rotate(180deg)
  .header-city
    min-width 1.24rem
    padding 0 .1rem
    float right
    text-align center
    color #fff
    .city-icon
      font-size .24rem
  .header-content
    padding-left .2rem
    flex 1
    margin-top .12rem
    margin-left .2rem
    height .64rem
    line-height .64rem
    border-radius .1rem
    background-color #fff
    color #ccc
</style>
