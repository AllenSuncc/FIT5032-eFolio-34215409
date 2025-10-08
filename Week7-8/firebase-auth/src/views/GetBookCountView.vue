<template>
  <div id="app" class="book-counter-container">
    <h1>Book Counter</h1>

    <button class="count-btn" @click="getBookCount">Get Book Count</button>

    <p v-if="count !== null" class="result-text">
      Total number of books: {{ count }}
    </p>

    <p v-if="error" class="error-text">
      {{ error }}
    </p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GetBookCountView',
  data() {
    return {
      count: null,
      error: null
    };
  },
  methods: {
    async getBookCount() {
      try {
        
        const response = await axios.get(
          "https://countbooks-5nsrwo4sta-uc.a.run.app"
        );

        this.count = response.data.count;
        this.error = null;
      } catch (error) {
        console.error('Error fetching book count:', error);
        this.error = 'Error fetching book count.';
        this.count = null;
      }
    }
  }
};
</script>

<style scoped>
.book-counter-container {
  max-width: 500px;
  margin: 80px auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #1e293b;
  margin-bottom: 20px;
}

.count-btn {
  background-color: #facc15;
  color: #1e293b;
  border: none;
  border-radius: 6px;
  padding: 10px 18px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.count-btn:hover {
  background-color: #eab308;
}

.result-text {
  margin-top: 20px;
  font-size: 18px;
  color: #334155;
}

.error-text {
  margin-top: 20px;
  color: #dc2626;
  font-weight: bold;
}
</style>
