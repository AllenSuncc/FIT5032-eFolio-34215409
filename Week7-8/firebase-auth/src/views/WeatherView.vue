<template>
  <div class="container">
    <div class="header">
      <h1>WEATHER APP</h1>
      <div class="search-bar">
        <input
          type="text"
          v-model="city"
          placeholder="Enter city name"
          class="search-input"
        />
        <button
          @click="searchByCity"
          class="search-button"
        >
          Search
        </button>
      </div>
    </div>

    <main>
      <div v-if="weatherData">
        <h2>
          {{ weatherData.name }}, {{ weatherData.sys.country }}
        </h2>
        <div>
          <img :src="iconUrl" alt="Weather Icon" />
          <p>{{ temperature }} °C</p>
        </div>
        <span>{{ weatherData.weather[0].description }}</span>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";

const apikey = "0362e5aa99a9845d76d716452b47cec7";

export default {
  name: "WeatherView",
  data() {
    return {
      city: "",
      weatherData: null,
    };
  },
  computed: {
    temperature() {
      return this.weatherData
        ? Math.floor(this.weatherData.main.temp - 273)
        : null;
    },
    iconUrl() {
      return this.weatherData
        ? `http://api.openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
        : null;
    },
  },
  methods: {
    async searchByCity() {
      if (!this.city) {
        alert("Please enter a city name!");
        return;
      }


      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;

      try {
        const response = await axios.get(url);
        this.weatherData = response.data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("City not found or API error.");
      }
    },

    async fetchCurrentLocationWeather() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
          const response = await axios.get(url);
          this.weatherData = response.data;
        });
      }
    },
  },
  mounted() {
    this.fetchCurrentLocationWeather();
  },
};
</script>


<style scoped>
.container {
  text-align: center;
  margin-top: 30px;
}
.search-bar {
  margin-bottom: 20px;
}
.search-input {
  padding: 8px;
  width: 200px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
.search-button {
  padding: 8px 16px;
  margin-left: 8px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
}
</style>
