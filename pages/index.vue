<template>
  <div class="flex flex-row bg-white h-screen">
    <left-panel
      :target-url.sync="options.targetUrl"
      v-on:convert-confirm="modalShow = true"
    />
    <right-panel :options.sync="options" />
    <confirm-request-modal
      :options="options"
      :modal-show.sync="modalShow"
      v-on:convert="convert"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightPanel from './index/-right-panel.vue'
import LeftPanel from './index/-left-panel.vue'
import ConfirmRequestModal from './index/-confirm-request-modal.vue'

export default Vue.extend({
  components: {
    RightPanel,
    LeftPanel,
    ConfirmRequestModal,
  },

  data: () => {
    return {
      modalShow: false,
      options: {
        targetUrl: 'https://okubi.co',
        platform: 'osx',
        appName: 'okubi.co',
        appVersion: '0.0.1',
        width: 1280,
        maxWidth: 0,
        minWidth: 0,
        height: 800,
        maxHeight: 0,
        minHeight: 0,
        showMenuBar: true,
        fullScreen: false,
        fastQuit: false,
        maximize: false,
      },
    }
  },

  methods: {
    convert(): void {
      console.log(this.options)
      this.modalShow = false
    },
  },
})
</script>

<style></style>
