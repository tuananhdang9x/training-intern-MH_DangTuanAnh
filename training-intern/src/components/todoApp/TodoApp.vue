<template>
  <div class="todo-app">
    <NavBar @showTitle="getData($event)" />
    <div class="todo-container">
      <NewTask :newTitle="title" />
      <CompletedTask :newTitle="title" />
      <RejectTask :newTitle="title" />
    </div>
  </div>
</template>

<script>
import NewTask from "./components/NewTask.vue";
import CompletedTask from "./components/CompletedTask.vue";
import RejectTask from "./components/RejectTask.vue";
import NavBar from "./components/NavBar.vue";
export default {
  data() {
    return {
      title: "",
    };
  },
  components: {
    NewTask,
    CompletedTask,
    RejectTask,
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