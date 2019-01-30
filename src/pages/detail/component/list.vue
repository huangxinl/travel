<template>
<div class="containner">
    <div v-for= "(item,index) of list" :key = "index">
        <div class="title border-bottom">
            <span class="item-title-icon"></span>
            {{item.title}}
        </div>
        <div v-if= "item.children" class="children">
            <detail-list :list = "item.children"></detail-list>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'DetailList',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
    .title
        font-size .35rem
        line-height .70rem
        margin-top .2rem
        padding 0.1rem .6rem
        .item-title-icon
            position: relative
            left: .06rem
            top: .06rem
            display: inline-block
            width: .36rem
            height: .36rem
            background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
            margin-right: .1rem
            background-size: .4rem 3rem
    .children
        padding-left .4rem
</style>
