<template>
  <header
    class="flex sticky w-full top-4 bottom-auto z-50 max-w-screen-xl items-center rounded-2xl justify-between bg-lb-primary p-4 my-4"
  >
    <Logo />
    <ButtonMd @click="openPopup">Order Now</ButtonMd>
  </header>
</template>

<script>
import Logo from './MainLogo.vue'
import ButtonMd from './ButtonMd.vue'

export default {
  components: { Logo, ButtonMd },
  methods: {
    openPopup() {
      this.$emit('open-popup')
    },
  },
}
</script>
