<template>
  <div class="input-item">
    <div class="input-title">
      <InputRequire v-if="requireItem" />
      <div class="input-name">{{ title }}</div>
    </div>
    <select id="place-list" @change="onChooseCity" v-model="city">
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
  },
  computed: {
    ...mapGetters("place", ["listOptions"]),
  },
  methods: {
    ...mapActions("place", ["getOptions"]),
    onChooseCity(e) {
      this.$emit("onChooseCity", e);
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
    width: 528px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    &:focus {
      outline: none;
    }
  }
}
</style>