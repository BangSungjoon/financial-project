<template>
  <header>

    <div class="container">
      <nav class="d-flex justify-content-end">
        <RouterLink :to="{ name: 'SignUpView' }">회원가입</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<style scoped>

</style>
