import { defineStore } from 'pinia'

interface IUser {
  name: string
  password: string
}

export const loginStore = defineStore({
  id: 'login',
  state: () => ({
    user: {
      name: 'admin',
      password: '123456',
    },
  }),
  getters: {},
  actions: {
    setUser(payload: IUser) {
      this.$state.user = payload
    },
  },
})
