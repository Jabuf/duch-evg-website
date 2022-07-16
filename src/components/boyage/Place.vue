<template>
  <p>{{ place.order + '-' + place.name }}</p>
</template>

<script setup>
const props = defineProps({
  place: {
    type: Object,
    required: true
  }
})
</script>
