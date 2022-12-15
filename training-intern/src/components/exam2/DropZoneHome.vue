<template>
  <DropZoneItem
    @handleSubmit="handleSubmit"
    @onAddItem="onAddItem"
    :files="getFiles"
    :maxSize="maxSize"
    :quantityFileUpload="quantityFileUpload"
    :listExtentions="listExtentions"
    :placeholder="placeholder"
    :triggerText="triggerText"
  />
</template>

<script>
import DropZoneItem from "./components/DropZoneItem.vue";
import { storage } from "@/main.js";
import { ref, uploadBytes } from "firebase/storage";
import { mapGetters, mapActions } from "vuex";
import { maxSize, listExtentions } from "@/const/index.js";

export default {
  data() {
    return {
      maxSize,
      quantityFileUpload: 4,
      listExtentions,
    };
  },
  components: {
    DropZoneItem,
  },
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
    triggerText: {
      type: String,
      default: () => "",
    },
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
    onAddItem() {
      this.$emit("onAddItem");
    },
  },
  computed: {
    ...mapGetters("file", ["getFiles", "getFileRaws"]),
  },
};
</script>

<style>
</style>