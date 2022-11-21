<template>
  <div class="nav-bar">
    <input
      type="text"
      placeholder="Nhập từ khóa tìm kiếm nhiệm vụ"
      v-model="title"
      @keyup="showData"
    />
    <button class="search-btn">Tìm kiếm</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  computed: {},
  methods: {
    showData() {
      this.$emit("showTitle", this.title);
    },
  },
};
</script>

<style scoped>
.nav-bar input {
  width: 250px;
  border: 1px solid #f0f0f0;
  padding: 4px;
  font-size: 12px;
  border-radius: 2px;
  margin-bottom: 16px;
}
.search-btn {
  appearance: none;
  border: none;
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  padding: 4px 16px;
  border-radius: 4px;
  background-color: #008037;
  margin-left: 8px;
  border: 1px solid #008037;
}

.search-btn:hover {
  cursor: pointer;
  color: #008037;
  background-color: #fff;
}
</style>