import Vue from "vue"
import App from "./App.vue"

import "typeface-barlow-condensed"
import "@/assets/tailwind.styles.css"
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount("#app")
