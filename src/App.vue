<script setup>
import { ref, onMounted, onUnmounted  } from 'vue';

const isMobil = ref(false);

const updateWindowWidth = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  updateWindowWidth();
  window.addEventListener('resize', updateWindowWidth); 
});

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowWidth);
});



</script>
<template>
    <header>
      <h1>teszt</h1>
      <section v-if="!isMobil">
        <nav>
          <ul class="menuItems">
            <li><a href="#" data-item='Home'>Home</a></li>
            <li><a href="#" data-item='About'>About</a></li>
            <li><a href="#" data-item='Projects'>Projects</a></li>
            <li><a href="#" data-item='Contact'>Contact</a></li>
          </ul>
        </nav>
      </section>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>Copyright &copy;</p>
    </footer>
</template>
<style scoped>

.menuItems {
  list-style: none;
  display: flex;
  padding: 0;
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
}
</style>
