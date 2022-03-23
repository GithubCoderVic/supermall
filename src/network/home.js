import {request,request1} from 'network/request'

export function getHomeMultidata(){
	return request({
		url:'/home/multidata',
	})
<<<<<<< HEAD
};

export function getHomeGoods(type,page){
	return request1({
		url:'/home/data',
		params:{
			type,page
		}
	}) 
=======
}

export function getHomeGoods(type,page){
	return request1({
		url:"/home/data",
		params:{
			type,page
		}
	})
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
}