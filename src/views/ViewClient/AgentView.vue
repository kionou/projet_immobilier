<template>
  <ComponentAgent :id="id" />
  
</template>

<script>  
import ComponentAgent from '@/components/ComponentClient/ComponentAgent.vue';

export default {
    name:'AgentView',
    props:['id'],
    components: { ComponentAgent }
}
</script>

<style>

</style>