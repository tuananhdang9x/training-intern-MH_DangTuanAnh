<template>
  <div>
    <AutoCompleteHomeVue v-if="isCity" />
    <AutoCompleteHomeVue v-if="isJob" />
  </div>
</template>

<script>
import AutoCompleteHomeVue from "@/components/exam1/AutoCompleteHome.vue";
export default {
  data() {
    return {};
  },
  components: {
    AutoCompleteHomeVue,
  },
  props: {
    isCity: {
      type: Boolean,
      default: () => false,
    },
    isJob: {
      type: Boolean,
      default: () => false,
    },
  },
};
</script>

<style>
</style>