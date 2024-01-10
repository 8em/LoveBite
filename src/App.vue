<template>
  <div class="max-w-screen-xl mx-auto px-4 font-default">
    <Transition>
      <div
        @click="closePopup"
        class="fixed top-0 right-0 opacity-70 w-full bg-lb-rot h-svh z-50"
        v-if="popUpIsOpen"
      ></div>
    </Transition>
    <Transition>
      <ContactPopUp
        v-if="popUpIsOpen"
        @close-popup="closePopup"
        title="Contact us"
      />
    </Transition>

    <MainHeader @open-popup="openPopup" />
    <TheHome @open-popup="openPopup" />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import TheHome from './views/TheHome.vue'
import ContactPopUp from './components/ContactPopUp.vue'

export default {
  components: { TheHome, MainHeader, ContactPopUp },
  data() {
    return {
      popUpIsOpen: false,
    }
  },
  methods: {
    openPopup() {
      this.popUpIsOpen = true
    },
    closePopup() {
      this.popUpIsOpen = false
    },
  },
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
