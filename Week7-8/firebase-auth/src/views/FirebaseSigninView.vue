<template>
  <h1>Sign in</h1>
  <p>
    <input type="text" placeholder="Email" v-model="email" />
  </p>
  <p>
    <input type="password" placeholder="Password" v-model="password" />
  </p>
  <p>
    <button @click="signin">Sign in via Firebase</button>
  </p>
</template>

<script setup>
import { ref } from "vue"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc } from "firebase/firestore"
import { useRouter } from "vue-router"

const email = ref("")
const password = ref("")
const router = useRouter()
const auth = getAuth()
const db = getFirestore()

const signin = async () => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log("Firebase Sign-in Successful!")
    const user = userCredential.user

    const docRef = doc(db, "users", user.uid)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const userData = docSnap.data()
      console.log("User role:", userData.role)

      if (userData.role === "admin") {
        router.push("/admin")  
      } else {
        router.push("/user")  
      }
    } else {
      console.log("⚠️ No user data found in Firestore")
      router.push("/")
    }
  } catch (error) {
    console.log("Login Error:", error.code)
  }
}
</script>
