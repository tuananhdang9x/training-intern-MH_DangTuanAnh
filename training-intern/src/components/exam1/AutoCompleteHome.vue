<template>
  <AutoCompleteItem
    :placeholder="'Chọn các vị trí mà bạn muốn...'"
    :listOptions="listOptions"
    @onChangeJob="onChangeJob"
  />
</template>
  
  <script>
import AutoCompleteItem from "./components/AutoCompleteItem.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    AutoCompleteItem,
  },
  computed: {
    ...mapGetters("list", ["listOptions"]),
  },
  methods: {
    onChangeJob() {
      this.$emit("onChangeJob");
    },
  },
  props: {
    type: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style>
</style>