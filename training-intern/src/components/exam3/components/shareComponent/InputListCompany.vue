<template>
  <div class="input-item">
    <div class="input-company">
      <div class="company-item">
        <select id="place-list">
          <option v-for="(company, index) in listOption" :key="index" value="1">
            {{ company }}
          </option>
        </select>
      </div>
      <div class="input-icon" @click="handleDelete(id)">
        <IconTrash />
      </div>
    </div>
  </div>
</template>
  
  <script>
import IconTrash from "@/assets/icon/IconTrash.vue";
export default {
  components: {
    IconTrash,
  },
  props: {
    listOption: {
      type: Array,
      default: () => [],
    },
    id: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    handleDelete(id) {
      this.$emit("handleDelete", id);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.input-item {
  margin-bottom: 10px;
  .input-company {
    width: 978px;
    height: 60px;
    background: #f8f8f8;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .input-icon {
      width: 32px;
      height: 32px;
      margin-right: 16px;
      cursor: pointer;
    }
    .company-item {
      #place-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 898px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #dbdbdb;
        border-radius: 4px;
        margin-left: 16px;
      }
    }
  }
}
</style>