<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <select
      id="place-list"
      @change="onChange($event, inputType, id, index)"
      v-model="city"
    >
      <option disabled selected value>Lựa chọn thành phố...</option>
      <option v-for="item in listOptions" :key="item.code">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import InputRequire from "./InputRequire.vue";
export default {
  data() {
    return {
      city: this.value,
    };
  },
  created() {
    this.getOptions();
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
  computed: {
    ...mapGetters("place", ["listOptions"]),
  },
  methods: {
    ...mapActions("place", ["getOptions"]),
    onChange(event, inputType, id, index) {
      this.$emit("onChange", { event, inputType, id, index });
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
  #place-list {
    padding: 8px 10px;
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("@/assets/icon/CaretDown.svg");
    background-repeat: no-repeat;
    background-position-x: 98%;
    background-position-y: 12px;
    border: 1px solid #dfdfdf;
    border-radius: 2px;

    &:focus {
      outline: none;
    }
  }
}
</style>