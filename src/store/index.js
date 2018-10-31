import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        singlePrice:2,
        count:5,
        show:false
    },
    getters:{
        not_show(state){
            return !state.show;
        }
    },
    mutations:{
        updateSingle(state,single){
            state.singlePrice=single
        },
        updateCount(state,count){
            state.count=count
        },
        switch_dialog(state){
            state.show=state.show?false:true;
        }
    },
    actions:{
        switch_dialog(context){
            context.commit('switch_dialog');
        }
    }
})
