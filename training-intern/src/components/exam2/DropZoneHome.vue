<template>
  <DropZoneItem
    @handleSubmit="handleSubmit"
    :files="getFiles"
    :MAX_SIZE="MAX_SIZE"
    :QUANTITY_FILE_UPLOAD="QUANTITY_FILE_UPLOAD"
    :LIST_EXTENTIONS="LIST_EXTENTIONS"
  />
</template>

<script>
import DropZoneItem from "./components/DropZoneItem.vue";
import { storage } from "@/main.js";
import { ref, uploadBytes } from "firebase/storage";
import { mapGetters, mapActions } from "vuex";
import { MAX_SIZE, LIST_EXTENTIONS } from "@/const/index.js";

export default {
  data() {
    return {
      MAX_SIZE,
      QUANTITY_FILE_UPLOAD: 4,
      LIST_EXTENTIONS,
    };
  },
  components: {
    DropZoneItem,
  },
  methods: {
    ...mapActions("file", ["clearFile", "clearFileRaw"]),
    async handleSubmit() {
      try {
        let newArr = [...this.getFileRaws];
        for (let i = 0; i < newArr.length; i++) {
          let fileRaws = newArr[i];
          const fileRef = ref(storage, `files/${fileRaws.name}`);
          await uploadBytes(fileRef, fileRaws);
          this.clearFile(fileRaws.name);
          this.clearFileRaw(fileRaws.name);
        }
      } catch (error) {
        throw Error(error);
      }
    },
  },
  computed: {
    ...mapGetters("file", ["getFiles", "getFileRaws"]),
  },
};
</script>

<style>
</style>