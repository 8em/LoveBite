<template>
  <button
    @click="openContactPopup"
    class="inline-block max-w-40 drop-shadow-xl hover:drop-shadow-none transition-all px-10 py-4 bg-btn-default hover:bg-btn-hovered text-white font-medium text-sm rounded-lg"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    openContactPopup() {
      this.$emit('open-contact-popup')
    },
  },
}
</script>
