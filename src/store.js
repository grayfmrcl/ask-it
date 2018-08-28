import Vue from 'vue';
import Vuex from 'vuex';

import { $http } from '@/http-common';

Vue.use(Vuex);

const SIGNING_IN = 'SIGNING_IN'
const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS'
const SIGNIN_FAILED = 'SIGNIN_FAILED'
const SIGNOUT = 'SIGNOUT'

export default new Vuex.Store({
  state: {
    authenticated: !!localStorage.getItem('auth_token'),
    pending: false,
    questions: [],
    profile: {}
  },
  mutations: {
    [SIGNING_IN](state) {
      state.pending = true
    },
    [SIGNIN_SUCCESS](state, payload) {
      state.pending = false
      state.authenticated = true
      state.profile = payload
    },
    [SIGNIN_FAILED](state) {
      state.pending = false
    },
    [SIGNOUT](state) {
      state.pending = false
      state.authenticated = false
    }
  },
  actions: {
    signin({ commit }, creds) {
      commit(SIGNING_IN)
      return new Promise((resolve, reject) => {

        setTimeout(() => {
          $http.post('/auth/signin', creds)
            .then(({ data }) => {
              localStorage.setItem('auth_token', data.auth_token)
              commit(SIGNIN_SUCCESS, data)
              resolve()
            })
            .catch(err => {
              console.log(err)
              commit(SIGNIN_FAILED)
              reject(err)
            })
        }, 2000)

      })
    },
    signout({ commit }) {
      localStorage.removeItem("auth_token");
      commit(SIGNOUT);
    },
    signup(context, userData) {

      return new Promise((resolve, reject) => {
        $http.post('/auth/signup', userData)
          .then(res => resolve())
          .catch(err => reject(err))
      })

    }
  },
  getters: {
    pending: state => state.pending,
    authenticated: state => state.authenticated
  }
});
