//一般用下划线表示内部使用的变量
const _products = [
  {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
  {"id": 2, "title": "辽宁丹东红颜牛奶草莓", "price": 99.99, "inventory": 10},
  {"id": 3, "title": "智利车厘子原箱装", "price": 399.00, "inventory": 5},
  {"id": 4, "title": "飞利浦电动牙刷 HX6730", "price": 199.98, "inventory": 8},
  {"id": 5, "title": "恒都巴西牛腩1kg", "price": 49.90, "inventory": 3}
]

export default{
	getProducts(cb){
		//定时器模拟异步请求
		setTimeout(()=>{
			return cb(_products)
		},500)
	},
	checkout(pro,cbSuccess,cbFailure){
		//定时器模拟异步请求
		setTimeout(()=>{
			(Math.random() > 0.5 || navigator.userAgent.indexOf('PhantomJS') > -1)
        ? cbSuccess()
        : cbFailure()
		},500)
	}
}
