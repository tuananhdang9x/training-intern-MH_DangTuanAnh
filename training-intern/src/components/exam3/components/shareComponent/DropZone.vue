<template>
  <DropZoneHome
    :placeholder="placeholder"
    :triggerText="triggerText"
    @onAddItem="onAddItem"
  />
</template>

<script>
import DropZoneHome from "@/components/exam2/DropZoneHome.vue";
export default {
  components: {
    DropZoneHome,
  },
  props: {
    placeholder: {
      type: String,
      default: () => "",
    },
    triggerText: {
      type: String,
      default: () => "",
    },
  },
  methods: {
    onAddItem() {
      this.$emit("onAddItem");
    },
  },
};
</script>

<style>
</style>