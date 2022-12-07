<template>
  <div class="container">
    <div class="input-list">
      <div class="input-item">
        <div class="input-title">
          <LargeInput :title="title" :requireItem="true" />
        </div>
      </div>
      <div class="input-item">
        <div class="input-title">
          <InputRequire />
          <div class="input-name">Mức lương mong muốn</div>
        </div>
        <div class="input-salary">
          <input type="text" name="name" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InputRequire from "@/share/InputRequire.vue";
import LargeInput from "@/share/LargeInput.vue";
export default {
  data() {
    return {
      title: "Lý do muốn ứng tuyển vào công ty",
    };
  },
  components: {
    InputRequire,
    LargeInput,
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 20px 0 24px 20px;

  .input-list {
    width: 926px;
    height: 346px;
    background: #ffffff;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 20px 32px 24px;
    .input-item {
      margin-bottom: 10px;
      .input-salary {
        input {
          width: 119px;
          height: 40px;
          border: 1px solid #dbdbdb;
          border-radius: 4px;
        }
      }
      .search-input {
        input {
          width: 118px;
          height: 40px;
          margin-right: 48px;
        }
      }
      .input-company {
        width: 978px;
        height: 60px;
        background: #f8f8f8;
        border-radius: 4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .input-icon {
          width: 32px;
          height: 32px;
          margin-right: 16px;
        }
        .company-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 898px;
          height: 40px;
          background: #ffffff;
          border: 1px solid #dbdbdb;
          border-radius: 4px;
          margin-left: 16px;
          .down-icon {
            width: 16px;
            height: 16px;
            margin-right: 10px;
          }
          input {
            border: none;
            width: 98px;
            height: 24px;
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
            color: #333333;
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
        width: 528px;
        height: 152px;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
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