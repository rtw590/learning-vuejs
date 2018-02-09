<template>
  <div>
    <app-header></app-header>
  </div>
</template>

<script>
// import our component header to this file
import Header from './components/Header.vue';

export default {
  components: {
    // named it app header becuase header is an html tag
    // since it was imported we can use the Header component
    'app-header': Header
  },
  data () {
    return {
     
    }
  }
}
</script>

<style scoped>

</style>
