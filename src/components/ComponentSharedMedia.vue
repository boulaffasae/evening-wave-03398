<script setup>
defineProps({
  block: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div>
    <img :src="getStrapiMedia(block.file.data.attributes.url)" />
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
