<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-show='show'>总金额：{{totalMoney}}元</p>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HelloWorld',
  props: [
    'msg'
  ],
  computed:{
    totalMoney(){
      return this.$store.state.singlePrice*this.$store.state.count
    },
    ...mapState({
      show: state => state.show
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  color: #42b983;
}
</style>
