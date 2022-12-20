<template>
  <div>
    <MultiInputForm
      v-for="(item, index) in stepData.data"
      :key="index"
      :data="item"
      :step="stepData.step"
      :id="item.id"
      :index="index"
      @handleDelete="handleDelete"
      @onChange="onChange"
      @onStartTime="onStartTime"
      @onEndTime="onEndTime"
      @handleAddItem="handleAddItem"
      @handleNextStep="handleNextStep"
      @handlePrevStep="handlePrevStep"
      @handleSubmit="handleSubmit"
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
    onChange(payload) {
      this.$emit("onChange", payload);
    },
    onStartTime(payload) {
      this.$emit("onStartTime", payload);
    },
    onEndTime(payload) {
      this.$emit("onEndTime", payload);
    },
    handleAddItem() {
      this.$emit("handleAddItem");
    },
    handleNextStep(payload) {
      this.$emit("handleNextStep", payload);
    },
    handlePrevStep() {
      this.$emit("handlePrevStep");
    },
    handleSubmit(payload) {
      this.$emit("handleSubmit", payload);
    },
  },
};
</script>

<style>
</style>