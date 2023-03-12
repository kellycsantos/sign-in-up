<template>
  <div class="flex items-center justify-center h-screen">
    <RouterView />  
  </div>  
</template>

<script >
  import { mapState } from 'pinia';
  import { RouterLink, RouterView } from 'vue-router'
  import { userStore } from './stores';
  import { auth } from './firebase';
  export default({
  })
</script>
