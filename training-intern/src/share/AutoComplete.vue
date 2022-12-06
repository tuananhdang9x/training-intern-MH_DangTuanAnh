<template>
  <div>
    <AutoCompleteHomeVue v-if="types[0].name === place" :type="types[0].name" />
    <AutoCompleteHomeVue v-if="types[1].name === job" :type="types[1].name" />
  </div>
</template>

<script>
import AutoCompleteHomeVue from "@/components/exam1/AutoCompleteHome.vue";
export default {
  data() {
    return {
      types: [
        {
          id: 1,
          name: "place",
        },
        {
          id: 2,
          name: "job",
        },
      ],
    };
  },
  components: {
    AutoCompleteHomeVue,
  },
  props: {
    place: {
      type: String,
      default: () => "",
    },
    job: {
      type: String,
      default: () => "",
    },
  },
};
</script>

<style>
</style>