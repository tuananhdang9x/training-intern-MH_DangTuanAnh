<template>
  <div>
    <div class="header">{{ header }}</div>
    <div class="nav-bar">
      <div
        class="nav-item"
        v-for="item in data"
        :key="item.id"
        @click="onChangeStep(item.step)"
      >
        <div
          class="item-number"
          :class="{
            active: item.step === step,
            activePrevItem: item.step <= step,
          }"
        >
          <p>{{ item.step }}</p>
        </div>
        <p class="item-info">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      default: () => "Đơn ứng tuyển",
    },
    data: {
      type: Array,
      default: () => [],
    },
    step: {
      type: Number,
      default: () => 1,
    },
  },
  methods: {
    onChangeStep(choseStep) {
      this.$emit("onChangeStep", choseStep);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 18px;
  margin-left: 20px;
}
.nav-bar {
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  position: relative;
  justify-content: flex-start;
  max-width: 700px !important;
  min-width: 600px;
  transform: translateX(-2%);
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    &:not(:last-child):after {
      content: "";
      height: 3px;
      background-color: #dbdbdb;
      position: relative;
      width: 100%;
      top: -50px;
      left: 50%;
      z-index: -1;
    }
    cursor: pointer;
    .active {
      width: 32px;
      height: 32px;
      border-radius: 90px;
      background-color: #617d98 !important;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
      transform: scale(1.25);
    }
    .activePrevItem {
      width: 32px;
      height: 32px;
      border-radius: 90px;
      background-color: #617d98 !important;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      color: #fff;
    }
    .activeFirstItem {
      width: 32px;
      height: 32px;
      border-radius: 90px;
      background-color: #617d98 !important;
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
      width: 32px;
      height: 32px;
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
</style>