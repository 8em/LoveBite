<script>
import Logo from './MainLogo.vue'
import ButtonMd from './ButtonMd.vue'

export default {
  components: { Logo, ButtonMd },
}
</script>

<template>
  <header
    class="flex sticky w-full top-4 bottom-auto z-50 max-w-screen-xl items-center rounded-2xl justify-between bg-lb-primary p-4 my-4"
  >
    <Logo />
    <ButtonMd>Order Now</ButtonMd>
  </header>
</template>
