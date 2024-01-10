<script>
import TheHero from '../components/TheHero.vue'
import TheDesctiptionSection from '../components/TheDesctiptionSection.vue'
import TheBenefits from '../components/TheBenefits.vue'
import MainFooter from '../components/MainFooter.vue'
export default {
  components: { TheHero, TheDesctiptionSection, TheBenefits, MainFooter },
  methods: {
    openPopup() {
      this.$emit('open-popup')
    },
  },
}
</script>
<!-- Перенести футер в App -->
<template>
  <div class="max-w-screen-8xl mx-auto">
    <TheHero @open-hero-popup="openPopup" />
    <TheDesctiptionSection />
    <TheBenefits />
    <MainFooter />
  </div>
</template>
