<template>
  <div class="list-container">
    <div class="list-item" v-if="addMode">
      <form @submit="onSubmit">
        <input
          type="text"
          placeholder="Nhập tên nhiệm vụ"
          v-model="title"
          class="input-form"
        />
        <p>{{ currentDateTime }}</p>
        <input type="submit" value="Lưu" class="save-input" />
        <input
          @click="handleCancel"
          type="submit"
          value="Hủy"
          class="cancel-input"
        />
      </form>
    </div>

    <div class="list-item" v-if="!addMode">
      <h5>{{ todo.title }}</h5>
      <p>{{ todo.initDateTime }}</p>
      <div v-if="todo.status == 'new'">
        <button @click.prevent="handleFinish" class="save-btn">
          Hoàn thành
        </button>
        <button @click.prevent="handleReject" class="cancel-btn">Từ bỏ</button>
      </div>
      <div
        v-if="todo.status == 'completed' || todo.status == 'rejected'"
        :class="{
          completed: todo.status == 'completed',
          rejected: todo.status == 'rejected',
        }"
      >
        <p>{{ getStateTitle }}</p>
        <p>{{ todo.endDateTime }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { updateDateTime } from "../../../utils/index.js";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      title: "",
    };
  },
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
    addMode: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    getStateTitle() {
      return this.todo.status == "completed" ? "Hoàn thành lúc" : "Đã hủy lúc";
    },

    currentDateTime() {
      let today = new Date();
      return updateDateTime(today);
    },
  },
  methods: {
    ...mapActions("todo", ["saveTodo", "updateTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.saveTodo({
        id: uuidv4(),
        title: this.title,
        initDateTime: this.currentDateTime,
        status: "new",
        endDateTime: "",
      });
      this.$emit("onCancel");
    },
    handleFinish() {
      this.updateTodo({
        id: this.todo.id,
        status: "completed",
        endDateTime: this.currentDateTime,
      });
    },
    handleReject() {
      this.updateTodo({
        id: this.todo.id,
        status: "rejected",
        endDateTime: this.currentDateTime,
      });
    },
    handleCancel() {
      this.$emit("onCancel");
    },
  },
};
</script>

<style scoped>
.completed {
  color: #008037;
  font-weight: 600;
}

.rejected {
  color: #ff1616;
  font-weight: 600;
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