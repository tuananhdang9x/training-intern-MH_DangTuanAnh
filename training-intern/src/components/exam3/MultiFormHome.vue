<template>
  <div id="container-multiform">
    <NavBar :data="getMultiForm" :step="stepNum" @onChangeStep="onChangeStep" />
    <MultiStepForm
      :stepData="stepData"
      @handleDelete="handleDelete"
      @onCheckConflict="onCheckConflict"
      @onNextStep="onNextStep"
      @onPrevStep="onPrevStep"
      @onAddItem="onAddItem"
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
    stepData() {
      return this.getMultiForm.filter((item) => item.step === this.stepNum)[0];
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
    onChangeStep(step) {
      if (step > this.stepNum) {
        if (step - this.stepNum <= 1) {
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
  padding-bottom: 20px;
}
</style>  