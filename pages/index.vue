<template>
  <div class="flex flex-row bg-white h-screen">
    <left-panel
      :target-url.sync="options.targetUrl"
      v-on:convert-confirm="modalShow = true"
    />
    <right-panel :options.sync="options" />
    <confirm-request-modal
      :options="options"
      :error="!!error"
      :modal-show.sync="modalShow"
      v-on:convert="convert"
    />
    <p>{{ url }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import '@nuxtjs/axios'
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
        url: '',
        modalShow: false,
        error: null,
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
      async convert() {
        // TODO: Handle error better
        // With breadcrumb -> open issue in github with the error message.
        try {
          this.error = null;
          const response = await this.$axios.$post(
            '/.netlify/functions/nativeto',
            this.options,
            { responseType: 'arraybuffer' }
          )
          let blob = new Blob([response], { type: 'octet/stream' })
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = this.options.appName + '.zip'
          link.click()
          this.modalShow = false
        } catch(e) {
          this.error = e;
          console.error(e)
        }
      },
    },
  })
</script>

<style></style>
