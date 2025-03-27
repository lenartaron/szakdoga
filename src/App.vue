<script setup>


</script>
<template>
    <header>
      <div class="df">
        <div>
          <img src="./assets/logo.png" class="col-lg-1 col-md-2 col-sm-3">
          <h1>GatherinGalaxy</h1>
        </div>
        <div class="row">
          <router-link to="/regin?mode=login" class="col-lg-6 cursorSettings" id="test">Bejelentkezés</router-link>
          <router-link to="/regin?mode=register" class="col-lg-6 cursorSettings" id="test">Regisztráció</router-link>
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
      <router-view />
    </main>
    <footer class="text-center">
      <p>Copyright &copy;</p>
    </footer>
</template>
<style scoped>

.row {
  gap: 10px;
}

#test:active {
  color: white;
  text-decoration: none;
}

.btn {
  padding: 8px 16px;
  border: none;
}

.df {
  display: flex;
}

div>#test {
  margin-right: 0px;
  justify-content: flex-end;
}

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
  .menuItems {
    display: none;
  }
}

</style>
