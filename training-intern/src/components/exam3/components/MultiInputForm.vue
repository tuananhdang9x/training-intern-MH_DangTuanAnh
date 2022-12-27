<template>
  <div class="step-item">
    <div v-for="(item, index) in data" :key="item.id">
      <InputItem
        :item="item"
        @handleDelete="handleDelete"
        @onChange="(e) => onChange(e, index)"
      />
    </div>
  </div>
</template>

<script>
import InputItem from "./InputItem.vue";
export default {
  components: {
    InputItem,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleDelete() {
      this.$emit("handleDelete");
    },
    onChange(e, index) {
      this.$emit("onChange", { e, index });
    },
  },
};
</script>

<style lang="scss" scoped>
.step-item {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 32px 24px;
  width: 926px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 20px 0 24px 20px;
}
</style>