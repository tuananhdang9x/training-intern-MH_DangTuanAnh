<template>
  <div class="container">
    <div class="input-container">
      <div class="input-item">
        <div class="search-icon">
          <IconSearch />
        </div>
        <div class="selected-item">
          <SelectedPlaces
            v-for="result in chosePlace"
            :key="result.id"
            :result="result"
            @handleDelete="handleDelete"
          />
          <input
            type="text"
            :placeholder="placeholder"
            v-model="keyword"
            @keyup="handleDropdown"
            v-on-clickaway="away"
          />
        </div>
      </div>
      <DropDownList
        :isShow="isShow"
        :filteredPlaces="filteredPlaces"
        @handleAdd="handleAdd"
      />
    </div>
  </div>
</template>

<script>
import IconSearch from "@/assets/icon/IconSearch.vue";
import SelectedPlaces from "./SelectedPlaces.vue";
import DropDownList from "./DropDownList.vue";
const clickaway = window.VueClickaway.mixin;
export default {
  mixins: [clickaway],
  data() {
    return {
      keyword: "",
      isShow: false,
    };
  },
  components: {
    IconSearch,
    SelectedPlaces,
    DropDownList,
  },
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
    chosePlace: {
      type: Array,
      default: () => [],
    },
    placeList: {
      type: Array,
      default: () => [],
    },
    filteredPlaces: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleAdd(payload) {
      this.$emit("handleAdd", payload);
      this.keyword = "";
      this.isShow = false;
    },
    handleDelete(payload) {
      this.$emit("handleDelete", payload);
      this.handleDropdown(this.keyword);
    },
    handleDropdown() {
      if (this.keyword === "") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
      this.$emit("onTyping", this.keyword);
    },
    away() {
      this.isShow = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin-left: 179px;
  margin-top: 168px;
  font-family: "Noto Sans JP", sans-serif;
  .input-container {
    position: relative;
    .input-item {
      display: flex;
      width: 600px;
      min-height: 48px;
      margin-right: 28px;
      padding: 0 10px;
      display: flex;
      align-items: center;
      border: 1px solid #dbdbdb;
      border-radius: 4px;
      overflow: hidden;
      .selected-item {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
      }
      input {
        height: 32px;
        width: 200px;
        margin: 4px;
        appearance: none;
        border: none;
        outline: none;
      }
      .search-icon {
        width: 24px;
        height: 24px;
        margin-right: 16px;
        img {
          width: auto;
          height: auto;
          margin-left: 10px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>