<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <div class="input-desc">
      {{ description }}
    </div>
    <AutoCompleteHome @onChangeJob="onChange" />
  </div>
</template>

<script>
import AutoCompleteHome from "@/components/exam1/AutoCompleteHome.vue";
import InputRequire from "./InputRequire.vue";
export default {
  components: {
    InputRequire,
    AutoCompleteHome,
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
    description: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    onChange() {
      this.$emit("onChange");
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
  .input-desc {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #666666;
  }
  ::v-deep .container-autocomplete {
    .dropdown-list {
      width: 528px;
    }
    .input-item {
      display: flex;
      width: 528px;
      min-height: 40px;
      margin-right: 28px;
      padding: 0 10px;
      align-items: center;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      overflow: hidden;
      .selected-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }

      input {
        height: 32px;
        width: 200px;
        margin: 4px;
        appearance: none;
        border: none;
        outline: none;
        &:focus {
          outline: none;
        }
      }
      .search-icon {
        width: 24px;
        height: 24px;
        margin-right: 16px;
        display: flex;
        align-items: center;
      }
    }
  }
}
</style>