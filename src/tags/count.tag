import * as action from '../actions/index.js'
import './tabs'
import './header'

<count>
  <div data-is="header" title="count demo page"></div>
  <div data-is="tabs"></div>
  <p> count: { count }</p>
  <p> state count: { this.state.count }</p>
  <button onclick={ add }>+</button>
  <button onclick={ minus }>-</button>
  <button onclick={ setCount }>+ store</button>
  <script>
    this.count = 0;
    add () {
      this.count += 1;
    }
    minus () {
      this.count -= 1;
    }

    let store = this.opts.store
    this.state = store.getState()
    this.state.count = 0;

    store.subscribe(() => {
      this.state = store.getState();
      this.update();
    });

    this.setCount = (count) => {
      store.dispatch(action.setCount(count))
    }
  </script>
</count>

