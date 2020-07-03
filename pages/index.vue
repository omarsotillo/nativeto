<template>
  <div class="flex flex-row bg-white h-screen">
    <left-panel />
    <right-panel />
    <modal />
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
})
</script>

<style></style>
