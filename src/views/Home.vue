<template>
  <div class="home">
    <chartslist></chartslist>
    <a href='javascript:;' @click="$store.dispatch('switch_dialog')">点击</a>
    <hello-world :msg='msg'></hello-world>
  <div ></div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Chartslist from '@/components/Chartslist.vue'
import {mapState} from 'vuex'

export default {
  name: 'home',
  data(){
    return {
      msg:'小组件',
      singlePrice:1,
      count:1
      }
    },
  components: {
    HelloWorld,
    Chartslist
  }
}
</script>
