<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont city-back">&#xe66b;</div>
        </router-link>  
        <div class="city-choose">城市选择</div>
    </div>
</template>

<script>
export default {
    name: "CityHeader"
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'

.city-choose
    height: $nav-height
    background-color: $bgColor
    color #ffffff
    line-height $nav-height
    text-align center
.city-back
    float left
    line-height $nav-height
    color #fff
    width .64rem
    text-align center
    font-size .4rem
    transform rotate(180deg)


</style>
