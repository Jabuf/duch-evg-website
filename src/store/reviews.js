import { defineStore } from 'pinia'
import { reviews } from '@/data/reviews.js'

export const useStoreReviews = defineStore('reviews', {
  state: () => {
    return { reviews }
  }
})
