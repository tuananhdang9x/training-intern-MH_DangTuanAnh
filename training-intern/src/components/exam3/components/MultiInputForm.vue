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
      />
      <InputDateOfBirth
        v-if="item.inputType === 'inputDob'"
        :requireItem="item.requireItem"
        :title="item.title"
      />
      <InputCity
        v-if="item.inputType === 'inputCity'"
        :requireItem="item.requireItem"
        :title="item.title"
      />
      <InputJobPosition
        v-if="item.inputType === 'inputJobPosition'"
        :requireItem="item.requireItem"
        :title="item.title"
        :description="item.description"
      />
      <InputDescription
        v-if="item.inputType === 'inputDescription'"
        :requireItem="item.requireItem"
        :title="item.title"
        :wordLimit="item.wordLimit"
      />
      <InputImage
        v-if="item.inputType === 'inputImage'"
        :requireItem="item.requireItem"
        :title="item.title"
        :placeholder="item.placeholder"
        :triggerText="item.triggerText"
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
export default {
  components: {
    InputText,
    InputDateOfBirth,
    InputCity,
    InputJobPosition,
    InputDescription,
    InputImage,
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
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.step-one {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px 24px;
  width: 926px;
  // height: 849px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 20px 0 24px 20px;
}

.step-two {
  display: flex;
  flex-direction: column;
  margin: 20px 0 24px 20px;
}

.step-three {
  display: flex;
  flex-direction: column;
  margin: 20px 0 24px 20px;
  width: 932px;
  height: 618px;
}
</style>