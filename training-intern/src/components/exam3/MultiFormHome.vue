<template>
  <div class="container">
    <div class="header">Đơn ứng tuyển</div>
    <div class="nav-bar">
      <div class="nav-item">
        <div class="active">
          <p>1</p>
        </div>
        <p class="item-info">Thông tin cá nhân</p>
      </div>
      <div class="nav-item">
        <div class="item-number">
          <p>2</p>
        </div>
        <p class="item-info">Kinh nhiệm làm việc</p>
      </div>
      <div class="nav-item">
        <div class="item-number">
          <p>3</p>
        </div>
        <p class="item-info">Xác nhận thông tin</p>
      </div>
    </div>
    <MultiStepForm
      :stepData="stepData"
      @handleDelete="handleDelete"
      @onChange="(e) => onChange(e, stepData)"
      @onChangeDate="(e) => onChangeDate(e, stepData)"
      @onChangeDesc="(e) => onChangeDesc(e, stepData)"
      @onChooseCity="onChooseCity"
      @onChangeJob="onChangeJob"
      @onAddItem="onAddItem"
    />
    <div class="footer">
      <div class="add-item" @click="handleAddItem" v-if="stepNum === 2">
        <div class="add-icon">
          <IconPlus />
        </div>
        <p>Thêm công ty</p>
      </div>
      <div class="footer-nav">
        <div
          class="footer-next-item"
          @click="handleNextStep"
          v-if="stepNum !== 3"
        >
          <p>Tiếp</p>
        </div>
        <div
          class="footer-prev-item"
          @click="handlePrevStep"
          v-if="stepNum === 2"
        >
          <p>Quay lại</p>
        </div>
      </div>
      <div class="finish-btn" @click="handleSubmit" v-if="stepNum === 3">
        <p>Hoàn Thành</p>
      </div>
    </div>
  </div>
</template>
  
  <script>
import MultiStepForm from "./components/MultiStepForm.vue";
import IconPlus from "@/assets/icon/IconPlus.vue";
import { mapGetters } from "vuex";
import {
  formFirst,
  formSecondDefault,
  formSecond,
} from "./components/formData.js";
import { updateDate } from "@/utils/index.js";
import { v4 } from "uuid";
export default {
  components: {
    MultiStepForm,
    IconPlus,
  },
  data() {
    return {
      stepNum: 1,
    };
  },
  computed: {
    ...mapGetters("form", ["getFormData"]),
    ...mapGetters("list", ["listChoseOptions"]),
    ...mapGetters("file", ["getFiles"]),

    stepData() {
      return this.getFormData.filter((item) => item.step === this.stepNum)[0];
    },
    validate() {
      let isCheck = true;

      let checkValueText = this.stepData.data.filter(
        (item) => item.inputType === "inputText"
      )[0].value;

      if (!!checkValueText === false) {
        this.stepData.data.filter(
          (item) => item.inputType === "inputText"
        )[0].errorMsg = "this field is required";
      }
      let checkMsgText = this.stepData.data.filter(
        (item) => item.inputType === "inputText"
      )[0].errorMsg;

      if (!!checkMsgText === true) {
        isCheck = false;
      }

      let checkValueDob = this.stepData.data.filter(
        (item) => item.inputType === "inputDob"
      )[0].value;
      if (!!checkValueDob === false) {
        this.stepData.data.filter(
          (item) => item.inputType === "inputDob"
        )[0].errorMsg = "this field is required";
      }
      let checkMsgDob = this.stepData.data.filter(
        (item) => item.inputType === "inputDob"
      )[0].errorMsg;

      if (!!checkMsgDob === true) {
        isCheck = false;
      }

      let checkMsgDesc = this.stepData.data.filter(
        (item) => item.inputType === "inputDescription"
      )[0].errorMsg;
      if (!!checkMsgDesc === true) {
        isCheck = false;
      }
      return isCheck;
    },
  },
  methods: {
    handleNextStep() {
      if (this.validate) {
        if (this.stepNum < 3) {
          this.stepNum++;
        } else {
          this.stepNum = 1;
        }
      }
      console.log(formFirst);
    },
    handlePrevStep() {
      if (this.stepNum > 1) {
        this.stepNum--;
      }
    },
    handleAddItem() {
      formSecond.push({
        id: v4(),
        formSecondDefault,
      });
    },
    handleSubmit() {
      this.stepNum = 1;
    },
    handleDelete(id) {
      let inx = formSecond.indexOf(
        formSecond.filter((item) => item.id === id)[0]
      );
      formSecond.splice(inx, 1);
    },
    onChange(e, stepData) {
      if (e.length > 100) {
        stepData.data.filter(
          (item) => item.inputType === "inputText"
        )[0].errorMsg = "maximum 100 characters allowed";
      } else {
        stepData.data.filter(
          (item) => item.inputType === "inputText"
        )[0].errorMsg = "";
      }

      stepData.data.filter((item) => item.inputType === "inputText")[0].value =
        e;
    },
    onChangeDate(e, stepData) {
      let today = new Date();

      if (e > updateDate(today)) {
        stepData.data.filter(
          (item) => item.inputType === "inputDob"
        )[0].errorMsg = "the date should be after today";
      } else {
        stepData.data.filter(
          (item) => item.inputType === "inputDob"
        )[0].errorMsg = "";
      }

      stepData.data.filter((item) => item.inputType === "inputDob")[0].value =
        e;
    },
    onChangeDesc(e, stepData) {
      console.log(e, stepData);
      if (e.length > 1000) {
        stepData.data.filter(
          (item) => item.inputType === "inputDescription"
        )[0].errorMsg = "maximum 1000 characters allowed";
      } else {
        stepData.data.filter(
          (item) => item.inputType === "inputDescription"
        )[0].errorMsg = "";
      }

      stepData.data.filter(
        (item) => item.inputType === "inputDescription"
      )[0].value = e;
    },
    onChooseCity(e) {
      formFirst.filter((item) => item.inputType === "inputCity")[0].value =
        e.target.value;
    },
    onChangeJob() {
      formFirst.filter(
        (item) => item.inputType === "inputJobPosition"
      )[0].value = this.listChoseOptions;
    },
    onAddItem() {
      formFirst.filter((item) => item.inputType === "inputImage")[0].value =
        this.getFiles;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .footer {
    margin-left: 20px;
    .finish-btn {
      cursor: pointer;
      width: 142px;
      height: 40px;
      background: #dcdcdc;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
      }
    }
    .footer-nav {
      display: flex;
      .footer-next-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 102px;
        height: 40px;
        background: #627d98;
        border-radius: 3px;
        margin-right: 26px;
        p {
          font-weight: 700;
          font-size: 16px;
          line-height: 24px;
          color: #ffffff;
        }
      }

      .footer-prev-item {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 102px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        p {
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          color: #666666;
        }
      }
    }
    .add-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 151px;
      height: 40px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      border-radius: 3px;
      margin-bottom: 24px;
      .add-icon {
        padding: 8px;
      }
      p {
        color: #48647f;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
      }
    }
    .footer-item {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 102px;
      height: 40px;
      background: #dcdcdc;
      border-radius: 3px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: #fff;
      cursor: pointer;
    }
  }
  .header {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    margin-bottom: 18px;
    margin-left: 20px;
  }
  .nav-bar {
    display: flex;
    margin-left: 20px;
    position: relative;
    &::before {
      content: "";
      width: 503px;
      height: 3px;
      background-color: #dbdbdb;
      position: absolute;
      top: 18px;
      left: 73px;
      z-index: -1;
    }
    .nav-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-right: 150px;
      cursor: pointer;
      .active {
        width: 40px;
        height: 40px;
        border-radius: 90px;
        background-color: #617d98;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        color: #fff;
      }
      .item-number {
        width: 40px;
        height: 40px;
        border-radius: 90px;
        background-color: #dbdbdb;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        p {
          font-weight: 700;
          font-size: 14px;
          line-height: 20px;
          color: #fff;
        }
      }
      .item-info {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
        color: #333;
      }
    }
  }
}
</style>