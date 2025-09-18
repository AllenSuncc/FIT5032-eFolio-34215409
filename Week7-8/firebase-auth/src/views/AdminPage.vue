<template>
  <div style="text-align:center; padding:50px;">
    <h1>Admin Dashboard</h1>
    <p>Welcome, Admin!</p>

    <button @click="logout" style="margin-top:20px; padding:10px 20px; border:none; border-radius:6px; background:#f44336; color:white; cursor:pointer;">
      Logout
    </button>
  </div>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth"
import { useRouter } from "vue-router"

const router = useRouter()
const auth = getAuth()

const logout = async () => {
  try {
    await signOut(auth)
    console.log("User signed out")
    router.push("/signin")
  } catch (error) {
    console.error("Logout Error:", error.code)
  }
}
</script>
