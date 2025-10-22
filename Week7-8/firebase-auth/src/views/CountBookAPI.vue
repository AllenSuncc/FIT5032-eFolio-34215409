<template>
  <div id="app" class="book-api-container">
    <h1>Book Count API</h1>

    <div v-if="jsondata">
      <h3>JSON Response:</h3>
      <pre>{{ jsondata }}</pre>
    </div>

    <p v-if="error" class="error-text">
      {{ error }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "CountBookAPI",
  data() {
    return {
      jsondata: null, 
      error: null, 
    };
  },
  methods: {
    async getBookCountAPI() {
      try {
        const response = await axios.get(
          "https://countbooks-5nsrwo4sta-uc.a.run.app"
        );

        this.jsondata = response.data;
        this.error = null;
      } catch (error) {
        console.error("Error fetching book count:", error);
        this.error = "Error fetching book count.";
        this.jsondata = null;
      }
    },
  },
  mounted() {
    this.getBookCountAPI();
  },
};
</script>

<style scoped>
.book-api-container {
  max-width: 600px;
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
