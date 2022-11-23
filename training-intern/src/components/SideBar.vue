n<template>
  <div class="side-bar">
    <h3>Basic Exercise</h3>
    <ul class="list-link">
      <li
        v-for="link in linkLists"
        :key="link.id"
        :class="{ active: currentRouteName === link.name }"
        @click="postClick(link)"
      >
        {{ link.lable }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      linkLists: [
        {
          id: 1,
          lable: "Home page",
          path: "/",
          name: "HomePage",
        },
        {
          id: 2,
          lable: "Todo Apps",
          path: "/todo",
          name: "TodoApp",
        },
        {
          id: 3,
          lable: "Exam 2",
          path: "/exam2",
          name: "Exam2",
        },
        {
          id: 4,
          lable: "Exam 3",
          path: "/exam3",
          name: "Exam3",
        },
      ],
    };
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
  methods: {
    postClick(link) {
      this.$router.push(link.path);
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
  cursor: pointer;
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