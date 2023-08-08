import { defineStore } from 'pinia'
import json from '../assets/json/data.json'

export const useRootStore = defineStore('root', {
  state: () => ({
    questions: json,
    activeQuestion: [1,2]
  }),
  actions: {
  }
})