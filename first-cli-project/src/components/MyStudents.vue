<template>
  <div class="student">
    <ul>
      <li v-for="(student, index) in students" :key="index">{{ student }}</li>
    </ul>
    <p>Active Status is : {{ isActive }}</p>
    <button @click="changeActive">Change Active Status</button>
  </div>
</template>

<script>
export default {
  // props: ["students"],
  props: {
    students: {
      type: Array,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    changeActive() {
      this.$emit("NotActiveStatus"); // to fire an event use this.$emit(event name)
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>
