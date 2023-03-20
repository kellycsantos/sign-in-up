<template>
  <div class="">
    <Header class="absolute top-4 left-0"/>
    <Container>
      <h1 class="text-4xl font-semibold">Bem vindo a plataforma</h1>
      
      <form @submit.prevent="updateInfo">
       <span class="bold">Id:</span> <span>{{ dados?.id || 'usuário' }}</span> <br>
        <span class="bold">nickname:</span> <span>{{ dados?.username || 'usuário' }}</span>  <br>
        <span class="bold">Email:</span> <span>{{ dados?.email || 'usuário' }}</span>  <br> <br> <br>
        <!-- <input v-model="username" placeholder="username"> -->
        <!-- <button>Atualizar</button><br> -->
        <button @click="pegando">Get data</button>
<br/>
        {{ dados }}
        
      </form>
    </Container>
    
    

  </div>
</template>

<script>
import Container from '../components/insidePlatform/Container.vue'
import Button from '../components/forms/Button.vue';
import Header from '../components/insidePlatform/Header.vue';

import { auth } from '../firebase';

import db from '../firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'
const userRef = collection(db, "usuarios");

export default({
    name: 'Sobre',
    components:{
      Container,
      Button,
      Header
    },
    data(){
      return{
        username: null,
        dados: null,
      }
    },
    methods:{
      async logout(){
        await auth.signOut()
          try{
            this.$router.push('/login')
          } catch(error){
            console.log(error) 
        }
      },
//       async updateInfo(){
//         const querySnapshot = await getDocs(collection(db, "usuarios"));
//       querySnapshot.forEach((doc) => {
//         console.log(doc)
//       console.log(`${doc.id} => ${doc.data()}`);
// })},
  async pegando(){
    const q = query (userRef, where('id', "==",auth.currentUser.uid ))
    const querySnap = await getDocs(q)
    querySnap.forEach((doc) => {
      console.log('user:', doc.data())
      this.dados =  doc.data()
    })
  }
},

    mounted(){
      // console.log(auth.currentUser)
      // console.log(getDocs(collection(db, "usuarios")), where("id", "==",auth.currentUser.uid ))
      this.pegando()
    }

  })
</script>
<style>
input{
  border: 1px solid gray;
}
.bold{
  font-weight: 700;
}

</style>

