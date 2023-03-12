<template>
    <div class="modal">
        <div class="bg-white h-72 w-[45vw] rounded-md py-6 px-8 flex flex-col items-center justify-center">
            <div>
                <p class="text-xl mb-12 text-center">{{message}}</p>
            </div>
          
           <Button class="w-[30vw] max-w-[200px]"  title="Login" @action="teste"/>
        </div>
    </div>
</template>
<script>
import Button from './forms/Button.vue';
export default({
    name:'Modal',
    props:{
        message:{
            type: String,
            default: 'Reste'
        }
    },
    components:{
        Button
    },
    methods:{
        teste(){
           this.$router.push('/login')

        }
    }

})
</script>
<style scoped>
    .modal{
        height: 100vh;
        width: 98vw;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0, 0, 0, 0.322);
    }
</style>
