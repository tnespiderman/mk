<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
  <h1>ajdnaniowd</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
  <h1>booty</h1>
</div>
  <RouterView />
</template>

<style scoped>
nav{
    display: flex;
  font-family: "VT323", monospace;
  font-weight: 800;
  font-style: normal;
  justify-content: space-around;
  align-items: center;
  background-color: #a262133e;
  border-radius: 1rem;
  width: 100%;
}
</style>
