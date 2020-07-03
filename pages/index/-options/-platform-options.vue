<template>
  <div class="mx-auto">
    <h2 class="mt-8 font-bold text-3xl">
      Which system is your target? 🎯
    </h2>
    <div id="platform-options" class="flex content-center w-full mt-3">
      <button
        class="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full p-8 mr-4"
      >
        <img src="@/assets/images/linux.svg" alt="" />
      </button>
      <button
        class="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full p-8 mr-4"
      >
        <img src="@/assets/images/apple.svg" alt="" />
      </button>
      <button
        class="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full p-8 mr-4"
      >
        <img src="@/assets/images/windows.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'platform-options',
})
</script>
