<template>
  <div id="container-multiform">
    <NavBar :data="getMultiForm" :step="stepNum" @onChangeStep="onChangeStep" />
    <MultiStepForm
      :stepData="stepData"
      @handleDelete="handleDelete"
      @onPrevStep="onPrevStep"
      @onAddItem="onAddItem"
      @onChange="onChange"
      @onChangeStartDate="onChangeStartDate"
      @onChangeEndDate="onChangeEndDate"
      @handleNextStep="handleNextStep"
    />
  </div>
</template>
  
  <script>
import MultiStepForm from "./components/MultiStepForm.vue";
import NavBar from "./components/shareComponent/NavBar.vue";
import { mapActions, mapGetters } from "vuex";
import {
  formFirst,
  formDefault,
  formSecond,
  formThird,
} from "./components/formData.js";
import {
  validateNextStep,
  validateDateConflict,
  validateRequireItem,
  validateMaxLength,
  validateDoB,
  validateSalary,
  validateDate,
} from "@/utils/validateMultiForm.js";
export default {
  components: {
    MultiStepForm,
    NavBar,
  },
  data() {
    return {
      stepNum: 1,
    };
  },
  created() {
    this.getOptions();
  },
  computed: {
    ...mapGetters("form", ["getMultiForm", "getDataExport"]),
    ...mapGetters("list", ["listChoseOptions"]),
    ...mapGetters("file", ["getFiles"]),
    stepData() {
      return this.getMultiForm.find((item) => item.step === this.stepNum);
    },
  },
  methods: {
    ...mapActions("form", ["exportData"]),
    ...mapActions("list", ["getOptions"]),
    handleDelete(index) {
      formSecond.splice(index, 1);
    },
    onCheckConflict(id) {
      if (validateDateConflict(this.stepData, id)) {
        this.$toasted.global.error_msg();
      }
    },
    onNextStep() {
      if (validateNextStep(this.stepData)) {
        if (this.stepNum < this.getMultiForm.length) {
          this.stepNum++;
        } else {
          const data = {};
          let formSubmit = [...formFirst, ...formThird];
          formSubmit.forEach((list) => {
            list.forEach((item) => (data[item.key] = item.value));
          });
          (data["form_second"] = formSecond.map((list) => {
            let form = {};
            list.forEach((item) => {
              form[item.key] = item.value;
            });
            return form;
          })),
            this.exportData(data);
          console.log("Data Export:", this.getDataExport);
          this.$toasted.global.success_msg();
          this.$router.push("/");
        }
      }
    },
    onPrevStep() {
      if (this.stepNum > 1) {
        this.stepNum--;
      }
    },
    onAddItem() {
      formSecond.push(JSON.parse(JSON.stringify(formDefault)));
    },
    onChangeStep(choseStep) {
      if (choseStep > this.stepNum) {
        if (choseStep - this.stepNum <= 1) {
          if (validateNextStep(this.stepData, this.stepNum)) {
            this.stepNum = choseStep;
          }
        }
      } else {
        this.stepNum = choseStep;
      }
    },
    onChange(payload, index) {
      let item = this.stepData.data[index][payload.index];
      item.value = payload.e;
      item.errorMsg = "";

      if (item.inputType === "inputDob") {
        item.value = payload.e.target.value;
      }

      if (item.inputType === "inputCity") {
        item.value = payload.e.target.value;
      }

      if (item.inputType === "inputJobPosition") {
        item.value = this.listChoseOptions;
      }

      if (item.inputType === "inputImage") {
        item.value = this.getFiles;
      }

      if (item.inputType === "inputListCompany") {
        item.value = payload.e.target.value;
      }
    },
    onChangeStartDate(payload, index) {
      let item = this.stepData.data[index][payload.index];
      item.value.from = payload.e.target.value;
      item.errorMsg = "";
    },
    onChangeEndDate(payload, index) {
      let item = this.stepData.data[index][payload.index];
      item.value.to = payload.e.target.value;
      item.errorMsg = "";
    },
    handleNextStep() {
      let isCheck = true;
      this.stepData.data.forEach((list) => {
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
        this.onCheckConflict(inx);
      }
      this.onNextStep();
    },
  },
};
</script>
  
<style lang="scss" scoped>
#container-multiform {
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}
</style>  