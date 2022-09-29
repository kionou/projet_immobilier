<template>
  <div>
    <Spinner/>
    <ComponentNavbar/>
    <ComponentLogin/>
  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentClient/ComponentNavbar.vue';
    import ComponentLogin from '@/components/ComponentClient/ComponentLogin.vue';
    import Spinner from '@/components/ComponentClient/Spinner.vue';
export default {
    name:"LoginView",
    components:{
    ComponentNavbar,
    ComponentLogin,
    Spinner
}

}
</script>

<style>

</style>