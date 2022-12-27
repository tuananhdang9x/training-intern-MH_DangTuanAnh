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
        :placeholder="placeholder"
        v-model="start"
        @change="onChangeStartDate"
        :class="{ error: errorMsg }"
      />
      <div class="input-icon">
        <IconMinus />
      </div>
      <input
        type="date"
        name="name"
        :placeholder="placeholder"
        v-model="end"
        @change="onChangeEndDate"
        :class="{ error: errorMsg }"
      />
    </div>
    <div class="msg" v-if="errorMsg">
      <p>{{ errorMsg }}</p>
    </div>
  </div>
</template>

<script>
import IconMinus from "@/assets/icon/IconMinus.vue";
import InputRequire from "./InputRequire.vue";
export default {
  data() {
    return {
      start: this.value.from,
      end: this.value.to,
    };
  },
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
    value: {
      type: Object,
      default: () => ({}),
    },
    errorMsg: {
      type: String,
      default: () => "",
    },
    placeholder: {
      type: String,
      default: () => "Chọn các vị trí mà bạn muốn",
    },
  },
  methods: {
    onChangeStartDate(event) {
      this.$emit("onChange", {
        from: event.target.value,
        to: this.value.to,
      });
    },
    onChangeEndDate(event) {
      this.$emit("onChange", {
        from: this.value.from,
        to: event.target.value,
      });
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
    .error {
      border: 1px solid red;
    }
    input {
      width: 135px;
      height: 40px;
      padding: 8px;
      border: 1px solid #dcdcdc;
      border-radius: 2px;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-right: 16px;
      &::-webkit-calendar-picker-indicator {
        color: #ccc;
        opacity: 0.4;
        display: block;
        width: 20px;
        height: 20px;
      }
      &:focus {
        outline: none;
      }
    }
    .input-icon {
      margin-right: 16px;
    }
  }
}
</style>