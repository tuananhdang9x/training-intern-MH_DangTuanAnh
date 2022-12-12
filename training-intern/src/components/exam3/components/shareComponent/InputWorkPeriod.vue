<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="search-input">
      <input
        type="date"
        name="name"
        placeholder="Chọn các vị trí mà bạn muốn"
      />
      <div class="input-icon">
        <IconMinus />
      </div>
      <input
        type="date"
        name="name"
        placeholder="Chọn các vị trí mà bạn muốn"
      />
    </div>
  </div>
</template>

<script>
import IconMinus from "@/assets/icon/IconMinus.vue";
import InputRequire from "./InputRequire.vue";
export default {
  components: {
    InputRequire,
    IconMinus,
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
  .search-input {
    display: flex;
    align-items: center;
    input {
      width: 118px;
      height: 40px;
      margin-right: 16px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
    }
    .input-icon {
      margin-right: 16px;
    }
  }
}
</style>