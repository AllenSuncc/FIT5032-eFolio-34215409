<template>
  <header class="nav-header">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo">MyApp</router-link>

      <!-- Navigation Links -->
      <nav class="nav-links">
        <router-link to="/register" class="nav-item" active-class="active">Register</router-link>
        <router-link to="/signin" class="nav-item" active-class="active">Sign In</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
/* 整体导航栏 */
.nav-header {
  background-color: #1e293b; /* 深色背景 */
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

/* 容器布局 */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #facc15; /* 金黄色 */
  text-decoration: none;
  transition: transform 0.2s ease;
}
.logo:hover {
  transform: scale(1.05);
}

/* 导航链接容器 */
.nav-links {
  display: flex;
  gap: 1rem;
}

/* 单个导航项 */
.nav-item {
  color: #e2e8f0; /* 浅灰文字 */
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

/* 鼠标悬停 */
.nav-item:hover {
  background-color: rgba(250, 204, 21, 0.15);
  color: #facc15;
}

/* 激活状态 */
.nav-item.active {
  background-color: #facc15;
  color: #1e293b;
  font-weight: 600;
}
</style>
