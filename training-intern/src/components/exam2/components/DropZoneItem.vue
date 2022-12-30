<template>
  <div class="container-dropzone" @drop.prevent="handleUpload($event, 'drag')">
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
        <h3>{{ placeholder }}</h3>
        <label for="drop-select" class="text-lable">{{ triggerText }}</label>
        <input
          id="drop-select"
          type="file"
          @change="handleUpload($event, 'input')"
          multiple
        />
      </div>
    </div>
    <div class="file-zone">
      <SelectedFile
        :files="files"
        @handleDelete="handleDelete"
        @handleSubmit="handleSubmit"
      />
      <div
        v-if="msg.error || msg.success"
        :class="{ success: msg.success, error: msg.error }"
      >
        {{ msg.error }}{{ msg.success }}
      </div>
    </div>
  </div>
</template>

<script>
import IconUpload from "@/assets/icon/IconUpload.vue";
import SelectedFile from "./SelectedFile.vue";
import {
  validateDuplicate,
  validateFileSize,
  validateExtension,
  validateLimitExtention,
  formatBytes,
} from "@/utils/validate.js";
import { v4 as uuidv4 } from "uuid";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      msg: {
        error: "",
        success: "",
      },
      isActive: false,
      listFileNames: [],
    };
  },
  props: {
    placeholder: {
      type: String,
      default: () => "Drag and drop files",
    },
    triggerText: {
      type: String,
      default: () => "Browse files",
    },
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
    maxSize: {
      type: Number,
      default: () => 0,
    },
    quantityFileUpload: {
      type: Number,
      require: false,
    },
    listExtentions: {
      type: Array,
      require: false,
    },
  },
  components: {
    IconUpload,
    SelectedFile,
  },
  methods: {
    ...mapActions("file", [
      "addFile",
      "deleteFile",
      "addFileRaw",
      "deleteFileRaw",
    ]),
    validateFile(files) {
      if (!!this.quantityFileUpload && files.length > this.quantityFileUpload) {
        this.msg.error =
          "Upload less than" + " " + this.quantityFileUpload + " " + "file";
      } else {
        Array.from(files).forEach((file) => {
          if (
            !!this.listExtentions &&
            validateLimitExtention(file.name, this.listExtentions)
          ) {
            this.msg.error = "Invalid extention";
          } else {
            if (validateDuplicate(file, this.listFileNames)) {
              if (validateFileSize(file, this.maxSize)) {
                this.listFileNames.push(file.name);
                if (this.listFileNames.length <= this.quantityFileUpload) {
                  this.addFile({
                    id: uuidv4(),
                    name: file.name,
                    size: formatBytes(file.size),
                    extType: validateExtension(file.name),
                  });
                  this.addFileRaw(file);
                  this.msg.error = "";
                } else {
                  this.msg.error =
                    "Upload less than" +
                    " " +
                    this.quantityFileUpload +
                    " " +
                    "file";
                }
              } else {
                this.msg.error = "The maximum file size is 10MB";
              }
            } else {
              this.msg.error = "The file already exists";
            }
          }
        });
      }
    },
    handleUpload(e, type) {
      let files;
      switch (type) {
        case "input":
          files = e.target.files;
          this.validateFile(files);
          break;
        case "drag":
          files = e.dataTransfer.files;
          this.validateFile(files);
          break;
        default:
          console.log("Invalid action");
          break;
      }
      this.msg.success = "";
      this.$emit("onAddItem");
    },

    toggleAction() {
      this.isActive = !this.isActive;
    },
    handleDelete(payload) {
      this.deleteFile(payload.id);
      this.deleteFileRaw(payload.id);
      this.listFileNames = this.listFileNames.filter(
        (name) => name !== payload.name
      );
      this.msg.error = "";
      this.msg.success = "";
    },
    handleSubmit() {
      this.$emit("handleSubmit");
      this.msg.error = "";
      this.msg.success = "Upload successfully";
      this.listFileNames = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.container-dropzone {
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
    .success,
    .error {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      margin-left: 20px;
    }
    .success {
      color: rgb(48, 211, 48);
    }
    .error {
      color: #ed5d5d;
    }
  }
}
</style>