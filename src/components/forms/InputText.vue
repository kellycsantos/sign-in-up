<template>
  <div class="flex justify-between items-center px-4 rounded-lg h-12 w-96 bg-field mb-4">
    <slot></slot>
  </div>
</template>
<script>
export default({
  name:'Texto',
  props:{
    type:{
      type: String,
      default: 'text',
      required: false,
    },
    vmodel:{
      default: '',
      required: false
    }
  },
  data(){
    return{
      content: this.value
    }
  },
  methods:{
    handleInput(e){
      this.$emit('input', this.content)
    }
  }

})

</script>
