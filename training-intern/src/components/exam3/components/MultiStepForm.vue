<template>
  <div>
    <div>
      <MultiInputForm
        v-for="(item, index) in stepData.data"
        :key="index"
        :data="item"
        :step="stepData.step"
        :stepData="stepData"
        :id="item.id"
        :index="index"
        @handleDelete="handleDelete"
      />
    </div>
    <FormFooter
      :stepData="stepData"
      @handleAddItem="handleAddItem"
      @handleNextStep="handleNextStep(stepData.data)"
      @handlePrevStep="handlePrevStep"
    />
  </div>
</template>

<script>
import MultiInputForm from "./MultiInputForm.vue";
import FormFooter from "./shareComponent/FormFooter.vue";
import {
  validateRequireItem,
  validateMaxLength,
  validateDoB,
  validateSalary,
  validateDate,
} from "@/utils/validateMultiForm";
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
    handleNextStep(data) {
      let isCheck = true;
      data.forEach((list) => {
        list.forEach((item) => {
          if (item.requireItem === true) {
            validateRequireItem(item);
          }
          if (item.wordLimit) {
            validateMaxLength(item);
          }
          if (item.inputType === "inputDob") {
            validateDoB(item);
          }
          if (item.inputType === "inputSalary") {
            validateSalary(item);
          }
          if (item.inputType === "inputWorkPeriod") {
            if (!validateDate(item)) {
              isCheck = false;
            }
          }
        });
      });
      if (isCheck) {
        let inx;
        this.stepData.data.forEach((list) => {
          list.forEach((item) => {
            if (item.inputType === "inputWorkPeriod") {
              inx = item.id;
            }
          });
        });
        this.$emit("onCheckConflict", inx);
      }
      this.$emit("onNextStep");
    },
    handlePrevStep() {
      this.$emit("onPrevStep");
    },
    handleAddItem() {
      this.$emit("onAddItem");
    },
  },
};
</script>

<style>
</style>