<template>
  <div class="todo-app">
    <NavBar @showTitle="getData($event)" />
    <div class="todo-container">
      <NewTask :newTitle="title" :status="'new'" />
      <NewTask :newTitle="title" :status="'completed'" />
      <NewTask :newTitle="title" :status="'rejected'" />
    </div>
  </div>
</template>

<script>
import NewTask from "./components/NewTask.vue";
import NavBar from "./components/NavBar.vue";
export default {
  data() {
    return {
      title: "",
    };
  },
  components: {
    NewTask,
    NavBar,
  },
  methods: {
    getData(data) {
      this.title = data;
    },
  },
};
</script>

<style scoped>
.todo-app {
  width: 800px;
  padding: 24px;
}
.todo-container {
  display: flex;
  justify-content: space-between;
}
</style>