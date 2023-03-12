<template>
  <div class="">
    <Header class="absolute top-4 left-0"/>
    <Container>
      <h1 class="text-4xl font-semibold">Bem vindo a plataforma</h1>
    <Button :title="'sair'" @action="logout"></Button>
    </Container>
    
    

  </div>
</template>

<script>
import Container from '../components/FormContainer.vue'
import Button from '../components/forms/Button.vue';
import Header from '../components/insidePlatform/Header.vue';

import { auth } from '../firebase';
  export default({
    name: 'Sobre',
    components:{
      Container,
      Button,
      Header
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

