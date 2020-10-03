import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    layoutName: 'default-layout'
  },
  getters: {
    isLoading(state) {
      return state.isLoading
    },
    layoutName(state) {
      return state.layoutName
    }
  },
  mutations: {
    START_LOADING(state) {
      state.isLoading = true;
    },
    STOP_LOADING(state) {
      state.isLoading = false;
    },
    SET_LAYOUT_NAME(state, payload) {
      state.layoutName = payload.data
    }
  },
  actions: {
    startLoading(context) {
        let payload = {
          type: 'START_LOADING'
        };
        context.commit(payload)
    },
    stopLoading(context) {
        let payload = {
            type: 'STOP_LOADING'
        };
        context.commit(payload)
    },
    setLayoutName(context, actionData) {
      let payload = {
        type: 'SET_LAYOUT_NAME',
        data: actionData.layoutName
      };
      context.commit(payload)
    },
  },
  modules: {
  }
})
