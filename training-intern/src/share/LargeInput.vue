<template>
  <div class="input-description">
    <div class="input-name">Mô tả về bản thân</div>
    <div class="input-large">
      <input type="text" name="name" />
    </div>
    <div class="input-limit">0/1000</div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input-description {
  margin-bottom: 10px;
  .input-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #333;
  }
  .input-large {
    margin-bottom: 10px;
    input {
      width: 528px;
      height: 152px;
      background: #ffffff;
      border: 1px solid #dcdcdc;
      border-radius: 4px;
    }
  }
  .input-limit {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #666666;
  }
}
</style>