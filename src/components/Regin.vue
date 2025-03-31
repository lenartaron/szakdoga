<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const mode = ref('login');
const route = useRoute();
const router = useRouter();

const buttonText = computed(() => {
  return mode.value === 'login' ? 'Nincs fiókod? Regisztrálj!' : 'Már van fiókod? Jelentkezz be!';
});


onMounted(() => {
  if (route.query.mode === 'register') {
    mode.value = 'register';
  } else if (route.query.mode === 'login') {
    mode.value = 'login';
  }
});


watch(() => route.query.mode, (newMode) => {
  if (newMode === 'register' || newMode === 'login') {
    mode.value = newMode;
  }
});

const message = ref('');
const email = ref('');
const password = ref('');
const username = ref('');

async function login() {
  try {
    const response = await axios.post('http://localhost/gatheringgalaxy/login.php', {
      email: email.value,
      password: password.value
    });
    message.value = response.data.message;
  } catch (error) {
    message.value = 'Hiba történt a bejelentkezés során.';
  }
}

async function register() {
  try {
    const response = await axios.post('http://localhost/gatheringgalaxy/register.php', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    message.value = response.data.message;
  } catch (error) {
    message.value = 'Hiba történt a regisztráció során.';
  }
}

function switchMode() {
  if (mode.value === 'login') {
    mode.value = 'register';
    router.push({ query: { mode: 'register' } });
  } else {
    mode.value = 'login';
    router.push({ query: { mode: 'login' } });
  }
  message.value = '';
}
</script>
<template>
  <div class="container-center">
    <div class="card p-4 shadow-lg">
      <h2 class="text-center">{{ mode === 'login' ? 'Belépés' : 'Regisztráció' }}</h2>
      <form @submit.prevent="mode === 'login' ? login() : register()">
        <div v-if="mode === 'register'" class="mb-3">
          <input v-model="username" type="text" class="form-control bg-dark text-white" placeholder="Felhasználónév" />
        </div>
        <div class="mb-3">
          <input v-model="email" type="email" class="form-control bg-dark text-white"
            placeholder="Email cím megadása" />
        </div>
        <div class="mb-3">
          <input v-model="password" type="password" class="form-control bg-dark text-white"
            placeholder="Jelszó megadása" />
        </div>
        <button type="submit" class="btn btn-primary w-100">{{ mode === 'login' ? 'Belépés' : 'Regisztráció' }}</button>
      </form>
      <div class="text-center mt-3">
        <p>{{ message }}</p>
        <button class="btn btn-link" @click="switchMode">
          {{ buttonText }}
        </button>

      </div>
    </div>
  </div>
</template>
<style scoped>
form,
.container-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.checkbox {
  padding: 0px;
}

form {
  gap: 10px;
}

.card {
  max-width: 400px;
  width: 100%;
  background-color: #1e1e2f;
  border-radius: 15px;
}

.container-center {
  justify-content: center;
  height: 80vh;
  background-size: cover;
  background-position: center;
}
</style>
