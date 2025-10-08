<template>
  <div id="app" class="main-container">
    <!-- 只有在当前路由不是 CountBookAPI 时显示 Header -->
    <header v-if="showHeader">
      <BHeader />
    </header>

    <main class="main-box">
      <router-view />
    </main>
  </div>
</template>

<script>
import BHeader from './components/BHeader.vue'

export default {
  name: 'App',
  components: {
    BHeader
  },
  computed: {
    // 如果当前路由名不是 CountBookAPI，就显示 Header
    showHeader() {
      const hiddenPages = ['CountBookAPI', 'GetAllBookAPI']
      return !hiddenPages.includes(this.$route.name)
    }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f8f9fa;
}

.main-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-box {
  flex: 1;
  padding: 20px;
}
</style>
