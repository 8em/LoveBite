<template>
  <button
    :class="[
      'inline-block max-w-40 py-4 font-medium text-sm rounded-lg',
      readyToSend
        ? 'drop-shadow-xl hover:drop-shadow-none transition-all bg-btn-default hover:bg-btn-hovered text-white'
        : 'bg-btn-inactive text-gray-500 bg-lb-grey pointer-events-none cursor-not-allowed',
    ]"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    readyToSend: {
      type: Boolean,
      default: true,
    },
    text: {
      type: String,
    },
  },
  methods: {
    openContactPopup() {
      this.$emit('open-contact-popup')
    },
  },
}
</script>
