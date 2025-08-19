<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">User Information Form</h1>
        <form @submit.prevent="submitForm">

          <div class="row mb-3">
            <div class="col-md-6">
              <label for="username" class="form-label">Username</label>
              <input 
                type="text" 
                class="form-control" 
                id="username" 
                v-model="formData.username"
              >
            </div>
            <div class="col-md-6">
              <label for="password" class="form-label">Password</label>
              <input 
                type="password" 
                class="form-control" 
                id="password" 
                v-model="formData.password"
              >
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-check">
                <input 
                  type="checkbox" 
                  class="form-check-input" 
                  id="isAustralian" 
                  v-model="formData.isAustralian"
                >
                <label class="form-check-label" for="isAustralian">
                  Australian Resident?
                </label>
              </div>
            </div>
            <div class="col-md-6">
              <label for="gender" class="form-label">Gender</label>
              <select 
                class="form-select" 
                id="gender" 
                v-model="formData.gender"
              >
                <option disabled value="">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const formData = reactive({
  username: '',
  password: '',
  isAustralian: false,
  gender: ''
})

function submitForm() {
  console.log(formData)
}
</script>

<style scoped>
</style>
