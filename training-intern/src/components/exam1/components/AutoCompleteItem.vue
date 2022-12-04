<template>
  <div class="container">
    <div class="input-container">
      <div class="input-item">
        <div class="search-icon">
          <IconSearch />
        </div>
        <div class="selected-item">
          <SelectedItem
            v-for="result in choseOptions"
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
        :filteredOptions="filteredOptions"
        @handleAdd="handleAdd"
      />
    </div>
  </div>
</template>

<script>
import IconSearch from "@/assets/icon/IconSearch.vue";
import SelectedItem from "./SelectedItem.vue";
import DropDownList from "./DropDownList.vue";
import { mapGetters, mapActions } from "vuex";
const clickaway = window.VueClickaway.mixin;
export default {
  mixins: [clickaway],
  data() {
    return {
      keyword: "",
      isShow: false,
      filteredOptions: [],
    };
  },
  components: {
    IconSearch,
    SelectedItem,
    DropDownList,
  },
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
    listOptions: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ...mapActions("place", [
      "addItem",
      "deleteItem",
      "addChoseList",
      "deleteChoseItem",
    ]),
    handleAdd(payload) {
      this.deleteItem(payload.id);
      this.addChoseList(payload);
      this.keyword = "";
      this.isShow = false;
    },
    handleDelete(payload) {
      this.deleteChoseItem(payload.id);
      this.addItem(payload);
      this.handleDropdown();
    },
    handleDropdown() {
      if (this.keyword === "") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
      this.filteredOptions = this.listOptions.filter((item) =>
        item.name.toLowerCase().match(this.keyword.toLowerCase())
      );
    },
    away() {
      this.isShow = false;
    },
  },
  computed: {
    ...mapGetters("place", ["choseOptions"]),
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