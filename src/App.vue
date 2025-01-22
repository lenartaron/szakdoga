<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>
<template>
  <header>
    <h1>teszt</h1>
    <a href="http://localhost:5173/">link</a>
  </header>
  <main>
    <HelloWorld />
  </main>
  <footer>
    <p>Copyright &copy;</p>
  </footer>

</template>
<style scoped>
header> h1 {
  cursor: url("assets/cursortest.cur"), pointer;
  color: aliceblue;
}

header>a {
  font-weight: 700;
  font-size: xx-large;
  text-decoration: none;
  color: aliceblue;
  cursor: url("assets/cursortest.cur"), pointer;
}
</style>
