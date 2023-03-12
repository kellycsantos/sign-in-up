// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('storeUser', {
  state: () => {
    return{
      nickname : 'moomoodar_320',
      isAutheticaded: auth.currentUser == null ? false : true,
    }
  },
  actions:{}
})