<template>
  <PictureWidget :name="state.pictureNumber"/>
</template>

<script setup>
import {onMounted, reactive} from 'vue'
import PictureWidget from '@/components/PictureWidget.vue'
import {getRandomNumberString} from '@/utils/math.js'

const state = reactive({pictureNumber: getRandomNumberString(1, 5)})

onMounted(() => {
  window.setInterval(() => {
    state.pictureNumber = '' + getRandomNumberString(1, 5)
  }, 5000)
})
</script>
