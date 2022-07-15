<template>
  <PictureWidget :name="state.pictureNumber" @click="nextPicture"/>
</template>

<script setup>
import {onMounted, reactive} from 'vue'
import PictureWidget from '@/components/pictures/PictureWidget.vue'
import {getRandomNumberString} from '@/utils/math.js'

const state = reactive({pictureNumber: getRandomNumberString(1, 14)})

onMounted(() => {
  window.setInterval(() => {
    state.pictureNumber = getNextNumber(state.pictureNumber)
  }, 8000)
})

function nextPicture() {
  state.pictureNumber = getNextNumber(state.pictureNumber)
}

function getNextNumber(currentNumber) {
  return '' + (currentNumber < 15 ? currentNumber++ : 1)
}
</script>
