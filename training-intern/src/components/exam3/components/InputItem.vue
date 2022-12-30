<template>
  <div>
    <div>
      <InputText
        v-if="item.inputType === 'inputText'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :value="item.value"
        @onChange="onChange"
      />
      <InputDateOfBirth
        v-if="item.inputType === 'inputDob'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :value="item.value"
        @onChange="onChange"
      />
      <InputCity
        v-if="item.inputType === 'inputCity'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        @onChange="onChange"
      />
      <InputJobPosition
        v-if="item.inputType === 'inputJobPosition'"
        :requireItem="item.requireItem"
        :title="item.title"
        :description="item.description"
        @onChange="onChange"
      />
      <InputDescription
        v-if="item.inputType === 'inputDescription'"
        :requireItem="item.requireItem"
        :title="item.title"
        :wordLimit="item.wordLimit"
        :errorMsg="item.errorMsg"
        :value="item.value"
        @onChange="onChange"
      />
      <InputImage
        v-if="item.inputType === 'inputImage'"
        :requireItem="item.requireItem"
        :title="item.title"
        :placeholder="item.placeholder"
        :triggerText="item.triggerText"
        @onChange="onChange"
      />
      <InputListCompany
        v-if="item.inputType === 'inputListCompany'"
        :listOption="item.listOption"
        :value="item.value"
        :errorMsg="item.errorMsg"
        @handleDelete="handleDelete"
        @onChange="onChange"
      />
      <InputWorkPeriod
        v-if="item.inputType === 'inputWorkPeriod'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :errorMsg="item.errorMsg"
        @onChange="onChange"
      />
      <InputSalary
        v-if="item.inputType === 'inputSalary'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :errorMsg="item.errorMsg"
        @onChange="onChange"
      />
    </div>
  </div>
</template>

<script>
import InputText from "./shareComponent/InputText.vue";
import InputDateOfBirth from "./shareComponent/InputDateOfBirth.vue";
import InputCity from "./shareComponent/InputCity.vue";
import InputJobPosition from "./shareComponent/InputJobPosition.vue";
import InputDescription from "./shareComponent/InputDescription.vue";
import InputImage from "./shareComponent/InputImage.vue";
import InputListCompany from "./shareComponent/InputListCompany.vue";
import InputWorkPeriod from "./shareComponent/InputWorkPeriod.vue";
import InputSalary from "./shareComponent/InputSalary.vue";
export default {
  components: {
    InputText,
    InputDateOfBirth,
    InputCity,
    InputJobPosition,
    InputDescription,
    InputImage,
    InputListCompany,
    InputWorkPeriod,
    InputSalary,
  },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onChange(e) {
      this.$emit("onChange", e);
    },
    handleDelete() {
      this.$emit("handleDelete");
    },
  },
};
</script>

<style>
</style>