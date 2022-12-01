<template>
  <div class="container">
    <h3 class="header">Đơn ứng tuyển</h3>
    <div class="nav-bar">
      <div class="nav-item">
        <div class="item-number">
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
</style>