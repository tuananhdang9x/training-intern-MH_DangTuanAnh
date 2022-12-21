<template>
  <div class="footer">
    <div class="add-item" @click="handleAddItem" v-if="step === 2">
      <div class="add-icon">
        <IconPlus />
      </div>
      <p>Thêm công ty</p>
    </div>
    <div class="footer-nav">
      <div
        class="footer-next-item"
        @click="handleNextStep"
        v-if="step !== 3"
        :class="{ active: checkActive }"
      >
        <p>Tiếp</p>
      </div>
      <div class="footer-prev-item" @click="handlePrevStep" v-if="step === 2">
        <p>Quay lại</p>
      </div>
    </div>
    <div
      class="finish-btn"
      @click="handleSubmit"
      v-if="step === 3"
      :class="{ active: checkActive }"
    >
      <p>Hoàn Thành</p>
    </div>
  </div>
</template>

<script>
import { validateNextStep, validateLastForm } from "@/utils/validateMultiForm";
import IconPlus from "@/assets/icon/IconPlus.vue";
export default {
  components: {
    IconPlus,
  },
  props: {
    step: {
      type: Number,
      default: () => 1,
    },
    stepData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleAddItem() {
      this.$emit("handleAddItem");
    },
    handleNextStep() {
      this.$emit("handleNextStep");
    },
    handlePrevStep() {
      this.$emit("handlePrevStep");
    },
    handleSubmit() {
      this.$emit("handleSubmit");
    },
  },
  computed: {
    checkActive() {
      if (this.stepData === 1 || this.stepData === 2) {
        return validateNextStep(this.stepData, this.step);
      } else {
        return validateLastForm(this.stepData);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  margin-left: 20px;
  .active {
    background-color: #627d98 !important;
  }
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
    .active {
      background-color: #627d98 !important;
    }
    .footer-next-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 102px;
      height: 40px;
      background: #dcdcdc;
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
</style>