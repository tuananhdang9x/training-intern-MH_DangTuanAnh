<template>
  <DropZoneHome :placeholder="placeholder" :triggerText="triggerText" />
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
};
</script>

<style>
</style>