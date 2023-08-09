import { defineStore } from 'pinia'
import json from '../assets/json/data.json'

export const useRootStore = defineStore('root', {
  state: () => ({
    questions: json,
    activeQuestion: [],
    width: 0
  }),
  actions: {
    addQuestions(item){
      if(!this.activeQuestion.includes(item)){
        this.activeQuestion.push(item);
      } else {
        const index = this.activeQuestion.indexOf(item);
        if (index > -1) {
          this.activeQuestion.splice(index, 1);
        }
      }
      this.width = (100 * this.activeQuestion.length) / this.questions.length;
    },
  }
})