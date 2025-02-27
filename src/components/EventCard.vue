<script setup>

</script>
<template>
  <main>
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-4 col-md-6 col-sm-12" v-for="index in 20" :key="index">
          <div class="card">
            <img src="../assets/testProfilIcon.png" alt="Profile">
            <div class="content">
              <h3>Card Title {{ index }}</h3>
              <p>A tavasz első napjai mindig új reményt hoznak. A virágok kibújnak a földből, a nap fénye melegebbé válik, és minden egyes pillanatban érezhetjük, hogy az élet újra kezdődik.</p>
            </div>
            <button @click="EventDetail(index)" id="reszletek"><span>Részletek</span></button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.card {
  color: #a88db8;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  padding: 15px;
  overflow: hidden;
  margin-bottom: 20px; 
}


.card img {
  width: 50px;
  height: 50px;
  margin-right: 15px;
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

span {
  transition: color 1s;
  font-size: medium;
  color: var(--c, #a88db8);
}

.card:hover>#reszletek:hover>span {
  --c: #cdbdd6;
}

#reszletek:hover {
  --p: 100%;
  --t: 0.3s;
}

.card:hover>#reszletek>span {
  --c: black;
}

.card:hover {
  transform: scale(1.07); 
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
</style>
