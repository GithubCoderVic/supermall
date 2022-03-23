<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div class="recommend-item-name">{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"Recommend",
		props:{
			recommends:Array,
			default(){
				return []
			}
		}
	}
</script>

<style>
	.recommend{
		display: flex;
		text-align: center;
		margin: 10px 0;
	}
	.recommend-item{
		flex: 1;
	}
	.recommend-item img{
		width: 80%;
	}
	.recommend-item-name{
		font-size: 14px;
	}
</style>
