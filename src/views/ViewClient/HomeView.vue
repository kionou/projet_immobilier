<template>
  <div>
    <ComponentNavbar/>
    <ComponentHome/>

  </div>
</template>

<script>
  import ComponentNavbar from '@/components/ComoponentClient/ComponentNavbar.vue';
  import ComponentHome from '@/components/ComponentClient/ComponentHome.vue';
export default {
  name:"HomeView",
  components:{
    ComponentNavbar,
    ComponentHome
  }

}
</script>

<style>

</style>
