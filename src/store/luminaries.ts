// Utilities
import { defineStore } from 'pinia'
// Types
import Luminary from '@/models/luminary'

export const useLuminariesStore = defineStore('luminaries', {
  state: () => ({
    luminaries: [] as Luminary[],
    isLoading: false
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
    fetchLuminaries : async function ()  {
      if(this.luminaries.length == 0) {
        this.isLoading = true
        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
          .then((response) => response.json())
          .then((data) => {
            data.bodies.forEach((luminary: Luminary) => {
              this.addLuminary(luminary)
            })
            this.isLoading = false
          })
      }
    },
    addLuminary(luminary: Luminary) {
      this.luminaries.push(luminary)
    }
  }
})
