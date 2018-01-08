import shop from '../../api/shop'
import {INIT_PRODUCTS,ADD_TO_CART} from '../mutation-type'

//console.log(shop.getProducts(function(p){console.log(p)}))
const state = {
	//直接将allData引用在组件中，为undifined
	allData:[]
}
const getters = {
	//getters依赖值发生了改变，会被重新计算
	productsData : state => state.allData
}
const mutations = {
	[INIT_PRODUCTS](state,{products}){
		state.allData = products
	},
	[ADD_TO_CART](state,products){
		let pro = state.allData.find(item => item.id == products.id);
		pro.inventory--;
	}
}
const actions ={
	//异步获取所有产品
	getProducts({commit}){
		shop.getProducts(products => {			
			commit(INIT_PRODUCTS,{products})
		})
	}
}
export default {
  state,
  getters,
  actions,
  mutations
}