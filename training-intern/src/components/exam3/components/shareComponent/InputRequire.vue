<template>
  <div class="input-require">
    <p>Must</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.input-require {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 8px;
  gap: 10px;
  width: 45px;
  height: 20px;
  background: #627d98;
  border-radius: 3px;
  margin-right: 8px;
  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    color: #fff;
  }
}
</style>