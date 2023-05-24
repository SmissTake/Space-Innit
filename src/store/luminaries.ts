// Utilities
import { defineStore } from 'pinia'
// Types
import Luminary from '@/models/luminary'

export const useLuminariesStore = defineStore('app', {
  state: () => ({
    luminaries: [] as Luminary[],
  }),
  getters: {
    getLuminaryById: (state) => (id: string) => {
      return state.luminaries.find((luminary) => luminary.id === id)
    },
    getLuminaries: (state) => {
      return state.luminaries
    }
  },
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
      this.luminaries.push(luminary)
    }
  }
})
