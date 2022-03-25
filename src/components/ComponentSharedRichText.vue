<script setup>
defineProps({
  block: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div v-html="markedParse(block.body)" />
</template>

<script>
import { markedParse } from "../utils";

export default {
  methods: {
    markedParse,
  },
};
</script>
