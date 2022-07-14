<template>
  <div class="flex flex-col h-screen justify-between">
    <DuchNavBar class="h-14"/>
    <router-view class="mb-auto px-20 py-20"/>
  </div>
</template>

<script setup>
import DuchNavBar from '@/components/section/DuchNavBar.vue'</script>
