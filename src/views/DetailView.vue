<template>
  <div>
    <ComponentNavbar/>
    <ComponentDetail/>

  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentNavbar.vue';
    import ComponentDetail from '@/components/ComponentDetail.vue';
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