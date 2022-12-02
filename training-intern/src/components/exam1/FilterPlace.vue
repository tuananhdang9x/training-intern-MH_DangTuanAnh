<template>
  <AutoComplete
    :placeholder="'Nhập tên thành phố để tìm kiếm...'"
    :filteredList="filteredList"
    :placeList="placeList"
    @handleAdd="handleAdd"
    @handleDelete="handleDelete"
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
    },
    handleDelete(payload) {
      this.deleteFilteredList(payload.id);
      this.addPlace(payload);
    },
  },
  computed: {
    ...mapGetters("place", ["placeList", "filteredList"]),
  },
};
</script>
  
  <style lang="scss" scoped>
</style>