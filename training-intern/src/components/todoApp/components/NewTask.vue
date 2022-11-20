<template>
  <div class="new-task">
    <h3>Mới</h3>
    <div class="list">
      <div class="list-container">
        <div class="list-item" v-if="addTodo">
          <form @submit="onSubmit">
            <input
              type="text"
              placeholder="Nhập tên nhiệm vụ"
              v-model="title"
            />
            <p>{{ time }} {{ date }}</p>
            <input type="submit" value="Lưu" class="save-input" />
            <input
              @click="pendingTodo"
              type="submit"
              value="Hủy"
              class="cancel-input"
            />
          </form>
        </div>
        <div class="list-item" v-for="todo in filteredTasks" :key="todo.id">
          <h5>{{ todo.title }}</h5>
          <p>{{ todo.time }} {{ todo.date }}</p>
          <button @click.prevent="handleFinish(todo)" class="save-btn">
            Hoàn thành
          </button>
          <button @click.prevent="handleReject(todo)" class="cancel-btn">
            Từ bỏ
          </button>
        </div>
      </div>
      <button
        :disabled="addTodo"
        @click="pendingTodo"
        class="footer-btn disabled"
      >
        Thêm mới
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";
function updateDate() {
  let today = new Date();
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  return dd + "/" + mm + "/" + yyyy;
}
function updateTime() {
  let today = new Date();
  return today.getHours() + ":" + today.getMinutes();
}

export default {
  data() {
    return {
      title: "",
      date: updateDate(),
      time: updateTime(),
    };
  },
  props: ["newTitle"],
  computed: {
    ...mapGetters("todo", ["addTodo", "getTodo"]),
    filteredTasks() {
      return this.getTodo.filter((todo) => todo.title.match(this.newTitle));
    },
  },
  methods: {
    ...mapActions("todo", [
      "pendingTodo",
      "saveTodo",
      "completeTodo",
      "rejectTodo",
      "updateTodo",
    ]),
    onSubmit(e) {
      e.preventDefault();
      this.saveTodo({
        id: uuidv4(),
        title: this.title,
        time: updateTime(),
        date: updateDate(),
      });
      this.pendingTodo() == false;
      this.title = "";
    },
    handleFinish(todo) {
      this.completeTodo({
        id: todo.id,
        title: todo.title,
        time: updateTime(),
        date: updateDate(),
      });
      this.updateTodo(todo.id);
    },
    handleReject(todo) {
      this.rejectTodo({
        id: todo.id,
        title: todo.title,
        time: updateTime(),
        date: updateDate(),
      });
      this.updateTodo(todo.id);
    },
  },
};
</script>

<style scoped>
.new-task {
  margin-right: 12px;
}
.new-task h3 {
  margin-bottom: 8px;
}

.list {
  position: relative;
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
.list-item {
  background-color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 12px;
}

.list-item input {
  appearance: none;
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  font-size: 12px;
  padding: 6px;
}
.list-item p {
  font-size: 12px;
  margin: 8px 0;
}
.save-btn,
.cancel-btn {
  appearance: none;
  border: none;
  color: #fff;
  font-weight: 500;
  width: 80px;
  height: 24px;
  border-radius: 4px;
}
.save-btn {
  background-color: #008037;
  margin-right: 12px;
}
.cancel-btn {
  background-color: #ff1616;
}
.save-btn,
.cancel-btn:hover {
  cursor: pointer;
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

.save-input,
.cancel-input {
  cursor: pointer;
  color: #fff;
  font-weight: 500;
  width: 80px;
  height: 24px;
  border-radius: 4px !important;
  padding: 0 !important;
}
.save-input {
  margin-right: 12px;
  background-color: #008037;
}
.cancel-input {
  background-color: #ff1616;
}
</style>