<template>
  <div
    :class="{
      'step-one': step === 1,
      'step-two': step === 2,
      'step-three': step === 3,
    }"
  >
    <div v-for="item in data" :key="item.id">
      <InputText
        v-if="item.inputType === 'inputText'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :step="step"
        :index="index"
        :value="item.value"
        :id="item.id"
        :inputType="item.inputType"
        @onChange="onChange"
      />
      <InputDateOfBirth
        v-if="item.inputType === 'inputDob'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :index="index"
        :value="item.value"
        :id="item.id"
        :inputType="item.inputType"
        @onChange="onChange"
      />
      <InputCity
        v-if="item.inputType === 'inputCity'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :index="index"
        :id="item.id"
        :inputType="item.inputType"
        @onChange="onChange"
      />
      <InputJobPosition
        v-if="item.inputType === 'inputJobPosition'"
        :requireItem="item.requireItem"
        :title="item.title"
        :description="item.description"
        :index="index"
        :id="item.id"
        :inputType="item.inputType"
        @onChange="onChange"
      />
      <InputDescription
        v-if="item.inputType === 'inputDescription'"
        :requireItem="item.requireItem"
        :title="item.title"
        :wordLimit="item.wordLimit"
        :errorMsg="item.errorMsg"
        :value="item.value"
        :index="index"
        :step="step"
        :id="item.id"
        :inputType="item.inputType"
        @onChange="onChange"
      />
      <InputImage
        v-if="item.inputType === 'inputImage'"
        :requireItem="item.requireItem"
        :title="item.title"
        :placeholder="item.placeholder"
        :triggerText="item.triggerText"
        :index="index"
        :id="item.id"
        :inputType="item.inputType"
        @onChange="onChange"
      />
      <InputListCompany
        v-if="item.inputType === 'inputListCompany'"
        :listOption="item.listOption"
        :value="item.value"
        :index="index"
        :errorMsg="item.errorMsg"
        :id="item.id"
        :inputType="item.inputType"
        @handleDelete="handleDelete"
        @onChange="onChange"
      />
      <InputWorkPeriod
        v-if="item.inputType === 'inputWorkPeriod'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :index="index"
        :errorMsg="item.errorMsg"
        :id="item.id"
        @onStartTime="onStartTime"
        @onEndTime="onEndTime"
      />
      <InputSalary
        v-if="item.inputType === 'inputSalary'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :errorMsg="item.errorMsg"
        :index="index"
        :id="item.id"
        :inputType="item.inputType"
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
    onChange(payload) {
      this.$emit("onChange", payload);
    },
    handleDelete(index) {
      this.$emit("handleDelete", index);
    },
    onStartTime(payload) {
      this.$emit("onStartTime", payload);
    },
    onEndTime(payload) {
      this.$emit("onEndTime", payload);
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

.step-two {
  display: flex;
  flex-direction: column;
  width: 1026px;
  margin: 20px 0 24px 20px;
  padding: 24px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
}

.step-three {
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