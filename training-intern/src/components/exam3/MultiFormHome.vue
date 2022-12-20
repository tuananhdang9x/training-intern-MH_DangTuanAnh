<template>
  <div id="container-multiform">
    <NavBar :data="getMultiForm" :step="stepNum" @onChangeStep="onChangeStep" />
    <MultiStepForm
      :stepData="stepData"
      @handleDelete="handleDelete"
      @onChange="onChange"
      @onStartTime="onStartTime"
      @onEndTime="onEndTime"
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
  validateLastForm,
  validateInputText,
  validateDate,
  validateCompany,
  validateNextStep,
  validateDoB,
  validateDesc,
  validateSalary,
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
      if (validateNextStep(this.stepData, this.stepNum)) {
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
      if (validateLastForm(this.stepData)) {
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
    onChange(payload) {
      switch (payload.inputType) {
        case "inputText":
          if (
            validateInputText(
              this.stepData,
              payload.keyword,
              payload.step,
              payload.index,
              payload.id
            )
          ) {
            if (payload.step === 1) {
              this.stepData.data[payload.index].filter(
                (item) => item.id === payload.id
              )[0].value = payload.keyword;
            } else {
              this.stepData.data[payload.index].filter(
                (item) => item.id === payload.id
              )[0].value = payload.keyword;
            }
          }
          break;
        case "inputDob":
          validateDoB(
            this.stepData,
            payload.event.target.value,
            payload.index,
            payload.id
          );
          break;
        case "inputDescription":
          validateDesc(
            this.stepData,
            payload.keyword,
            payload.step,
            payload.index,
            payload.id
          );
          break;
        case "inputCity":
          formFirst[payload.index].filter(
            (item) => item.id === payload.id
          )[0].value = payload.event.target.value;
          break;
        case "inputJobPosition":
          formFirst[payload.index].filter(
            (item) => item.id === payload.id
          )[0].value = this.listChoseOptions;
          break;
        case "inputImage":
          formFirst[payload.index].filter(
            (item) => item.id === payload.id
          )[0].value = this.getFiles;
          console.log(this.getFiles);
          console.log(
            formFirst[payload.index].filter((item) => item.id === payload.id)[0]
              .value
          );
          break;
        case "inputListCompany":
          validateCompany(
            this.stepData,
            payload.event.target.value,
            payload.id,
            payload.index
          );
          break;
        case "inputSalary":
          formThird[payload.index].filter(
            (item) => item.id === payload.id
          )[0].value = payload.salary;
          validateSalary(
            this.stepData,
            payload.salary,
            payload.index,
            payload.id
          );
      }
    },

    onStartTime(payload) {
      formSecond[payload.index].filter(
        (item) => item.id === payload.id
      )[0].value.from = payload.start;
      if (validateDate(this.stepData, payload.index, payload.id)) {
        this.$toasted.show("the date confict was found");
      }
    },
    onEndTime(payload) {
      let getWorkPeriod = formSecond[payload.index].filter(
        (item) => item.id === payload.id
      )[0];
      getWorkPeriod.value.to = payload.end;
      if (validateDate(this.stepData, payload.index, payload.id)) {
        this.$toasted.show("the date confict was found");
      }
    },
    onChangeStep(step) {
      if (step > this.stepNum) {
        if (step === 3) {
          if (this.stepNum === 1) {
            if (
              this.getMultiForm[0].completed &&
              this.getMultiForm[1].completed
            ) {
              this.stepNum = step;
            }
          }
          if (this.stepNum === 2) {
            if (validateNextStep(this.stepData, this.stepNum)) {
              this.stepNum = step;
            }
          }
        }
        if (step === 2) {
          if (validateNextStep(this.stepData, this.stepNum)) {
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