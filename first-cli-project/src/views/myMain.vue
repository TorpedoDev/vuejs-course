<template>
  <div class="my-main">
    <h2>This is My Main Page</h2>
    <my-heading></my-heading>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, nihil!
      Sunt, error optio, cum saepe quam ipsa consequuntur eaque accusamus
      maiores vitae, id vero et maxime rem provident ab fugiat.
    </p>
  </div>
</template>

<script>
import MyHeading from "@/components/MyHeading.vue";
export default {
  name: "MyMain",
  components: {
    MyHeading,
  },
};
</script>

<!-- We use "scoped" key work in style tage to make style only applied to the elements of current page -->
<style scoped>
h2 {
  color: red;
}
</style>
