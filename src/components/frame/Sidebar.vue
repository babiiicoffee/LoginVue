
<template>
  <div id="sidenav">
    <slider
      :width="300"
      format="push"
      direction="left"
      :opacity="0.15"
      :links="[
        {'id': 1, 'text': 'Profile', 'url': 'http://localhost:8080/#/login'},
        {'id': 2, 'text': 'Dashboard', 'url': 'https://github.com'},
        // {'id': 3, 'text': 'Subject', 'url': 'https://github.com'}, 
        {'id': 3, 'text': 'Logout', 'url': 'https://github.com'}
      ]"
    >
    </slider>
  </div>
</template>
<script src="https://unpkg.com/vue-slider"></script>
<script>
// import Slider from './components/Slider'
import Vue from 'vue'
import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)
export default {
  name: 'sidenav',
  components: {
    'slider': Slider
  }
}
</script>

<style lang="scss">
  #app {
    padding: 2em;
  }
</style>