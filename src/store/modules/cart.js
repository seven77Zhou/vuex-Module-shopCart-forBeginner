import shop from '../../api/shop'
import {ADD_TO_CART,CHECK_OUT,CHECKOUT_SUCCESS,CHECKOUT_FAILURE,EMPTY_CART} from '../mutation-type'

//console.log(shop.getProducts(function(p){console.log(p)}))
const state = {
	added: [],
	dataTips:''
}
const getters = {
	addedPros: state => state.added,
	dataTips: state => state.dataTips
}
const mutations = {
	[ADD_TO_CART](state,product){
		//该商品是否已经被加入购物车
		let ifAdd = state.added.find(item => item.id == product.id)
		if(ifAdd){
			ifAdd.nums++
		}else{
			state.added.push({
				id:product.id,
				price: product.price,
				title:product.title,
				nums:1
			})
		}
	},
	[CHECKOUT_SUCCESS](state){
		state.dataTips = '购物车提交成功！购物车数据清空'
	},
	[CHECKOUT_FAILURE](state,{addpro}){
		state.dataTips='购物车提交失败,请重新提交';
		state.added = addpro;
		//state.dataTips=''
	},
	//清空购物车
	[EMPTY_CART](state){
		state.added = [];
		state.dataTips=''
	},
	//关闭购物车弹窗
	closePop(state){
		state.dataTips='';
	}
}
const actions ={
	//这部分，原示例是写在最外层actions中，因为product和cart模块中都需要分别使用ADD_TO_CART做相关的数据处理
	addCart({commit},product){
		//如果还有库存，继续加入购物车
		if(product.inventory>0){
			commit('ADD_TO_CART', product);
		}
	},
	checkout({commit},addedPros){
		let savedCartItems = state.added;
		//清空购物车操作
		commit('EMPTY_CART');
		shop.checkout(
			addedPros,
			() => commit('CHECKOUT_SUCCESS'),
			() => commit('CHECKOUT_FAILURE',{addpro:savedCartItems})
		)
	}
}
export default {
  state,
  getters,
  actions,
  mutations
}