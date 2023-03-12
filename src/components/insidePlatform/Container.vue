<template>
    <div class=" bg-white rounded-xl p-16 min-h-[65vh] min-w-12 w-[80vw]"  >
        <slot></slot>
    </div>
</template>
<script>
    export default({
        name: 'Container',
        components:{
        },
        data(){
            return{
               rota: this.$route.path,
            }
        }

    })
</script>