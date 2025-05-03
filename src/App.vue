<script setup>
import CreateEvent from './components/CreateEvent.vue';
import EventCard from './components/EventCard.vue';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './state/authStore.js';
import { useEventsStore } from './state/state.js';


const events = ref([]);
const isLoggedIn = ref(false);
const router = useRouter();
const authStore = useAuthStore();
const eventsStore = useEventsStore();


const checkSession = async () => {
  try {
    const response = await fetch('/api/check_session.php', { credentials: 'include' });
    const data = await response.json();
    isLoggedIn.value = data.isLoggedIn;
  } catch (error) {
    console.error('Hiba a session ellenőrzésekor:', error);
  }
};

// Események betöltése
const loadEvents = async () => {
  try {
    const response = await fetch('/api/get_events.php');
    const data = await response.json();
    events.value = data.slne_events;
  } catch (error) {
    console.error('Hiba:', error);
  }
};

const logout = async () => {
  try {
    await fetch('/auth/logout.php', { credentials: 'include' });
    isLoggedIn.value = false;
    router.push('/');
  } catch (error) {
    console.error('Hiba a kijelentkezéskor:', error);
  }
};

authStore.checkAuthStatus();

onMounted(() => {
  checkSession();
  loadEvents();
});

router.afterEach(() => {
  checkSession();
});
</script>
<template>
  <header>
    <div class="df">
      <div>
        <img src="./assets/logo.png" class="col-lg-1 col-md-2 col-sm-3">
        <h1>GatherinGalaxy</h1>
      </div>
      <div class="row" v-if="!isLoggedIn">
        <router-link to="/regin?mode=login" class="col-lg-6 cursorSettings" id="test">Bejelentkezés</router-link>
        <router-link to="/regin?mode=register" class="col-lg-6 cursorSettings" id="test">Regisztráció</router-link>
      </div>
      <div class="row" v-else>
        <button @click="logout" class="col-lg-6 cursorSettings" id="test">Kijelentkezés</button>
      </div>
    </div>
    <section>
      <nav>
        <ul class="menuItems">
          <li><router-link to="/" data-item='Home' class="cursorSettings">Home</router-link></li>
          <li><a href="#" data-item='About' class="cursorSettings">About</a></li>
          <li><a href="#" data-item='Projects' class="cursorSettings">Projects</a></li>
          <li><a href="#" data-item='Contact' class="cursorSettings">Contact</a></li>
        </ul>
      </nav>
    </section>
  </header>
  <main class="contant">
    <router-view @refresh-events="loadEvents" />

    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-4 col-md-6 col-sm-12" v-for="(event, index) in events" :key="index">
          <EventCard :event="event" />
        </div>
      </div>
    </div>
  </main>
  <CreateEvent v-if="isLoggedIn" class="create-event-wrapper" />
  <footer class="text-center">
    <p>Copyright &copy;</p>
  </footer>
</template>
<style scoped>
.create-event-wrapper {
  position: relative;
  z-index: 1000;
}

.row {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  margin: 0;
}

.row a {
  flex: 0 1 auto;
}

#test:active {
  color: white;
  text-decoration: none;
}

.btn {
  padding: 8px 16px;
  border: none;
}

header .df {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

header .df div:first-child {
  display: flex;
  align-items: center;
}

header img {
  width: 110px;
  height: auto;
  margin-right: 10px;
}

h1 {
  font-size: 24px;
  margin: 0;
  white-space: nowrap;
}

div>#test {
  margin-right: 0px;
  justify-content: flex-end;
}

.menuItems {
  list-style: none;
  display: flex;
  padding: 0;
  margin-top: 10px;
}

.menuItems li a {
  text-decoration: none;
  font-weight: 400;
  margin: 10px 20px;
  transition: all 0.5s ease-in-out, transform 0.3s ease;
  position: relative;
  text-transform: uppercase;
  padding: 3px 0;
}

.menuItems li a::before {
  content: attr(data-item);
  transition: 0.5s;
  color: #d6beb0;
  text-shadow: 0 0 3px #5f4e69, 0 0 5px #9247b4, 0 0 10px #5d2377;
  position: absolute;
  font-weight: lighter;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  overflow: hidden;
  transform: scale(1.6);
  background-color: #44165A;
}


.menuItems li a:hover::before {
  width: 100%;
  transition: all 0.5s ease-in-out;
}

@media (min-width: 769px) {
  .card {
    width: 25%;
  }
}

@media (max-width: 768px) {
  .card {
    width: 100%;
  }

  .menuItems,
  div>h1,
  .row {
    display: none;
  }
}
</style>
