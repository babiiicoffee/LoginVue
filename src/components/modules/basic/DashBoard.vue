<template>
  <div class="dashboard">
    <div class="container">
      <!-- <Sidebar></Sidebar> -->
      <h1>this is dashboard</h1>
      <SideNav></SideNav>
    </div>
  </div>
</template>
<script>
import SideNav from "components/frame/Sidebar.vue";

export default {
  name: "dashboard",
  path: "/dashboard",
  components: {
    SideNav
  },
  meta:{
    tokenRequired: true,
  },
  methods: {
  }
};
</script>
