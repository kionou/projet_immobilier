<template>
  <div>
    <ComponentNavbar/>
    <ComponentLogin/>
  </div>
</template>

<script>
    import ComponentNavbar from '@/components/ComponentNavbar.vue';
    import ComponentLogin from '@/components/ComponentLogin.vue';
export default {
    name:"LoginView",
    components:{
    ComponentNavbar,
    ComponentLogin,
}

}
</script>

<style>

</style>