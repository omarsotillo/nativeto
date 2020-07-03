<template>
  <section
    class="flex flex-col flex-initial px-8 pt-8 bg-space-cadet rounded-lg rounded-l-none text-white font-mono"
  >
    <header class="text-3xl font-bold">
      Nativeto.
    </header>
    <h2 class="text-lg mt-20 font-semibold">Hey,</h2>
    <h3>Start converting your website into a desktop application</h3>
    <input
      class="bg-white focus:outline-none mt-10 focus:shadow-outline text-black border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
      type="text"
      placeholder="https://okubi.co"
    />
    <img
      class="max-w-lg w-full my-auto justify-center"
      src="@/assets/images/humanity.png"
      alt="humanity"
    />
    <button
      class="bg-white hover:bg-gray-100 mb-10 text-gray-800 font-semibold py-2 px-1 border border-gray-400 rounded shadow"
    >
      Start converting
    </button>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
