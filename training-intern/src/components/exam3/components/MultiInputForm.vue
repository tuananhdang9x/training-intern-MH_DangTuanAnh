<template>
  <div
    :class="{
      'step-one': step === 1,
      'step-second': step === 2,
      'step-third': step === 3,
    }"
  >
    <div v-for="(item, index) in data" :key="item.id">
      <InputItem
        :item="item"
        :step="step"
        :index="index"
        @handleDelete="handleDelete"
        @onChange="(e) => onChange(e, index)"
        @onChangeStartDate="(e) => onChangeStartDate(e, index)"
        @onChangeEndDate="(e) => onChangeEndDate(e, index)"
      />
    </div>
  </div>
</template>

<script>
import InputItem from "./InputItem.vue";
export default {
  components: {
    InputItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    step: {
      type: Number,
      default: () => 1,
    },
    index: {
      type: Number,
      default: () => 0,
    },
  },
  methods: {
    handleDelete(index) {
      this.$emit("handleDelete", index);
    },
    onChange(e, index) {
      this.$emit("onChange", { e, index });
    },
    onChangeStartDate(e, index) {
      this.$emit("onChangeStartDate", { e, index });
    },
    onChangeEndDate(e, index) {
      this.$emit("onChangeEndDate", { e, index });
    },
  },
};
</script>

<style lang="scss" scoped>
.step-one {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px 24px;
  width: 926px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 20px 0 24px 20px;
}

.step-second {
  display: flex;
  flex-direction: column;
  width: 1026px;
  margin: 20px 0 24px 20px;
  padding: 24px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}

.step-third {
  display: flex;
  flex-direction: column;
  margin: 20px 0 24px 20px;
  width: 926px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 20px 32px 24px;
}
</style>