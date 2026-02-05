<template>
  <div class="about">
    <h2>This Is About Page</h2>
    <MyStudents :students="students" />
  </div>
</template>

<script>
import MyStudents from "@/components/MyStudents.vue";
export default {
  data() {
    return {
      students: ["Ali", "Amr", "Ahmed"],
    };
  },
  components: {
    MyStudents,
  },
};
</script>
