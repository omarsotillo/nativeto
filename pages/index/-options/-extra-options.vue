<template>
  <form class="mx-auto max-w-lg bg-gray-100 rounded shadow p-5 mt-5">
    <div class="flex flex-wrap mb-2">
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="show-menu-bar"
        >
          Show menu bar?
        </label>
        <input
          class="mr-2 leading-tight"
          type="checkbox"
          v-model="options.showMenuBar"
        />
      </div>
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="full-screen"
        >
          Full screen?
        </label>
        <input
          class="mr-2 leading-tight"
          type="checkbox"
          v-model="options.fullScreen"
        />
      </div>
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="fast-quit"
        >
          Fast quit?
        </label>
        <input
          class="mr-2 leading-tight"
          type="checkbox"
          v-model="options.fastQuit"
        />
      </div>
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="maximize"
        >
          Maximize?
        </label>
        <input
          class="mr-2 leading-tight"
          type="checkbox"
          v-model="options.maximize"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'extra-options',
  props: {
    options: Object,
  },
})
</script>
<!--
 show-menu-bar
 fast-quit
 full-screen
 maximize


 -->
