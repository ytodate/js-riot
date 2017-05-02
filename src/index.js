import riot from 'riot'
import route from 'riot-route'
import app from './tags/app'
import count from './tags/count'


document.addEventListener('DOMContentLoaded', () => {
  riot.mount('#app', 'app')
})

route('/', () => {
  console.log("mount main")
  riot.mount('#app', 'app')
})

route('/count', (...args) => {
  console.log("mount count")
  riot.mount('#app', 'count')
})

route('/fruit', function(name) {
  console.log('mount fruit')
  riot.mount('#app', 'tabs')
})

route.start()