<template>
  <div>
    <Spinner/>
    <ComponentNavbar/>
    <ComponentHome/>

  </div>
</template>

<script>
  import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar.vue';
  import ComponentHome from '@/components/ComponentClient/ComponentHome.vue';
  import Spinner from '@/components/ComponentClient/Spinner.vue';
export default {
  name:"HomeView",
  components:{
    ComponentNavbar,
    ComponentHome,
    Spinner
  }

}
</script>

<style>

</style>
