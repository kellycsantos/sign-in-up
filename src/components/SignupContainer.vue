<template>
  <div>
    <p class="uppercase font-bold">username</p>
    <Input>
      <input v-model="username" class="w-80">
    </Input>
    <p class="uppercase font-bold">email address</p>
    <Input>
      <input v-model="email" class="w-80">
    </Input>
    <p class="uppercase font-bold">password</p>
    <Input>
      <input v-model="password" :type="type" class="w-80">
    <PasswordIcon @showPassword="isVisible()" :icon="path" />
    </Input>
    <Button :title="'sign up'" @action="signUp" /> 
    <Recovery />
    <Modal v-if="visibleModal" 
    message="Cadastro realizado com sucesso, clique abaixo para efetuar o login"/>
  </div>
</template>
<script >
import Input from './forms/InputText.vue'
import Button from './forms/Button.vue'
import Recovery from './Recovey.vue'
import PasswordIcon from './forms/PasswordIcon.vue'
import Modal from './Modal.vue'


import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth'


export default ({
  name: 'Sign Up',
  components: {
    Input,
    Button,
    Recovery,
    PasswordIcon,
    Modal

  },
  computed:{
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
      type: 'password',
      path: new URL('/src/assets/icons/show.png', import.meta.url),
      visibleModal: false,
    }
  },
  methods: {
    hideModal(){
      new Promise(() => {
     setTimeout(() => 
     this.visibleModal = false
      ,5500)
    })
      
    },
    showModal(){
    new Promise(() => {
     setTimeout(() => 
      this.visibleModal = true,
      this.hideModal()
      ,1000)
    })
    
    },
    async signUp() {
      await createUserWithEmailAndPassword(auth, this.email, this.password);
      try{
        auth.currentUser.displayName = this.username    
        this.showModal()
      } catch (error){
        console.log('Erro:', error.code)
      }
    },
    isVisible() {
      if (this.type == 'password') {
        this.type = 'text';
        this.path = new URL('/src/assets/icons/hide.png', import.meta.url)
      } else {
        this.type = 'password';
        this.path = new URL('/src/assets/icons/show.png', import.meta.url)
      }
    }
  }
})
</script>
