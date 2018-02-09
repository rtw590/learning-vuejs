<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
// import Ninjas to be used locally in this vue
import Ninjas from './Ninjas.vue'

export default {
  // use that Ninjas import and register the component Ninjas
  components: {
    'ninjas': Ninjas
  },
  data () {
    return {
      title: 'Ninja App.'
    }
  }
}
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
