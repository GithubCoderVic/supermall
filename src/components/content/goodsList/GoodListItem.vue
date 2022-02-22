<template>
	<div class="good-list-item">
		<img :src="gooditem.show.img" alt="" @load="imageLoad">
		<p class="good-name">{{gooditem.props}}</p>
		<p class="good-price">￥{{gooditem.price}}</p>
	</div>
</template>

<script>
	export default{
		name:"GoodListItem",
		props:{
			gooditem:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit('itemImageLoad')
			}
		}
	}
</script>

<style scoped>
	.good-list-item{
		width: 48%;margin: 1%;height: 360px;
	}
	.good-list-item img{width: 100%;height: 298px;}
	.good-name{font-size: 14px; color:#666;line-height: 25px;height: 30px;text-overflow: ellipsis;white-space: nowrap;overflow: hidden;}
	.good-price{
		color: #000;
		font-weight: bold;
	}
</style>
