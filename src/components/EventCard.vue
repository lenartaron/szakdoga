<script setup>

</script>
<template>
  <main>
      <div class="container" v-for="(index, mood) in 5">
        <div class="card">
          <img src="../assets/testProfilIcon.png" alt="Card Image 1" />
          <div class="content">
            <h3>Card Title {{ index }}</h3>
            <p>This is a description for the first card.</p>
          </div>
          <button @click="" id="reszletek">szia</button>
        </div>
      </div>
    </main>
</template>
<style scoped>
.page-wrapper {
  min-height: 100vh;
}

.container {
  align-items: center;
  justify-content: center;
}

.page-wrapper, .container {
  flex-direction: column;
}

.page-wrapper, .container, .card, #reszletek {
  display: flex;
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

#reszletek {
  border: none;
  background-color: rgba(0, 0, 0, 0);
  justify-self: center;
  position: relative;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: none;
  border: 2px solid #646cff;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  background: linear-gradient(#646cff 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.2em);
  transition: 0.3s var(--t, 0s),
  background-position 0.3s calc(0.3s - var(--t, 0s));
}

#reszletek:hover {
  --p: 100%;
  --t: 0.3s;
  color: #fff;
}
</style>
