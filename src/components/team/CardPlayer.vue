<template>
  <div class="flex justify-center py-10 border-2 border-gray-700">
    <img :alt="props.name" :src="`/team/${props.name}.jpg`">
  </div>
</template>

<script setup>

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>
