<template>
    <button @click="isVisible('showPassword')">
    <img :src="icon"/>
    </button>
</template>
<script>
export default({
    name:'PasswordBtn',
    data(){
        return{
            visible: false,
        }
    },
    props:{
        icon:{
            type: URL,
            default: 'show'
        }
    },
    methods:{
        isVisible(){
            this.$emit('showPassword')
        }
    }
})
</script>
<style scoped>
    img{
        height: 30px !important;
        width: 25px;
        cursor: pointer;
    }
</style>