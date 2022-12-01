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

<style>
</style>