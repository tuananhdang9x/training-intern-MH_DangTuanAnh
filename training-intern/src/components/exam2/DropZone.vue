<template>
  <div class="container">
    <div class="drop-container">
      <div class="drop-icon">
        <IconUpload />
      </div>
      <div class="drop-description">
        <h3>Drag and drop files</h3>
        <a href="/exam2">Browse files</a>
      </div>
    </div>
  </div>
</template>

<script>
import IconUpload from "../../assets/icon/IconUpload.vue";
export default {
  components: {
    IconUpload,
  },
};
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  .drop-container {
    width: 842px;
    height: 232px;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    margin: 20px;
    .drop-icon {
      width: 32px;
      height: 32px;
      margin-bottom: 14px;
    }
    .drop-description {
      font-size: 18px;
    }
  }
}
</style>