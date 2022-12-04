<template>
  <div class="file-container" v-if="files.length > 0">
    <div class="list-file">
      <div class="file-container" v-for="file in files" :key="file.id">
        <div class="file-item">
          <div class="file-icon">
            <IconExcel v-if="file.typeId === EXCEL_TYPE" />
            <IconPdf v-if="file.typeId === PDF_TYPE" />
            <IconWord v-if="file.typeId === WORD_TYPE" />
            <IconBlank v-if="file.typeId === BLANK_TYPE" />
          </div>
          <div class="file-info">
            <p>{{ file.name }}</p>
            <p class="file-size">{{ file.size }}</p>
          </div>
          <div class="file-close" @click="handleDelete(file.id, file.name)">
            <IconCancelCircel />
          </div>
        </div>
      </div>
    </div>
    <button v-if="files.length > 0" @click="handleSubmit" class="upload-btn">
      Upload
    </button>
  </div>
</template>

<script>
import {
  EXCEL_TYPE,
  PDF_TYPE,
  WORD_TYPE,
  BLANK_TYPE,
} from "@/const/DropzoneConst.js";
import IconBlank from "@/assets/icon/IconBlank.vue";
import IconExcel from "@/assets/icon/IconExcel.vue";
import IconPdf from "@/assets/icon/IconPdf.vue";
import IconWord from "@/assets/icon/IconWord.vue";
import IconCancelCircel from "@/assets/icon/IconCancelCircle.vue";
export default {
  components: {
    IconExcel,
    IconPdf,
    IconWord,
    IconBlank,
    IconCancelCircel,
  },
  data() {
    return {
      EXCEL_TYPE,
      PDF_TYPE,
      WORD_TYPE,
      BLANK_TYPE,
    };
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleDelete(id, name) {
      this.$emit("handleDelete", { id, name });
    },
    handleSubmit() {
      this.$emit("handleSubmit");
    },
  },
};
</script>

<style lang="scss" scoped>
.file-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  .list-file {
    margin-left: 20px;
    max-width: 780px;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    overflow-y: hidden;
    &::-webkit-scrollbar {
      height: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 6px;
      background-color: #a8a8a8;
    }
    .file-container {
      display: flex;
      justify-content: space-between;

      .file-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 244px;
        height: 48px;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        margin-right: 17px;
        .file-info {
          flex: 1;
          p {
            font-style: normal;
            font-weight: 700;
            font-size: 12px;
            line-height: 16px;
            width: 150px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
          .file-size {
            font-weight: 400;
            font-size: 10px;
            line-height: 14px;
            color: #666666;
          }
        }
        .file-icon {
          width: 32px;
          height: 32px;
          margin: 8px;
        }
        .file-close {
          width: 14px;
          height: 14px;
          margin: 0 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
        }
      }
    }
  }
  .upload-btn {
    width: 58px;
    height: 32px;
    border-radius: 4px;
    background-color: rgb(48, 211, 48);
    margin-bottom: 10px;
    color: #fff;
    border: none;
    cursor: pointer;
    font-weight: 600;
    &:hover {
      border: 2px solid rgb(48, 211, 48);
      color: rgb(48, 211, 48);
      background-color: #fff;
    }
  }
}
</style>