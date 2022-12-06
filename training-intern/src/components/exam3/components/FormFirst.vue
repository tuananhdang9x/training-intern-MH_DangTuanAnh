<template>
  <div class="container">
    <div class="input-list">
      <div class="input-item">
        <div class="input-title">
          <InputRequire />
          <div class="input-name">Họ và tên</div>
        </div>
        <input type="text" name="name" />
      </div>
      <div class="input-item">
        <div class="input-title">
          <InputRequire />
          <div class="input-name">Ngày sinh</div>
        </div>
        <div class="input-date">
          <input type="date" placeholder="0000/00/00" />
        </div>
      </div>
      <div class="input-item">
        <div class="input-name">Thành phố</div>
        <select id="place-list">
          <option v-for="place in listPlaces" :key="place.code" value="1">
            {{ place.name }}
          </option>
        </select>
      </div>
      <div class="input-item">
        <div class="input-name">Vị trí làm việc</div>
        <div class="input-desc">
          Có thể chọn được nhiều vị trí mà bạn muốn làm việc
        </div>
        <AutoComplete />
      </div>
      <LargeInput />
      <DropZone />
      <!-- <div class="input-item">
        <div class="input-name">Ảnh cá nhân</div>
        <div class="drop-zone">
          <input type="text" placeholder="hãy khéo thả ảnh vào đây" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import DropZone from "@/share/DropZone.vue";
import AutoComplete from "@/share/AutoComplete.vue";
import { mapActions, mapGetters } from "vuex";
import InputRequire from "@/share/InputRequire.vue";
import LargeInput from "@/share/LargeInput.vue";
export default {
  components: {
    DropZone,
    AutoComplete,
    InputRequire,
    LargeInput,
  },
  created() {
    this.getPlaces();
  },
  computed: {
    ...mapGetters("place", ["listPlaces"]),
  },
  methods: {
    ...mapActions("place", ["getPlaces"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px 24px;
  width: 926px;
  height: 849px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 20px 0 24px 20px;
  .input-list {
    width: 528px;
    .input-item {
      margin-bottom: 10px;
      .input-city {
        display: flex;
        align-items: center;
        width: 100%;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        input {
          border: none;
        }
        .input-city-icon {
          display: flex;
          align-items: center;
          margin-right: 13px;
        }
      }
      .input-date {
        // width: 118px;
        // height: 40px;
        // display: flex;
        input {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          width: 140px;
          color: #000000;
          border: none;
          &::-webkit-calendar-picker-indicator {
            width: 24px;
            height: 24px;
            color: #999999;
            cursor: pointer;
          }
          &:focus {
            outline: none;
          }
        }
      }

      .drop-zone {
        input {
          background: #f8f8f8;
          border: 1px solid #dcdcdc;
          border-radius: 7px;
          width: 844px;
          height: 192px;
          text-align: center;
        }
      }

      .search-item {
        display: flex;
        align-items: center;
        width: 100%;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        height: 40px;
        padding: 8px 10px;

        .search-icon {
          width: 14px;
          height: 14px;
          margin-right: 8px;
          display: flex;
          align-items: center;
        }
        .search-input {
          input {
            border: none;
            width: 476px;
            height: 20px;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
            color: #999999;
          }
        }
      }
      .input-name {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #333;
      }
      input {
        width: 100%;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        height: 40px;
        padding: 8px 10px;
      }
      .input-desc {
        font-weight: 400;
        font-size: 12px;
        line-height: 20px;
        color: #666666;
      }
      .input-title {
        display: flex;
        margin-bottom: 6px;
        .input-name {
          font-weight: 400;
          font-size: 14px;
          line-height: 20px;
          color: #333;
        }
      }
    }
  }
}
</style>