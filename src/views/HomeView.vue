<template>
  <div>
    <ComponentNavbar/>
    <ComponentHome/>

  </div>
</template>

<script>
  import ComponentNavbar from '@/components/ComponentNavbar.vue';
  import ComponentHome from '@/components/ComponentHome.vue';
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
