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
    <FormFirst />
    <FormSecond />
    <FormThird />
    <div class="footer-nav">
      <div class="footer-item">Tiếp</div>
    </div>
  </div>
</template>
  
  <script>
import FormFirst from "./components/FormFirst.vue";
import FormSecond from "./components/FormSecond.vue";
import FormThird from "./components/FormThird.vue";
export default {
  components: {
    FormFirst,
    FormSecond,
    FormThird,
  },
};
</script>
  
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  .footer-nav {
    margin-left: 20px;
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