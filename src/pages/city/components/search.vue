<template>
    <div class="search">
        <input type="text" placeholder="输入城市名或拼音">
    </div>
</template>

<script>
export default {
    name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.search
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
</style>
