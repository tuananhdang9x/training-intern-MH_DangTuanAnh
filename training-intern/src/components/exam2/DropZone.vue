<template>
  <DropItem
    @handleUpload="handleUpload"
    @handleDrop="handleDrop"
    @handleDelete="handleDelete"
    :files="getFiles"
    :message="message"
    :status="status"
  />
</template>

<script>
import DropItem from "./DropItem.vue";
import { storage } from "@/main.js";
import { ref, uploadBytes, deleteObject } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { mapGetters, mapActions } from "vuex";
import { formatBytes } from "@/utils/index.js";

export default {
  components: {
    DropItem,
  },
  data: function () {
    return {
      message: "",
      status: false,
      checkName: [],
    };
  },
  methods: {
    ...mapActions("file", ["addFile", "deleteFile"]),
    handleUpload(e) {
      let file = e.target.files[0];
      const fileRef = ref(storage, `files/${file.name}`);
      uploadBytes(fileRef, file).then(() => {
        if (formatBytes(file.size) <= formatBytes(10000000)) {
          if (!this.checkName.includes(file.name)) {
            this.addFile({
              id: uuidv4(),
              name: file.name,
              size: formatBytes(file.size),
            });
            this.checkName.push(file.name);
            this.message = "Upload successfully";
            this.status = true;
          } else {
            this.message = "The file already exists";
            this.status = false;
          }
        } else {
          this.message = "The maximum file size is 10 MB";
          this.status = false;
        }
      });
    },
    handleDelete(payload) {
      const deleteRef = ref(storage, `files/${payload.name}`);
      deleteObject(deleteRef)
        .then(() => {
          this.deleteFile(payload.id);
          this.checkName = this.checkName.filter(
            (name) => name !== payload.name
          );
          this.message = "";
          this.status = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleDrop(e) {
      let file = e.dataTransfer.files[0];
      const fileRef = ref(storage, `files/${file.name}`);
      uploadBytes(fileRef, file).then(() => {
        if (formatBytes(file.size) <= formatBytes(10000000)) {
          if (!this.checkName.includes(file.name)) {
            this.addFile({
              id: uuidv4(),
              name: file.name,
              size: formatBytes(file.size),
            });
            this.checkName.push(file.name);
            this.message = "Upload successfully";
            this.status = true;
          } else {
            this.message = "The file already exists";
            this.status = false;
          }
        } else {
          this.message = "The maximum file size is 10 MB";
          this.status = false;
        }
      });
    },
  },
  computed: {
    ...mapGetters("file", ["getFiles"]),
  },
};
</script>

<style>
</style>