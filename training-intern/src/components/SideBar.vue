n<template>
  <div class="side-bar">
    <h3>Basic Exercise</h3>
    <ul class="list-link">
      <li
        v-for="(nameList, index) in nameLists"
        :key="index"
        :class="{ active: currentRouteName === nameList }"
      >
        <router-link
          style="text-decoration: none; color: inherit"
          :to="linkLists[index]"
          >{{ nameList }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nameLists: ["Trang chủ", "Todo Apps", "Bài 2", "Bài 3"],
      linkLists: ["/", "/todo", "/bai2", "/bai3"],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.side-bar {
  background-color: #f0f0f0;
  height: 1200px;
}
.list-link {
  list-style: none;
}
.list-link li {
  padding: 12px;
}
.side-bar h3 {
  padding: 24px;
}
.active {
  background-color: #e6f1ff;
  color: #0d53b1;
}
</style>