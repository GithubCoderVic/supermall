<template>
	<div class="recommend">
		<div v-for="item in recommends" class="recommend-item">
			<a :href="item.link">
				<img :src="item.image" alt="">
				<div>{{item.title}}</div>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		name:"RecommondView",
		props:{
			recommends:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.recommend{
		display: flex;
	}
	.recommend-item{
		flex: 1;
		text-align: center;
		margin: 5px 0;
	}
	.recommend-item img{
		width: 90%;
		height: auto;
	}
</style>
