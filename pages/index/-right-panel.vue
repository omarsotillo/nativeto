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
import PlatformOptions from './-options/-platform-options.vue'
import AppOptions from './-options/-app-options.vue'
import LayoutOptions from './-options/-layout-options.vue'
import ExtraOptions from './-options/-extra-options.vue'

export default Vue.extend({
  name: 'right-panel',
  components: { PlatformOptions, AppOptions, LayoutOptions, ExtraOptions },
})
</script>
