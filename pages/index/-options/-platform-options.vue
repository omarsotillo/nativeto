<template>
  <div class="mx-auto">
    <h2 class="mt-8 font-bold text-3xl">
      Which system is your target? 🎯
    </h2>
    <div id="platform-options" class="flex content-center w-full mt-3">
      <button
        class="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full p-8 mr-4"
        :class="{ border: platform.selected }"
        v-for="platform in platforms"
        v-bind:key="platform.key"
        @click="choosePlatform(platform.key)"
      >
        <img :src="getImageUrl(platform.src)" alt="" />
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
