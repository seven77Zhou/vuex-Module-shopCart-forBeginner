<template>
	<div class="cart">
		<h2>Cart box</h2>
		<ul>
			<li v-for="(item,index) in addedPros">
				<span class="title">商品名称：</span><b>{{item.title}}</b>
				<span class="price">商品价格：</span><b>{{item.price|myCurrency("&yen;")}} X {{item.nums}}</b>
			</li>
		</ul>
		<!--购物车无数据，提交按钮不可点击-->
		<h6>总价：{{total|myCurrency("&yen;")}}</h6>
		<button class="btn" :disabled="addedPros.length==0" @click="checkout(addedPros)">提交</button>
		<div class="pop" v-show="dataTips !=''">
			<div class="con">
				<p>{{dataTips}}</p>
				<button @click="closePop">关闭</button>
			</div>
		</div>
	</div>
</template>
<script>
	import { mapGetters,mapMutations, mapActions} from 'vuex'
	export default{
		computed:{
			...mapGetters([
				'addedPros',
				'dataTips'
			]),
			total(){
				//累加器，array.reduce(function(total, currentValue, currentIndex, arr), initialValue),initialValue可选，传递给函数的初始值
				return  this.addedPros.reduce((total, item) => {
					        return total + item.price * item.nums
					    },0)
			}
		},
		methods:{...mapActions([
			'checkout'//异步提交，故需要actions
			]),
			...mapMutations([
				'closePop'
			])
		}
	}
</script>
<style lang="scss" scoped="scoped">
	.cart{
		padding: 20px;
		ul{
			width: 1000px;
			margin: 0 auto;
			li{
				overflow: hidden;
				height: 70px;
				line-height: 70px;
				border-bottom: 1px dashed #ddd;
				text-align: center;
				.title{
					font-size: 14px;
				}
			}
		}
		h6{
			padding: 10px 0;
			font-size: 20px;			
		}
		.btn{
			margin-top: 20px;
			padding: 0 10px;
		}
		.pop{
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1000;
			width: 100%;
			height: 100%;
			background: rgba(0,0,0,.5);
			.con{
				position: fixed;
				top: 50%;
				left: 50%;
				margin-top: -50px;
				margin-left: -100px;
				z-index: 1001;
				width: 200px;
				height: 100px;
				background: #fff;
				border-radius: 2px;
				p{
					line-height: 24px;
					margin: 10px;
				}
			}
		}
	}
</style>