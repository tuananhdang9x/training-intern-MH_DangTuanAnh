<template>
  <div class="todo-app">
    <div class="nav-bar">
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm nhiệm vụ"
        v-model="keyword"
      />
      <button class="search-btn">Tìm kiếm</button>
    </div>
    <div class="todo-container">
      <TodoColumn
        v-for="colItem in listCol"
        :key="colItem.id"
        :colTitle="colItem.lable"
        :colItem="colItem"
        :todos="filteredTodo(colItem.status)"
      />
    </div>
  </div>
</template>

<script>
import TodoColumn from "./components/TodoColumn.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      keyword: "",
      listCol: [
        { id: 1, status: "new", lable: "Mới" },
        { id: 2, status: "completed", lable: "Đã hoàn thành" },
        { id: 3, status: "rejected", lable: "Đã từ bỏ" },
      ],
    };
  },
  components: {
    TodoColumn,
  },
  methods: {},
  computed: {
    ...mapGetters("todo", ["getTodo"]),
    filteredTodo() {
      return (status) => {
        return this.getTodo.filter(
          (todo) => todo.status == status && todo.title.match(this.keyword)
        );
      };
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
}
.nav-bar input {
  width: 250px;
  border: 1px solid #f0f0f0;
  padding: 4px;
  font-size: 12px;
  border-radius: 2px;
  margin-bottom: 16px;
}
.search-btn {
  appearance: none;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: #008037;
  margin-left: 8px;
  border: 1px solid #008037;
}

.search-btn:hover {
  cursor: pointer;
  color: #008037;
  background-color: #fff;
}
</style>