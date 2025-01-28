<script setup>
</script>

<template>
  <div class="page-wrapper">
    <header>
      <h1>teszt</h1>
    </header>
    <main>
      <div class="container">
        <div class="card">
          <img src="./assets/testProfilIcon.png" alt="Card Image 1" />
          <div class="content">
            <h3>Card Title 1</h3>
            <p>This is a description for the first card.</p>
          </div>
        </div>
        <div class="card">
          <img src="./assets/testProfilIcon.png" alt="Card Image 2" />
          <div class="content">
            <h3>Card Title 2</h3>
            <p>This is a description for the second card.</p>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <p>Copyright &copy;</p>
    </footer>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #4a148c;
  padding: 10px 20px;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.card {
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  width: 80%;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-start;
}

.card img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.card .content {
  flex: 1;
}

.card h3 {
  font-size: 1.5rem;
  margin: 0;
}

.card p {
  font-size: 1rem;
  margin-top: 5px;
}

footer {
  background-color: #4a148c;
  text-align: center;
  padding: 10px 0;
  color: white;
  width: 100%;
}

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
