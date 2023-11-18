//App.vue
<template>
  <div id="app">
    <Navbar />
    
    <b-container class="content" fluid >
      <router-view/>
    </b-container>
    
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';
  export default {
    name: 'navbar',
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style lang="scss">
// @import './assets/custom.scss';
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import '../node_modules/bootstrap-vue/src/index.scss';

html, body {
  height: 100%;
  overflow-x: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content {
  flex: 1 0 auto;
  /* Prevent Chrome, Opera, and Safari from letting these items shrink to smaller than their content's default minimum size. */
  /* We add top padding that is equal to the size of the navbar so that the navbar doesn't overlap the carousel.*/
  padding: 82px 0px 0px 0px;
  // margin-right: auto;
  // margin-left: auto;
}

</style>