<template>
    <div>
        <!-- <p>菜的单价：<input :value="single" @input="updateSingle"/>元</p>
        <p>菜的数量：<input :value="count" @input="updateCount"/></p> -->
        <p>菜的单价：<input v-model="single"/>元</p>
        <p>菜的数量：<input v-model="count"/></p>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'chartslist',
  computed:{
    single:{
      get(){
        return this.$store.state.singlePrice
      },
      set(value){
        this.$store.commit('updateSingle',value)
      }
    },
    count:{
      get(){
        return this.$store.state.count
      },
      set(value){
        this.$store.commit('updateCount',value)
      }
    },
    ...mapState({
      show: state => state.show,
      // single:'singlePrice',
      // count:'count'
    })
  },
  // methods:{
  //   updateSingle(e){
  //     this.$store.commit('updateSingle',e.target.value)
  //   },
  //   updateCount(e){
  //     this.$store.commit('updateCount',e.target.value)
  //   }
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}
</style>