<template>
  <div>
    <ComponentNavbar/>
    <ComponentDetail/>

  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar';
    import ComponentDetail from '@/components/ComponentClient/ComponentDetail';
export default {
    name:"DetailView",
    components:{
        ComponentNavbar,
        ComponentDetail
    }

}
</script>

<style>

</style>