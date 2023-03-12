<template>
  <div class="about">
    <!-- <Container></Container> -->
    <h1 class="text-4xl font-semibold">Bem vindo a plataforma</h1>
    <Button :title="'sair'" @action="logout"></Button>
    

  </div>
</template>

<script>
import Container from '../components/Container.vue'
import Button from '../components/forms/Button.vue';

import { auth } from '../firebase';
  export default({
    name: 'Sobre',
    components:{
      Container,
      Button
    },
    methods:{
      async logout(){
        await auth.signOut()
          try{
            this.$router.push('/login')
          } catch(error){
            console.log(error) 
        }
      }
    },
    mounted(){
      console.log(auth.currentUser)
    }

  })
</script>
<style>

</style>

