<template>
  <div id="appBody">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'appBody',
  path: '/appBody',
  data() {
    return {};
  }
};
</script>
