
<template>
    <div id="dashboard">
      <h1>this is dashboard</h1>           
      <SideNav></SideNav>
      <my-component :user-name='"{{ Auth::user()->name }}"'> </my-component>
    </div>
</template>

<script>
// import register from 'components/frame/Register.vue';

import SideNav from "components/frame/Sidebar.vue";
    export default {
        name: 'dashboard',
        components:{
            SideNav,
        },
        data() {
            return {
                }
            },
          
        }
   
</script>

<style scoped>
    #secure {
        background-color: #FFFFFF;
        border: 1px solid #CCCCCC;
        padding: 20px;
        margin-top: 10px;
    }
</style>