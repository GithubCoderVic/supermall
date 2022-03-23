// import axios from 'axios' 
// export function request(config,success,failure){
// 	// 1创建axios的实例
// 	const instance = axios.create({
// 		baseURL:"http://123.207.32.32:8000",
// 		timeout:5000
// 	})
// 	// 发送真正的网络请求
// 	instance(config).then(res => {
// 		console.log(res);
// 		success(res)
// 	})
// 	.catch(err => {
		
// 		failure(err)
// 	})
	
	
// }

// request({
// 	url:"/home/multidata"
// },res => {
// 	console.log(res)
// },err => {
// 	console.log(err)
// })



// import axios from 'axios' 
// export function request(config){
// 	// 1创建axios的实例
// 	const instance = axios.create({
// 		baseURL:"http://123.207.32.32:8000",
// 		timeout:5000
// 	})
// 	// 发送真正的网络请求
// 	instance(config.baseConfig).then(res => {
// 		config.success(res)
// 	})
// 	.catch(err => {
// 		config.failure(err)
// 	})
	
	
// }

// request({
// 	baseConfig:{
// 		url:'/home/multidata'
// 	},
// 	success:function(res){
// 		console.log(res)
// 	},
// 	failure:function(err){
// 		console.log(err)
// 	}
// })


import axios from 'axios' 

// export function request(config){
// 	return new Promise((resolve,reject)=>{
// 		// 1.创建axios实例
// 		const instance=axios.create({
// 			baseURL:"http://123.207.32.32:8000",
// 			timeout:5000
// 		})
		
// 		// 发送真正的网络请求
// 		instance(config)
// 		.then(res=>{
// 			resolve(res)
// 		})
// 		.catch(err=>{
// 			reject(err)
// 		})
		
// 	})
// }


export function request(config){
	// 1.创建axios实例
	const instance = axios.create({
		baseURL:"http://123.207.32.32:8000",
		timeout:5000
	})
	
	
	
	// 发送真正的网络请求,此处instance为Promise类型
	return instance(config)
	
}

// request({
// 	url:'/home/multidata'
// }).then(res => {
// 	console.log(res)
// }).catch(err => {
// 	console.log(err)
// })

export function request1(config){
	const instance1 =axios.create({
		baseURL:"http://152.136.185.210:7878/api/hy66",
		timeout:5000
	})
	return instance1(config)
}