<template>
  <div>
    <ComponentNavbar/>
    <ComponentDetail :id="id"/>

  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar';
    import ComponentDetail from '@/components/ComponentClient/ComponentDetail';
export default {
    name:"DetailView",
    props:['id'],
    components:{
        ComponentNavbar,
        ComponentDetail
    }

}
</script>

<style>

</style>