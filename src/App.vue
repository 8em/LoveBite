<template>
  <div class="max-w-screen-xl mx-auto px-4 font-default">
    <MainHeader />
    <TheHome />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import TheHome from './views/TheHome.vue'

export default {
  components: { TheHome, MainHeader },
}
</script>
