<template>
  <div class="bg-white w-screen p-4 flex justify-between items-center">
    <h1>Header</h1>
    <div class="flex justify-around items-center w-3/12 max-w-[270px]">
      <div class="profile-image flex items-center justify-center bg-red-400">
        Foto perfil
      </div>
      <button @click="logout">
        <img class="icon-logout" src="../../assets/icons/signout.png" alt="logout" />
      </button>
    </div>
  </div>
</template>
<script>
import { auth } from '../../firebase';

export default {
  name: 'Header',
  methods: {
    async logout() {
      await auth.signOut()
      try {
        this.$router.push('/login')
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
<style scoped>
.profile-image{
    width: 80px;
    height: 80px;
    border-radius: 50%;
}
.icon-logout {
  height: 36px !important;
}
</style>
