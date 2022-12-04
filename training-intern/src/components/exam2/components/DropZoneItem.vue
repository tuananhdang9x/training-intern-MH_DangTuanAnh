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
        <input id="drop-select" type="file" @change="handleUpload" multiple />
      </div>
    </div>
    <div class="file-zone">
      <SelectedFile
        :files="files"
        @handleDelete="handleDelete"
        @handleSubmit="handleSubmit(fileRaws)"
      />
      <div
        v-if="uploadStatus !== null"
        :class="[uploadStatus ? 'success-message' : 'fail-message']"
      >
        {{ uploadMessage }}
      </div>
      <div v-else :class="[status ? 'success-message' : 'fail-message']">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import IconUpload from "@/assets/icon/IconUpload.vue";
import SelectedFile from "./SelectedFile.vue";
import { formatBytes } from "@/utils/index.js";
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";
import {
  EXCEL_TYPE,
  PDF_TYPE,
  WORD_TYPE,
  BLANK_TYPE,
  MAX_SIZE,
} from "@/const/DropzoneConst.js";

function handleTypeId(fileName) {
  if (fileName.endsWith("xlsx")) {
    return EXCEL_TYPE;
  }
  if (fileName.endsWith("pdf")) {
    return PDF_TYPE;
  }
  if (fileName.endsWith("docx")) {
    return WORD_TYPE;
  }
  return BLANK_TYPE;
}
export default {
  data() {
    return {
      message: "",
      status: false,
      isActive: false,
      listFileNames: [],
      fileRaws: [],
    };
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
    uploadMessage: {
      type: String,
      default: () => "",
    },
    uploadStatus: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    IconUpload,
    SelectedFile,
  },
  methods: {
    ...mapActions("file", ["addFile", "deleteFile"]),
    validateFile(files) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        if (!this.listFileNames.includes(file.name)) {
          if (file.size <= MAX_SIZE) {
            this.addFile({
              id: uuidv4(),
              name: file.name,
              size: formatBytes(file.size),
              typeId: handleTypeId(file.name),
            });
            this.listFileNames.push(file.name);
            this.fileRaws.push(file);
            this.message = "";
            this.status = null;
          } else {
            this.message = "The maximum file size is 10 MB";
            this.status = false;
          }
        } else {
          this.message = "The file already exists";
          this.status = false;
        }
      }
    },
    handleUpload(e) {
      let files = e.target.files;
      this.validateFile(files);
      this.$emit("uploadAction");
    },
    handleDrop(e) {
      let files = e.dataTransfer.files;
      this.validateFile(files);
      this.$emit("uploadAction");
    },
    toggleAction() {
      this.isActive = !this.isActive;
    },
    handleDelete(payload) {
      this.deleteFile(payload.id);
      this.listFileNames = this.listFileNames.filter(
        (name) => name !== payload.name
      );
      this.fileRaws = this.fileRaws.filter(
        (item) => item.name !== payload.name
      );
      this.message = "";
      this.status = null;
    },
    handleSubmit(fileRaws) {
      this.$emit("handleSubmit", fileRaws);
      this.listFileNames = [];
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