<template>
    <div>
        <ComponentAgent :id="id"/>
    </div>
  
</template>

<script>
    import ComponentAgent from '@/components/ComponentClient/ComponentAgentBien.vue';
export default {
    name:'DetailBien',
    props:['id'],
    components:{
        ComponentAgent
    }

}
</script>

<style>

</style>