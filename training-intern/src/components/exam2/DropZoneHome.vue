<template>
  <DropZoneItem @handleSubmit="handleSubmit" :files="getFiles" />
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
  methods: {
    ...mapActions("file", ["formatFile"]),
    async handleSubmit(fileRaws) {
      try {
        for (let i = 0; i < fileRaws.length; i++) {
          const fileRef = ref(storage, `files/${fileRaws[i].name}`);
          await uploadBytes(fileRef, fileRaws[i]);
        }
        this.formatFile();
      } catch (error) {
        throw Error(error);
      }
    },
  },
  computed: {
    ...mapGetters("file", ["getFiles"]),
  },
};
</script>

<style>
</style>