<template>
  <div class="container">
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
        <input type="text" name="name" />
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
        <input
          type="text"
          name="name"
          placeholder="Chọn các vị trí mà bạn muốn"
        />
      </div>
      <div class="input-item">
        <div class="input-name">Mô tả về bản thân</div>
        <input type="text" name="name" />
        <div class="input-limit">0/1000</div>
      </div>
      <div class="input-item">
        <div class="input-name">Ảnh cá nhân</div>
        <div>hãy khéo thả ảnh vào đây</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  .input-list {
    width: 528px;
    .input-item {
      margin-bottom: 10px;
      input {
        width: 100%;
        background: #ffffff;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        height: 40px;
        padding: 8px 10px;
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