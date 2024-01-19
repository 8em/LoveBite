<template>
  <div
    class="bg-hero-pattern h-max bg-cover bg-right-bottom overflow-hidden relative flex flex-col p-6 pb-56 sm:p-8 md:pb-16 md:p-16 rounded-2xl"
  >
    <h1 class="text-xl mb-60 sm:mb-0 md:text-4xl text-lb-rot">
      For Dogs <br />
      <span class="text-4xl md:text-7xl tracking-tight font-bold text-lb-yellow"
        >Himalayan Cheese</span
      >
    </h1>
    <div
      class="z-10 absolute flex flex-col p-6 left-0 right-0 bottom-0 md:p-0 md:m-0 bg-lb-bg-beige sm:bg-transparent sm:relative sm:mt-6 backdrop-blur-md sm:backdrop-blur-none"
    >
      <p class="mt-0 sm:mt-4 max-w-96 inline-block">
        A Wholesome Treat Crafted <br />
        with Love and Tradition.
      </p>

      <ButtonLg
        :text="'Contact Us'"
        :isActiveButton="true"
        @open-contact-popup="openPopUp"
        class="mt-6 z-10"
      />
    </div>
    <img
      class="absolute max-w-64 bottom-44 left-1/2 transform -translate-x-1/2 xs:mx-auto sm:left-auto sm:right-0 sm:max-w-85 md:right-0 lg:-right-24 lg:max-w-96 sm:bottom-0"
      src="../assets/images/dog-hero-bg.png"
      alt=""
    />
  </div>
</template>

<script>
import ButtonLg from './ButtonLg.vue'
export default {
  methods: {
    openPopUp() {
      this.$emit('open-hero-popup')
    },
  },
  components: { ButtonLg },
}
</script>
