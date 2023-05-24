// Utilities
import { defineStore } from 'pinia'
// Types
import Luminary from '@/models/luminary'

export const useLuminariesStore = defineStore('app', {
  state: () => ({
    lumniaries: [] as Luminary[],
  }),
  actions: {
    fetchLuminaries() {
      fetch('https://api.le-systeme-solaire.net/rest/bodies/')
        .then((response) => response.json())
        .then((data) => {
          data.bodies.forEach((luminary: Luminary) => {
            this.addLuminary(luminary)
          })
        })
    },
    addLuminary(luminary: Luminary) {
      this.lumniaries.push(luminary)
    }
  }
})
