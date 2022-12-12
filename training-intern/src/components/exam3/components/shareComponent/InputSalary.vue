<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-salary">
      <input type="text" name="name" />
    </div>
  </div>
</template>

<script>
import InputRequire from "./InputRequire.vue";
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
  .input-salary {
    input {
      width: 119px;
      height: 40px;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
    }
  }
}
</style>