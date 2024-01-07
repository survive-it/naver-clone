<template>
  <div class="wrap">
    <!-- 메인 레이아웃 -->
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script>
  import Header from '@/components/layouts/Header.vue'
  import Footer from '@/components/layouts/Footer.vue'

  export default {
    components: {
      Header,
      Footer
    }
  }
</script>