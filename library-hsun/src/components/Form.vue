<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">User Information Form</h1>
        <form @submit.prevent="submitForm">

          <!-- Username & Password -->
          <div class="row mb-3">
            <div class="col-md-6 col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" v-model="formData.username"
                @blur="() => validateName(true)" @input="() => validateName(false)" />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>

            <div class="col-md-6 col-sm-6">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" v-model="formData.password"
                @blur="() => validatePassword(formData.password)" @input="() => validatePassword(formData.password)" />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <!-- Resident & Gender -->
          <div class="row mb-3">
            <div class="col-6 col-md-6">
              <div class="form-check">
                <input type="checkbox" class="form-check-input" id="isAustralian" v-model="formData.isAustralian">
                <label class="form-check-label" for="isAustralian">
                  Australian Resident?
                </label>
              </div>
            </div>
            <div class="col-6 col-md-6">
              <label for="gender" class="form-label">Gender</label>
              <select class="form-select" id="gender" v-model="formData.gender">
                <option disabled value="">Please select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <div v-if="errors.gender" class="text-danger">{{ errors.gender }}</div>
            </div>
          </div>

          <!-- Reason -->
          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea class="form-control" id="reason" rows="3" v-model="formData.reason"
              @blur="() => validateReason(true)" @input="() => validateReason(false)"></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
          </div>

          <!-- Buttons -->
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">
              Clear
            </button>
          </div>
        </form>

        <!-- Submitted Cards -->
        <div class="mt-5" v-if="submittedCards.length">
          <div class="d-flex flex-wrap justify-content-center">
            <div v-for="(card, index) in submittedCards" :key="index" class="card m-2" style="width: 18rem;">
              <div class="card-header">User Information</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Username: {{ card.username }}</li>
                <li class="list-group-item">Password: {{ card.password }}</li>
                <li class="list-group-item">Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}</li>
                <li class="list-group-item">Gender: {{ card.gender }}</li>
                <li class="list-group-item">Reason: {{ card.reason }}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
  isAustralian: false,
  gender: '',
  reason: ''
})

const submittedCards = ref([])

const errors = ref({
  username: null,
  password: null,
  gender: null,
  reason: null
})

// 验证用户名
const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = "Name must be at least 3 characters";
  } else {
    errors.value.username = null;
  }
};

// 验证密码
const validatePassword = (password) => {
  const minLength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minLength) {
    errors.value.password = "Password must be at least 8 characters long";
  } else if (!hasUppercase) {
    errors.value.password = "Password must contain an uppercase letter";
  } else if (!hasLowercase) {
    errors.value.password = "Password must contain a lowercase letter";
  } else if (!hasNumber) {
    errors.value.password = "Password must contain a number";
  } else if (!hasSpecialChar) {
    errors.value.password = "Password must contain a special character";
  } else {
    errors.value.password = null;
  }
};

// 验证 Gender
const validateGender = () => {
  if (!formData.value.gender) {
    errors.value.gender = "Please select your gender";
  } else {
    errors.value.gender = null;
  }
};

// 验证 Reason
const validateReason = (blur) => {
  if (formData.value.reason.length < 5) {
    if (blur) errors.value.reason = "Reason must be at least 5 characters";
  } else if (formData.value.reason.length > 50) {
    if (blur) errors.value.reason = "Reason must be less than 50 characters";
  } else {
    errors.value.reason = null;
  }
};

// 提交表单
function submitForm() {
  validateName(true);
  validatePassword(formData.value.password);
  validateGender();
  validateReason(true);

  if (!errors.value.username && !errors.value.password && !errors.value.gender && !errors.value.reason) {
    submittedCards.value.push({ ...formData.value });
    clearForm();
  }
}

// 清空表单
function clearForm() {
  formData.value = {
    username: '',
    password: '',
    isAustralian: false,
    gender: '',
    reason: ''
  }
  errors.value = {
    username: null,
    password: null,
    gender: null,
    reason: null
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275FDA;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.list-group-item {
  padding: 10px;
}
</style>
