<template>
  <div>
    <MultiInputForm
      v-for="(item, index) in stepData"
      :key="index"
      :data="item.data"
      :step="item.step"
      :id="item.id"
      @handleDelete="handleDelete"
    />
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
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleDelete(id) {
      this.$emit("handleDelete", id);
    },
  },
};
</script>

<style>
</style>