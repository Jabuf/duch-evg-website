import { defineStore } from 'pinia'

export const useStorePictures = defineStore('pictures', {
  state: () => {
    return { oldPaths: [] }
  }
})
