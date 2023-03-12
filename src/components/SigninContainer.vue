<template>
  <div>
    <p class="uppercase font-bold">username</p>
    <Input>
      <input v-model="email" class="w-80">
    </Input>
    <p class="uppercase font-bold">password</p>
    <Input>
      <input v-model="password" :type="type" class="w-80">
      <PasswordIcon @showPassword="isVisible(this.type)" :icon="path" />
    </Input>
    <Button title="sign up" @action="signIn" /> <br/>
    <Recovery/>   
  </div>
</template>
<script>
import Input from './forms/InputText.vue'
import Button from './forms/Button.vue'
import Recovery from './Recovey.vue'
import PasswordIcon from './forms/PasswordIcon.vue'

import { userStore } from '../stores'

import {auth} from '../firebase/index'
import { signInWithEmailAndPassword } from '@firebase/auth'
import { mapActions, mapState } from 'pinia'


export default({
  name: 'Sign in',
  components:{
    Input,
    Button,
    Recovery,
    PasswordIcon,
  },
  data(){
    return{
      email: '',
      password: '',
      type: 'password',
      path: new URL('/src/assets/icons/show.png', import.meta.url)
    }
  },
  computed:{
    ...mapState(userStore, ['isAutheticade'])
  },
  methods:{
    async signIn(){
      await signInWithEmailAndPassword(auth, this.email, this.password)
      try{
        this.$router.push('/home')
      } catch (error){
        console.log(error.code)
      }
    },
    isVisible(){
     if(this.type == 'password'){
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
<style>

</style>
