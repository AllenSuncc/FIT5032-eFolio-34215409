<template>
  <div id="app" class="book-api-container">
    <h1>Get All Book API</h1>

    <!-- 如果有数据则展示 -->
    <div v-if="jsondata">
      <h3>JSON Response:</h3>
      <pre>{{ jsondata }}</pre>
    </div>

    <!-- 如果有错误则展示 -->
    <p v-if="error" class="error-text">
      {{ error }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "GetAllBookAPI",
  data() {
    return {
      jsondata: null, 
      error: null, 
    };
  },
  methods: {
    async getAllBookAPI() {
      try {
        const response = await axios.get("https://us-central1-week9-haojun.cloudfunctions.net/getAllBooks");
        this.jsondata = response.data;
        this.error = null;
      } catch (error) {
        console.error("Error fetching book list:", error);
        this.error = "Error fetching book list.";
        this.jsondata = null;
      }
    },
  },
  mounted() {
    this.getAllBookAPI();
  },
};
</script>

<style scoped>
.book-api-container {
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #f9fafb;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #1e293b;
  margin-bottom: 24px;
}

h3 {
  color: #334155;
  margin-bottom: 10px;
}

pre {
  text-align: left;
  background-color: #1e293b;
  color: #f1f5f9;
  padding: 16px;
  border-radius: 8px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.5;
}

.error-text {
  margin-top: 20px;
  color: #dc2626;
  font-weight: bold;
}
</style>
