<template>
  <div>
    <div v-if="stepData.step === 1 || stepData.step === 3">
      <MultiInputForm
        :data="stepData.data"
        :step="stepData.step"
        @onChange="onChange"
        @onChangeDate="onChangeDate"
        @onChangeDesc="onChangeDesc"
        @onChooseCity="onChooseCity"
        @onChangeJob="onChangeJob"
        @onAddItem="onAddItem"
      />
    </div>
    <div v-if="stepData.step === 2">
      <MultiInputForm
        v-for="data in stepData.data"
        :key="data.id"
        :data="data.formSecondDefault"
        :step="stepData.step"
        :id="data.id"
        @handleDelete="handleDelete"
      />
    </div>
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
    handleDelete(id) {
      this.$emit("handleDelete", id);
    },
    onChange(keyword) {
      this.$emit("onChange", keyword);
    },
    onChangeDate(value) {
      this.$emit("onChangeDate", value);
    },
    onChangeDesc(keyword) {
      this.$emit("onChangeDesc", keyword);
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
  },
};
</script>

<style>
</style>