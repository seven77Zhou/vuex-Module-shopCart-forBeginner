<template>
  <div id="app">
    <h1>Shop cart example</h1>
		<products></products>
		<cart></cart>
  </div>
</template>

<script>
import products from './components/products'
import cart from './components/cart'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{
  	products,
  	cart
  }
}
</script>

<style lang="scss" scoped="scoped">
	h1{
		padding-bottom: 10px;
		border-bottom: 1px solid #ccc;
	}
</style>
