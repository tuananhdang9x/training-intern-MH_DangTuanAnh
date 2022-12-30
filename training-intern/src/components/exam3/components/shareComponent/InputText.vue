<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <input
      type="text"
      @keyup="onChange(keyword)"
      :class="{
        error: errorMsg,
      }"
      v-model="keyword"
    />
    <div class="msg" v-if="errorMsg">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import InputRequire from "./InputRequire.vue";
export default {
  data() {
    return {
      keyword: this.value,
    };
  },

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
    errorMsg: {
      type: String,
      default: () => "",
    },
    value: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    onChange(keyword) {
      this.$emit("onChange", keyword);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-item {
  margin-bottom: 10px;
  .error {
    border: 1px solid red;
  }
  .msg {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: red;
    margin-top: 6px;
  }
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
    &:focus {
      outline: none;
    }
  }
}
</style>