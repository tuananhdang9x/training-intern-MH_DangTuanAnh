<template>
  <div class="todo-column">
    <h3>{{ colTitle }}</h3>
    <div class="list">
      <div class="list-item">
        <TodoItem :addMode="true" v-if="showAddMode" @onCancel="onCancel" />
        <TodoItem
          v-for="todo in todos"
          :key="todo.id"
          :todo="todo"
          :colItem="colItem"
        />
      </div>
      <button
        v-if="colItem.status == 'new'"
        :disabled="showAddMode"
        @click="addNewItem"
        class="footer-btn"
      >
        Thêm mới
      </button>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
  data() {
    return {
      showAddMode: false,
    };
  },
  components: {
    TodoItem,
  },
  props: {
    colTitle: {
      type: String,
      default: () => "",
    },
    todos: {
      type: Array,
      default: () => [],
    },
    colItem: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    addNewItem() {
      this.showAddMode = !this.showAddMode;
    },
    onCancel() {
      this.showAddMode = !this.showAddMode;
    },
  },
};
</script>

<style scoped>
.list {
  position: relative;
  margin-right: 12px;
  height: 500px;
  background-color: #f0f0f0;
}

.list-item {
  padding: 20px;
  background-color: #f0f0f0;
  width: 240px;
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
}

.list-item::-webkit-scrollbar {
  width: 6px;
}

.list-item::-webkit-scrollbar-track {
  background-color: transparent;
}

.list-item::-webkit-scrollbar-thumb {
  border-radius: 6px;
  background-color: #a8a8a8;
}
.footer-btn {
  width: 80%;
  padding: 4px 0;
  color: #008037;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid #008037;
  position: absolute;
  bottom: 12px;
  margin-left: 24px;
}
.footer-btn:hover {
  cursor: pointer;
  color: #fff;
  background-color: #008037;
}
button:disabled {
  cursor: default !important;
  opacity: 0.2;
}
button:disabled:hover {
  color: #008037;
  background-color: transparent;
}
</style>