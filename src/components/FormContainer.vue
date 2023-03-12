<template>
    <div class="flex bg-white items-center rounded-xl p-16 h-92 min-w-12 max-w-64"  >
        <Signin v-if="rota == '/login'" class="w-2/3"/>
        <img v-if="rota == '/login'" class="w-1/2" src="@/assets/images/login.png">
        
        <img  v-if="rota == '/signup'" class="w-1/2 h-96" src="@/assets/images/Freelancer-pana.png">
        <Signup v-if="rota == '/signup'"/>
    </div>
</template>
<script>
import Signin from './SigninContainer.vue';
import Signup from './SignupContainer.vue';
    export default({
        name: 'FormContainer',
        components:{
            Signin,
            Signup
        },
        data(){
            return{
               rota: this.$route.path,
            }
        }

    })
</script>