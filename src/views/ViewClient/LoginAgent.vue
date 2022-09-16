<template>
  <div>
<ComponentNavbar/>
<ComponentLoginAgent/>
  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar.vue';
    import ComponentLoginAgent from '@/components/ComponentClient/ComponentLoginAgent.vue';
;
export default {
    name:"LoginAgent",
    components:{
    ComponentNavbar,
    ComponentLoginAgent,

}

}
</script>

<style>

</style>