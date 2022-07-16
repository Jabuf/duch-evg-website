<template>
  <PictureWidget v-for="index in 14" :key="index" :name="''+index"/>
</template>

<script setup>
import PictureWidget from '@/components/pictures/PictureWidget.vue'</script>
