<template>
  <div id="app">
    <header class="header">
      <h1 class="title">Simon Says</h1>
    </header>

    <MainPage />
  </div>
</template>

<script>
import MainPage from './views/MainPage.vue';

export default {
  components: { MainPage },
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 64px;
  margin-top: 32px;
}

.title {
  margin: 0;
}
</style>