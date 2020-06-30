<template>
  <section class="overflow-auto flex flex-col w-full">
    <platform-options />
    <app-options />
    <layout-options />
    <extra-options />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import PlatformOptions from './options/PlatformOptions.vue'
import AppOptions from './options/AppOptions.vue'
import LayoutOptions from './options/LayoutOptions.vue'
import ExtraOptions from './options/ExtraOptions.vue'

export default Vue.extend({
  name: 'right-panel',
  components: { PlatformOptions, AppOptions, LayoutOptions, ExtraOptions },
})
</script>
