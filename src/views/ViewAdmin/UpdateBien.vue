<template>
   <ComponentUpdateBien :id="id"/>
  
</template>

<script>
import ComponentUpdateBien from '@/components/ComponentAdmin/ComponentUpdateBien.vue';
export default {
    props:['id'],
    name:'UpdateBien',
    components:{
        ComponentUpdateBien

    }

}
</script>

<style>

</style>