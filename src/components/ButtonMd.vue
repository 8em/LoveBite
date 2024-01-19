<template>
  <button
    class="inline-block px-4 py-2 bg-btn-default hover:bg-btn-hovered transition-colors text-white font-medium text-sm rounded-lg"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    text: '',
  },
}
</script>
