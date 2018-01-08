<template>
	<div class="products">
		<h2>Products List</h2>
		<ul>
			<li v-for="(item,index) in productsData">
				<div class="left">
					<span class="title">商品名称：</span><b>{{item.title}}</b>
					<span class="price">商品价格：</span><b>{{item.price|myCurrency("&yen;")}}</b>
				</div>
				<!--无库存时（inventory），按钮不可点击-->
				<p class="right"><button @click="addCart(item)"  :disabled="item.inventory<1">加入购物车</button></p>
			</li>
		</ul>
	</div>
</template>
<script>
	import { mapGetters, mapActions} from 'vuex'
	export default {
		computed:mapGetters([
				'productsData'
			]),
		created(){
			this.$store.dispatch('getProducts');			
		},
		methods:mapActions([
			'addCart'//这个是在cart模块下的actions中，原示例写在公共的actions中是比较好的，因为几个模块都会用到
		])
	}
</script>
<style lang="scss" scoped="scoped">
	.products{
		padding-top: 20px;
		ul{
			width: 1000px;
			margin: 0 auto;
			li{
				overflow: hidden;
				height: 80px;
				line-height: 80px;
				border-bottom: 1px dashed #ddd;
				button{
					vertical-align: middle;
				}
				.title{
					font-size: 14px;
					margin-right: 5px;
				}
				.price{
					font-size: 14px;
					margin-right: 5px;
				}
				b{
					margin-right: 15px;
					padding-right: 10px;
					border-right: 1px solid #ddd;
				}
			}
		}
	}
</style>