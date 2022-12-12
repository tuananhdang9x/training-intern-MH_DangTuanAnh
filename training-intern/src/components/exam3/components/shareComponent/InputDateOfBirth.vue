<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-date">
      <input type="date" :max="getCurrentDate" />
    </div>
  </div>
</template>
  
  <script>
import InputRequire from "./InputRequire.vue";
import { updateDate } from "@/utils/index.js";
export default {
  components: {
    InputRequire,
  },
  props: {
    requireItem: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: () => "",
    },
  },
  computed: {
    getCurrentDate() {
      let today = new Date();
      return updateDate(today);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
.input-item {
  margin-bottom: 10px;
  .input-title {
    display: flex;
    margin-bottom: 6px;
    .input-name {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #333;
    }
  }
  .input-date {
    input {
      width: 118px;
      height: 40px;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
    }
  }
}
</style>