<template>
  <div>
    <div>
      <MultiInputForm
        v-for="(item, index) in stepData.data"
        :key="index"
        :data="item"
        :step="stepData.step"
        :index="index"
        @handleDelete="handleDelete(index)"
        @onChange="(payload) => onChange(payload, index)"
        @onChangeStartDate="(payload) => onChangeStartDate(payload, index)"
        @onChangeEndDate="(payload) => onChangeEndDate(payload, index)"
      />
    </div>
    <FormFooter
      :stepData="stepData"
      @handleAddItem="handleAddItem"
      @handleNextStep="handleNextStep"
      @handlePrevStep="handlePrevStep"
    />
  </div>
</template>

<script>
import MultiInputForm from "./MultiInputForm.vue";
import FormFooter from "./shareComponent/FormFooter.vue";
export default {
  components: {
    MultiInputForm,
    FormFooter,
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
    handleNextStep() {
      this.$emit("handleNextStep");
    },
    handlePrevStep() {
      this.$emit("onPrevStep");
    },
    handleAddItem() {
      this.$emit("onAddItem");
    },
    onChange(payload, index) {
      this.$emit("onChange", payload, index);
    },
    onChangeStartDate(payload, index) {
      this.$emit("onChangeStartDate", payload, index);
    },
    onChangeEndDate(payload, index) {
      this.$emit("onChangeEndDate", payload, index);
    },
  },
};
</script>

<style>
</style>