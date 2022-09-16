<template>
  <div>
    <ComponentNavbar/>
    <ComponentSign/>

  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar';
    import ComponentSign from '@/components/ComponentClient/ComponentSign';
    
export default {
    name:"SignView",
    components:{
    ComponentNavbar,
    ComponentSign,
}

}
</script>

<style>

</style>