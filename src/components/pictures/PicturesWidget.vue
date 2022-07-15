<template>
  <PictureWidget :name="''+state.pictureNumber" @click="nextPicture"/>
</template>

<script setup>
import {onMounted, reactive} from 'vue'
import PictureWidget from '@/components/pictures/PictureWidget.vue'
import {getRandomNumber} from '@/utils/math.js'

const state = reactive({pictureNumber: getRandomNumber(1, 14)})

onMounted(() => {
  window.setInterval(() => {
    nextPicture()
  }, 8000)
})

function nextPicture() {
  if (state.pictureNumber < 14) {
    state.pictureNumber++
  } else {
    state.pictureNumber = 1
  }
}
</script>
