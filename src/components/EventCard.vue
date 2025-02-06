<script setup>

</script>

<template>
  <main>
    <div class="container">
      <div class="card" v-for="index in 7" :key="index">
        <img src="../assets/testProfilIcon.png" alt="Card Image 1" />
        <div class="content">
          <h3>Card Title {{ index }}</h3>
          <p>This is a description for the first card.</p>
        </div>
        <button @click="EventDetail(index)" id="reszletek"><span>Szia</span></button>
      </div>
    </div>
  </main>
</template>
<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.card {
  color: #a88db8;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
  width: 100%;
  height: auto;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  align-items: flex-start;
  transition: width 1s, background-color 1s, color 1s;
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
  position: relative;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  background: none;
  border: 2px solid #5E3674;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  background: linear-gradient(#451f5a 0 0) no-repeat calc(200% - var(--p, 0%))
    100% / 200% var(--p, 0.2em);
  transition: 0.3s var(--t, 0s),
    background-position 0.3s calc(0.3s - var(--t, 0s));
  color: #000;
}
#reszletek>span {
  color: #a88db8;
}

#reszletek:hover {
  --p: 100%;
  --t: 0.3s;
}

#reszletek:hover>span {
  color: #000;
}

.card:hover {
  width: 28%;
  background-color: #fff;
  color: #000;
}

.card:hover>#reszletek {
  background-color: #5E367400;
  color: var(--t, #000);
  border-color: #5E3674;
}

.card:hover #reszletek::after {
  color: #000000;
  font-weight: bold;
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
