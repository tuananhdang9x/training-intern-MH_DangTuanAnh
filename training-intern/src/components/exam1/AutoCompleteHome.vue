<template>
  <AutoCompleteItem
    :placeholder="'Nhập tên thành phố để tìm kiếm...'"
    :listOptions="listOptions"
  />
</template>
  
  <script>
import AutoCompleteItem from "./components/AutoCompleteItem.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  components: {
    AutoCompleteItem,
  },
  created() {
    this.getOptions();
  },
  computed: {
    ...mapGetters("place", ["listOptions"]),
  },
  methods: {
    ...mapActions("place", ["getOptions"]),
  },
};
</script>
  <style lang="scss" scoped>
</style>