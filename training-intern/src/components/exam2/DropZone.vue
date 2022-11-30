<template>
  <div class="container">
    <div class="drop-container">
      <div class="drop-icon">
        <IconUpload />
      </div>
      <div class="drop-description">
        <h3>Drag and drop files</h3>
        <input type="file" @change="uploadFile" value="Browse files" />
      </div>
    </div>

    <vue-dropzone
      ref="myVueDropzone"
      id="dropzone"
      :options="dropzoneOptions"
    ></vue-dropzone>
  </div>
</template>

<script>
import IconUpload from "../../assets/icon/IconUpload.vue";
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  components: {
    IconUpload,
    vueDropzone: vue2Dropzone,
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: "https://firebasestorage.googleapis.com/v0/b/MYFIREBASEPROJECT.appspot.com/o?uploadType=media&name=MYFILENAME",
        headers: {
          "Cache-Control": null,
          "X-Requested-With": null,
        },
      },
    };
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