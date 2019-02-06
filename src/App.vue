<template>
  <div id="app">
    <productlistone></productlistone>
    <productlisttwo></productlisttwo>
  </div>
</template>

<script>
import ProductListOne from './ProductListOne'
import ProductListTwo from './ProductListTwo'
export default {
  name: 'app',
  components: {
    'productlistone':ProductListOne,
    'productlisttwo':ProductListTwo
  },
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
body{
  font-family: Ubuntu;
  color: #555;
}

</style>
