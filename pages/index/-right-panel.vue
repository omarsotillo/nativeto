<template>
  <section class="overflow-auto flex flex-col w-full">
    <platform-options :platform.sync="options.platform" />
    <app-options :options.sync="options" />
    <layout-options :options.sync="options" />
    <extra-options :options.sync="options" />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PlatformOptions from './-options/-platform-options.vue'
import AppOptions from './-options/-app-options.vue'
import LayoutOptions from './-options/-layout-options.vue'
import ExtraOptions from './-options/-extra-options.vue'

export default Vue.extend({
  name: 'right-panel',
  components: { PlatformOptions, AppOptions, LayoutOptions, ExtraOptions },
  props: ['options'],
})
</script>
