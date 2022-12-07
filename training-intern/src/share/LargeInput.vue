<template>
  <div class="input-description">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-large">
      <input type="text" name="name" />
    </div>
    <div class="input-limit">0/1000</div>
  </div>
</template>

<script>
import InputRequire from "./InputRequire.vue";
export default {
  props: {
    title: {
      type: String,
      default: () => "",
    },
    requireItem: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    InputRequire,
  },
};
</script>

<style lang="scss" scoped>
.input-description {
  margin-bottom: 10px;
  .input-title {
    display: flex;
    align-items: center;
  }
  .input-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333;
  }
  .input-large {
    margin-bottom: 10px;
    input {
      width: 528px;
      height: 152px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
    }
  }
  .input-limit {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
  }
}
</style>