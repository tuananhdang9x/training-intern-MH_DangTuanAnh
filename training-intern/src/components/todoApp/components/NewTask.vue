<template>
  <div class="todo-list">
    <div class="new-todo">
      <h3>{{ getHeading }}</h3>
      <div class="list">
        <div class="list-container">
          <div class="list-item" v-if="status == 'new' && addTodo">
            <form @submit="onSubmit">
              <input
                type="text"
                placeholder="Nhập tên nhiệm vụ"
                v-model="title"
                class="input-form"
              />
              <p>{{ currentTime }} {{ currentDate }}</p>
              <input type="submit" value="Lưu" class="save-input" />
              <input
                @click="toggleInput"
                type="submit"
                value="Hủy"
                class="cancel-input"
              />
            </form>
          </div>
          <div class="list-item" v-for="todo in getNewTodo" :key="todo.id">
            <h5>{{ todo.title }}</h5>
            <p>{{ todo.time }} {{ todo.date }}</p>
            <div v-if="status == 'new'">
              <button @click.prevent="handleFinish(todo)" class="save-btn">
                Hoàn thành
              </button>
              <button @click.prevent="handleReject(todo)" class="cancel-btn">
                Từ bỏ
              </button>
            </div>
            <div
              v-else
              :class="{
                completed: status == 'completed',
                rejected: status == 'rejected',
              }"
            >
              <p>{{ getStateTitle }}</p>
              <p>{{ todo.endTime }} {{ todo.endDate }}</p>
            </div>
          </div>
        </div>
        <button
          v-if="status == 'new'"
          :disabled="addTodo"
          @click="toggleInput"
          class="footer-btn"
        >
          Thêm mới
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { v4 as uuidv4 } from "uuid";
function updateDate(today) {
  let yyyy = today.getFullYear();
  let mm = today.getMonth() + 1;
  let dd = today.getDate();
  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + "/" + mm + "/" + yyyy;
}
function updateTime(today) {
  let hour = today.getHours();
  let minute = today.getMinutes();
  if (hour < 10) hour = "0" + hour;
  if (minute < 10) minute = "0" + minute;
  return hour + ":" + minute;
}

export default {
  data() {
    return {
      title: "",
      stateTitle: "",
    };
  },
  props: ["newTitle", "status"],
  computed: {
    ...mapGetters("todo", ["addTodo", "getTodo"]),
    getHeading() {
      if (this.status == "new") {
        return "Mới";
      } else if (this.status == "completed") {
        return "Đã hoàn thành";
      } else {
        return "Đã từ bỏ";
      }
    },
    getStateTitle() {
      return this.status == "completed" ? "Hoàn thành lúc" : "Đã hủy lúc";
    },
    getNewTodo() {
      return this.getTodo
        .filter((todo) => todo.status == this.status)
        .filter((todo) => todo.title.match(this.newTitle));
    },
    currentTime() {
      this.addTodo;
      let today = new Date();
      return updateTime(today);
    },
    currentDate() {
      this.addTodo;
      let today = new Date();
      return updateDate(today);
    },
  },
  methods: {
    ...mapActions("todo", ["toggleInput", "saveTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.saveTodo({
        id: uuidv4(),
        title: this.title,
        time: this.currentTime,
        date: this.currentDate,
        status: "new",
        endTime: "",
        endDate: "",
      });
      this.toggleInput();
      this.title = "";
    },
    handleFinish(todo) {
      todo.status = "completed";
      todo.endTime = this.currentTime;
      todo.endDate = this.currentDate;
    },
    handleReject(todo) {
      todo.status = "rejected";
      todo.endTime = this.currentTime;
      todo.endDate = this.currentDate;
    },
  },
};
</script>

<style scoped>
.todo-list {
  margin-right: 12px;
}
.todo-list h3 {
  margin-bottom: 8px;
}

.completed {
  color: #008037;
  font-weight: 600;
}

.rejected {
  color: #ff1616;
  font-weight: 600;
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