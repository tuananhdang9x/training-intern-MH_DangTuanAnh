<template>
  <div id="container-multiform">
    <NavBar :data="getMultiForm" :step="stepNum" @onChangeStep="onChangeStep" />
    <MultiStepForm
      :stepData="stepData"
      @handleDelete="handleDelete"
      @onCheckConflict="onCheckConflict"
    />
    <FormFooter
      :step="stepNum"
      :stepData="stepData"
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
  validateNextStep,
  validateDateConflict,
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
      if (validateNextStep(this.stepData)) {
        var data = {};
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
      }
    },
    handleDelete(index) {
      formSecond.splice(index, 1);
    },
    onCheckConflict(id) {
      if (validateDateConflict(this.stepData, id)) {
        this.$toasted.global.error_msg();
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