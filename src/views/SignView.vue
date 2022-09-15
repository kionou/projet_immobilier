<template>
  <div>
    <ComponentNavbar/>
    <ComponentSign/>

  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentNavbar.vue';
    import ComponentSign from '@/components/ComponentSign.vue';
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