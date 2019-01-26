<template>
    <div>
      <div class="left-list">
        <div class="value"  v-for= "(item, key) of cities" @click= "handleClick" @touchstart= "touchstart"
         @touchmove= "touchmove" @touchend= "touchend" :ref= "key">{{key}}</div>
      </div>
    </div>
</template>

<script>
export default {
    name: "CityRightlist",
    props: {
        cities: Object,
    },
    data(){
        return {
           go: false,
           startY: 0,
           timer: null
        }
    },
    computed: {
        letters(){
            const letters = []
            for(let i in this.cities) {
                letters.push(i)
            } 
            return letters
        }
    },
    methods: {
       handleClick(e){
           this.$emit('spot', e.target.innerText)
        //    console.log(e.target.innerText)
       },
       touchstart(){
          this.go = true
       },
       touchmove(e){
          if(this.go) {
              if(this.timer) {
                  clearTimeout(timer)
              }
              var timer = setTimeout(() => {
                const touchY = e.touches[0].clientY - 89
                const index = Math.floor(( touchY - this.startY )/20)
                if(index>=0 && index < this.letters.length) {
                    this.$emit('spot', this.letters[index])
                }
              },16)
            //    console.log(startY)
            //    console.log(touchY)
            // console.log(index)
           }
       },
       touchend(){
        //    console.log('end') 
        this.go = false
       }
    },
    updated(){
        this.startY = this.$refs['A'][0].offsetTop
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
