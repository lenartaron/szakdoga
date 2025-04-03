<script setup>
import { ref, computed, onMounted, watch } from 'vue'; 
import { useRoute, useRouter } from 'vue-router'; 
import axios from 'axios';

// Reaktív változó a mód (login vagy register) nyomon követésére (Alap értelmezés: login)
const mode = ref('login');

const route = useRoute(); 
const router = useRouter(); 

// Számított érték a gomb szövegének dinamikus megváltoztatásához a mód alapján
const buttonText = computed(() => {
  return mode.value === 'login' ? 'Nincs fiókod? Regisztrálj!' : 'Már van fiókod? Jelentkezz be!';
});

//Ez ellenőrzi az URL-ben lévő 'mode' query paramétert, és beállítja a módot
onMounted(() => {
  if (route.query.mode === 'register') {
    mode.value = 'register';
  } else if (route.query.mode === 'login') {
    mode.value = 'login';
  }
});

// Watcher, amely figyeli az URL 'mode' query paraméterének változását
watch(() => route.query.mode, (newMode) => {
  if (newMode === 'register' || newMode === 'login') {
    mode.value = newMode;
  }
});

// Reaktív változók az űrlap mezőkhöz és üzenetekhez
const message = ref('');
const email = ref(''); 
const password = ref(''); 
const username = ref(''); 

// Bejelentkezési funkció
async function login() {
  try {
    const response = await axios.post('http://localhost/gatheringgalaxy/login.php', {
      email: email.value,
      password: password.value
    });
    // A válasz üzenetének megjelenítése
    message.value = response.data.message;
  } catch (error) {
    message.value = 'Hiba történt a bejelentkezés során.';
  }
}

// Regisztrációs funkció
async function register() {
  try {
    const response = await axios.post('http://localhost/gatheringgalaxy/register.php', {
      username: username.value,
      email: email.value,
      password: password.value
    });
    // A válasz üzenetének megjelenítése
    message.value = response.data.message;
  } catch (error) {
    message.value = 'Hiba történt a regisztráció során.';
  }
}

// Funkció a mód váltására (login és register között)
function switchMode() {
  if (mode.value === 'login') {
    mode.value = 'register';
    router.push({ query: { mode: 'register' } });
  } else {
    mode.value = 'login';
    router.push({ query: { mode: 'login' } });
  }
  // Az üzenet törlése módváltáskor
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
