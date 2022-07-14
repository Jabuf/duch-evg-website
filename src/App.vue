<template>
  <div class="flex flex-col h-screen justify-between">
    <DuchNavBar class="h-14"/>
    <Suspense>
      <router-view class="mb-auto px-20 py-20"/>
      <template #fallback>
        <div class="py-20 px-20">Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import DuchNavBar from '@/components/section/DuchNavBar.vue'</script>
