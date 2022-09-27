<template>
  <div>
    <Spinner/>
    <ComponentNavbar/>
    <ComponentDetail :id="id"/>

  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar';
    import ComponentDetail from '@/components/ComponentClient/ComponentDetail';
  import Spinner from '@/components/ComponentClient/Spinner.vue';

    
export default {
    name:"DetailView",
    props:['id'],
    components:{
        ComponentNavbar,
        ComponentDetail,
        Spinner
    }

}
</script>

<style>

</style>