<template>
  <nav class="my-nav">
    <div class="logo">
      <img src="@/assets/egypt.png" alt="" />
    </div>
    <div class="links">
      <ul>
        <li v-for="(link, index) in links" :key="index">{{ link }}</li>
      </ul>
    </div>
    <div class="btns">
      <button>LOG IN</button>
      <button>SIGN UP</button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      logo: "My Logo",
      links: ["Linke One", "Link Two", "Link Three", "Link Four"],
    };
  },
};
</script>

<style>
.my-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #d4d4d4;
  box-shadow: 0px 0px 9px -3px red;
}
ul {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  list-style: none;
}
img {
  width: 50px;
  height: 50px;
}
.btns {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
button {
  background: rgb(17, 131, 104);
  color: white;
  padding: 5px 10px;
}
</style>
