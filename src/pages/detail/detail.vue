<template>
    <div>
        <detail-banner :data = "data"></detail-banner>
        <detail-header></detail-header>
        <detail-list :list = "list"></detail-list>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from './component/banner'
import DetailHeader from './component/header'
import DetailList from './component/list'
import Axios from "axios"
export default {
    name: "HomeDetail",
    data(){
        return {
            data: {},
            list: []
        }
    },
    components: {
        DetailBanner,
        DetailHeader,
        DetailList
    },
    methods: {
         _getDetail(){
            const self = this
            Axios.get('/api/detail.json?id=' + this.$route.params.id).then(res => {
                self.data = res.data.data
                self.list = res.data.data.categoryList
                console.log(res.data.data)
            })
        }
    },
    mounted() {
        this._getDetail()
    }
}
</script>

<style lang="stylus" scoped>
.content
    height 50rem

</style>
