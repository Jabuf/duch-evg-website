<template>
  <div class="flex flex-col h-screen justify-between">
    <DuchNavBar class="h-14"/>
    <router-view class="mb-auto px-5 sm:px-20 sm:py-20"/>
  </div>
</template>

<script setup>
import DuchNavBar from '@/components/section/DuchNavBar.vue'</script>
