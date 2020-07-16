<template>
  <section class="overflow-auto flex flex-col w-full justify-center">
    <platform-options class="mb-10" :platform.sync="options.platform" />
    <app-options class="mb-10" :options.sync="options" />
    <extra-options class="mb-10" :options.sync="options" />
    <layout-options class="mb-10" :options.sync="options" />
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
