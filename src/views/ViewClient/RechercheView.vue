<template>
  <div>
    <Spinner/>
    <ComponentNavbar/>
    <ComponentRech :bien="bien" />
    {{bien}}

  </div>
</template>

<script>
  import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar.vue';
  import ComponentRech from '@/components/ComponentClient/ComponentRech.vue';
  import Spinner from '@/components/ComponentClient/Spinner.vue';
export default {
  name:"HomeView",
  props:['bien'],
  components:{
    ComponentNavbar,
    ComponentRech,
    Spinner
  }

}
</script>

<style>

</style>
