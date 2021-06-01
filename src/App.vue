<template>
  <Header />
  <Home />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/views/Home.vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Home,
    Footer
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
