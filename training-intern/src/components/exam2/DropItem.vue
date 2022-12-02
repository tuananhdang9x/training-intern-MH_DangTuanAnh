<template>
  <div class="container" @drop.prevent="handleDrop">
    <div
      class="drop-zone"
      @dragenter.prevent="toggleAction"
      @dragover.prevent
      @dragleave.prevent="toggleAction"
      @drop.prevent="toggleAction"
      :class="{ active: isActive }"
    >
      <div class="drop-icon">
        <IconUpload />
      </div>
      <div class="drop-description">
        <h3>Drag and drop files</h3>
        <label for="drop-select" class="text-lable">Browse files</label>
        <input id="drop-select" type="file" @change="handleUpload" />
      </div>
    </div>
    <div class="file-zone">
      <SelectedFile
        :files="files"
        @handleDelete="handleDelete"
        @handleSubmit="handleSubmit"
      />
      <div
        v-if="status !== null"
        :class="[status ? 'success-message' : 'fail-message']"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import IconUpload from "@/assets/icon/IconUpload.vue";
import SelectedFile from "./SelectedFile.vue";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
    message: {
      type: String,
      default: () => "",
    },
    status: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    IconUpload,
    SelectedFile,
  },
  methods: {
    handleUpload(e) {
      this.$emit("handleUpload", e);
    },
    handleDrop(e) {
      this.$emit("handleDrop", e);
    },
    toggleAction() {
      this.isActive = !this.isActive;
    },
    handleDelete(payload) {
      this.$emit("handleDelete", payload);
    },
    handleSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-family: "Noto Sans JP", sans-serif;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .active {
    background-color: red;
    opacity: 0.5;
  }
  .drop-zone {
    width: 842px;
    height: 232px;
    background-color: #f8f8f8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    margin: 20px 0 33px 20px;
    .drop-icon {
      width: 32px;
      height: 32px;
      margin-bottom: 13px;
    }
    .drop-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      width: 364px;
      height: 88px;
      input {
        display: none;
      }
      .text-lable {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .file-zone {
    position: relative;

    .success-message,
    .fail-message {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-left: 20px;
    }
    .success-message {
      color: rgb(48, 211, 48);
    }
    .fail-message {
      color: #ed5d5d;
    }
  }
}
</style>