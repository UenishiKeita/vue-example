import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2
    },
    plusOneCount(state) {
      return state.count++
    }
  },
  actions: {
    countUp() {
      this.count++
    }
  }
})