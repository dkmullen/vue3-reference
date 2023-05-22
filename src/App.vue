<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <header>
      <div class="wrapper">
        <nav>
          <span class="title">Vue 3 Demo</span>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </v-app>
</template>

<style scoped>
nav {
  text-align: right;
  background: var(--primary);
  padding: 10px;
}
nav a {
  color: white;
  text-decoration: none;
  margin: 8px;
}
.title {
  font-size: 24px;
  float: left;
  color: white;
  position: relative;
  bottom: 6px;
}
</style>
