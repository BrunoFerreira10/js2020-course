import Vue from 'vue'

export const baseApiUrl = 'http://localhost:3000'

export function showError(err) {
  if(err && err.response && err.response.data) {
    Vue.toasted.global.defaultError({msg : err.response.data})
  } else if ( typeof err === 'string') {
    Vue.toasted.global.defaultError({msg : err})
  } else {
    Vue.toasted.global.defaultError()
  }
}