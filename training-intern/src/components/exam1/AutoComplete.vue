<template>
  <div class="container">
    <div class="input-container">
      <div class="input-item">
        <div class="search-icon">
          <IconSearch />
        </div>
        <div class="selected-item">
          <div v-for="result in filteredList" :key="result.id">
            <div class="search-result">
              <span class="result-item">{{ result.name }}</span>
              <div
                class="result-icon"
                @click="handleDelete(result.id, result.name)"
              >
                <IconCancel />
              </div>
            </div>
          </div>
          <input
            type="text"
            :placeholder="placeholder"
            v-model="keyword"
            @keyup="handleDropdown(keyword)"
            v-on-clickaway="away"
          />
        </div>
      </div>
      <ul class="dropdown-list" v-if="isShow">
        <li
          v-for="(place, i) in filteredPlace"
          class="dropdown-item"
          :key="'A' + i"
          @click="handleAdd(place.id, place.name)"
        >
          {{ place.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import IconSearch from "../../assets/icon/IconSearch.vue";
import IconCancel from "../../assets/icon/IconCancel.vue";
const clickaway = window.VueClickaway.mixin;
export default {
  mixins: [clickaway],
  data() {
    return {
      keyword: "",
    };
  },
  components: {
    IconSearch,
    IconCancel,
  },
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
    filteredList: {
      type: Array,
      default: () => [],
    },
    placeList: {
      type: Array,
      default: () => [],
    },
    isShow: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    handleAdd(id, name) {
      this.$emit("handleAdd", { id, name, keyword: this.keyword });
      this.keyword = "";
    },
    handleDelete(id, name) {
      this.$emit("handleDelete", { id, name, keyword: this.keyword });
    },
    handleDropdown(keyword) {
      this.$emit("handleDropdown", keyword);
    },
    away() {
      this.$emit("away");
    },
  },
  computed: {
    filteredPlace() {
      return this.placeList.filter((place) =>
        place.name.toLowerCase().match(this.keyword.toLowerCase())
      );
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
        height: 20px;
        width: 200px;
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
      .search-result {
        display: flex;
        justify-content: space-between;
        align-items: center;
        white-space: nowrap;
        height: 32px;
        padding: 4px 8px;
        border: 1px solid #dcdcdc;
        border-radius: 4px;
        margin: 4px 8px 4px 0px;

        .result-item {
          font-size: 14px;
          line-height: 20px;
          height: 20px;
          color: #627d98;
          font-weight: 400;
        }
        .result-icon {
          cursor: pointer;
          width: 14px;
          height: 24px;
          margin-left: 8px;
        }
      }
    }
    .dropdown-list {
      position: absolute;
      top: 120;
      left: 0;
      list-style: none;
      background-color: #f1f5f8;
      border-radius: 4px;
      overflow-y: scroll;
      max-height: 400px;
      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-track {
        background-color: transparent;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 6px;
        background-color: #a8a8a8;
      }
      .dropdown-item {
        color: #486581;
        width: 600px;
        height: 40px;
        line-height: 20px;
        padding: 10px;
        &:hover {
          cursor: pointer;
          color: #ffffff;
          background-color: #617d98;
        }
      }
    }
  }
}
</style>