<template>
  <div class="container-autocomplete">
    <div class="input-container">
      <div class="input-item">
        <div class="search-icon">
          <IconSearch />
        </div>
        <div class="selected-item">
          <SelectedItem
            v-for="result in listChoseOptions"
            :key="'B' + result.id"
            :result="result"
            @handleDelete="handleDelete"
          />
          <input
            type="text"
            :placeholder="placeholder"
            v-model="keyword"
            @keyup="onChange"
            v-on-clickaway="away"
          />
        </div>
      </div>
      <DropDownList
        :isShow="isShow"
        :filteredOptions="filteredOptions"
        @handleAdd="handleAdd"
      />
      <div class="error" v-if="msg.length">
        {{ msg }}
      </div>
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
      msg: "",
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
    ...mapActions("list", [
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
      this.$emit("onChangeJob");
    },
    handleDelete(payload) {
      this.deleteChoseItem(payload.id);
      this.addItem(payload);
      this.onChange();
    },
    onChange() {
      if (this.keyword === "") {
        this.isShow = false;
        this.msg = "";
      } else {
        this.isShow = true;
        this.msg = "";
      }
      this.filteredOptions = this.listOptions.filter((item) => {
        return (
          item.name.toLowerCase().match(this.keyword.toLowerCase()) &&
          !this.listChoseOptions.map((ele) => ele.id).includes(item.id)
        );
      });
      if (!this.filteredOptions.length) {
        this.msg = "Item not found";
      }
    },
    away() {
      this.isShow = false;
    },
  },
  computed: {
    ...mapGetters("list", ["listChoseOptions"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  font-family: "Noto Sans JP", sans-serif;
  .input-container {
    position: relative;
    .error {
      color: red;
      font-size: 14px;
      margin-top: 12px;
    }
    .input-item {
      display: flex;
      width: 100%;
      height: 100%;
      margin-right: 28px;
      padding: 0 10px;
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