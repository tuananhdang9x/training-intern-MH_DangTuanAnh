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
        <input id="drop-select" type="file" @change="handleUpload" />
      </div>
    </div>
    <div class="file-zone">
      <div class="file-container" v-if="files.length > 0">
        <div class="list-file">
          <div class="file-container" v-for="file in files" :key="file.id">
            <div class="file-item">
              <div class="file-icon">
                <IconExcel v-if="file.name.includes('xlsx')" />
                <IconPdf v-else-if="file.name.includes('pdf')" />
                <IconWord v-else-if="file.name.includes('docx')" />
                <IconBlank v-else />
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
        <div class="file-direction">
          <IconArrow />
        </div>
      </div>
      <div :class="[status ? 'success-message' : 'fail-message']">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import IconBlank from "@/assets/icon/IconBlank.vue";
import IconExcel from "@/assets/icon/IconExcel.vue";
import IconPdf from "@/assets/icon/IconPdf.vue";
import IconWord from "@/assets/icon/IconWord.vue";
import IconCancelCircel from "@/assets/icon/IconCancelCircle.vue";
import IconArrow from "@/assets/icon/IconArrow.vue";
import IconUpload from "@/assets/icon/IconUpload.vue";

export default {
  data() {
    return {
      isActive: false,
    };
  },
  props: {
    files: {
      type: Array,
      default: () => [],
    },
    message: {
      type: String,
      default: () => "",
    },
    status: {
      type: Boolean,
      default: () => false,
    },
  },
  components: {
    IconExcel,
    IconPdf,
    IconWord,
    IconCancelCircel,
    IconArrow,
    IconUpload,
    IconBlank,
  },
  methods: {
    handleUpload(e) {
      this.$emit("handleUpload", e);
    },
    handleDrop(e) {
      this.$emit("handleDrop", e);
    },
    toggleAction() {
      this.isActive = !this.isActive;
    },
    handleDelete(id, name) {
      this.$emit("handleDelete", { id, name });
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
            min-width: 244px;
            min-height: 48px;
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
      .file-direction {
        width: 32px;
        height: 32px;
        border-radius: 30px;
        background-color: #627d98;
        opacity: 0.4;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
      }
    }
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