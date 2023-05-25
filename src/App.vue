<script>
import SimpleForm from '@components/SimpleForm.vue';

export default {
  components: {
    SimpleForm,
  },
};
</script>

<template>
  <div class="container">
    <simple-form title="Simple Form"></simple-form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
  padding: 100px 50px;
}
</style>
