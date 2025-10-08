<template>
  <header class="nav-header">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="logo">MyApp</router-link>

      <!-- Navigation Links -->
      <nav class="nav-links">
        <router-link to="/register" class="nav-item" active-class="active">Register</router-link>
        <router-link to="/signin" class="nav-item" active-class="active">Sign In</router-link>
        <router-link to="/addbook" class="nav-item" active-class="active">Add Book</router-link>
        <!-- ✅ 新增 Get Book Count 链接 -->
        <router-link to="/GetBookCount" class="nav-item" active-class="active">Get Book Count</router-link>
        <router-link to="/WeatherCheck" class="nav-item" active-class="active">Weather Check</router-link>
        <router-link to="/CountBookAPI" class="nav-item" active-class="active">Count Book API</router-link>
        <router-link to="/GetAllBookAPI" class="nav-item" active-class="active">Get All Book API</router-link>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>

<style scoped>
.nav-header {
  background-color: #1e293b;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: #facc15;
  text-decoration: none;
  transition: transform 0.2s ease;
}
.logo:hover {
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  gap: 1rem;
}

.nav-item {
  color: #e2e8f0;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.nav-item:hover {
  background-color: rgba(250, 204, 21, 0.15);
  color: #facc15;
}

.nav-item.active {
  background-color: #facc15;
  color: #1e293b;
  font-weight: 600;
}
</style>
