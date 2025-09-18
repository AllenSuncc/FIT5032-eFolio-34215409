<template>
  <div id="app">
    <BHeader />

    <router-view />
  </div>
</template>

<script setup>
import BHeader from './components/BHeader.vue'
</script>

<style>
body {
  margin: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background-color: #f8f9fa;
}
</style>
