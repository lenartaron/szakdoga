<script setup>


</script>

<template>
  <div class="container-center">
    <div class="card p-4 shadow-lg">
      <h2 class="text-center">Belépés</h2>
      <form>
        <div class="mb-3">
          <input type="email" class="form-control bg-dark text-white" id="loginEmail"
            placeholder="Email cím megadása" />
        </div>
        <div class="mb-3">
          <input type="password" class="form-control bg-dark text-white" id="loginPassword"
            placeholder="Jelszó megadása" />
        </div>
        <div class="form-check mb-3">
          <input class="form-check-input checkbox" type="checkbox" id="notrobot" />
          <label class="form-check-label text-white" for="notrobot">Nem vagyok robot</label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Bejelentkezés</button>
      </form>
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
  height: 100vh;
  background-size: cover;
  background-position: center;
}
</style>
