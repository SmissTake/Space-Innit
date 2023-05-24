// Utilities
import { defineStore } from 'pinia'
// Types
import User from '@/models/user'

export const useUsersStore = defineStore('users', {
  state: () => ({
    user: {} as User,
  }),
  getters: {
    getUser: (state) => {
      return state.user
    }
  },
  actions: {
    setUser(user: User) {
      this.user = user
    },
    setFavorite(luminaryId: string) {
      if (this.user.favoriteLuminaries && !this.user.favoriteLuminaries.includes(luminaryId)) {
        this.user.favoriteLuminaries.push(luminaryId);
      }
    },
  }
})