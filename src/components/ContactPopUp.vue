<template>
  <div
    class="pop-up overflow-hidden fixed z-50 rounded-2xl p-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lb-primary"
  >
    <div class="flex items-center justify-between">
      <h5 class="text-2xl text-lb-rot font-medium">{{ title }}</h5>
      <CloseBtn @close-window="closePopUp" />
    </div>
  </div>
</template>

<script>
import CloseBtn from './CloseBtn.vue'

export default {
  components: { CloseBtn },
  props: {
    title: String,
  },

  methods: {
    closePopUp() {
      this.$emit('close-popup')
    },
  },
}
</script>

<style scoped>
.pop-up {
  height: max-content;
  @media screen and (max-width: 767px) {
    width: calc(100% - 32px);
  }
  @media screen and (min-width: 768px) {
    width: 600px;
  }
}
</style>
