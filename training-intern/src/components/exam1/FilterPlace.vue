<template>
  <AutoComplete
    :placeholder="'Nhập tên thành phố để tìm kiếm...'"
    :chosePlace="chosePlace"
    :placeList="placeList"
    :filteredPlaces="filteredPlaces"
    @handleAdd="handleAdd"
    @handleDelete="handleDelete"
    @onTyping="onTyping"
  />
</template>
  
  <script>
import AutoComplete from "./AutoComplete.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      filteredPlaces: [],
    };
  },
  components: {
    AutoComplete,
  },
  created() {
    this.getPlace();
  },
  methods: {
    ...mapActions("place", [
      "getPlace",
      "addPlace",
      "detelePlace",
      "addChosePlace",
      "deleteChosePlace",
    ]),
    handleAdd(payload) {
      this.detelePlace(payload.name);
      this.addChosePlace(payload);
    },
    handleDelete(payload) {
      this.deleteChosePlace(payload.id);
      this.addPlace(payload);
    },
    onTyping(keyword) {
      this.filteredPlaces = this.placeList.filter((place) =>
        place.name.toLowerCase().match(keyword.toLowerCase())
      );
    },
  },
  computed: {
    ...mapGetters("place", ["placeList", "chosePlace"]),
  },
};
</script>
  
  <style lang="scss" scoped>
</style>