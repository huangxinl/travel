<template>
    <div class="banner-header">
        <router-link tag="div" class="back" to="/" v-show= "flag">
            <div class="iconfont back-icon">&#xe66b;</div>
        </router-link>
        <div class="header" :style= "changeStyle" v-show= "!flag">
            <router-link tag="div" to="/" class="header-left">
                <div class="iconfont back-icon">&#xe66b;</div>
            </router-link>
            <div class="header-content">
                景点详情
            </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data(){
        return {
            flag : true,
            changeStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScorll() {
            const Top = document.documentElement.scrollTop
           if(Top > 60){
            //    console.log( this.flag)
               const opacity = Top / 140
               this.changeStyle = { opacity }
               this.flag = false
           } else {
                this.flag = true
           }
        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScorll)
    },
    deactivated() {
        window.removeEventListener('scroll', this.handleScorll)
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
    z-index 200
    position fixed
    top 0
    left 0
    right 0
    display flex
    background-color $bgColor
    line-height $nav-height
    height  $nav-height
    text-align center
    color #fff
    .header-left
        float left
        width .64rem
    .back-icon
        font-size .4rem
        transform rotate(180deg)
    .header-content
        flex 1
.back
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius 50%
    background-color rgba(0,0,0,0.8)
    .back-icon
        text-align center
        font-size .4rem
        color #fff
        line-height .8rem
        transform rotate(180deg)

</style>
