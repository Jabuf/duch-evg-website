<template>
  <div class="space-y-2 py-2">
    <div v-for="review in reviews">
      <div v-if="review.placeNumber === placeNumber">
        <UIcon :path="mdiGlassMugVariant"/>
        <span class="font-bold">{{ ' ' + review.reviewer }}</span>
        <span class="text-xs">{{ ' à ' + review.date }}</span>
        <p class="px-2 font-normal italic text-gray-700">
          {{ '" ' + review.text + ' "' }}
        </p>
      </div>
    </div>
    <div class="space-y-3 py-3">
      <div class="w-1/2">
        <label class="u-label">Name
        </label>
        <input :id="placeNumber" v-model="state.review.reviewer" class="u-input" type="text"/>
        <p v-if="!state.reviewerValid" id="error" class="form-error">Mets ton nom connard!</p>
      </div>
      <div>
        <label class="u-label mt-1">Review
        </label>
        <textarea v-model="state.review.text" class="u-input" rows="4" type="text"/>
        <p v-if="!state.textValid" id="error" class="form-error">Mets un commentaire connard!</p>
      </div>
      <div>
        <button class="u-button u-button--primary" type="button"
                @click="postReview">Envoyer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from 'vue'
import {storeToRefs} from 'pinia'
import {mdiGlassMugVariant} from '@mdi/js'
import UIcon from '@/components/basic/UIcon.vue'
import {useStoreReviews} from '@/store/reviews.js'

const store = useStoreReviews()
const {reviews} = storeToRefs(store)
const props = defineProps({
  placeNumber: {
    type: Number,
    required: true
  }
})

const state = reactive({
  review: {reviewer: '', text: '', placeNumber: props.placeNumber},
  reviewerValid: true,
  textValid: true
})

function postReview() {
  state.reviewerValid = !(state.review.reviewer.length === 0)
  state.textValid = !(state.review.text.length === 0)
  if (!state.reviewerValid || !state.textValid) {
    return
  }
  const now = new Date()
  state.review.date = now.toLocaleDateString() + ' ' + now.toLocaleTimeString()
  store.reviews.push(JSON.parse(JSON.stringify(state.review)))
  state.review.text = ''
}
</script>
