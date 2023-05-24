// Utilities
import { defineStore } from 'pinia'
// Types
import User from '@/models/user'

export const useUsersStore = defineStore('app', {
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
    }
  }
})