<template>
  <AutoComplete
    :placeholder="'Nhập tên thành phố để tìm kiếm...'"
    :filteredList="filteredList"
    :placeList="placeList"
    @handleAdd="handleAdd"
    @handleDelete="handleDelete"
    @handleDropdown="handleDropdown"
    @away="away"
    :isShow="isShow"
  />
</template>
  
  <script>
import AutoComplete from "./AutoComplete.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AutoComplete,
  },
  created() {
    this.getPlace();
  },
  methods: {
    ...mapActions("place", [
      "dropShow",
      "getPlace",
      "addPlace",
      "detelePlace",
      "addFilteredList",
      "deleteFilteredList",
    ]),
    handleAdd(payload) {
      this.detelePlace(payload.name);
      this.addFilteredList(payload);
      this.dropShow(false);
    },
    handleDelete(payload) {
      this.deleteFilteredList(payload.id);
      this.addPlace(payload);
      this.handleDropdown(payload.keyword);
    },
    handleDropdown(keyword) {
      if (keyword === "") {
        this.dropShow(false);
      } else {
        this.dropShow(true);
      }
    },
    away() {
      this.dropShow(false);
    },
  },
  computed: {
    ...mapGetters("place", ["isShow", "placeList", "filteredList"]),
  },
};
</script>
  
  <style lang="scss" scoped>
</style>