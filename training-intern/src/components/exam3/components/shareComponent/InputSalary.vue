<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-salary">
      <input
        type="text"
        :class="{ error: errorMsg }"
        @keyup="onChange(salary, inputType, id, index)"
        v-model="salary"
      />
    </div>
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
      salary: this.value,
    };
  },
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
    value: {
      type: String,
      default: () => "",
    },
    errorMsg: {
      type: String,
      default: () => "",
    },
    inputType: {
      type: String,
      default: () => "",
    },
    id: {
      type: Number,
      default: () => 0,
    },
    index: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    onChange(salary, inputType, id, index) {
      this.$emit("onChange", { salary, inputType, id, index });
    },
  },
};
</script>

<style lang="scss" scoped>
.input-item {
  margin-bottom: 10px;
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
  .input-salary {
    .error {
      border: 1px solid red;
    }
    input {
      width: 119px;
      height: 40px;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>