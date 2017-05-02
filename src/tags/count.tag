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

  </script>
</count>

