import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo:[],
        cartCount:0,
        userId:""
    },
    mutations: {
        updateUserInfo(state,userInfo){
            state.userInfo = userInfo;
        },
        updateUserId(state,userId){
            state.userId = userId;
        }

    },
    actions: {

    }
})