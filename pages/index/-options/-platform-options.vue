<template>
  <div class="mx-auto max-w-lg bg-gray-100 rounded shadow p-5 mt-5 w-full">
    <h2 class="uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
      Target system
    </h2>
    <div
      id="platform-options"
      class="flex flex-wrap content-center w-full mt-3 justify-center"
    >
      <button
        class="bg-white rounded-full shadow p-5 mr-4"
        :class="{ 'bg-gray-300': platform.selected }"
        v-for="platform in platforms"
        v-bind:key="platform.key"
        @click="choosePlatform(platform.key)"
      >
        <img :src="getImageUrl(platform.src)" alt="platform" width="40vw" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'platform-options',
  data: () => {
    return {
      platforms: [
        { key: 'linux', src: 'linux.svg', selected: false },
        { key: 'osx', src: 'apple.svg', selected: true },
        { key: 'windows', src: 'windows.svg', selected: false },
      ],
    }
  },
  props: {
    platform: String,
  },

  methods: {
    getImageUrl(pic: string) {
      return require('@/assets/images/' + pic)
    },
    choosePlatform(key: string) {
      this.platforms = this.platforms.map((platform) => {
        if (platform.key === key) {
          platform.selected = true
        } else {
          platform.selected = false
        }
        return platform
      })

      this.$emit('update:platform', key)
    },
  },
})
</script>
