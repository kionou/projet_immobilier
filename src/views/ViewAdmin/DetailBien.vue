<template>
    <div>
        <BienDetail :id="id"/>
    </div>
  
</template>

<script>
    import BienDetail from '@/components/ComponentAdmin/BienDetail.vue';
export default {
    name:'DetailBien',
    props:['id'],
    components:{
        BienDetail
    }

}
</script>

<style>

</style>