<template>
  <div>
    <MultiInputForm
      v-for="(item, index) in stepData.data"
      :key="index"
      :data="item"
      :step="stepData.step"
      :id="stepData.id"
      :index="index"
      @handleDelete="handleDelete"
      @onChooseCompany="onChooseCompany"
      @onChange="onChange"
      @onChangeDate="onChangeDate"
      @onChangeDesc="onChangeDesc"
      @onChooseCity="onChooseCity"
      @onChangeJob="onChangeJob"
      @onAddItem="onAddItem"
      @onStartTime="onStartTime"
      @onEndTime="onEndTime"
      @onChangeSalary="onChangeSalary"
    />
  </div>
</template>

<script>
import MultiInputForm from "./MultiInputForm.vue";
export default {
  components: {
    MultiInputForm,
  },
  props: {
    stepData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleDelete(index) {
      this.$emit("handleDelete", index);
    },
    onChange(keyword, step, index) {
      this.$emit("onChange", keyword, step, index);
    },
    onChangeDate(value) {
      this.$emit("onChangeDate", value);
    },
    onChangeDesc(keyword, step, index) {
      this.$emit("onChangeDesc", keyword, step, index);
    },
    onChooseCity(e) {
      this.$emit("onChooseCity", e);
    },
    onChangeJob() {
      this.$emit("onChangeJob");
    },
    onAddItem() {
      this.$emit("onAddItem");
    },
    onChooseCompany(event, index) {
      this.$emit("onChooseCompany", event, index);
    },
    onStartTime(start, index) {
      this.$emit("onStartTime", start, index);
    },
    onEndTime(end, index) {
      this.$emit("onEndTime", end, index);
    },
    onChangeSalary(salary) {
      this.$emit("onChangeSalary", salary);
    },
  },
};
</script>

<style>
</style>