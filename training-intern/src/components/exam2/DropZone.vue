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
import DropItem from "./DropItem.vue";
import { storage } from "@/main.js";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { mapGetters, mapActions } from "vuex";
import { formatBytes } from "@/utils/index.js";

function handleTypeId(fileName) {
  if (fileName.endsWith("xlsx")) {
    return 1;
  }
  if (fileName.endsWith("pdf")) {
    return 2;
  }
  if (fileName.endsWith("docx")) {
    return 3;
  }
  return 0;
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
    };
  },
  methods: {
    ...mapActions("file", ["addFile", "deleteFile", "formatFile"]),
    handleUpload(e) {
      let file = e.target.files[0];
      if (!this.checkName.includes(file.name)) {
        if (file.size <= 10000000) {
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
      if (!this.checkName.includes(file.name)) {
        if (file.size <= 10000000) {
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