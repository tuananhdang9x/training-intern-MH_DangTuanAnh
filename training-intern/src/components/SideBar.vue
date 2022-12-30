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
          lable: "Exam 1",
          path: "/exam1",
          name: "AutoComplete",
        },
        {
          id: 4,
          lable: "Exam 2",
          path: "/exam2",
          name: "Dropzone",
        },
        {
          id: 5,
          lable: "Exam 3",
          path: "/exam3",
          name: "MultiForm",
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
      if (this.$route.path !== link.path) {
        this.$router.push(link.path);
      }
    },
  },
};
</script>

<style scoped>
.side-bar {
  background-color: #f0f0f0;
  height: 100vh;
  position: fixed;
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