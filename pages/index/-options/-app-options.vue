<template>
  <form class="mx-auto max-w-lg bg-gray-100 rounded shadow p-5 mt-5">
    <div class="flex flex-wrap mb-2">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="app-name"
        >
          App name
        </label>
        <input
          class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500"
          id="app-name"
          type="text"
          placeholder="App name"
          v-model="options.appName"
        />
        <p class="text-gray-600 text-xs italic">
          Filename and title of the app
        </p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          for="app-version"
        >
          App version
        </label>
        <input
          class="appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
          id="app-version"
          type="text"
          placeholder="App version"
          v-model="options.appVersion"
        />
        <p class="text-gray-600 text-xs italic">
          Version of the application. Incremental
        </p>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'app-options',
  props: {
    options: Object,
  },
})
</script>
