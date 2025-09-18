<template>
  <div class="home-container">
    <div class="home-card">
      <h1>🎉 Welcome to Home Page 🎉</h1>
    </div>
  </div>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "vue-router"

const router = useRouter()
const auth = getAuth()

const logout = async () => {
  await signOut(auth)
  console.log("User signed out")
  router.push("/signin")
}
</script>

<style scoped>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #74ebd5, #9face6);
}

.home-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-align: center;
  max-width: 400px;
  width: 100%;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #555;
  font-size: 18px;
  margin-bottom: 30px;
}

button {
  background: #4cafef;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background: #2196f3;
}
</style>
