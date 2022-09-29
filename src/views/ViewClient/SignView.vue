<template>
  <div>
    <Spinner/>
    <ComponentNavbar/>
    <ComponentSign/>

  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar';
    import ComponentSign from '@/components/ComponentClient/ComponentSign';
    import Spinner from '@/components/ComponentClient/Spinner.vue';
    
export default {
    name:"SignView",
    components:{
    ComponentNavbar,
    ComponentSign,
    Spinner
}

}
</script>

<style>

</style>