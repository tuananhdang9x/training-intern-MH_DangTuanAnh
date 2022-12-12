<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <input type="text" name="name" />
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
      default: () => false,
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
  input {
    width: 528px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    height: 40px;
    padding: 8px 10px;
  }
}
</style>