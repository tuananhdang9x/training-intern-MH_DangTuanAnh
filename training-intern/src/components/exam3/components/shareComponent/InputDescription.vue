<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-large">
      <textarea
        type="text"
        name="name"
        v-model="keyword"
        @keyup="onChange(keyword)"
        :class="{ error: errorMsg }"
      ></textarea>
    </div>
    <div class="input-limit" v-if="wordLimit <= 1000">
      {{ keyword.length }}/{{ wordLimit }}
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
      keyword: this.value,
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
    wordLimit: {
      type: Number,
      default: () => 0,
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
  margin-bottom: 24px;

  .msg {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: red;
    margin-top: 6px;
  }
  .input-title {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
  }
  .input-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333;
  }
  .input-large {
    margin-bottom: 10px;
    .error {
      border: 1px solid red;
    }
    textarea {
      width: 528px;
      height: 152px;
      padding: 8px 10px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
      resize: none;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      &:focus {
        outline: none;
      }
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