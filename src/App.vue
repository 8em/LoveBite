<template>
  <div class="max-w-screen-xl mx-auto px-4 font-default">
    <ContactPopUp
      v-if="popUpIsOpen"
      @close-popup="closePopup"
      title="Contact us"
    />

    <MainHeader @open-popup="openPopup" />
    <TheHome />
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
