<template>
  <button class="bg-brand w-52 h-12 font-semibold uppercase text-white bold-xl text-xl rounded-md"
          @click="handleClick(action)">
    {{ title }}
  </button>
</template>
<script>
export default({
  name:'Button',
  props:{
    title:{
      type: String,
      required: true,
    }
  },
  data(){
    return{
      content: this.value
    }
  },
  methods:{
    handleClick(){
      this.$emit('action')
    }
  }

})

</script>
