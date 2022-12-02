<template>
  <DropItem
    @handleUpload="handleUpload"
    @handleDrop="handleDrop"
    @handleDelete="handleDelete"
    @handleSubmit="handleSubmit"
    :files="getFiles"
    :message="message"
    :status="status"
  />
</template>

<script>
import {
  EXCEL_TYPE,
  PDF_TYPE,
  WORD_TYPE,
  BLANK_TYPE,
  MAX_SIZE,
} from "@/const/DropzoneConst.js";
import DropItem from "./DropItem.vue";
import { storage } from "@/main.js";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { mapGetters, mapActions } from "vuex";
import { formatBytes } from "@/utils/index.js";

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
  components: {
    DropItem,
  },
  data: function () {
    return {
      message: "",
      status: false,
      checkName: [],
      fileRaws: [],
      EXCEL_TYPE,
      PDF_TYPE,
      WORD_TYPE,
      BLANK_TYPE,
      MAX_SIZE,
    };
  },
  methods: {
    ...mapActions("file", ["addFile", "deleteFile", "formatFile"]),
    validateFile(file) {
      if (!this.checkName.includes(file.name)) {
        if (file.size <= MAX_SIZE) {
          this.addFile({
            id: uuidv4(),
            name: file.name,
            size: formatBytes(file.size),
            typeId: handleTypeId(file.name),
          });
          this.checkName.push(file.name);
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
    },
    handleUpload(e) {
      let file = e.target.files[0];
      this.validateFile(file);
    },
    handleDelete(payload) {
      this.deleteFile(payload.id);
      this.checkName = this.checkName.filter((name) => name !== payload.name);
      this.fileRaws = this.fileRaws.filter(
        (item) => item.name !== payload.name
      );
      this.message = "";
      this.status = null;
    },
    handleDrop(e) {
      let file = e.dataTransfer.files[0];
      this.validateFile(file);
    },
    handleSubmit() {
      this.fileRaws.forEach((item) => {
        const fileRef = ref(storage, `files/${item.name}`);
        uploadBytes(fileRef, item).then(() => {
          this.message = "Upload successfully";
          this.status = true;
        });
      });
      this.formatFile();
      this.checkName = [];
    },
  },
  computed: {
    ...mapGetters("file", ["getFiles"]),
  },
};
</script>

<style>
</style>