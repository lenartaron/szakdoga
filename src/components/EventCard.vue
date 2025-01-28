<script>
export default {
  name: "EventCard",
  props: {
    image: {
      type: String,
      default: "https://via.placeholder.com/80", 
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  computed: {
    truncatedDescription() {
      return this.description.length > 50
        ? this.description.substring(0, 47) + "..."
        : this.description;
    },
  },
};
</script>

<template>
  <div class="col-md-4">
    <div class="card text-center">
      <img
        :src="image"
        class="card-img-top rounded-circle mx-auto mt-3"
        alt="User Picture"
        style="width: 80px; height: 80px;"
      />
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text card-description">{{ truncatedDescription }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-description {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
