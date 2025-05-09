<script setup>
import { ref } from "vue"

const date = ref("2025.05.09")
const location = ref("Valahol a semmi közepén")
const description = ref("egy random hosszú leírás")
const title = ref("Házi buli")
</script>
<template>
  <div class="container mt-5">
    <div class="card bg-dark text-white">
      <div class="card-header d-flex align-items-center">
        <img src="../assets/testProfilIcon.png" alt="ProfilePicture" class="profile-pic me-2">
        <span>{{ title }}</span>
      </div>
      <div class="card-body">
        <p class="card-text">{{ description }}</p>
        <p class="card-text">Helyszín: {{ location }}</p>
        <p class="card-text">Időpont: {{ date }}</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
div, p{
  color: bisque;
}

.container {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 10px;
}

img {
  display: flex;
  align-items: center;
  margin: 10px;
}

.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.card-header {
  display: flex;
  align-items: center;
}



</style>
