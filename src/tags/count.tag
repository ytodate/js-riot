import action from '../actions/index.js'
import './tabs'
import './app'
<count>
  <app>
  <div data-is="tabs"></div>
  <p> count: { count }</p>
  <button onclick={ add }>+</button>
  <button onclick={ minus }>-</button>
  </app>
  <script>
    this.count = 0;
    add () {
      this.count += 1;
    }
    minus () {
      this.count -= 1;
    }
    console.log("count", this.opts)

    let store = this.opts.store
    this.state = store.getState()

    this.setCount = (count) => {
      store.dispatch(action.setCount(count))
    }
  </script>
</count>

