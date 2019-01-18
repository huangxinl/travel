<template>
 <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe66b;</div>
    </div>
    <div class="header-content">
      <span class="iconfont ">&#xe819;</span>
      名称，地点，主题等
    </div>
    <div class="header-city">
      {{this.city}}
       <span class="iconfont  city-icon">&#xe627;</span>
    </div>
 </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city : String
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
  display flex
  background-color $bgColor
  line-height .86rem
  height .86rem
  color #fff
  .header-left
    float left
    width .64rem
    .back-icon
      text-align center
      font-size .4rem
      transform rotate(180deg)
  .header-city
    width 1.24rem
    float right
    text-align center
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
