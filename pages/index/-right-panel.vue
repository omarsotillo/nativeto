import Vue from 'vue'

import PlatformOptions from './-options/-platform-options.vue'
import AppOptions from './-options/-app-options.vue'
import LayoutOptions from './-options/-layout-options.vue'
import ExtraOptions from './-options/-extra-options.vue'

export default Vue.extend({
  name: 'right-panel',
  template: require('./-right-panel.html'),
  components: { PlatformOptions, AppOptions, LayoutOptions, ExtraOptions },
})
