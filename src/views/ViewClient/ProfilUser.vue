<template>
  <div>
    <Spinner/>
    <ComponentNavbar/>
    <ComponentProfilUser/>
  </div>
</template>

<script>
    import ComponentProfilUser from '@/components/ComponentClient/ComponentProfilUser.vue';
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar.vue';
    import Spinner from '@/components/ComponentClient/Spinner.vue';
export default {
    name:'ProfilUser',
    components:{
        ComponentProfilUser,
        ComponentNavbar,
        Spinner
    }

}
</script>

<style>

</style>