<template>
  <AutoCompleteItem
    :placeholder="'Chọn các vị trí mà bạn muốn...'"
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
    console.log(this.listOptions);
  },
  computed: {
    ...mapGetters("list", ["listOptions"]),
  },
  methods: {
    ...mapActions("list", ["getOptions"]),
  },
};
</script>
  <style lang="scss" scoped>
</style>