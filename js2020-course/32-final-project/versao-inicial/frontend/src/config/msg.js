import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  iconPack: 'fontawesome',
  duration: 3000
})


Vue.toasted.register (
  'defaultSuccess',
  payload => !payload.msg ? 'Operation performed successfully!' : payload.msg,
  { type: 'success', icon: 'check'}
)

Vue.toasted.register (
  'defaultError',
  payload => !payload.msg ? 'Ooops.... unexpected error.' : payload.msg,
  { type: 'error', icon: 'times'}
)