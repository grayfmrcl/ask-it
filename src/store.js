import Vue from 'vue';
import Vuex from 'vuex';

import { $http } from '@/http-common';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    SIGNED_OUT(state) {

    }
  },
  actions: {
    signin() {

    },
    signup() {

    },
    signout({ commit }) {
      localStorage.removeItem('auth_token')
      commit('SIGNED_OUT')
    }
  },
  computed: {

  }
});
