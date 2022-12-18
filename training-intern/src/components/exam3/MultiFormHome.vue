<template>
  <div id="container-multiform">
    <NavBar :data="getMultiForm" :step="stepNum" @onChangeStep="onChangeStep" />
    <MultiStepForm
      :stepData="stepData"
      @handleDelete="handleDelete"
      @onChange="onChange"
      @onChangeDate="onChangeDate"
      @onChangeDesc="onChangeDesc"
      @onChooseCity="onChooseCity"
      @onChangeJob="onChangeJob"
      @onAddItem="onAddItem"
      @onChooseCompany="onChooseCompany"
      @onStartTime="onStartTime"
      @onEndTime="onEndTime"
      @onChangeSalary="onChangeSalary"
    />
    <FormFooter
      :step="stepNum"
      @handleAddItem="handleAddItem"
      @handleNextStep="handleNextStep"
      @handlePrevStep="handlePrevStep"
      @handleSubmit="handleSubmit"
    />
  </div>
</template>
  
  <script>
import MultiStepForm from "./components/MultiStepForm.vue";
import NavBar from "./components/shareComponent/NavBar.vue";
import FormFooter from "./components/shareComponent/FormFooter.vue";
import { mapActions, mapGetters } from "vuex";
import {
  formFirst,
  formDefault,
  formSecond,
  formThird,
} from "./components/formData.js";
import {
  validateForm,
  validateInputText,
  validateDate,
  validateCompany,
  validateNextStep,
  validateDoB,
  validateDesc,
} from "@/utils/validateMultiForm.js";
export default {
  components: {
    MultiStepForm,
    NavBar,
    FormFooter,
  },
  data() {
    return {
      stepNum: 1,
    };
  },
  computed: {
    ...mapGetters("list", ["listChoseOptions"]),
    ...mapGetters("file", ["getFiles"]),
    ...mapGetters("form", ["getMultiForm", "getDataExport"]),

    stepData() {
      return this.getMultiForm.filter((item) => item.step === this.stepNum)[0];
    },
  },
  methods: {
    ...mapActions("form", ["exportData"]),
    handleNextStep() {
      if (validateNextStep(this.stepData)) {
        if (this.stepNum < 3) {
          this.stepNum++;
        }
      }
    },
    handlePrevStep() {
      if (this.stepNum > 1) {
        this.stepNum--;
      }
    },
    handleAddItem() {
      formSecond.push(JSON.parse(JSON.stringify(formDefault)));
    },
    handleSubmit() {
      if (validateForm(this.stepData)) {
        var data = {};
        let formSubmit = [...formFirst, ...formThird];
        formSubmit.forEach((list) => {
          list.forEach((item) => (data[item.key] = item.value));
        });
        data["form_second"] = [
          formSecond.map((list) => {
            let form = {};
            list.forEach((item) => {
              form[item.key] = item.value;
            });
            return form;
          }),
        ];
        this.exportData(data);
        console.log("Data Export:", this.getDataExport);
      }
    },
    handleDelete(index) {
      formSecond.splice(index, 1);
    },
    onChange(keyword, step, index) {
      if (validateInputText(this.stepData, keyword, step, index)) {
        if (step === 1) {
          this.stepData.data[0][0].value = keyword;
        } else {
          this.stepData.data[index][1].value = keyword;
        }
      }
    },
    onChangeDate(value) {
      validateDoB(this.stepData, value);
    },
    onChangeDesc(keyword, step, index) {
      validateDesc(this.stepData, keyword, step, index);
    },
    onChooseCity(e) {
      formFirst[0].filter((item) => item.inputType === "inputCity")[0].value =
        e.target.value;
    },
    onChangeJob() {
      formFirst[0].filter(
        (item) => item.inputType === "inputJobPosition"
      )[0].value = this.listChoseOptions;
    },
    onAddItem() {
      formFirst[0].filter((item) => item.inputType === "inputImage")[0].value =
        this.getFiles;
    },
    onChooseCompany(event, index) {
      formSecond[index][0].value = event.target.value;
      validateCompany(this.stepData, index);
    },
    onStartTime(start, index) {
      formSecond[index].filter(
        (item) => item.inputType === "inputWorkPeriod"
      )[0].value.from = start;
      validateDate(this.stepData, index);
    },
    onEndTime(end, index) {
      let getWorkPeriod = formSecond[index].filter(
        (item) => item.inputType === "inputWorkPeriod"
      )[0];
      getWorkPeriod.value.to = end;
      validateDate(this.stepData, index);
    },
    onChangeSalary(salary) {
      formThird[0][1].value = salary;
      validateForm(this.stepData);
    },
    onChangeStep(step) {
      if (step > this.stepNum) {
        if (step === 3) {
          if (
            this.getMultiForm[0].completed &&
            this.getMultiForm[1].completed
          ) {
            this.stepNum = step;
          } else {
            if (this.stepNum === 1) {
              validateNextStep(this.getMultiForm[0]);
            }
            if (this.stepNum === 2) {
              validateNextStep(this.getMultiForm[1]);
            }
          }
        }
        if (step === 2) {
          if (validateNextStep(this.getMultiForm[0])) {
            this.stepNum = step;
          }
        }
      } else {
        this.stepNum = step;
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
#container-multiform {
  display: flex;
  flex-direction: column;
}
</style>