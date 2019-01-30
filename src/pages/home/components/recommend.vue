<template>
    <div class="container">
        <div class="recommend-title">热销推荐</div>
        <router-link :to="'/detail/'+ item.id" tag="div"  class="recommend-item" v-for="item of recommendList" :key= "item.id"> 
            <div class="icon-img-wrapper">
                <img :src="item.imgUrl" alt="" class="icon-img">
            </div>
            <div class="text-infor">
                <p class="title">{{item.title}}</p>
                <p class="desc">{{item.desc}}</p>
                <button class="item-btn">查看详情</button>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommend',
    props: {
        recommendList: Array
    }
}
</script>

<style lang="stylus" scoped>
 @import '~styles/mixins.styl'
.container
    width 100%
    .recommend-title
        margin-top .1rem
        line-height .86rem
        height .86rem
        background-color #eeeeee
    .recommend-item
        height 1.9rem
        overflow hidden
        display flex
        .icon-img-wrapper
            width 1.7rem
            padding 0.1rem
            .icon-img
                width 100%
        .text-infor
            flex 1
            padding .1rem
            min-width 0
            .title
                line-height .54rem
                font-size .32rem
            .desc
                line-height .4rem
                ellipsis()
            .item-btn
                background-color  #ff9300
                margin-top .2rem            
</style>
