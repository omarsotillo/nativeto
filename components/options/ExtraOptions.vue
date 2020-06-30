<template>
  <form class="mx-auto max-w-lg bg-gray-100 rounded shadow p-5 mt-5">
    <div class="flex flex-wrap mb-2">
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Show menu bar?
        </label>
        <input class="mr-2 leading-tight" type="checkbox" />
      </div>
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Full screen?
        </label>
        <input class="mr-2 leading-tight" type="checkbox" />
      </div>
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Fast quit?
        </label>
        <input class="mr-2 leading-tight" type="checkbox" />
      </div>
      <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 text-center">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="grid-city"
        >
          Maximize?
        </label>
        <input class="mr-2 leading-tight" type="checkbox" />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'extra-options',
})
</script>
<!--
 show-menu-bar
 fast-quit
 full-screen
 maximize


 -->
