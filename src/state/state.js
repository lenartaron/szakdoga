import { defineStore } from 'pinia';

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: []
  }),
  actions: {
    async fetchEvents() {
      const response = await fetch('/api/get_events.php');
      const data = await response.json();
      this.events = data.slne_events;
    },
    async addEvent(newEvent) {
      this.events.push(newEvent);
    }
  }
});