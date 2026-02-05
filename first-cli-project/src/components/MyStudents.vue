<template>
  <div class="student">
    <ul>
      <li v-for="(student, index) in students" :key="index">{{ student }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["students"],
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
