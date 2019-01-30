<template>
    <div>
        <div class="banner" @click= "handleBannerClick">
            <div class="banner-img">
                <img :src="data.bannerImg" alt="">
            </div>
            <div class="banner-infor">
                <div class="banner-title">{{data.sightName}}</div>
                <div  class="banner-number">
                    <span class="iconfont  city-icon">&#xe627;</span> 2
                </div>
            </div>
        </div>
        <common-fade>
            <common-gallery @change="handleGalleryClick" v-show="flag" :data = "data"></common-gallery>
        </common-fade>   
    </div> 
</template>

<script>

import CommonGallery from 'common/gallery'
import CommonFade from 'common/fade'
export default {
    name: 'DetailBanner',
    props: {
        data: Object
    },
    data() {
        return {
            flag : false
        }
    },
    components: {
        CommonGallery,
        CommonFade
    },
    methods: {
        handleGalleryClick(){
            this.flag = false
        },
        handleBannerClick(){
            this.flag = true
        }
    }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    width: 100%;
    .banner-img
        position relative
        height 0
        overflow hidden
        padding-bottom 55%
        img 
            width 100%
    .banner-infor
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #fff
        background-image  linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,0.8))
        .banner-title
            flex 1
            font-size .32rem
            padding 0 .2rem
        .banner-number
            margin-top .14rem
            padding 0 .4rem
            height .32rem
            line-height .32rem
            border-radius .2rem
            background rgba(0,0,0,0.8)
            font-size .24rem
</style>
