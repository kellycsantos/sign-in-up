<template>
    <div v-if="rota == '/signup'">
        <p class="font-bold">{{ signup.message }}</p>
        <RouterLink  :to="signup.href">{{signup.link}}</RouterLink>
    </div>
    <div v-if="rota == '/login'">
        <p class="font-bold">{{ signin.message }}</p>
        <RouterLink  :to="signin.href">{{signin.link}}</RouterLink>
    </div>
</template>
<script>
export default({
    name:'Recovey',
    data(){
        return{
            rota: this.$route.path,
            signup:{
                message: "Already have a Account?",
                link: 'login here',
                href: '/login'
            },
            signin:{
                message: "Not registered yet?",
                link: 'registered here',
                href: '/signup'
            }
        }
    }
})
</script>