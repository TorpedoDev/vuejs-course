<template>
  <nav class="my-nav">
    <div class="icon">Icon</div>
    <div class="logo">{{ logo }}</div>
    <div class="links">
      <ul>
        <li v-for="(link, index) in links" :key="index">{{ link }}</li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "My Logo",
      links: ["Linke One", "Link Two"],
    };
  },
};
</script>

<style>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
</style>
