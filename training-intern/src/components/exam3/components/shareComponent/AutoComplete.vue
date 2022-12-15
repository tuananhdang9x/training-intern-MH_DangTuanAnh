<template>
  <div>
    <AutoCompleteHomeVue @onChangeJob="onChangeJob" />
  </div>
</template>

<script>
import AutoCompleteHomeVue from "@/components/exam1/AutoCompleteHome.vue";
export default {
  components: {
    AutoCompleteHomeVue,
  },
  methods: {
    onChangeJob() {
      this.$emit("onChangeJob");
    },
  },
};
</script>

<style>
</style>