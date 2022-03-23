<template>
	<div class="good-list-item">
		
					 <a @click="goodClick">
						 <img :src="showImage" alt="" @load="imageLoad">
						 <h5>{{item.title}}</h5>
						 <p>￥{{item.price}}</p>
					 </a>
	
	</div>
</template>

<script>
	export default{
		name:"GoodListItem",
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		computed:{
			showImage(){
				return this.item.image || this.item.show.img
			}
		},
		methods:{
			imageLoad(){
				this.$bus.$emit("itemImageLoad")
			},
			goodClick(){
				this.$router.push('/detail/' + this.item.iid)
				// this.$router.push({
				// 	path:'/detail',
				// 	query:{
				// 		iid:this.item.iid
				// 	}
				// })
			}
		}
	}
</script>

<style scoped>
	.good-list-item{
		width: 48%;
		margin: 1%;
		
	}
	.good-list-item img{
		width: 100%;
		height: 298px;
	}
	.good-list-item h5{
		font-weight: normal;
		font-size: 14px;
		color: #666;
		line-height: 25px;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.good-list-item p{
		font-weight: bold;
		color: #333;
	}
</style>
