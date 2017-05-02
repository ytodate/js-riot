import './header'
import './tabs'
import './count'

<app>
  <div id="main">
    <div data-is="header" title="demo page"></div>
    <div data-is="tabs"></div>
    <div data-is="count" store={ opts.store }></div>
  </div>
  <script>
    console.log("app", this.opts)
  </script>
</app>