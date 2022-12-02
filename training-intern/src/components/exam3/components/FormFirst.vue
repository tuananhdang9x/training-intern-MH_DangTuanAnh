<template>
  <div class="container" v-if="true">
    <div class="input-list">
      <div class="input-item">
        <div class="input-title">
          <div class="input-require">
            <p>Must</p>
          </div>
          <div class="input-name">Họ và tên</div>
        </div>
        <input type="text" name="name" />
      </div>
      <div class="input-item">
        <div class="input-title">
          <div class="input-require">
            <p>Must</p>
          </div>
          <div class="input-name">Ngày sinh</div>
        </div>
        <div class="input-date">
          <date-picker
            class="date-picker"
            v-model="date"
            :config="options"
          ></date-picker>
          <div class="date-icon">
            <IconCalender />
          </div>
        </div>
      </div>
      <div class="input-item">
        <div class="input-name">Thành phố</div>
        <input type="text" name="name" />
      </div>
      <div class="input-item">
        <div class="input-name">Vị trí làm việc</div>
        <div class="input-desc">
          Có thể chọn được nhiều vị trí mà bạn muốn làm việc
        </div>
        <div class="search-item">
          <div class="search-icon">
            <IconSearch />
          </div>
          <div class="search-input">
            <input
              type="text"
              name="name"
              placeholder="Chọn các vị trí mà bạn muốn"
            />
          </div>
        </div>
      </div>
      <div class="input-item">
        <div class="input-name">Mô tả về bản thân</div>
        <div class="input-large">
          <input type="text" name="name" />
        </div>
        <div class="input-limit">0/1000</div>
      </div>
      <div class="input-item">
        <div class="input-name">Ảnh cá nhân</div>
        <div class="drop-zone">
          <input type="text" placeholder="hãy khéo thả ảnh vào đây" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IconSearch from "@/assets/icon/IconSearch.vue";
import IconCalender from "@/assets/icon/IconCalender.vue";
import datePicker from "vue-bootstrap-datetimepicker";
export default {
  components: {
    IconSearch,
    datePicker,
    IconCalender,
  },
  data() {
    return {
      date: new Date(),
      options: {
        format: "YYYY/MM/DD",
        useCurrent: false,
      },
    };
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
      .input-date {
        width: 118px;
        height: 40px;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 2px;
        display: flex;
        date-picker {
          background-color: red;
        }
        .date-icon {
          width: 24px;
          height: 24px;
          margin: 8px 8px 8px 4px;
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
      .input-limit {
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #666666;
      }
      .input-large {
        margin-bottom: 10px;
        input {
          width: 528px;
          height: 152px;
          background: #ffffff;
          border: 1px solid #dcdcdc;
          border-radius: 4px;
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
        .input-require {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0px 8px;
          gap: 10px;
          width: 45px;
          height: 20px;
          background: #627d98;
          border-radius: 3px;
          margin-right: 8px;
          p {
            font-weight: 700;
            font-size: 12px;
            line-height: 20px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>