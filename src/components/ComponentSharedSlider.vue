<script setup>
defineProps({
  block: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div v-for="file in block.files.data" :key="file.id">
    <img :src="getStrapiMedia(file.attributes.url)" />
  </div>
</template>

<script>
import { getStrapiMedia } from "../utils";

export default {
  methods: {
    getStrapiMedia,
  },
};
</script>
