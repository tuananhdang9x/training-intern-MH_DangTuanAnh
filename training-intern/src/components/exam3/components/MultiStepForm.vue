<template>
  <div>
    <MultiInputForm :data="stepData.data" :step="stepData.step" />
  </div>
</template>

<script>
import MultiInputForm from "./MultiInputForm.vue";
export default {
  components: {
    MultiInputForm,
  },
  props: {
    stepData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {},
};
</script>

<style>
</style>