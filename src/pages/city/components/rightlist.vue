<template>
    <div>
      <div class="left-list">
        <div class="value"  v-for= "(item, key) of cities" @click="handleClick">{{key}}</div>
      </div>
    </div>
</template>

<script>
export default {
    name: "CityRightlist",
    props: {
        cities: Object
    },
    methods: {
       handleClick(e){
           this.$emit('spot', e.target.innerText)
           console.log(e.target.innerText)
       }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.left-list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    bottom 0
    top 1.78rem
    width .4rem
    .value
        line-height .4rem
        text-align center
        background-color $bgColor
        color #fff
</style>
