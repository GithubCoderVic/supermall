<template>
	<div class="good-list">
		 <good-list-item v-for="item in goodList" :item="item"></good-list-item>
	</div>
</template>

<script>
	import GoodListItem from './GoodListItem'
	export default{
		name:"GoodList",
		components:{
			GoodListItem
		},
		props:{
			goodList:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style scoped>
	.good-list{
		display: flex;
		flex-wrap: wrap;
	}
	
</style>
