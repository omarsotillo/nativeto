<template>
  <div class="flex flex-row bg-white h-screen">
    <left-panel />
    <right-panel />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import RightPanel from '../components/RightPanel.vue'
import LeftPanel from '../components/LeftPanel.vue'

export default Vue.extend({
  components: {
    RightPanel,
    LeftPanel,
  },
})
</script>

<style></style>
