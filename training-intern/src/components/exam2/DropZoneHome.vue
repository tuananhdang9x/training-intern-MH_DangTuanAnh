<template>
  <DropZoneItem
    @handleSubmit="handleSubmit"
    @uploadAction="uploadAction"
    :files="getFiles"
    :uploadMessage="uploadMessage"
    :uploadStatus="uploadStatus"
  />
</template>

<script>
import DropZoneItem from "./components/DropZoneItem.vue";
import { storage } from "@/main.js";
import { ref, uploadBytes } from "firebase/storage";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    DropZoneItem,
  },
  data: function () {
    return {
      uploadMessage: "",
      uploadStatus: false,
    };
  },
  methods: {
    ...mapActions("file", ["formatFile"]),
    handleSubmit(fileRaws) {
      fileRaws.forEach((item) => {
        const fileRef = ref(storage, `files/${item.name}`);
        uploadBytes(fileRef, item).then(() => {
          this.uploadMessage = "Upload successfully";
          this.uploadStatus = true;
        });
      });
      this.formatFile();
    },
    uploadAction() {
      this.uploadMessage = "";
      this.uploadStatus = null;
    },
  },
  computed: {
    ...mapGetters("file", ["getFiles"]),
  },
};
</script>

<style>
</style>