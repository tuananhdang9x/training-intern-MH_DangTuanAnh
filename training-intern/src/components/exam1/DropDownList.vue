<template>
  <ul class="dropdown-list" v-if="isShow">
    <li
      v-for="(place, i) in filteredPlaces"
      class="dropdown-item"
      :key="'A' + i"
      @click="handleAdd(place.id, place.name)"
    >
      {{ place.name }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
    filteredPlaces: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleAdd(id, name) {
      this.$emit("handleAdd", { id, name });
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-list {
  position: absolute;
  top: 120;
  left: 0;
  list-style: none;
  background-color: #f1f5f8;
  border-radius: 4px;
  overflow-y: scroll;
  max-height: 400px;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #a8a8a8;
  }
  .dropdown-item {
    color: #486581;
    width: 600px;
    height: 40px;
    line-height: 20px;
    padding: 10px;
    &:hover {
      cursor: pointer;
      color: #ffffff;
      background-color: #617d98;
    }
  }
}
</style>