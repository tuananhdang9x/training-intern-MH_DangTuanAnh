<template>
  <div>
    <div>
      <InputText
        v-if="item.inputType === 'inputText'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :value="item.value"
        :step="step"
        @onChange="(e) => onChange(item, e)"
      />
      <InputDateOfBirth
        v-if="item.inputType === 'inputDob'"
        :requireItem="item.requireItem"
        :title="item.title"
        :errorMsg="item.errorMsg"
        :value="item.value"
        @onChange="(e) => onChange(item, e)"
      />
      <InputCity
        v-if="item.inputType === 'inputCity'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        @onChange="(e) => onChange(item, e)"
      />
      <InputJobPosition
        v-if="item.inputType === 'inputJobPosition'"
        :requireItem="item.requireItem"
        :title="item.title"
        :description="item.description"
        @onChange="onChange(item)"
      />
      <InputDescription
        v-if="item.inputType === 'inputDescription'"
        :requireItem="item.requireItem"
        :title="item.title"
        :wordLimit="item.wordLimit"
        :errorMsg="item.errorMsg"
        :value="item.value"
        :step="step"
        @onChange="(e) => onChange(item, e)"
      />
      <InputImage
        v-if="item.inputType === 'inputImage'"
        :requireItem="item.requireItem"
        :title="item.title"
        :placeholder="item.placeholder"
        :triggerText="item.triggerText"
        @onChange="onChange(item)"
      />
      <InputListCompany
        v-if="item.inputType === 'inputListCompany'"
        :listOption="item.listOption"
        :value="item.value"
        :errorMsg="item.errorMsg"
        @handleDelete="handleDelete"
        @onChange="(e) => onChange(item, e)"
      />
      <InputWorkPeriod
        v-if="item.inputType === 'inputWorkPeriod'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :errorMsg="item.errorMsg"
        @onChangeStartDate="(e) => onChangeStartDate(item, e)"
        @onChangeEndDate="(e) => onChangeEndDate(item, e)"
      />
      <InputSalary
        v-if="item.inputType === 'inputSalary'"
        :requireItem="item.requireItem"
        :title="item.title"
        :value="item.value"
        :errorMsg="item.errorMsg"
        @onChange="(e) => onChange(item, e)"
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
import { mapGetters } from "vuex";
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
    onChange(item, e) {
      item.value = e;
      item.errorMsg = "";

      if (item.inputType === "inputDob") {
        item.value = e.target.value;
      }

      if (item.inputType === "inputCity") {
        item.value = e.target.value;
      }

      if (item.inputType === "inputJobPosition") {
        item.value = this.listChoseOptions;
      }

      if (item.inputType === "inputImage") {
        item.value = this.getFiles;
      }

      if (item.inputType === "inputListCompany") {
        item.value = e.target.value;
      }
    },
    onChangeStartDate(item, e) {
      item.value.from = e.target.value;
      item.errorMsg = "";
    },
    onChangeEndDate(item, e) {
      item.value.to = e.target.value;
      item.errorMsg = "";
    },
    handleDelete(index) {
      this.$emit("handleDelete", index);
    },
  },
  computed: {
    ...mapGetters("list", ["listChoseOptions"]),
    ...mapGetters("file", ["getFiles"]),
  },
};
</script>

<style>
</style>