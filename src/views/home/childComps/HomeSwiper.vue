<template>
<<<<<<< HEAD
	<swiper>
		<swiper-item v-for="item in banners">
			<a :href="item.link">
				<img :src="item.image" alt="" @load="imageLoad">
			</a>
		</swiper-item>
	</swiper>
</template>

<script>
	import { Swiper, SwiperItem} from 'components/common/swiper'
	
	export default{
		name:"HomeSwiper",
=======
	<div>
		<swiper>
			<swiper-item v-for="item in banners">
				<a :href="item.link"><img :src="item.image" alt=""></a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
	import {Swiper,SwiperItem} from 'components/common/swiper'
	export default {
		name:"HomeSwiper",
		components:{
			Swiper,SwiperItem
		},
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
		props:{
			banners:{
				type:Array,
				default(){
					return []
				}
			}
<<<<<<< HEAD
		},
		data(){
			return{
				isLoad:false
			}
		},
		methods:{
			imageLoad(){
				if(!this.isLoad){
					console.log("----")
					this.$emit("swiperImageLoad")
					this.isLoad = true
				}
			}
		},
		components:{
			Swiper,SwiperItem
		}
	}
	
=======
		}
	}
>>>>>>> 4c2e424a87502f17bfc6daa2ca60a3b92164f8f8
</script>

<style>
</style>
