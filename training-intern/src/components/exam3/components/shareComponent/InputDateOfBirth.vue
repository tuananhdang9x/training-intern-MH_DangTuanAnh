<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-date">
      <input
        type="date"
        @change="onChangeDate"
        :class="{ error: errorMsg.length }"
        v-model="date"
      />
    </div>
    <div class="msg" v-if="errorMsg.length">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>
  
  <script>
import InputRequire from "./InputRequire.vue";
export default {
  data() {
    return {
      date: this.value,
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
    onChangeDate(e) {
      this.$emit("onChangeDate", e.target.value);
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
  .input-date {
    .error {
      border: 1px solid red;
    }
    input {
      width: 118px;
      height: 40px;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>