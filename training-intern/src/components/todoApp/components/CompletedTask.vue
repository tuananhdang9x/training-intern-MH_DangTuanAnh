<template>
  <div class="completed-task">
    <h3>Đã hoàn thành</h3>
    <div class="list">
      <div class="list-container">
        <div class="list-item" v-for="todo in filteredTasks" :key="todo.id">
          <h5>{{ todo.title }}</h5>
          <p>{{ todo.time }} {{ todo.date }}</p>
          <div class="completed">
            <p>Hoàn thành lúc:</p>
            <p>{{ todo.time }} {{ todo.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["newTitle"],
  computed: {
    ...mapGetters("todo", ["completedTodos"]),
    filteredTasks() {
      return this.completedTodos.filter((todo) =>
        todo.title.match(this.newTitle)
      );
    },
  },
};
</script>

<style scoped>
.completed-task {
  margin-right: 12px;
}
.completed-task h3 {
  margin-bottom: 8px;
}
.completed {
  color: #008037;
  font-weight: 600;
}

.list {
  padding: 20px;
  background-color: #f0f0f0;
  height: 500px;
  width: 240px;
}
.list-container {
  position: relative;
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
}
.list-container::-webkit-scrollbar {
  width: 6px;
}

.list-container::-webkit-scrollbar-track {
  background-color: transparent;
}

.list-container::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #a8a8a8;
}
.list-item {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.list-item p {
  font-size: 12px;
  margin: 8px 0;
}
</style>