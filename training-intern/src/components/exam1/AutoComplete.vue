<template>
  <div class="container">
    <div class="input-container" @clickaway="isShow = false">
      <div class="input-item">
        <div class="search-icon">
          <IconSvg :search="'search'"></IconSvg>
        </div>
        <div class="selected-item">
          <SelectedPlace v-for="result in filteredList" :key="result.id">
            <div class="search-result">
              <span class="result-item">{{ result.name }}</span>
              <div
                class="result-icon"
                @click="handleDelete(result.id, result.name)"
              >
                <IconSvg :cancel="'cancel'"></IconSvg>
              </div>
            </div>
          </SelectedPlace>
          <input
            type="text"
            :placeholder="inputTitle"
            v-model="keyword"
            @keyup="handleDropdown"
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
import SelectedPlace from "./components/SelectedPlace.vue";
import IconSvg from "./components/IconSvg.vue";
import { mapGetters, mapActions } from "vuex";
const clickaway = window.VueClickaway.mixin;
export default {
  components: {
    SelectedPlace,
    IconSvg,
  },
  mixins: [clickaway],
  data() {
    return {
      keyword: null,
      isShow: false,
      inputTitle: "Nhập tên thành phố để tìm kiếm...",
    };
  },
  created() {
    this.getPlace();
  },
  methods: {
    ...mapActions("place", [
      "getPlace",
      "addPlace",
      "detelePlace",
      "addFilteredList",
      "deleteFilteredList",
    ]),
    handleAdd(id, name) {
      this.detelePlace(name);
      this.addFilteredList({ id, name });
      this.keyword = "";
      this.isShow = false;
    },
    handleDelete(id, name) {
      this.deleteFilteredList(id);
      this.addPlace({ id, name });
      this.handleDropdown();
    },
    handleDropdown() {
      if (this.keyword === "") {
        this.isShow = false;
      } else {
        this.isShow = true;
      }
    },
    away() {
      this.isShow = false;
    },
  },
  computed: {
    ...mapGetters("place", ["placeList", "filteredList"]),
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
      min-height: 58px;
      margin-right: 28px;
      padding: 8px 10px;
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