<template>
  <div id="app">
    <div class="container">
      <SideBar />
      <div class="item">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style >
#app {
  font-family: "Noto Sans JP";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  display: flex;
}
.item {
  margin-left: 200px;
}
</style>
