<template>
  <div class="input-item">
    <div class="input-company">
      <div class="company-item">
        <select
          id="company-list"
          @change="onChange"
          v-model="company"
          :class="{ error: errorMsg }"
        >
          <option disabled selected value>{{ placeholder }}</option>
          <option v-for="(company, index) in listOption" :key="index">
            {{ company }}
          </option>
        </select>
      </div>
      <div class="input-icon" @click="handleDelete">
        <IconTrash />
      </div>
    </div>
    <div class="msg" v-if="errorMsg">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>
  
  <script>
import IconTrash from "@/assets/icon/IconTrash.vue";
export default {
  data() {
    return {
      company: this.value,
    };
  },
  components: {
    IconTrash,
  },
  props: {
    listOption: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => "",
    },
    errorMsg: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "Lựa chọn công ty...",
    },
  },
  methods: {
    handleDelete() {
      this.$emit("handleDelete");
    },
    onChange(event) {
      this.$emit("onChange", event);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.input-item {
  margin-bottom: 24px;
  .msg {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: red;
    margin-top: 6px;
  }
  .input-company {
    width: 860px;
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
      .error {
        border: 1px solid red !important;
      }
      #company-list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 804px;
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