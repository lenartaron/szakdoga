<script setup>
import { computed } from 'vue';
import { format } from 'date-fns';
import { hu } from 'date-fns/locale';
import defaultProfilIcon from '@/assets/testProfilIcon.png';

const props = defineProps({
  event: {
    type: Object,
    default: () => ({
      title: 'Alapértelmezett esemény',
      date: new Date().toISOString(),
      description: '',
      location: 'Ismeretlen helyszín',
      organizer: '../assets/testProfilIcon.png'
    })
  }
});

const formattedDate = computed(() => {
    if (!props.event.date || isNaN(new Date(props.event.date).getTime())) {
        return "Érvénytelen dátum";
    }
    return format(new Date(props.event.date), "yyyy. MMMM dd. HH:mm", { locale: hu });
});
</script>

<template>
  <main>
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <div v-if="event.is_private" class="private-badge">
              <i class="fas fa-lock"></i> Privát
            </div>
            <img :src="event?.organizer || defaultProfilIcon" alt="Profile">
            <div class="content">
              <h3>{{ event.title }}</h3>
              <div class="event-meta">
                <p><i class="fas fa-calendar"></i> {{ formattedDate }}</p>
                <p><i class="fas fa-map-marker-alt"></i> {{ event.location }}</p>
              </div>
              <p>{{ event.description }}</p>
            </div>
            <router-link to="/details" id="reszletek" class="cursorSettings">
              <span>Részletek</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.private-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff4757;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
}

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
  background: linear-gradient(#451f5a 0 0) no-repeat calc(200% - var(--p, 0%)) 100% / 200% var(--p, 0.2em);
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

.event-meta {
  margin: 10px 0;
  color: #a88db8;
}

.event-meta i {
  margin-right: 8px;
  color: #5E3674;
}

.event-meta p {
  margin: 5px 0;
  font-size: 0.9rem;
}

.content p {
  margin: 10px 0;
  font-size: 0.95rem;
  line-height: 1.4;
}
</style>
