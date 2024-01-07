<template>
  <div class="container">
    <ContainerLeft/>
    <ContainerRight />
  </div>
</template>

<script>
  import ContainerLeft from './ContainerLeft.vue';
  import ContainerRight from './ContainerRight.vue';

  export default {
  components: {
      ContainerLeft,
      ContainerRight,
    }
  }
</script>