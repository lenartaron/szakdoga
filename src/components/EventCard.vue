<script setup>

</script>
<template>
  <main>
      <div class="container">
        <div class="card">
          <img src="../assets/testProfilIcon.png" alt="Card Image 1" />
          <div class="content">
            <h3>Card Title 1</h3>
            <p>This is a description for the first card.</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/testProfilIcon.png" alt="Card Image 2" />
          <div class="content">
            <h3>Card Title 2</h3>
            <p>This is a description for the second card.</p>
          </div>
        </div>
      </div>
    </main>
</template>
<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
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
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  width: 80%;
  height: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: flex-start;
  transition: width 2s, background-color 2s, color 2s;
}

.card:hover {
  width: 83%;
  background-color: #fff;
  color: #000;
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
</style>
