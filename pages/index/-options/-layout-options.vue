<template>
  <form class="mx-auto max-w-lg bg-gray-100 rounded shadow p-5 mt-5 w-full">
    <h2 class="uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
      Layout settings
    </h2>
    <span @click="show = !show">Change me!!!</span>
    <section v-if="show">
      <div class="flex flex-wrap mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="width"
          >
            Width
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="width"
            type="number"
            v-model="options.width"
          />
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="max-width"
          >
            Max-width
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="max-width"
            type="number"
            v-model="options.maxWidth"
          />
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="min-width"
          >
            Min-width
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="min-width"
            type="number"
            v-model="options.minWidth"
          />
        </div>
      </div>
      <div class="flex flex-wrap mb-2">
        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="height"
          >
            Height
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="height"
            type="number"
            v-model="options.height"
          />
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="max-height"
          >
            Max-height
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="max-height"
            type="number"
            v-model="options.maxHeight"
          />
        </div>

        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            for="min-height"
          >
            Min-height
          </label>
          <input
            class="appearance-none block w-full text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="min-height"
            type="number"
            v-model="options.minHeight"
          />
        </div>
      </div>
    </section>
  </form>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'app-options',
  props: {
    options: Object,
  },
  data() {
    return {
      show: false,
    }
  },
})
</script>
<!--
 Platform

 App
 Name:
 App version
 Build version
 TODO: Icon


 -->
