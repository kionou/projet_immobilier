<template>
    <ComponentUpdateAgent :id="id"/>
   
 </template>
 
 <script>
import ComponentUpdateAgent from '@/components/ComponentAdmin/ComponentUpdateAgent.vue';
 export default {
     props:['id'],
     name:'UpdateBien',
     components:{
        ComponentUpdateAgent
 
     }
 
 }
 </script>
 
 <style>
 
 </style>