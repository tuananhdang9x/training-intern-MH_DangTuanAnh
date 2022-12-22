<template>
  <div>
    <MultiInputForm
      v-for="(item, index) in stepData.data"
      :key="index"
      :data="item"
      :step="stepData.step"
      :id="item.id"
      :index="index"
      @handleDelete="handleDelete"
      @onCheckConflict="onCheckConflict"
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
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    handleDelete(index) {
      this.$emit("handleDelete", index);
    },
    onCheckConflict(id) {
      this.$emit("onCheckConflict", id);
    },
  },
};
</script>

<style>
</style>