<template>
  <div class="container-form-second">
    <ListForm
      v-for="item in listForm"
      :key="item.id"
      :listCompany="listCompany"
      :item="item"
      @handleDeleteItem="handleDeleteItem"
    />
    <button @click="handleAddOption">Thêm công ty</button>
  </div>
</template>

<script>
import ListForm from "@/share/ListForm.vue";
import { v4 } from "uuid";
export default {
  data() {
    return {
      title: "Mô tả về công việc",
      listCompany: ["MorSoftware", "FPT", "MeinHart", "Boydens"],
      listForm: [],
    };
  },
  mounted() {
    this.listForm.push({
      id: v4(),
    });
  },
  components: {
    ListForm,
  },
  methods: {
    handleAddOption() {
      this.listForm.push({
        id: v4(),
      });
    },
    handleDeleteItem(id) {
      this.listForm = this.listForm.filter((item) => item.id !== id);
    },
  },
};
</script>

<style lang="scss" scoped>
.container-form-second {
  display: flex;
  flex-direction: column;
  margin: 20px 0 24px 20px;
}
</style>