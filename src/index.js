import riot from 'riot'
import route from 'riot-route'
import app from './tags/app'
import count from './tags/count'

import reducer from './reducers'
import { createStore, combineReducers } from 'redux'
var store = createStore(reducer)

document.addEventListener('DOMContentLoaded', () => {
  riot.mount('#app', 'app', { store })
})

route('/', () => {
  console.log("mount main")
  riot.mount('#app', 'app', { store })
})

route('/count', (...args) => {
  console.log("mount count")
  riot.mount('#app', 'count', { store })
})

route('/fruit', function(name) {
  console.log('mount fruit')
  riot.mount('#app', 'tabs', { store })
})

route.start()