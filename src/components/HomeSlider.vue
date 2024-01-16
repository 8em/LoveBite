<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    navigation
    :autoplay="true"
    :speed="700"
    :loop="true"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(slide, idx) in slides" :key="idx">
      <img :src="`/src/assets/images/${slide}`" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      slidesDesk: [
        'banner1.png',
        'banner2.png',
        'banner3.png',
      ],
      slidesMobile: [
        'banner1-mobile.png',
        'banner2-mobile.png',
        'banner3-mobile.png',
      ],
      slides: null,
    }
  },

  mounted() {
    this.setSlides()
    window.addEventListener('resize', this.setSlides)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.setSlides)
  },
  methods: {
    setSlides() {
      this.slides =
        window.innerWidth < 768 ? this.slidesMobile : this.slidesDesk
    },
  },
  setup() {
    const onSwiper = () => {}
    const onSlideChange = () => {}
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, A11y, Autoplay],
    }
  },
}
</script>

<style>
.swiper {
  border-radius: 16px;
  overflow: hidden;
}
.swiper-button-next:after,
.swiper-button-next {
  left: 5rem;
  bottom: 1rem;
  top: auto;
  right: auto;
}
.swiper-button-next:after {
  font-size: 20px;
  background: azure;
  color: #f8aa17;
  padding: 10px 13px 10px 14px;
  border-radius: 8px;
}
.swiper-button-prev:after,
.swiper-button-prev {
  left: 1.5rem;
  bottom: 1rem;
  top: auto;
  right: auto;
}
.swiper-button-prev:after {
  font-size: 20px;
  color: #f8aa17;
  background: azure;
  padding: 10px 14px 10px 13px;
  border-radius: 8px;
}
</style>
